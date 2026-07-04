import { motion } from 'framer-motion';
import { FiFolder, FiStar, FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHeading index="04" kicker="Selected work" title="Key Projects" />

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.06}>
              <motion.article
                className={`project ${p.featured ? 'project--featured' : ''}`}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="project__top">
                  <span className="project__icon">
                    <FiFolder />
                  </span>
                  {p.featured && (
                    <span className="project__badge">
                      <FiStar /> Featured
                    </span>
                  )}
                  <FiArrowUpRight className="project__arrow" />
                </div>
                <h3 className="project__name">{p.name}</h3>
                <div className="project__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
