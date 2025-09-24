import React from 'react';
import { getPixelImage } from '../../../../config/storage';

const backgroundImage = getPixelImage('pixel_art_8-bit.png');

const Background: React.FC = () => {
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