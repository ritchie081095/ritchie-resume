import {
  SiReact,
  SiExpo,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiFigma,
  SiWordpress,
  SiShopify,
  SiWebflow,
  SiGooglegemini,
  SiPerplexity,
  SiDeepseek,
  SiClaude,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

// Each item has a brand Icon + brand color, or a short `badge` fallback for
// logos not in the icon set. Monochrome brands (Expo, Next.js, GitHub, Grok)
// omit `color` so they inherit the theme text color (works in dark & light).
const STACK = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Expo', Icon: SiExpo },
      { name: 'Vue.js', Icon: SiVuedotjs, color: '#42B883' },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', Icon: SiPhp, color: '#8892BF' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Python', Icon: SiPython, color: '#4B8BBE' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      { name: 'AWS', Icon: FaAws, color: '#FF9900' },
      { name: 'Azure', Icon: VscAzure, color: '#0089D6' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Git', Icon: SiGit, color: '#F05032' },
    ],
  },
  {
    title: 'Design & CMS',
    items: [
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      { name: 'Photoshop', badge: 'Ps', color: '#31A8FF' },
      { name: 'Canva', badge: 'Cn', color: '#00C4CC' },
      { name: 'WordPress', Icon: SiWordpress, color: '#3858E9' },
      { name: 'Shopify', Icon: SiShopify, color: '#7AB55C' },
      { name: 'Webflow', Icon: SiWebflow, color: '#4353FF' },
    ],
  },
  {
    title: 'AI Tools',
    items: [
      { name: 'ChatGPT', badge: 'AI', color: '#10A37F' },
      { name: 'Gemini', Icon: SiGooglegemini, color: '#8E75B2' },
      { name: 'Perplexity', Icon: SiPerplexity, color: '#20B8CD' },
      { name: 'DeepSeek', Icon: SiDeepseek, color: '#4D6BFE' },
      { name: 'Grok', badge: 'Gk' },
      { name: 'Claude', Icon: SiClaude, color: '#D97757' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="03" kicker="What I use" title="Technical Skills" />

        <div className="stack__grid">
          {STACK.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.06} className="stack__card">
              <div className="stack__cat">
                <span className="stack__dot" />
                <span className="stack__cat-label">{cat.title}</span>
              </div>
              <ul className="stack__list">
                {cat.items.map((it) => {
                  const Icon = it.Icon;
                  return (
                    <li className="stack__row" key={it.name}>
                      <span
                        className="stack__icon"
                        style={it.color ? { color: it.color } : undefined}
                      >
                        {Icon ? <Icon /> : <span className="stack__badge">{it.badge}</span>}
                      </span>
                      <span className="stack__name">{it.name}</span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
