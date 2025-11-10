import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import './SessionComplete.css';

function SessionComplete({ session, answers, sessionScore, snowmanParts, onContinue, onRetry }) {
  const [showCelebration, setShowCelebration] = useState(false);
  const [countingPoints, setCountingPoints] = useState(0);
  const [showSnowmanPart, setShowSnowmanPart] = useState(false);

  const correctAnswers = answers.filter(a => a).length;
  const totalQuestions = answers.length;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const passed = percentage >= 60;

  useEffect(() => {
    if (passed) {
      // Confetti explosion
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 500);

      // Count up points
      let current = 0;
      const increment = Math.ceil(sessionScore / 20);
      const interval = setInterval(() => {
        current += increment;
        if (current >= sessionScore) {
          setCountingPoints(sessionScore);
          clearInterval(interval);
          setTimeout(() => {
            if (snowmanParts > 0) {
              setShowSnowmanPart(true);
            }
          }, 500);
        } else {
          setCountingPoints(current);
        }
      }, 50);

      setShowCelebration(true);

      return () => clearInterval(interval);
    }
  }, [passed, sessionScore, snowmanParts]);

  if (!passed) {
    return (
      <div className="session-complete failed">
        <div className="complete-container">
          <div className="complete-title">Almost there! 💪</div>
          <div className="complete-score">
            You got {correctAnswers}/{totalQuestions} correct
          </div>
          <div className="complete-message">
            You need at least {Math.ceil(totalQuestions * 0.6)}/{totalQuestions} to pass
          </div>
          <div className="complete-actions">
            <button className="retry-btn" onClick={onRetry}>
              Try Again
            </button>
            <button className="skip-btn" onClick={onContinue}>
              Skip for Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="session-complete passed">
      <div className="complete-container">
        {showCelebration && (
          <>
            <div className="complete-title celebration">🎉 SESSION COMPLETE! 🎉</div>
            <div className="complete-score">
              You scored {correctAnswers}/{totalQuestions} correct!
            </div>
            <div className="points-display">
              <div className="points-icon">✨</div>
              <div className="points-value">{countingPoints} POINTS</div>
              <div className="points-icon">✨</div>
            </div>
          </>
        )}

        {showSnowmanPart && (
          <div className="snowman-part-reveal">
            <div className="part-title">⛄ YOU FOUND A SNOWMAN PART! ⛄</div>
            <div className="part-icon">
              {snowmanParts === 1 && '⚫'} {/* Base */}
              {snowmanParts === 2 && '⚪'} {/* Middle */}
              {snowmanParts === 3 && '⚪'} {/* Head */}
              {snowmanParts === 4 && '🎩'} {/* Hat */}
              {snowmanParts === 5 && '🧣'} {/* Scarf */}
            </div>
            <div className="part-progress">
              Parts: {snowmanParts} of 5 collected
            </div>
            {snowmanParts < 5 ? (
              <div className="part-message">
                Complete {5 - snowmanParts} more session{5 - snowmanParts > 1 ? 's' : ''} to finish!
              </div>
            ) : (
              <div className="snowman-complete-message">
                🎉 SNOWMAN COMPLETE! +100 BONUS POINTS! 🎉
              </div>
            )}
          </div>
        )}

        <button className="continue-journey-btn" onClick={onContinue}>
          Continue Journey
        </button>
      </div>
    </div>
  );
}

export default SessionComplete;
