import React, { useState, useEffect } from 'react';

const FrameByScroll = () => {
  const totalFrames = 100; // Total number of frames
  const frameHeight = 100; // Height per scroll step in pixels
  const [currentFrame, setCurrentFrame] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const frameIndex = Math.min(
      Math.max(Math.floor(scrollPosition / frameHeight) + 1, 1),
      totalFrames
    );
    setCurrentFrame(frameIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Format frame index to match ezgif naming, e.g., ezgif-frame-001
  const formattedFrame = String(currentFrame).padStart(3, '0'); // Converts 1 -> 001
  const frameSrc = `/frames/ezgif-frame-${formattedFrame}.jpg`;

  return (
    <div style={{ height: `${totalFrames * frameHeight}px`, backgroundColor: '#333' }}>
      <div
        style={{
          position: 'sticky',
          top: '0',
          backgroundColor: 'black',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={frameSrc}
          alt={`Frame ${currentFrame}`}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default FrameByScroll;
