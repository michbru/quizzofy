import { useState } from 'react';
import './Store.css';
import themePixel from '../assets/images/theme-pixel.png';
import themeNeon from '../assets/images/theme-neon.png';
import themeDark from '../assets/images/theme-dark.png';
import themeNature from '../assets/images/theme-nature.png';
import cosmeticWizardHat from '../assets/images/cosmetic-wizard-hat.png';
import cosmeticCrown from '../assets/images/cosmetic-crown.png';
import cosmeticSunglasses from '../assets/images/cosmetic-sunglasses.png';
import cosmeticRainbowScarf from '../assets/images/cosmetic-rainbow-scarf.png';
import cosmeticGuitar from '../assets/images/cosmetic-guitar.png';

const STORE_ITEMS = {
  themes: [
    { id: 'pixel', name: 'Pixel Theme', cost: 250, description: '8-bit retro aesthetic', preview: '🎮', image: themePixel },
    { id: 'neon', name: 'Neon Theme', cost: 300, description: '80s vaporwave vibes', preview: '💜', image: themeNeon },
    { id: 'dark', name: 'Dark Mode', cost: 150, description: 'Easy on the eyes', preview: '🌙', image: themeDark },
    { id: 'nature', name: 'Nature Theme', cost: 200, description: 'Calm and natural', preview: '🌿', image: themeNature }
  ],
  cosmetics: [
    { id: 'wizard-hat', name: 'Wizard Hat', cost: 50, type: 'cosmetic', icon: '🧙', image: cosmeticWizardHat },
    { id: 'crown', name: 'Crown', cost: 75, type: 'cosmetic', icon: '👑', image: cosmeticCrown },
    { id: 'sunglasses', name: 'Sunglasses', cost: 60, type: 'cosmetic', icon: '😎', image: cosmeticSunglasses },
    { id: 'rainbow-scarf', name: 'Rainbow Scarf', cost: 40, type: 'cosmetic', icon: '🌈', image: cosmeticRainbowScarf },
    { id: 'guitar', name: 'Guitar', cost: 70, type: 'cosmetic', icon: '🎸', image: cosmeticGuitar }
  ],
  powerups: [
    { id: 'multiplier', name: 'Point Multiplier 1.1x', cost: 200, description: '10% more points per session', icon: '⚡' },
    { id: 'streak-shield', name: 'Streak Shield', cost: 150, description: 'One wrong answer doesn\'t break streak', icon: '🛡️' },
    { id: 'hints', name: 'Hint Tokens (5x)', cost: 100, description: 'Get 5 hints during quizzes', icon: '💡' }
  ]
};

function Store({ points, unlockedThemes, unlockedCosmetics, currentTheme, onPurchase, onApplyTheme, onBack }) {
  const [selectedTab, setSelectedTab] = useState('themes');
  const [purchaseMessage, setPurchaseMessage] = useState('');

  const handlePurchase = (item) => {
    if (points < item.cost) {
      setPurchaseMessage('Not enough points!');
      setTimeout(() => setPurchaseMessage(''), 2000);
      return;
    }

    const itemType = selectedTab === 'themes' ? 'theme' : selectedTab === 'cosmetics' ? 'cosmetic' : 'powerup';
    const success = onPurchase({ ...item, type: itemType }, item.cost);

    if (success) {
      setPurchaseMessage(`✨ Unlocked ${item.name}!`);
      setTimeout(() => setPurchaseMessage(''), 2000);
    }
  };

  const isUnlocked = (item, type) => {
    if (type === 'themes') return unlockedThemes.includes(item.id);
    if (type === 'cosmetics') return unlockedCosmetics.includes(item.id);
    return false;
  };

  return (
    <div className="store">
      <div className="store-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1>🛒 Store</h1>
        <div className="store-points">
          <span>Your Points:</span>
          <span className="points-display">{points} ✨</span>
        </div>
      </div>

      <div className="store-tabs">
        <button
          className={`store-tab ${selectedTab === 'themes' ? 'active' : ''}`}
          onClick={() => setSelectedTab('themes')}
        >
          Themes
        </button>
        <button
          className={`store-tab ${selectedTab === 'cosmetics' ? 'active' : ''}`}
          onClick={() => setSelectedTab('cosmetics')}
        >
          Cosmetics
        </button>
        <button
          className={`store-tab ${selectedTab === 'powerups' ? 'active' : ''}`}
          onClick={() => setSelectedTab('powerups')}
        >
          Power-Ups
        </button>
      </div>

      {purchaseMessage && (
        <div className="purchase-message">{purchaseMessage}</div>
      )}

      <div className="store-content">
        {selectedTab === 'themes' && (
          <div className="store-grid">
            {STORE_ITEMS.themes.map((theme) => {
              const unlocked = isUnlocked(theme, 'themes');
              const isActive = currentTheme === theme.id;

              return (
                <div key={theme.id} className={`store-item ${unlocked ? 'unlocked' : ''}`}>
                  <div className="item-preview">
                    {theme.image ? (
                      <img src={theme.image} alt={theme.name} className="theme-preview-image" />
                    ) : (
                      <span>{theme.preview}</span>
                    )}
                  </div>
                  <div className="item-name">{theme.name}</div>
                  <div className="item-description">{theme.description}</div>
                  <div className="item-cost">{theme.cost} ✨</div>
                  {unlocked ? (
                    isActive ? (
                      <div className="item-active">✓ Active</div>
                    ) : (
                      <button
                        className="item-btn apply-btn"
                        onClick={() => onApplyTheme(theme.id)}
                      >
                        Apply
                      </button>
                    )
                  ) : (
                    <button
                      className="item-btn buy-btn"
                      onClick={() => handlePurchase(theme)}
                    >
                      Buy
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {selectedTab === 'cosmetics' && (
          <div className="store-grid">
            {STORE_ITEMS.cosmetics.map((cosmetic) => {
              const unlocked = isUnlocked(cosmetic, 'cosmetics');

              return (
                <div key={cosmetic.id} className={`store-item ${unlocked ? 'unlocked' : ''}`}>
                  <div className="item-preview">
                    {cosmetic.image ? (
                      <img src={cosmetic.image} alt={cosmetic.name} className="cosmetic-preview-image" />
                    ) : (
                      <span>{cosmetic.icon}</span>
                    )}
                  </div>
                  <div className="item-name">{cosmetic.name}</div>
                  <div className="item-cost">{cosmetic.cost} ✨</div>
                  {unlocked ? (
                    <div className="item-unlocked">✓ Owned</div>
                  ) : (
                    <button
                      className="item-btn buy-btn"
                      onClick={() => handlePurchase(cosmetic)}
                    >
                      Buy
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {selectedTab === 'powerups' && (
          <div className="store-grid">
            {STORE_ITEMS.powerups.map((powerup) => (
              <div key={powerup.id} className="store-item">
                <div className="item-preview">{powerup.icon}</div>
                <div className="item-name">{powerup.name}</div>
                <div className="item-description">{powerup.description}</div>
                <div className="item-cost">{powerup.cost} ✨</div>
                <button
                  className="item-btn buy-btn"
                  onClick={() => handlePurchase(powerup)}
                >
                  Buy
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Store;
