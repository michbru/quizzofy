import './PointsCounter.css';

function PointsCounter({ points }) {
  return (
    <div className="points-counter">
      <span className="points-amount">{points}</span>
      <span className="points-sparkle">✨</span>
    </div>
  );
}

export default PointsCounter;
