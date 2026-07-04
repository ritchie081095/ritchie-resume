import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { skillGroups } from '../data/resume';

function SkillBar({ name, level, delay }) {
  return (
    <div className="skill">
      <div className="skill__top">
        <span className="skill__name">{name}</span>
        <span className="skill__pct">{level}%</span>
      </div>
      <div className="skill__track">
        <motion.span
          className="skill__fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="03" kicker="What I use" title="Technical Skills" />

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06} className="skills__card">
              <h3 className="skills__card-title">{group.title}</h3>
              <div className="skills__list">
                {group.skills.map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.05} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
