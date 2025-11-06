import { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import SnakeGame from './components/SnakeGame';
import SessionMap from './components/SessionMap';
import LearningPhase from './components/LearningPhase';
import QuizPhase from './components/QuizPhase';
import SessionComplete from './components/SessionComplete';
import Sidebar from './components/Sidebar';
import PointsCounter from './components/PointsCounter';
import SnowmanCollection from './components/SnowmanCollection';
import Store from './components/Store';
import { getRandomTopic } from './data/content';

function App() {
  // App state
  const [currentView, setCurrentView] = useState('landing'); // landing, snake, sessionMap, learning, quiz, complete, collection, store
  const [currentTopic, setCurrentTopic] = useState(null);
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('quizzofy_points');
    return saved ? parseInt(saved) : 0;
  });
  const [sessionProgress, setSessionProgress] = useState(() => {
    const saved = localStorage.getItem('quizzofy_session_progress');
    return saved ? JSON.parse(saved) : {};
  });
  const [currentSession, setCurrentSession] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [streak, setStreak] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [snowmanParts, setSnowmanParts] = useState(() => {
    const saved = localStorage.getItem('quizzofy_snowman_parts');
    return saved ? parseInt(saved) : 0;
  });
  const [completedSnowmen, setCompletedSnowmen] = useState(() => {
    const saved = localStorage.getItem('quizzofy_completed_snowmen');
    return saved ? parseInt(saved) : 0;
  });
  const [unlockedThemes, setUnlockedThemes] = useState(() => {
    const saved = localStorage.getItem('quizzofy_unlocked_themes');
    return saved ? JSON.parse(saved) : ['default'];
  });
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('quizzofy_current_theme');
    return saved || 'default';
  });
  const [unlockedCosmetics, setUnlockedCosmetics] = useState(() => {
    const saved = localStorage.getItem('quizzofy_unlocked_cosmetics');
    return saved ? JSON.parse(saved) : [];
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [snakeScore, setSnakeScore] = useState(0);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('quizzofy_points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('quizzofy_session_progress', JSON.stringify(sessionProgress));
  }, [sessionProgress]);

  useEffect(() => {
    localStorage.setItem('quizzofy_snowman_parts', snowmanParts.toString());
  }, [snowmanParts]);

  useEffect(() => {
    localStorage.setItem('quizzofy_completed_snowmen', completedSnowmen.toString());
  }, [completedSnowmen]);

  useEffect(() => {
    localStorage.setItem('quizzofy_unlocked_themes', JSON.stringify(unlockedThemes));
  }, [unlockedThemes]);

  useEffect(() => {
    localStorage.setItem('quizzofy_current_theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    localStorage.setItem('quizzofy_unlocked_cosmetics', JSON.stringify(unlockedCosmetics));
  }, [unlockedCosmetics]);

  // Handle file upload (simulated)
  const handleFileUpload = () => {
    const topic = getRandomTopic();
    setCurrentTopic(topic);
    setCurrentView('snake');
  };

  // Handle snake game complete
  const handleSnakeComplete = (score) => {
    setSnakeScore(score);
    setPoints(prev => prev + score);
    setCurrentView('sessionMap');

    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {
        // Fullscreen request failed, continue anyway
      });
    }
  };

  // Start a session
  const startSession = (sessionId) => {
    const session = currentTopic.sessions.find(s => s.id === sessionId);
    setCurrentSession(session);
    setCurrentSlideIndex(0);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setStreak(0);
    setSessionScore(0);
    setCurrentView('learning');
  };

  // Continue to next slide
  const nextSlide = () => {
    setPoints(prev => prev + 5);
    if (currentSlideIndex < currentSession.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      // Start quiz
      setCurrentView('quiz');
    }
  };

  // Submit quiz answer
  const submitAnswer = (isCorrect, pointsEarned) => {
    const newAnswers = [...quizAnswers, isCorrect];
    setQuizAnswers(newAnswers);
    setPoints(prev => prev + pointsEarned);
    setSessionScore(prev => prev + pointsEarned);

    if (isCorrect) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < currentSession.quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz complete
      completeSession();
    }
  };

  // Complete session
  const completeSession = () => {
    const correctAnswers = quizAnswers.filter(a => a).length;
    const totalQuestions = currentSession.quiz.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const passed = percentage >= 60;

    // Update session progress
    const newProgress = { ...sessionProgress };
    if (!newProgress[currentTopic.id]) {
      newProgress[currentTopic.id] = {};
    }
    newProgress[currentTopic.id][currentSession.id] = {
      completed: passed,
      score: correctAnswers,
      total: totalQuestions,
      points: sessionScore
    };
    setSessionProgress(newProgress);

    // Add snowman part if passed
    if (passed && snowmanParts < 5) {
      setSnowmanParts(prev => {
        const newParts = prev + 1;
        if (newParts === 5) {
          // Snowman complete!
          setPoints(p => p + 100);
          setCompletedSnowmen(c => c + 1);
          return 0; // Start new snowman
        }
        return newParts;
      });
    }

    setCurrentView('complete');
  };

  // Return to session map
  const returnToMap = () => {
    setCurrentView('sessionMap');
  };

  // Retry session
  const retrySession = () => {
    setCurrentSlideIndex(0);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setStreak(0);
    setSessionScore(0);
    setCurrentView('learning');
  };

  // Navigate to collection
  const goToCollection = () => {
    setCurrentView('collection');
    setSidebarOpen(false);
  };

  // Navigate to store
  const goToStore = () => {
    setCurrentView('store');
    setSidebarOpen(false);
  };

  // Purchase item
  const purchaseItem = (item, cost) => {
    if (points >= cost) {
      setPoints(prev => prev - cost);

      if (item.type === 'theme') {
        setUnlockedThemes(prev => [...prev, item.id]);
      } else if (item.type === 'cosmetic') {
        setUnlockedCosmetics(prev => [...prev, item.id]);
      }

      return true;
    }
    return false;
  };

  // Apply theme
  const applyTheme = (themeId) => {
    setCurrentTheme(themeId);
  };

  return (
    <div className={`app theme-${currentTheme}`}>
      {currentView !== 'landing' && currentView !== 'snake' && (
        <>
          <Sidebar
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            currentTopic={currentTopic}
            sessionProgress={sessionProgress}
            points={points}
            snowmanParts={snowmanParts}
            completedSnowmen={completedSnowmen}
            onGoToCollection={goToCollection}
            onGoToStore={goToStore}
            onGoToSessions={returnToMap}
            currentTheme={currentTheme}
          />
          <PointsCounter points={points} />
        </>
      )}

      {currentView === 'landing' && (
        <LandingPage onFileUpload={handleFileUpload} />
      )}

      {currentView === 'snake' && (
        <SnakeGame onComplete={handleSnakeComplete} />
      )}

      {currentView === 'sessionMap' && (
        <SessionMap
          topic={currentTopic}
          sessionProgress={sessionProgress[currentTopic?.id] || {}}
          onStartSession={startSession}
          points={points}
          snowmanParts={snowmanParts}
        />
      )}

      {currentView === 'learning' && (
        <LearningPhase
          session={currentSession}
          slideIndex={currentSlideIndex}
          onNext={nextSlide}
        />
      )}

      {currentView === 'quiz' && (
        <QuizPhase
          session={currentSession}
          questionIndex={currentQuestionIndex}
          streak={streak}
          onAnswer={submitAnswer}
          onNext={nextQuestion}
        />
      )}

      {currentView === 'complete' && (
        <SessionComplete
          session={currentSession}
          answers={quizAnswers}
          sessionScore={sessionScore}
          snowmanParts={snowmanParts}
          onContinue={returnToMap}
          onRetry={retrySession}
        />
      )}

      {currentView === 'collection' && (
        <SnowmanCollection
          currentParts={snowmanParts}
          completedSnowmen={completedSnowmen}
          unlockedCosmetics={unlockedCosmetics}
          onBack={returnToMap}
        />
      )}

      {currentView === 'store' && (
        <Store
          points={points}
          unlockedThemes={unlockedThemes}
          unlockedCosmetics={unlockedCosmetics}
          currentTheme={currentTheme}
          onPurchase={purchaseItem}
          onApplyTheme={applyTheme}
          onBack={returnToMap}
        />
      )}
    </div>
  );
}

export default App;
