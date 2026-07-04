import { useEffect, useRef } from 'react';

// A slowly rotating sphere of nodes with lines between nearby ones — reads as
// both a globe and a network graph. Canvas-based, uses the solid brand color
// (opacity varies by depth, no gradients), follows the theme, reacts subtly to
// the mouse, and holds still for reduced-motion users.

const NODES = 130;
const GOLDEN = Math.PI * (3 - Math.sqrt(5));

function hexToRgb(hex, fallback = '#6366f1') {
  const h = (hex || fallback).replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full || '6366f1', 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export default function NetworkGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Evenly distribute points on a unit sphere (Fibonacci sphere).
    const points = [];
    for (let i = 0; i < NODES; i++) {
      const y = 1 - (i / (NODES - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * GOLDEN;
      points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    // Precompute close pairs once — distances are preserved under rotation.
    const LINK = 0.62;
    const links = [];
    for (let i = 0; i < NODES; i++) {
      for (let j = i + 1; j < NODES; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dz = points[i].z - points[j].z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < LINK) links.push({ i, j, strength: 1 - d / LINK });
      }
    }

    let width = 0;
    let height = 0;
    let radius = 0;
    let cx = 0;
    let cy = 0;
    let dpr = 1;
    let ay = 0; // rotation around Y
    let raf = 0;

    // Mouse parallax (eased).
    const target = { x: 0.35, y: 0 };
    const tilt = { x: 0.35, y: 0 };

    const css = (name, fb) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fb;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.42;
      // On wide layouts, sit the globe on the right (behind the avatar) so the
      // hero text on the left stays clean; center it on narrow screens.
      cx = width > 900 ? width * 0.72 : width / 2;
      cy = height / 2;
    };

    const project = () => {
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      const cosX = Math.cos(tilt.x);
      const sinX = Math.sin(tilt.x);
      const out = new Array(NODES);
      for (let i = 0; i < NODES; i++) {
        const p = points[i];
        // Rotate around Y then X.
        let x = p.x * cosY + p.z * sinY;
        let z = -p.x * sinY + p.z * cosY;
        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;
        // Slight perspective by depth.
        const scale = (z + 1.8) / 2.8;
        out[i] = {
          sx: cx + x * radius,
          sy: cy + y * radius,
          depth: (z + 1) / 2, // 0 (back) .. 1 (front)
          scale,
        };
      }
      return out;
    };

    const render = () => {
      const { r, g, b } = hexToRgb(css('--accent-1', '#6366f1'));
      ctx.clearRect(0, 0, width, height);

      // Ease tilt toward mouse target.
      tilt.x += (target.x - tilt.x) * 0.05;
      tilt.y += (target.y - tilt.y) * 0.05;

      const pr = project();

      // Lines.
      ctx.lineWidth = 1;
      for (const l of links) {
        const a = pr[l.i];
        const b2 = pr[l.j];
        const depth = (a.depth + b2.depth) / 2;
        const alpha = l.strength * depth * 0.5;
        if (alpha < 0.02) continue;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.sx, a.sy);
        ctx.lineTo(b2.sx, b2.sy);
        ctx.stroke();
      }

      // Nodes.
      for (let i = 0; i < NODES; i++) {
        const p = pr[i];
        const alpha = 0.2 + p.depth * 0.75;
        const size = 1 + p.scale * 1.8;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      ay += 0.0022;
      render();
      raf = requestAnimationFrame(loop);
    };

    const onMouse = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      target.y = nx * 0.6;
      target.x = 0.35 + ny * 0.5;
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduced) {
      ay = 0.6;
      render();
    } else {
      window.addEventListener('mousemove', onMouse);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-globe" aria-hidden="true" />;
}
