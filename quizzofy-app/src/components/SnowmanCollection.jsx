import './SnowmanCollection.css';

function SnowmanCollection({ currentParts, completedSnowmen, unlockedCosmetics, onBack }) {
  const SNOWMAN_PARTS = [
    { id: 1, name: 'Base', icon: '⚫' },
    { id: 2, name: 'Middle', icon: '⚪' },
    { id: 3, name: 'Head', icon: '⚪' },
    { id: 4, name: 'Hat', icon: '🎩' },
    { id: 5, name: 'Scarf', icon: '🧣' }
  ];

  return (
    <div className="snowman-collection">
      <div className="collection-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1>⛄ Snowman Collection</h1>
      </div>

      <div className="collection-content">
        <div className="current-build-section">
          <h2>⛄ Currently Building:</h2>
          <div className="current-snowman">
            <div className="snowman-display">
              {SNOWMAN_PARTS.map((part) => (
                <div
                  key={part.id}
                  className={`snowman-part ${part.id <= currentParts ? 'collected' : 'missing'}`}
                >
                  {part.id <= currentParts ? part.icon : '○'}
                </div>
              ))}
            </div>
            <div className="snowman-progress">
              Snowman #{completedSnowmen + 1} - {currentParts}/5 parts
            </div>
            {currentParts < 5 ? (
              <div className="missing-parts">
                <div className="missing-title">Missing:</div>
                {SNOWMAN_PARTS.filter((p) => p.id > currentParts).map((part) => (
                  <div key={part.id} className="missing-part">
                    {part.icon} {part.name}
                  </div>
                ))}
                <div className="motivation-text">
                  Complete {5 - currentParts} more session{5 - currentParts > 1 ? 's' : ''} to finish!
                </div>
              </div>
            ) : (
              <div className="complete-message">
                🎉 Ready to complete! Finish your next session!
              </div>
            )}
          </div>
        </div>

        <div className="completed-section">
          <h2>✨ Completed Snowmen:</h2>
          {completedSnowmen > 0 ? (
            <div className="completed-grid">
              {Array.from({ length: completedSnowmen }).map((_, index) => (
                <div key={index} className="completed-snowman-card">
                  <div className="completed-snowman-icon">⛄</div>
                  <div className="completed-snowman-number">#{index + 1}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-completed">
              No completed snowmen yet. Keep learning to build your first one!
            </div>
          )}
        </div>

        {unlockedCosmetics.length > 0 && (
          <div className="cosmetics-section">
            <h2>🎨 Unlocked Cosmetics:</h2>
            <div className="cosmetics-grid">
              {unlockedCosmetics.map((cosmetic, index) => (
                <div key={index} className="cosmetic-item">
                  {cosmetic}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SnowmanCollection;
