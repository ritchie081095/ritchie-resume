import { useEffect, useState } from 'react';

// Cycles through `words`, typing and deleting each — the classic hero effect,
// kept smooth with per-character timing and a pause on the full word.
export default function Typewriter({ words, typing = 90, deleting = 45, pause = 1400 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (phase === 'typing') {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typing);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause);
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), deleting);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words, typing, deleting, pause]);

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter__caret" />
    </span>
  );
}
