import React, { useState } from 'react';
import { Github, Globe, Calendar, X } from 'lucide-react';
import './Project2.css';
import ArchitectureDiagram from './Project2-Architecture.png';

const Project2 = () => {
 const [selectedImage, setSelectedImage] = useState(null);

 // 이미지 컨텍스트 생성 
 const imageContext = require.context('./Project2', false, /screenshot\d+\.png$/);

 // 스크린샷 데이터 배열을 동적으로 생성
 const screenshots = imageContext.keys().map((path, index) => {
   const id = path.match(/screenshot(\d+)\.png$/)[1];
   return {
     id,
     caption: getCaptionForId(id),
     image: imageContext(path)
   };
 }).sort((a, b) => Number(a.id) - Number(b.id)); // ID 기준으로 정렬

 // ID에 따른 캡션 반환 함수
 function getCaptionForId(id) {
   const captions = {
     '1': "메인 페이지",
     '2': "NCA 시험 페이지",
     '3': "NCA 결과 및 오답 확인 페이지", 
     '4': "리눅스 마스터 1급 시험 페이지",
     '5': "리눅스 마스터 1급 결과 페이지"
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
   <div className="project2-container">
     <div className="project-header">
       <h1 className="text-4xl font-bold mb-4">CBT 까짓것 내가 만든다</h1>
       <div className="flex items-center gap-2 text-gray-600">
         <Calendar size={16} />
         <span>2024.6 - 2024.6</span>
       </div>
     </div>

     {/* 사용 기술 태그 */}
     <div className="project2-tags">
       <span className="project2-tag">Django</span>
       <span className="project2-tag">Postgresql</span>
       <span className="project2-tag">Docker-Compose</span>
       <span className="project2-tag">GCP</span>
       <span className="project2-tag">Jenkins</span>
     </div>

     {/* 프로젝트 개요와 아키텍처 다이어그램 */}
     <div className="project2-overview-container">
       <div className="project2-details">
         <div className="project2-content-box">
           <div className="project2-content-section">
             <h2>제작 목표</h2>
             <ul className="project2-feature-list">
               <li>기존 TXT/PDF 형식의 시험 문제들을 실제 CBT(Computer Based Test) 환경으로 구현</li>
               <li>새로운 시험 유형을 쉽게 추가하고 관리할 수 있는 확장 가능한 플랫폼 구축</li>
               <li>사용자 친화적인 인터페이스를 통한 효율적인 학습 환경 제공</li>
             </ul>
           </div>
           
           <div className="project2-content-section">
             <h2>주요 기능</h2>
             <ul className="project2-feature-list">
               <li>텍스트 기반 시험 문제 데이터베이스 등록 및 관리</li>
               <li>PDF 문제 세트와 정답 데이터 연동 시스템</li>
               <li>랜덤 문제 출제 (30문제) 기능</li>
               <li>시험 점수 확인 및 오답 확인 기능</li>
             </ul>
           </div>

           <div className="project2-content-section">
             <h2>개발 과정</h2>
             <p>
               1. 기본 환경 구축<br />
               • Nginx, Django, PostgreSQL 연동 구성<br />
               • 메인 페이지 및 기본 라우팅 설정<br />
               <br />
               2. 핵심 기능 구현<br />
               • TXT 파일 기반 문제 데이터베이스 등록 시스템 개발<br />
               • PDF 문제 답안 데이터베이스 등록 및 연동<br />
               • 랜덤 문제 출제 및 채점 시스템 구현<br />
               <br />
               3. 시스템 배포<br />
               • Docker 컨테이너화 및 Docker-compose 구성<br />
               • GCP 환경 배포 및 서비스 실행
             </p>
           </div>

           <div className="project2-content-section">
             <h2>사용 기술</h2>
             <div className="project2-tech-details">
               <div className="project2-tech-category">
                 <h3>Backend & Infrastructure</h3>
                 <ul>
                   <li>Nginx - 웹 서버</li>
                   <li>Django - 웹 애플리케이션 프레임워크</li>
                   <li>PostgreSQL - 관계형 데이터베이스</li>  
                   <li>Docker & Docker-compose - 컨테이너화</li>
                   <li>Google Cloud Platform - 클라우드 서버</li>
                   <li>Jenkins - Docker 이미지 자동 빌드 및 배포 자동화</li>
                 </ul>
               </div>
             </div>
           </div>

           <div className="project2-content-section">
             <h2>개선하고 싶은 점</h2>
             <p>
               현재 PostgreSQL(Docker)에서 MongoDB Atlas로의 마이그레이션 계획<br />
               <br />
               • 데이터 관리 방식 개선<br />
               - 현재: 새로운 문제가 추가 될시 수동으로 SQL과 쉘 스크립트 기반 데이터 관리<br />
               - 개선: MongoDB를 통한 더 유연한 데이터 관리<br />
               <br />
               • 리소스 최적화<br />
               - 텍스트 기반 데이터로 용량 효율적<br />
               - MongoDB Atlas 무료 티어로 충분히 운영 가능<br />
             </p>
           </div>

           <div className="project2-content-section">
             <h2>느낀 점</h2>
             <p>
               이 프로젝트를 통해 Django와 PostgreSQL을 활용한 웹 애플리케이션 개발의 전반적인 과정을 경험할 수 있었습니다. 
               특히 Docker를 활용한 컨테이너화 과정에서 개발 환경과 배포 환경의 일관성 유지의 중요성을 배웠습니다. 
               또한, 기존 학습 자료를 디지털화하는 과정에서 데이터 구조화의 중요성과 
               사용자 편의성을 고려한 기능 설계의 가치를 깊이 이해하게 되었습니다.
             </p>
           </div>
         </div>
       </div>
       
       <div className="project2-architecture-diagram">
         <img src={ArchitectureDiagram} alt="Architecture Diagram" />
       </div>
     </div>

     {/* 프로젝트 링크 */}
     <div className="project2-links">
       <a href="https://github.com/stradivirus/exam"
          className="project2-link"
          target="_blank"
          rel="noopener noreferrer">
         <Github size={16} />
         GitHub 저장소
       </a>
       <a href="http://34.64.132.7:8001/"
          className="project2-link"
          target="_blank"
          rel="noopener noreferrer">
         <Globe size={16} />
         Live Demo
       </a>
     </div>

     {/* 프로젝트 스크린샷 섹션 */}
     <div className="project2-screenshots">
       <h2>프로젝트 스크린샷</h2>
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

export default Project2;