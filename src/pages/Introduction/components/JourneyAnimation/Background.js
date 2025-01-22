// Background.js
import React from 'react';
import backgroundImage from '../../../../assets/images/pixel/pixel_art_8-bit.png';

const Background = () => {
  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-repeat-x"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 70%',
          imageRendering: 'pixelated',
          height: '650px'
        }}
      />
    </div>
  );
};

export default Background;