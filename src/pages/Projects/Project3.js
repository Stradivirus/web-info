import React, { useState } from 'react';
import { Github, Globe, Calendar, X } from 'lucide-react';
import './Project3.css';
import ArchitectureDiagram from './Project3-Architecture.png';
import demoVideo from './Project3/chat-record.mp4';

const Project3 = () => {
 const [selectedImage, setSelectedImage] = useState(null);

 // 이미지 컨텍스트 생성
 const imageContext = require.context('./Project3', false, /screenshot\d+\.png$/);

 // 스크린샷 데이터 배열을 동적으로 생성
 const screenshots = imageContext.keys().map((path, index) => {
   const id = path.match(/screenshot(\d+)\.png$/)[1];
   return {
     id,
     caption: getCaptionForId(id),
     image: imageContext(path)
   };
 }).sort((a, b) => Number(a.id) - Number(b.id));

 // ID에 따른 캡션 반환 함수
 function getCaptionForId(id) {
   const captions = {
     '1': "로그인 페이지",
     '2': "채팅 작동 화면"
   };
   return captions[id] || `스크린샷 ${id}`;
 }

 // 모달 닫기 함수
 const closeModal = () => {
   setSelectedImage(null);
 };

 // 이미지 클릭 핸들러
 const handleImageClick = (image, caption) => {
   setSelectedImage({ url: image, caption });
 };

 return (
   <div className="project3-container">
     <div className="project-header">
       <h1 className="text-4xl font-bold mb-4">다소니</h1>
       <p className="text-gray-600 mb-4">사랑하는 사람을 뜻하는 순 우리말. 소중한 인연을 더욱 특별하게 만든다는 의미를 담았다.</p>
       <div className="flex items-center gap-2 text-gray-600">
         <Calendar size={16} />
         <span>2024.8 - 2024.8</span>
       </div>
     </div>

     {/* 사용 기술 태그 */}
     <div className="project3-tags">
       <span className="project3-tag">React</span>
       <span className="project3-tag">Fastapi</span>
       <span className="project3-tag">Postgresql</span>
       <span className="project3-tag">Redis</span>
       <span className="project3-tag">Docker-compose</span>
       <span className="project3-tag">GCP</span>
       <span className="project2-tag">Jenkins</span>
     </div>

     {/* 프로젝트 개요와 아키텍처 다이어그램 */}
     <div className="project3-overview-container">
       <div className="project3-details">
         <div className="project3-content-box">
           <div className="project3-content-section">
             <h2>제작 목표</h2>
             <ul className="project3-feature-list">
               <li>실시간 채팅 서비스를 통한 채팅 플랫폼 구축</li>
               <li>Redis를 활용한 메시지 캐싱 및 데이터 동기화 구현</li>
               <li>WebSocket을 통한 효율적이고 안정적인 양방향 통신 구현</li>
             </ul>
           </div>
           <div className="project3-content-section">
             <h2>주요 기능</h2>
             <ul className="project3-feature-list">
               <li>WebSocket 기반 실시간 채팅 시스템</li>
               <li>Redis를 활용한 실시간 메시지 캐싱 및 관리</li>
               <li>사용자 접속자 수 실시간 모니터링</li>
               <li>스팸 메시지 감지 및 차단 기능</li>
               <li>채팅 메시지 영구 저장 및 동기화</li>
             </ul>
           </div>
           <div className="project3-content-section">
             <h2>개발 과정</h2>
             <p>
               1. 기본 환경 구축<br />
               • 필요한 기술 조사 및 아키텍쳐 구성<br />
               • Nginx, React, FastAPI, Redis, Postgresql 연동 구현<br />
               • WebSocket 통신 기반 설정<br />
               • Docker 컨테이너 구성 및 연동<br />
               
               <br />
               2. 세부 기능 구현<br />
               • WebSocket 기반 실시간 채팅 시스템 개발<br />
               • Redis를 활용한 메시지 캐싱 시스템 구현<br />
               • PostgreSQL 메시지 영구 저장소 구현<br />
               • PostgreSQL 날짜별로 파티션 구현 및 유저 정보 저장 기능 개발<br />
               • 스팸 감지 및 사용자 차단 기능 개발<br />
               <br />
               3. 시스템 배포<br />
               • Docker-compose를 통한 멀티 컨테이너 구성<br />
               • GCP 환경 배포 및 서비스 실행
             </p>
           </div>
           <div className="project3-content-section">
             <h2>사용 기술</h2>
             <div className="project3-tech-details">
               <div className="project3-tech-category">
                 <h3>Backend & Infrastructure</h3>
                 <ul>
                  <li>Nginx - 웹 서버 및 리버스 프록시</li>
                  <li>React - 동적 사용자 인터페이스</li>
                  <li>WebSocket - 실시간 양방향 통신</li>
                  <li>FastAPI - 비동기 웹 프레임워크</li>
                  <li>Redis - 실시간 메시지 캐시 및 사용자 관리</li>
                  <li>PostgreSQL - 메시지 영구 저장소</li>
                  <li>Docker & Docker-compose - 컨테이너화</li>
                  <li>Google Cloud Platform - 클라우드 서버</li>
                  <li>Jenkins - Docker 이미지 자동 빌드 및 배포 자동화</li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="project3-content-section">
             <h2>느낀 점</h2>
             <p>
               이 프로젝트를 통해 실시간 통신 시스템의 설계와 구현에 대한 깊은 이해를 얻을 수 있었습니다. 
               특히 WebSocket을 활용한 실시간 양방향 통신의 구현과 Redis를 활용한 메시지 캐싱 시스템 구축 과정에서 
               많은 학습이 있었습니다. 또한 Docker를 활용한 멀티 컨테이너 환경 구성과 FastAPI의 비동기 처리를 통해 
               효율적인 실시간 서비스 아키텍처 설계의 중요성을 깊이 이해하게 되었습니다. 
               메시지 브로드캐스팅과 데이터 동기화 과정에서 발생할 수 있는 다양한 문제들을 해결하면서 
               실시간 서비스의 안정성과 확장성에 대해 고민할 수 있는 좋은 기회였습니다.
             </p>
           </div>
         </div>
       </div>
       <div className="project3-architecture-diagram">
         <img src={ArchitectureDiagram} alt="Architecture Diagram" />
       </div>
     </div>

     {/* 프로젝트 링크 */}
     <div className="project3-links">
       <a href="https://github.com/stradivirus/chat"
          className="project3-link"
          target="_blank"
          rel="noopener noreferrer">
         <Github size={16} />
         GitHub 저장소
       </a>
       <a href="http://34.64.132.7"
          className="project3-link"
          target="_blank"
          rel="noopener noreferrer">
         <Globe size={16} />
         Live Demo
       </a>
     </div>

     {/* 프로젝트 스크린샷과 동영상 섹션 */}
     <div className="project3-screenshots">
       <h2>프로젝트 데모</h2>
       <div className="screenshots-grid">
         {screenshots.map(({ id, caption, image }) => (
           <div key={id} className="screenshot-item">
             <img 
               src={image} 
               alt={caption} 
               className="screenshot-image"
               onClick={() => handleImageClick(image, caption)}
               style={{ cursor: 'pointer' }}
             />
             <p className="screenshot-caption">{caption}</p>
           </div>
         ))}
         <div className="screenshot-item">
           <video 
             className="screenshot-image"
             controls
           >
             <source src={demoVideo} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           <p className="screenshot-caption">채팅 데모 영상</p>
         </div>
       </div>
     </div>

     {/* 이미지 모달 */}
     {selectedImage && (
       <div className="image-modal-overlay" onClick={closeModal}>
         <div className="image-modal-content" onClick={e => e.stopPropagation()}>
           <button className="modal-close-button" onClick={closeModal}>
             <X size={24} />
           </button>
           <img 
             src={selectedImage.url} 
             alt={selectedImage.caption} 
             className="modal-image"
           />
           <p className="modal-caption">{selectedImage.caption}</p>
         </div>
       </div>
     )}
   </div>
 );
};

export default Project3;