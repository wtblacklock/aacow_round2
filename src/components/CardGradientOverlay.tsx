import type React from 'react';

const DURATIONS = [13, 11, 15, 10, 12, 14, 9, 16];
const DELAYS = ['0s', '2.5s', '5s', '1.5s', '3.5s', '1s', '4s', '2s'];

export default function CardGradientOverlay({ index }: { index: number }) {
  const anim = index % 2 === 0 ? 'cloudDrift1' : 'cloudDrift2';
  return (
    <>
      <div
        aria-hidden="true"
        className="card-cloud-drift"
        style={{ animation: `${anim} ${DURATIONS[index % 8]}s ease-in-out ${DELAYS[index % 8]} infinite` }}
      />
      <div aria-hidden="true" className="card-mouse-gradient" />
    </>
  );
}

export function cardMouseHandlers() {
  return {
    onMouseMove(e: React.MouseEvent<HTMLElement>) {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      e.currentTarget.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    },
    onMouseLeave(e: React.MouseEvent<HTMLElement>) {
      e.currentTarget.style.setProperty('--mx', '50%');
      e.currentTarget.style.setProperty('--my', '50%');
    },
  };
}
