import { useEffect, useState } from 'react';
import './PointsCounter.css';

function PointsCounter({ points }) {
  const [prevPoints, setPrevPoints] = useState(points);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (points !== prevPoints) {
      setIsAnimating(true);
      setPrevPoints(points);

      // Reset animation after it completes
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [points, prevPoints]);

  return (
    <div className={`points-counter ${isAnimating ? 'points-increase' : ''}`}>
      <span className="points-amount">{points}</span>
      <span className="points-sparkle">✨</span>
    </div>
  );
}

export default PointsCounter;
