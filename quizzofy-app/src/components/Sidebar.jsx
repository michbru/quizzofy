import './Sidebar.css';

function Sidebar({
  isOpen,
  onToggle,
  currentTopic,
  sessionProgress,
  points,
  snowmanParts,
  completedSnowmen,
  onGoToCollection,
  onGoToStore,
  onGoToSessions,
  currentTheme
}) {
  const topicProgress = currentTopic ? sessionProgress[currentTopic.id] || {} : {};
  const completedSessions = Object.values(topicProgress).filter(s => s.completed).length;
  const totalSessions = currentTopic ? currentTopic.sessions.length : 0;

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button className="sidebar-toggle" onClick={onToggle}>
            {isOpen ? '✕' : '☰'}
          </button>
          {isOpen && (
            <>
              <div className="sidebar-logo">QUIZZOFY</div>
              <div className="sidebar-points">
                <span className="points-label">Points:</span>
                <span className="points-value">{points} ✨</span>
              </div>
            </>
          )}
        </div>

        {isOpen && (
          <div className="sidebar-content">
            <div className="sidebar-section">
              <div className="section-title">📚 Your Sessions</div>
              {currentTopic ? (
                <>
                  <div className="topic-name">{currentTopic.title}</div>
                  <div className="session-progress-bar">
                    <div
                      className="session-progress-fill"
                      style={{ width: `${(completedSessions / totalSessions) * 100}%` }}
                    />
                  </div>
                  <div className="session-progress-text">
                    {completedSessions}/{totalSessions} sessions
                  </div>
                  <button className="sidebar-btn" onClick={onGoToSessions}>
                    View All Sessions
                  </button>
                </>
              ) : (
                <div className="no-topic">No topic loaded</div>
              )}
            </div>

            <div className="sidebar-section">
              <div className="section-title">⛄ Collection</div>
              <div className="collection-stats">
                <div>Snowmen: {completedSnowmen}</div>
                <div>Current parts: {snowmanParts}/5</div>
              </div>
              <button className="sidebar-btn" onClick={onGoToCollection}>
                View Gallery
              </button>
            </div>

            <div className="sidebar-section">
              <div className="section-title">🛒 Store</div>
              <div className="store-info">
                <div>Points: {points} ✨</div>
                <div className="current-theme">Theme: {currentTheme}</div>
              </div>
              <button className="sidebar-btn" onClick={onGoToStore}>
                Browse Items
              </button>
            </div>
          </div>
        )}
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={onToggle} />}
    </>
  );
}

export default Sidebar;
