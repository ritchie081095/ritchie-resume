import { FiAward } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading index="05" kicker="Background" title="Education" />

        <div className="edu__grid">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08} className="edu__card tilt">
              <span className="edu__icon">
                <FiAward />
              </span>
              <span className="edu__level">{e.level}</span>
              <h3 className="edu__school">{e.school}</h3>
              {e.detail && <p className="edu__detail">{e.detail}</p>}
              <p className="edu__loc">{e.location}</p>
              <span className="edu__period">{e.period}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
