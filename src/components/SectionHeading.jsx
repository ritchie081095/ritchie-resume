import Reveal from './Reveal';

export default function SectionHeading({ index, kicker, title }) {
  return (
    <Reveal className="section-head">
      <span className="section-head__index">{index}</span>
      <div>
        <p className="section-head__kicker">{kicker}</p>
        <h2 className="section-head__title">{title}</h2>
      </div>
      <span className="section-head__rule" />
    </Reveal>
  );
}
