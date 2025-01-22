import React, { useState, useEffect } from 'react';
import Background from './Background';
import Character from './Character';
import './styles.css';

const JourneyAnimation = () => {
  const [position, setPosition] = useState(5);
  const [isWalking, setIsWalking] = useState(true);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    if (!isWalking) return;
    
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev + 0.35;
        
        if (newPosition >= 95) {
          setIsWalking(false);
          // 1. 문 열기
          setIsDoorOpen(true);
          
          // 2. 0.5초 후 캐릭터 사라지기 시작
          setTimeout(() => {
            setIsEntering(true);
            
            // 3. 캐릭터가 사라지고 0.5초 후 문 닫기
            setTimeout(() => {
              setIsDoorOpen(false);
            }, 500);
          }, 500);
          
          return 95;
        }
        
        return newPosition;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isWalking]);

  return (
    <div className="w-full h-[650px] relative overflow-hidden rounded-lg">
      <Background />
      
      {/* IT Company 건물 */}
      <div
        className="absolute company-building"
        style={{
          left: '99%',
          bottom: '-55%',
          transform: 'translateX(-100%)',
          width: '150px',
          height: '200px',
          background: 'linear-gradient(to bottom, #4A90E2, #357ABD)',
          borderRadius: '8px 8px 0 0',
          zIndex: 1
        }}
      >
        <div className="company-title">IT Company</div>
        <div className="building-top"></div>
        <div className="windows-grid">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="window" />
          ))}
        </div>
        <div className={`entrance ${isDoorOpen ? 'open' : ''}`}></div>
      </div>

      <Character 
        position={position} 
        isWalking={isWalking}
        className={isEntering ? 'entering' : ''}
        zIndex={2}
      />
    </div>
  );
};

export default JourneyAnimation;