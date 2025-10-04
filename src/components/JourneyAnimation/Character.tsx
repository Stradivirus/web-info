import React from 'react';
import { getPixelImage } from '../../config/storage';

const characterImage = getPixelImage('little_boy_pixel.png');

type CharacterProps = {
  position: number;
  isWalking: boolean;
  className?: string;
  zIndex?: number;
};

const Character: React.FC<CharacterProps> = ({ position, isWalking, className = '', zIndex = 1 }) => {
  return (
    <div 
      className={`absolute character ${isWalking ? 'walking' : ''} ${className}`}
      style={{
        left: `${position}%`,
        bottom: '10%',
        width: '80px',
        height: '80px',
        backgroundImage: `url(${characterImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'pixelated',
        transform: `translateX(-50%)`,
        zIndex: zIndex
      }}
    />
  );
};

export default Character;