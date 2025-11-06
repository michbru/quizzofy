import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './SessionMap.css';

function SessionMap({ topic, sessionProgress, onStartSession, points, snowmanParts }) {
  const [justUnlocked, setJustUnlocked] = useState(null);

  useEffect(() => {
    // Check if a new session was just unlocked
    const completedSessions = Object.values(sessionProgress).filter(s => s.completed).length;
    if (completedSessions > 0 && completedSessions < topic.sessions.length) {
      const newlyUnlocked = completedSessions + 1;
      if (justUnlocked !== newlyUnlocked) {
        setJustUnlocked(newlyUnlocked);
        // Small confetti for unlock
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    }
  }, [sessionProgress, topic.sessions.length, justUnlocked]);

  const isSessionUnlocked = (sessionId) => {
    if (sessionId === 1) return true;
    const previousSession = sessionProgress[sessionId - 1];
    return previousSession && previousSession.completed;
  };

  const getSessionStatus = (sessionId) => {
    const progress = sessionProgress[sessionId];
    if (progress && progress.completed) return 'completed';
    if (isSessionUnlocked(sessionId)) return 'unlocked';
    return 'locked';
  };

  const completedCount = Object.values(sessionProgress).filter(s => s.completed).length;

  return (
    <div className="session-map">
      <div className="session-map-header">
        <h1>{topic.title}</h1>
        <div className="session-map-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(completedCount / topic.sessions.length) * 100}%` }}
            />
          </div>
          <div className="progress-text">
            {completedCount}/{topic.sessions.length} sessions complete
          </div>
        </div>
      </div>

      <div className="snowman-mini">
        <div className="snowman-mini-icon">⛄</div>
        <div className="snowman-mini-text">{snowmanParts}/5 parts</div>
      </div>

      <div className="sessions-list">
        {topic.sessions.map((session) => {
          const status = getSessionStatus(session.id);
          const progress = sessionProgress[session.id];

          return (
            <div
              key={session.id}
              className={`session-card ${status} ${
                justUnlocked === session.id ? 'just-unlocked' : ''
              }`}
            >
              <div className="session-number">Session {session.id}</div>
              <div className="session-title">{session.title}</div>

              {status === 'locked' && (
                <div className="session-locked">
                  <div className="lock-icon">🔒</div>
                  <div className="lock-text">Complete Session {session.id - 1}</div>
                </div>
              )}

              {status === 'unlocked' && (
                <div className="session-unlocked">
                  {justUnlocked === session.id && (
                    <div className="unlock-badge">✨ JUST UNLOCKED!</div>
                  )}
                  <button
                    className="session-start-btn"
                    onClick={() => onStartSession(session.id)}
                  >
                    Start Session
                  </button>
                  <div className="session-time">⏱️ ~5 minutes</div>
                </div>
              )}

              {status === 'completed' && (
                <div className="session-completed">
                  <div className="completed-badge">✓ Completed</div>
                  <div className="session-score">
                    Score: {progress.score}/{progress.total}
                  </div>
                  <div className="session-points">+{progress.points} pts</div>
                  <div className="session-actions">
                    <button
                      className="session-retry-btn"
                      onClick={() => onStartSession(session.id)}
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SessionMap;
