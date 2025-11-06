import { useState, useEffect } from 'react';
import './QuizPhase.css';

function QuizPhase({ session, questionIndex, streak, onAnswer, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userInput, setUserInput] = useState('');

  const question = session.quiz[questionIndex];
  const totalQuestions = session.quiz.length;

  useEffect(() => {
    // Reset state when question changes
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setUserInput('');
  }, [questionIndex]);

  const handleAnswer = (answer) => {
    if (showFeedback) return;

    let correct = false;
    let points = 0;

    if (question.type === 'true-false') {
      correct = answer === question.correctAnswer;
    } else if (question.type === 'multiple-choice') {
      correct = answer === question.correctAnswer;
    } else if (question.type === 'fill-blank') {
      correct = answer.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
    }

    if (correct) {
      points = 10;
      if (streak >= 2) {
        points += 15; // Streak bonus
      }
    } else {
      points = -5;
    }

    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);
    onAnswer(correct, points);
  };

  const handleContinue = () => {
    onNext();
  };

  const handleFillBlankSubmit = () => {
    if (userInput.trim()) {
      handleAnswer(userInput);
    }
  };

  return (
    <div className="quiz-phase">
      <div className="quiz-header">
        <div className="quiz-progress">
          Question {questionIndex + 1} of {totalQuestions}
        </div>
        <div className="quiz-streak">
          {streak > 0 && (
            <>
              🔥 Streak: {streak}
              {streak >= 2 && <span className="streak-bonus"> (Bonus active!)</span>}
            </>
          )}
        </div>
      </div>

      <div className="quiz-container">
        <div className="question-text">{question.question}</div>

        {question.type === 'true-false' && (
          <div className="answer-options">
            <button
              className={`answer-btn ${
                showFeedback && true === question.correctAnswer ? 'correct' : ''
              } ${showFeedback && selectedAnswer === true && !isCorrect ? 'incorrect' : ''}`}
              onClick={() => handleAnswer(true)}
              disabled={showFeedback}
            >
              TRUE
              {showFeedback && true === question.correctAnswer && <span className="check">✓</span>}
              {showFeedback && selectedAnswer === true && !isCorrect && <span className="x">✗</span>}
            </button>
            <button
              className={`answer-btn ${
                showFeedback && false === question.correctAnswer ? 'correct' : ''
              } ${showFeedback && selectedAnswer === false && !isCorrect ? 'incorrect' : ''}`}
              onClick={() => handleAnswer(false)}
              disabled={showFeedback}
            >
              FALSE
              {showFeedback && false === question.correctAnswer && <span className="check">✓</span>}
              {showFeedback && selectedAnswer === false && !isCorrect && <span className="x">✗</span>}
            </button>
          </div>
        )}

        {question.type === 'multiple-choice' && (
          <div className="answer-options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  showFeedback && index === question.correctAnswer ? 'correct' : ''
                } ${showFeedback && selectedAnswer === index && !isCorrect ? 'incorrect' : ''}`}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}.</span>
                {option}
                {showFeedback && index === question.correctAnswer && <span className="check">✓</span>}
                {showFeedback && selectedAnswer === index && !isCorrect && <span className="x">✗</span>}
              </button>
            ))}
          </div>
        )}

        {question.type === 'fill-blank' && (
          <div className="fill-blank-container">
            <input
              type="text"
              className="fill-blank-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleFillBlankSubmit()}
              disabled={showFeedback}
              placeholder="Type your answer..."
              autoFocus
            />
            {!showFeedback && (
              <button className="submit-answer-btn" onClick={handleFillBlankSubmit}>
                Submit
              </button>
            )}
            {showFeedback && (
              <div className={`fill-blank-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? '✓ Correct!' : `✗ Correct answer: ${question.correctAnswer}`}
              </div>
            )}
          </div>
        )}

        {showFeedback && (
          <div className={`feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
            <div className="feedback-icon">{isCorrect ? '✓' : '✗'}</div>
            <div className="feedback-text">
              {isCorrect ? (
                <>
                  <div className="feedback-title">Correct!</div>
                  {streak >= 2 && <div className="streak-message">🔥 STREAK BONUS! +15 pts</div>}
                </>
              ) : (
                <div className="feedback-title">Not quite!</div>
              )}
              <div className="feedback-explanation">{question.explanation}</div>
            </div>
            <button className="next-question-btn" onClick={handleContinue}>
              {questionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>

      <div className="quiz-dots">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={`dot ${i < questionIndex ? 'answered' : ''} ${
              i === questionIndex ? 'current' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default QuizPhase;
