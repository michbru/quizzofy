import { useState, useEffect, useRef, useCallback } from 'react';
import './SnakeGame.css';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;
const GAME_DURATION = 20000; // 20 seconds

const MESSAGES = [
  "🔍 Analyzing your notes...",
  "📚 Found 8 key concepts...",
  "✨ Creating bite-sized lessons...",
  "🎯 Building your quizzes...",
  "🧠 Almost ready..."
];

function SnakeGame({ onComplete }) {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFood());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [message, setMessage] = useState(MESSAGES[0]);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION / 1000);

  const directionRef = useRef(direction);
  const gameLoopRef = useRef(null);
  const startTimeRef = useRef(null);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  }

  // Countdown before game starts
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !isPlaying) {
      setIsPlaying(true);
      startTimeRef.current = Date.now();
    }
  }, [countdown, isPlaying]);

  // Change messages during gameplay
  useEffect(() => {
    if (!isPlaying) return;

    const messageInterval = setInterval(() => {
      const currentIndex = MESSAGES.indexOf(message);
      if (currentIndex < MESSAGES.length - 1) {
        setMessage(MESSAGES[currentIndex + 1]);
      }
    }, 15000);

    return () => clearInterval(messageInterval);
  }, [isPlaying, message]);

  // Game timer
  useEffect(() => {
    if (!isPlaying) return;

    const timerInterval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, Math.ceil((GAME_DURATION - elapsed) / 1000));
      setTimeLeft(remaining);

      if (remaining === 0) {
        endGame();
      }
    }, 100);

    return () => clearInterval(timerInterval);
  }, [isPlaying]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isPlaying) return;

      const key = e.key;
      const newDirection = { ...directionRef.current };

      switch (key) {
        case 'ArrowUp':
          if (directionRef.current.y === 0) {
            newDirection.x = 0;
            newDirection.y = -1;
          }
          break;
        case 'ArrowDown':
          if (directionRef.current.y === 0) {
            newDirection.x = 0;
            newDirection.y = 1;
          }
          break;
        case 'ArrowLeft':
          if (directionRef.current.x === 0) {
            newDirection.x = -1;
            newDirection.y = 0;
          }
          break;
        case 'ArrowRight':
          if (directionRef.current.x === 0) {
            newDirection.x = 1;
            newDirection.y = 0;
          }
          break;
        default:
          return;
      }

      e.preventDefault();
      directionRef.current = newDirection;
      setDirection(newDirection);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  // Game loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    gameLoopRef.current = setInterval(() => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };

        // Move head
        head.x += directionRef.current.x;
        head.y += directionRef.current.y;

        // Wrap around edges
        if (head.x < 0) head.x = GRID_SIZE - 1;
        if (head.x >= GRID_SIZE) head.x = 0;
        if (head.y < 0) head.y = GRID_SIZE - 1;
        if (head.y >= GRID_SIZE) head.y = 0;

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          endGame();
          return currentSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(s => s + 1);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, GAME_SPEED);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [isPlaying, gameOver, food]);

  const endGame = useCallback(() => {
    setGameOver(true);
    setIsPlaying(false);
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
    }

    setTimeout(() => {
      onComplete(score);
    }, 2000);
  }, [score, onComplete]);

  return (
    <div className="snake-game">
      <div className="snake-header">
        <div className="snake-message">{message}</div>
        <div className="snake-timer">⏱️ {timeLeft}s</div>
      </div>

      {countdown > 0 ? (
        <div className="snake-countdown">
          <div className="countdown-number">{countdown}</div>
          <div className="countdown-text">Get ready!</div>
        </div>
      ) : (
        <div className="snake-container">
          <div className="snake-score">Score: {score}</div>
          <div
            className="snake-grid"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE
            }}
          >
            {snake.map((segment, index) => (
              <div
                key={index}
                className={`snake-segment ${index === 0 ? 'snake-head' : ''}`}
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE,
                  height: CELL_SIZE
                }}
              />
            ))}
            <div
              className="snake-food"
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE,
                height: CELL_SIZE
              }}
            >
              🧠
            </div>
          </div>
          <div className="snake-controls">
            <div className="snake-instructions">Use arrow keys to move</div>
          </div>

          {gameOver && (
            <div className="snake-game-over">
              <div className="game-over-title">Time's up!</div>
              <div className="game-over-score">You scored {score}!</div>
              <div className="game-over-points">+{score} bonus points</div>
              <div className="game-over-loading">Loading your sessions...</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SnakeGame;
