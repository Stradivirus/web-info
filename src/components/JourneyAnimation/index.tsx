import React, { useState, useEffect, useMemo } from 'react';
import Background from './Background';
import Character from './Character';
import StageIcons from './StageIcons';
import Popup from './Popup';
import './styles.css';

type Stage = {
  name: string;
  type: string;
  color: string;
  showPopup: boolean;
};

const JourneyAnimation: React.FC = () => {
  const [position, setPosition] = useState<number>(5);
  const [isWalking, setIsWalking] = useState<boolean>(true);
  const [isDoorOpen, setIsDoorOpen] = useState<boolean>(false);
  const [isEntering, setIsEntering] = useState<boolean>(false);
  const [activePopups, setActivePopups] = useState<Set<number>>(new Set());

  const stages: Stage[] = useMemo(() => [
    { name: '클라우드', type: 'education', color: '#4A90E2', showPopup: true },
    { name: '풀스택', type: 'education', color: '#e5f321ff', showPopup: true },
    { name: '빅데이터', type: 'education', color: '#00BCD4', showPopup: true },
    { name: '프로젝트', type: 'project', color: '#4CAF50', showPopup: true },
    { name: '자격증', type: 'certification', color: '#FF9800', showPopup: true },
  ], []);

  useEffect(() => {
    if (!isWalking) return;
    
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev + 0.7;  // 이 부분이 이동 속도
        
        // 각 아이콘 위치 계산 (15% + index * 15%)
        const iconPositions = stages.map((_, index) => 10 + index * 16);
        
        // 현재 위치가 아이콘 위치와 가까운지 체크
        const isNearIcon = iconPositions.some(
          iconPos => Math.abs(newPosition - iconPos) < 0.4
        );

        if (isNearIcon) {
          // 아이콘 근처에서 멈춤
          setIsWalking(false);
          // 현재 아이콘의 인덱스를 찾아서 activePopups에 추가
          const currentIconIndex = iconPositions.findIndex(
            iconPos => Math.abs(newPosition - iconPos) < 0.4
          );
          if (stages[currentIconIndex].showPopup) {
            setActivePopups(prev => new Set([...prev, currentIconIndex]));
          }
          setTimeout(() => {
            setIsWalking(true);
          }, 500);
        }
        
        if (newPosition >= 95) {
          setIsWalking(false);
          setIsDoorOpen(true);
          setTimeout(() => {
            setIsEntering(true);
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
  }, [isWalking, stages]);

  return (
    <div className="w-full h-[650px] relative overflow-hidden rounded-lg">
      <Background />
      <StageIcons stages={stages} />
      
      {stages.map((stage, index) => (
        stage.showPopup && (
          <div 
            key={`popup-${index}`}
            style={{
              position: 'absolute',
              left: `${10 + index * 16}%`,
              bottom: '35%'
            }}
          >
            <Popup
              isVisible={activePopups.has(index)}
              index={index}
            />
          </div>
        )
      ))}

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