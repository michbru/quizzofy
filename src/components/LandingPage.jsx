import { useState } from 'react';
import './LandingPage.css';

function LandingPage({ onFileUpload }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleUpload();
  };

  const handleClick = () => {
    handleUpload();
  };

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      onFileUpload();
    }, 500);
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Turn boring PDFs into addictive games</h1>
        <p className="landing-subtitle">No signup. No bullshit. Just upload and play.</p>

        <div
          className={`upload-area ${isDragging ? 'dragging' : ''} ${isUploading ? 'uploading' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="upload-icon">📄</div>
          <div className="upload-text">
            {isUploading ? 'Uploading...' : 'Drop your notes here 🚀'}
          </div>
          <div className="upload-hint">or click to browse</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
