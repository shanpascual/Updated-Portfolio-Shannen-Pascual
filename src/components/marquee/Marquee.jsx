import ScrollVelocity from '../reactbits/ScrollVelocity';
import { MARQUEE } from '../../data/content';
import './marquee.css';

const LINE = `${MARQUEE.join('  ✦  ')}  ✦  `;

export default function Marquee() {
  return (
    <div className="marquee" aria-label={`Skills: ${MARQUEE.join(', ')}`} role="img">
      <div className="marquee-band marquee-band--back" aria-hidden="true" />
      <div className="marquee-band marquee-band--front" aria-hidden="true">
        <ScrollVelocity
          texts={[LINE]}
          velocity={40}
          numCopies={4}
          className="marquee-text"
          parallaxClassName="marquee-parallax"
          scrollerClassName="marquee-scroller"
        />
      </div>
    </div>
  );
}
