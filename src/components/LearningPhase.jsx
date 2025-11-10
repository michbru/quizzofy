import { useState } from 'react';
import './LearningPhase.css';

function LearningPhase({ session, slideIndex, onNext }) {
  const [showPoints, setShowPoints] = useState(false);
  const slide = session.slides[slideIndex];
  const totalSlides = session.slides.length;

  const handleNext = () => {
    setShowPoints(true);
    setTimeout(() => {
      setShowPoints(false);
      onNext();
    }, 500);
  };

  return (
    <div className="learning-phase">
      <div className="learning-container">
        <div className="slide-progress">
          Slide {slideIndex + 1} of {totalSlides}
        </div>

        <div className="slide-content">
          <div className="slide-visual">{slide.visual}</div>
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-text">{slide.content}</p>
        </div>

        <button className="continue-btn" onClick={handleNext}>
          Continue →
          <span className="btn-points">+5 pts</span>
        </button>

        {showPoints && <div className="points-animation">+5</div>}
      </div>

      {slideIndex === totalSlides - 1 && (
        <div className="quiz-preview">
          Next up: Quiz time!
        </div>
      )}
    </div>
  );
}

export default LearningPhase;
