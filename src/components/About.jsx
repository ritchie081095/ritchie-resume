import { FiCode, FiSmartphone, FiDatabase, FiZap } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile } from '../data/resume';

const highlights = [
  { icon: <FiCode />, title: 'Web Development', text: 'Laravel, PHP, Vue.js, React & WordPress — from CMS to custom platforms.' },
  { icon: <FiSmartphone />, title: 'Mobile Apps', text: 'React Native, Ionic & Angular apps shipped to real users.' },
  { icon: <FiDatabase />, title: 'Databases', text: 'MySQL design & management for reliable, scalable data.' },
  { icon: <FiZap />, title: 'Problem Solving', text: 'Debugging, feature enhancement & maintenance across live systems.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading index="01" kicker="Who I am" title="About Me" />

        <div className="about__grid">
          <Reveal className="about__lead">
            <p>{profile.summary}</p>
            <div className="about__facts">
              <div className="about__fact">
                <span className="about__fact-label">Location</span>
                <span className="about__fact-value">{profile.location}</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Email</span>
                <a className="about__fact-value link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Phone</span>
                <a className="about__fact-value link" href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <div className="about__cards">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08} className="about__card tilt">
                <span className="about__card-icon">{h.icon}</span>
                <h3 className="about__card-title">{h.title}</h3>
                <p className="about__card-text">{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
