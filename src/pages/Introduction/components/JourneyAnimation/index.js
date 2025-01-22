// index.js
import React, { useState, useEffect, useMemo } from 'react';
import Background from './Background';
import Character from './Character';
import StageIcons from './StageIcons';
import Popup from './Popup';
import './styles.css';

const JourneyAnimation = () => {
  const [position, setPosition] = useState(5);
  const [isWalking, setIsWalking] = useState(true);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [activePopups, setActivePopups] = useState(new Set());

  const stages = useMemo(() => [
    { 
      name: '클라우드 교육', 
      description: '프로그래밍 기초 교육', 
      type: 'education',
      color: '#4A90E2',
      showPopup: true
    },
    { 
      name: '팀프로젝트', 
      description: '팀 프로젝트 진행', 
      type: 'project',
      color: '#4CAF50',
      showPopup: true
    },
    { 
      name: '인턴', 
      description: 'IT 회사 인턴십', 
      type: 'internship',
      color: '#9C27B0',
      showPopup: false
    },
    { 
      name: '자격증', 
      description: 'NCP, AWS, 리눅스마스터, 정보처리기능사', 
      type: 'certification',
      color: '#FF9800',
      showPopup: false
    },
    { 
      name: '방통대 편입', 
      description: '컴퓨터 공학과 편입', 
      type: 'education',
      color: '#2196F3',
      showPopup: false
    }
  ], []);

  useEffect(() => {
    if (!isWalking) return;
    
    const interval = setInterval(() => {
      setPosition(prev => {
        const newPosition = prev + 0.4;
        
        // 각 아이콘 위치 계산 (15% + index * 15%)
        const iconPositions = stages.map((_, index) => 12 + index * 17);
        
        // 현재 위치가 아이콘 위치와 가까운지 체크
        const isNearIcon = iconPositions.some(
          iconPos => Math.abs(newPosition - iconPos) < 0.3
        );

        if (isNearIcon) {
          // 아이콘 근처에서 멈춤
          setIsWalking(false);
          // 현재 아이콘의 인덱스를 찾아서 activePopups에 추가
          const currentIconIndex = iconPositions.findIndex(
            iconPos => Math.abs(newPosition - iconPos) < 0.3
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
              left: `${12 + index * 17}%`,
              bottom: '35%'
            }}
          >
            <Popup
              isVisible={activePopups.has(index)}
              index={index}  // index prop 추가
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