import React, { useState, useEffect } from 'react';

const App = () => {
  const totalFrames = 100; // Total number of frames in your sequence
  const frameHeight = 100; // Pixels scrolled to change a frame
  const [currentFrame, setCurrentFrame] = useState(1); // Starting frame

  // Function to handle scroll and calculate the current frame
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const frameIndex = Math.min(
      Math.max(Math.floor(scrollY / frameHeight) + 1, 1),
      totalFrames
    );
    setCurrentFrame(frameIndex);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Format current frame number to match "ezgif-frame-XXX" format
  const formattedFrame = String(currentFrame).padStart(3, '0');
  const frameSrc = `/frames/ezgif-frame-${formattedFrame}.jpg`;

  return (
    <div
      style={{
        height: `${totalFrames * frameHeight}px`, // Ensure enough scrollable space
        backgroundColor: '#333', // Background color for the scrollable area
      }}
    >
      {/* Frame Viewer */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <img
          src={frameSrc}
          alt={`Frame ${currentFrame}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
      <h1>HI theree</h1>
    </div>
  );
};

export default App;
