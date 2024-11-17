import React, { useState } from 'react';
import { Github, Globe, Calendar, X } from 'lucide-react';
import './Project4.css';
import ArchitectureDiagram from './Project4-Architecture.png';
import festival1 from './Project4/festival1.png';
import festival2 from './Project4/festival2.png';
import festival3 from './Project4/festival3.png';
import festival4 from './Project4/festival4.png';
import festival5 from './Project4/festival5.png';
import festival6 from './Project4/festival6.png';
import festival7 from './Project4/festival7.png';

const Project4 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    { id: '1', caption: "사전 예약 메인 페이지", image: festival1 },
    { id: '2', caption: "사전 예약 완료", image: festival2 },
    { id: '3', caption: "추첨권 발급 페이지", image: festival3 },
    { id: '4', caption: "추첨권 사용 페이지", image: festival4 },
    { id: '5', caption: "추첨권만 있는 경우 직접 입력 페이지", image: festival5 },
    { id: '6', caption: "어드민 페이지(Django)", image: festival6 },
    { id: '7', caption: "슬렉 알림", image: festival7 }
  ];

  // 모달 닫기 함수
  const closeModal = () => {
    setSelectedImage(null);
  };

  // 이미지 클릭 핸들러
  const handleImageClick = (caption, image) => {
    setSelectedImage({ caption, image });
  };

  return (
    <div className="project4-container">
      <div className="project-header">
        <h1 className="text-4xl font-bold mb-4">사전 예약 시스템 구성</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={16} />
          <span>2024.9 - 2024.9</span>
        </div>
      </div>

      {/* 사용 기술 태그 */}
      <div className="project4-tags">
        <span className="project4-tag">React</span>
        <span className="project4-tag">Nodejs</span>
        <span className="project4-tag">Django</span>
        <span className="project4-tag">Postgresql</span>
        <span className="project4-tag">Docker-Compose</span>
        <span className="project4-tag">GCP</span>
        <span className="project4-tag">Jenkins</span>
        <span className="project4-tag">Nginx</span>
      </div>

      {/* 프로젝트 개요와 아키텍처 다이어그램 */}
      <div className="project4-overview-container">
        <div className="project4-details">
          <div className="project4-content-box">
            <div className="project4-content-section">
              <h2>제작 목표</h2>
              <ul className="project4-feature-list">
                <li>축제에 참가할 사람들 수요 예측</li>
                <li>신청한 사람들에게 쿠폰 코드 발급</li>
                <li>어드민 페이지를 통한 데이터 조회 및 관리 확인</li>
              </ul>
            </div>
            <div className="project4-content-section">
              <h2>주요 기능</h2>
              <ul className="project4-feature-list">
                <li>사람들로부터 이메일과 전화번호 수집 (Node.js)</li>
                <li>등록 확인과 쿠폰 번호 발급 (Node.js)</li>
                <li>쿠폰 사용 확인 (Node.js)</li>
                <li>슬렉 웹훅 연동으로 10명마다 슬렉 알림 (Node.js)</li>
                <li>어드민 페이지에서 등록자 데이터 조회 및 관리 (Django)</li>
                <li>간단한 통계 - 총 등록자 수, 일별 등록자 수 (Django)</li>
              </ul>
            </div>
            <div className="project4-content-section">
              <h2>개발 과정</h2>
              <p>
                1. 기본 환경 구축<br />
                • Nginx를 통한 프록시 서버 구성<br />
                • React(프론트엔드) - Node.js(API 서버) - Postgresql - Django(admin) 연동<br />
                • PostgreSQL 데이터베이스 공유 구성<br />
                • Docker compose 멀티 컨테이너 환경 구성<br />
                <br />
                2. 핵심 기능 구현<br />
                • Node.js 백엔드:<br />
                  - 사전 예약 API 개발<br />
                  - 쿠폰 발급 및 검증 시스템 구현<br />
                  - 슬랙 웹훅 알림 시스템 구현<br />
                • Django 어드민:<br />
                  - 커스텀 어드민 페이지 개발<br />
                  - 데이터 조회 기능 구현<br />
                <br />
                3. 시스템 배포<br />
                • Docker 컨테이너화 및 서비스 구성<br />
                • Jenkins를 통한 자동화된 배포 파이프라인 구축<br />
                • GCP 환경에서의 시스템 배포 및 모니터링 설정
              </p>
            </div>
            <div className="project4-content-section">
              <h2>기술 스택</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                  <div className="project4-tech-category mb-6">
                    <h3 className="text-xl font-bold mb-2">Frontend</h3>
                    <ul className="list-disc pl-5">
                      <li>React - 사용자 인터페이스 구축</li>
                      <li>Tailwind CSS - 스타일링</li>
                    </ul>
                  </div>
                  <div className="project4-tech-category">
                    <h3 className="text-xl font-bold mb-2">Main Backend (Node.js)</h3>
                    <ul className="list-disc pl-5">
                      <li>Express.js - REST API 개발</li>
                      <li>Node-Postgres - DB 연동</li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="project4-tech-category mb-6">
                    <h3 className="text-xl font-bold mb-2">Admin Backend (Django)</h3>
                    <ul className="list-disc pl-5">
                      <li>Django Admin - 데이터 조회 인터페이스</li>
                      <li>Django ORM - DB 읽기 전용 연동</li>
                    </ul>
                  </div>
                  <div className="project4-tech-category">
                    <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
                    <ul className="list-disc pl-5">
                      <li>Nginx - 리버스 프록시</li>
                      <li>PostgreSQL - 데이터베이스</li>
                      <li>Docker & Docker-compose - 컨테이너화</li>
                      <li>Jenkins - CI/CD</li>
                      <li>GCP - 클라우드 호스팅</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="project4-content-section">
              <h2>문제점 및 해결 과정</h2>
              <ul className="project4-feature-list">
                <li>
                  <strong>보안 이슈:</strong> 슬랙 웹훅 URL 노출로 인해 웹훅 서비스 종료
                  <br />• 해결: Jenkins Credentials와 환경 변수를 통한 민감 정보 관리
                </li>
                <li>
                  <strong>성능 이슈:</strong> Django 어드민에서 대량 데이터 조회 시 속도 저하
                  <br />• 해결: 페이지네이션 구현 및 DB 인덱스 최적화
                </li>
                <li>
                  <strong>이미지 처리 최적화:</strong> 이미지 리사이징 및 전환 과정에서 입력값 초기화
                  <br />• 해결: 컴포넌트 분리를 통해 해결
                </li>
              </ul>
            </div>
            <div className="project4-content-section">
              <h2>느낀 점</h2>
              <p>
                이 프로젝트를 통해 하나의 데이터베이스를 두 개의 서버가 다른 목적으로 활용하는 구조를 경험했습니다.
                Node.js는 데이터 저장과 API 처리를, Django는 Admin 페이지를 통한 데이터 조회만을 담당하게 하여
                각 프레임워크의 장점을 살릴 수 있었습니다. Node.js의 경우 빠른 API 개발과 유연한 기능 구현이 가능했고,
                Django는 별도의 관리자 페이지 개발 없이도 데이터를 효과적으로 조회하고 관리할 수 있었습니다.
                또한 Docker를 활용한 컨테이너화 덕분에 두 서버의 배포와 관리가 수월했으며,
                Jenkins를 통한 CI/CD 파이프라인 구축으로 개발과 배포 과정을 효율적으로 자동화할 수 있었습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="project4-architecture-diagram">
          <img src={ArchitectureDiagram} alt="Architecture Diagram" />
        </div>
      </div>

      {/* 프로젝트 링크 */}
      <div className="project4-links">
        <a href="https://github.com/stradivirus/reservation"
           className="project4-link"
           target="_blank"
           rel="noopener noreferrer">
          <Github size={16} />
          GitHub 저장소
        </a>
        <a href="http://34.64.132.7:8080/"
           className="project4-link"
           target="_blank"
           rel="noopener noreferrer">
          <Globe size={16} />
          Live Demo
        </a>
      </div>

      {/* 프로젝트 스크린샷 섹션 */}
      <div className="project4-screenshots">
        <h2>프로젝트 스크린샷</h2>
        <div className="screenshots-grid">
          {screenshots.map(({ id, caption, image }) => (
            <div key={id} className="screenshot-item">
              <div 
                className="screenshot-image-placeholder"
                onClick={() => handleImageClick(caption, image)}
                style={{ cursor: 'pointer' }}
              >
                {image ? (
                  <img src={image} alt={caption} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex items-center justify-center h-[200px] bg-gray-100">
                    이미지 준비 중
                  </div>
                )}
              </div>
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
            {selectedImage.image ? (
              <img 
                src={selectedImage.image} 
                alt={selectedImage.caption}
                className="modal-image"
              />
            ) : (
              <div className="modal-image-placeholder">
                이미지 준비 중
              </div>
            )}
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project4;