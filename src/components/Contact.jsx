import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiUser, FiArrowUp } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile, references } from '../data/resume';

export default function Contact() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section id="contact" className="section section--alt contact">
      <div className="container">
        <SectionHeading index="06" kicker="Say hello" title="Get In Touch" />

        <div className="contact__grid">
          <Reveal className="contact__cta">
            <h3 className="contact__headline">
              Let's build something <span className="grad-text">great</span> together.
            </h3>
            <p className="contact__text">
              Open to full-stack and mobile development opportunities. I'm available
              for an interview at your convenience.
            </p>
            <div className="contact__links">
              <a className="contact__link" href={`mailto:${profile.email}`}>
                <FiMail /> <span>{profile.email}</span>
              </a>
              <a className="contact__link" href={profile.phoneHref}>
                <FiPhone /> <span>{profile.phone}</span>
              </a>
              <span className="contact__link">
                <FiMapPin /> <span>{profile.location}</span>
              </span>
            </div>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <FiMail /> Send me an email
            </a>
          </Reveal>

          <Reveal delay={0.1} className="contact__refs">
            <h4 className="contact__refs-title">References</h4>
            {references.map((r) => (
              <motion.div
                key={r.email}
                className="ref-card"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <span className="ref-card__avatar">
                  <FiUser />
                </span>
                <div className="ref-card__body">
                  <span className="ref-card__name">{r.name}</span>
                  <span className="ref-card__role">{r.role}</span>
                  <a className="ref-card__email link" href={`mailto:${r.email}`}>
                    {r.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </Reveal>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <button className="footer__top" onClick={toTop}>
            Back to top <FiArrowUp />
          </button>
        </footer>
      </div>
    </section>
  );
}
