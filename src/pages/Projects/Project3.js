import React, { useState, useCallback, useMemo } from 'react';
import { Github, Globe, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Project3.css';
import ArchitectureDiagram from './Project3-Architecture.png';
import demoVideo from './Project3/chat-record.mp4';

const Project3 = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // 스크린샷 이미지 로드 및 정렬
  const imageContext = require.context('./Project3', false, /screenshot\d+\.png$/);
  const screenshots = useMemo(() => {
    const imageContext = require.context('./Project3', false, /screenshot\d+\.png$/);
    return imageContext.keys()
      .map((path) => {
        const id = path.match(/screenshot(\d+)\.png$/)[1];
        return {
          id,
          type: 'image',
          caption: getCaptionForId(id),
          url: imageContext(path)
        };
      })
      .sort((a, b) => Number(a.id) - Number(b.id));
  }, []);
  
  const allMedia = useMemo(() => [
    ...screenshots,
    {
      id: 'video1',
      type: 'video',
      caption: '채팅 데모 영상',
      url: demoVideo
    }
  ], [screenshots]);

  // 스크린샷 캡션 매핑
  function getCaptionForId(id) {
    const captions = {
      '1': "로그인 페이지",
      '2': "채팅 작동 화면"
    };
    return captions[id] || `스크린샷 ${id}`;
  }

  const navigateMedia = useCallback((direction) => {
    if (currentIndex === null) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allMedia.length - 1;
    } else {
      newIndex = currentIndex < allMedia.length - 1 ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
    setSelectedMedia(allMedia[newIndex]);
  }, [currentIndex, allMedia]);

  const closeModal = useCallback(() => {
    setSelectedMedia(null);
    setCurrentIndex(null);
  }, []);

  const handleMediaClick = useCallback((media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;

      if (e.key === 'ArrowLeft') {
        navigateMedia('prev');
      } else if (e.key === 'ArrowRight') {
        navigateMedia('next');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, navigateMedia, closeModal]);

  return (
    <div className="project3-container">
      <div className="project-header">
        <h1 className="text-4xl font-bold mb-3">다소니</h1>
        <p className="text-gray-600 mb-4">
          사랑하는 사람을 뜻하는 순 우리말. 소중한 인연을 더욱 특별하게 만든다는 의미를 담았다.
        </p>
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Calendar size={16} />
          <span>2024.8 - 2024.8</span>
        </div>
      </div>

      <div className="project3-tags">
        <span className="project3-tag">React</span>
        <span className="project3-tag">Fastapi</span>
        <span className="project3-tag">Postgresql</span>
        <span className="project3-tag">Redis</span>
        <span className="project3-tag">Docker-compose</span>
        <span className="project3-tag">GCP</span>
        <span className="project3-tag">Jenkins</span>
      </div>

      <div className="project3-overview-container">
        <div className="project3-details">
          <div className="project3-content-box">
            <div className="project3-content-section">
              <h2>제작 목표</h2>
              <ul className="project3-feature-list">
                <li>안정적이고 확장 가능한 실시간 채팅 플랫폼 구축</li>
                <li>Redis를 활용한 효율적인 메시지 캐싱 및 데이터 동기화 구현</li>
                <li>WebSocket을 통한 실시간 양방향 통신 시스템 구현</li>
              </ul>
            </div>

            <div className="project3-content-section">
              <h2>주요 기능</h2>
              <ul className="project3-feature-list">
                <li>WebSocket 기반 실시간 채팅 기능</li>
                <li>Redis를 활용한 메시지 캐싱 및 실시간 데이터 동기화</li>
                <li>실시간 접속자 모니터링 및 관리</li>
                <li>스팸 메시지 감지 및 자동 차단 시스템</li>
                <li>메시지 영구 저장 및 이력 관리</li>
              </ul>
            </div>

            <div className="project3-content-section">
              <h2>개발 과정</h2>
              <p>
                1. 기본 환경 구축<br />
                • 아키텍처 설계 및 기술 스택 선정<br />
                • Nginx, React, FastAPI, Redis, PostgreSQL 환경 구성<br />
                • WebSocket 기반 실시간 통신 구현<br />
                • Docker 기반 개발 환경 구성<br />
                <br />
                2. 핵심 기능 구현<br />
                • WebSocket 기반 실시간 채팅 시스템 개발<br />
                • Redis 캐싱 시스템 구현<br />
                • PostgreSQL 파티셔닝을 통한 메시지 저장소 최적화<br />
                • 사용자 관리 및 스팸 차단 기능 구현<br />
                <br />
                3. 배포 및 운영<br />
                • Docker-compose 기반 멀티 컨테이너 구성<br />
                • GCP 환경 배포 및 서비스 실행<br />
                • Jenkins를 통한 CI/CD 파이프라인 구축<br />
              </p>
            </div>

            <div className="project3-content-section">
              <h2>사용 기술</h2>
              <div className="project3-tech-details">
                <div className="project3-tech-category">
                  <h3>Frontend & Backend</h3>
                  <ul>
                    <li>React - 사용자 인터페이스 구현</li>
                    <li>FastAPI - 비동기 백엔드 서버</li>
                    <li>WebSocket - 실시간 양방향 통신</li>
                  </ul>
                </div>
                <div className="project3-tech-category">
                  <h3>Database & Cache</h3>
                  <ul>
                    <li>Redis - 실시간 데이터 캐싱 및 세션 관리</li>
                    <li>PostgreSQL - 메시지 및 사용자 데이터 영구 저장</li>
                  </ul>
                </div>
                <div className="project3-tech-category">
                  <h3>Infrastructure</h3>
                  <ul>
                    <li>Nginx - 웹 서버 및 리버스 프록시</li>
                    <li>Docker & Docker-compose - 컨테이너 관리</li>
                    <li>GCP - 클라우드 인프라</li>
                    <li>Jenkins - CI/CD 자동화</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project3-content-section">
              <h2>문제점 및 해결 과정</h2>
              <ul className="project3-feature-list">
                <li>
                  <strong>백엔드 연동 이슈:</strong><br />
                  • 문제: FastAPI, Redis, PostgreSQL 동시 연동 시 발생한 데이터 동기화 문제<br />
                  • 해결: 단계적 연동 접근 - FastAPI와 Redis 연동 후 PostgreSQL 연동 순차적 구현
                </li>
              </ul>
            </div>

            <div className="project3-content-section">
              <h2>개선점 및 향후 계획</h2>
              <p>
                인증 시스템 및 보안 강화:<br />
                <br />
                • 사용자 인증 시스템 개선<br />
                - 현재: 세션 기반 인증 사용<br />
                - 개선: JWT 토큰 기반 인증 구현<br />
                <br />
                • 보안 아키텍처 강화<br />
                - 토큰 기반 인증으로 보안 레벨 향상<br />
                - Kafka를 활용한 안전한 데이터 처리<br />
              </p>
            </div>

            <div className="project3-content-section">
              <h2>느낀 점</h2>
              <p>
                이 프로젝트를 통해 실시간 통신 시스템의 설계와 구현에 대한 실질적인 경험을 쌓을 수 있었습니다.<br></br>
                특히 WebSocket과 Redis를 활용한 실시간 메시지 처리 시스템 구축 과정에서 많은 기술적 도전과 해결 과정이 있었습니다. <br></br>
                Docker를 활용한 멀티 컨테이너 환경 구성과 FastAPI의 비동기 처리를 통해 확장 가능한 아키텍처 설계의 중요성을 이해하게 되었고, <br></br>
                실시간 서비스의 안정성과 성능 최적화에 대한 깊은 통찰을 얻을 수 있었습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="project3-architecture-diagram">
          <img src={ArchitectureDiagram} alt="Architecture Diagram" />
        </div>
      </div>

      <div className="project3-links">
        <a 
          href="https://github.com/stradivirus/chat"
          className="project3-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          GitHub 저장소
        </a>
        <a 
          href="http://34.64.132.7"
          className="project3-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} />
          Live Demo
        </a>
      </div>

      <div className="project3-screenshots">
        <h2>프로젝트 데모</h2>
        <div className="screenshots-grid">
          {allMedia.map((media, index) => (
            <div key={media.id} className="screenshot-item">
              {media.type === 'image' ? (
                <img 
                  src={media.url} 
                  alt={media.caption} 
                  className="screenshot-image"
                  onClick={() => handleMediaClick(media, index)}
                />
              ) : (
                <video 
                  className="screenshot-image" 
                  controls
                  onClick={() => handleMediaClick(media, index)}
                >
                  <source src={media.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="screenshot-caption">{media.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              <X size={24} />
            </button>
            <button 
              className="modal-nav-button modal-nav-prev" 
              onClick={() => navigateMedia('prev')}
              aria-label="Previous media"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="modal-nav-button modal-nav-next" 
              onClick={() => navigateMedia('next')}
              aria-label="Next media"
            >
              <ChevronRight size={24} />
            </button>
            {selectedMedia.type === 'image' ? (
              <img 
                src={selectedMedia.url} 
                alt={selectedMedia.caption} 
                className="modal-image"
              />
            ) : (
              <video 
                className="modal-image" 
                controls 
                autoPlay
              >
                <source src={selectedMedia.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="modal-caption">{selectedMedia.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project3;