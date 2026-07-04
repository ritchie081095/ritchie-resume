import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHeading index="02" kicker="Where I've worked" title="Experience" />

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05} className="timeline__item">
              <span className={`timeline__dot ${job.current ? 'is-current' : ''}`}>
                <FiBriefcase />
              </span>
              <div className="timeline__card tilt">
                <div className="timeline__top">
                  <h3 className="timeline__company">{job.company}</h3>
                  <span className={`timeline__period ${job.current ? 'is-current' : ''}`}>
                    {job.period}
                  </span>
                </div>
                <p className="timeline__role">
                  {job.role}
                  <span className="timeline__loc">
                    <FiMapPin /> {job.location}
                  </span>
                </p>
                <ul className="timeline__points">
                  {job.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
