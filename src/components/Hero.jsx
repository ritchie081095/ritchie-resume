import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowDown, FiDownload } from 'react-icons/fi';
import { profile, stats } from '../data/resume';
import Typewriter from './Typewriter';
import NetworkGlobe from './NetworkGlobe';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Initials avatar — swap for a real photo by dropping an <img> in .hero__avatar.
const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .slice(0, 2)
  .join('');

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero section">
      <NetworkGlobe />

      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__text">
          <motion.p className="hero__eyebrow" variants={item}>
            <span className="dot" /> Available for work
          </motion.p>

          <motion.h1 className="hero__name" variants={item}>
            Hi, I'm <span className="grad-text">{profile.firstName}</span> Nalam
          </motion.h1>

          <motion.h2 className="hero__role" variants={item}>
            <Typewriter words={profile.roles} />
          </motion.h2>

          <motion.p className="hero__summary" variants={item}>
            {profile.yearsExperience} years crafting scalable web &amp; mobile apps with
            Laravel, PHP, Vue.js, React Native &amp; TypeScript — turning complex
            problems into clean, user-friendly software.
          </motion.p>

          <motion.div className="hero__meta" variants={item}>
            <a className="chip chip--link" href={`mailto:${profile.email}`}>
              <FiMail /> {profile.email}
            </a>
            <a className="chip chip--link" href={profile.phoneHref}>
              <FiPhone /> {profile.phone}
            </a>
            <span className="chip">
              <FiMapPin /> Davao City, PH
            </span>
          </motion.div>

          <motion.div className="hero__cta" variants={item}>
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              View Projects <FiArrowDown />
            </button>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              <FiMail /> Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="hero__aside" variants={item}>
          <div className="hero__avatar">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-inner">{initials}</div>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-value grad-text">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown />
      </motion.button>
    </section>
  );
}
