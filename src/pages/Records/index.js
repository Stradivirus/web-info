// src/components/study/index.js
import React, { useState, useEffect } from 'react';
import { Calendar, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';
import { StudyContent as CICDContent } from './CICD';
import { StudyContent as RefactoringContent } from './Refactoring';
import { StudyContent as AutoCleanupContent } from './AutoCleanup';
import { StudyContent as TerraformContent } from './Terraform';
import { StudyContent as LoadBalancingContent } from './LoadBalancing';
import { StudyContent as MSAContent } from './BackendMSA';
import { StudyContent as DockerComposeContent } from './DockerCompose';
import { StudyContent as CrawlingContent } from './Crawling';
import { StudyContent as CloudPostgresConfigContent } from './CloudPostgresConfig';

// 이미지 모달 컴포넌트
const ImageModal = ({ isOpen, onClose, images, currentIndex, setCurrentIndex }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch(e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'ArrowRight':
          setCurrentIndex(prev => (prev < images.length - 1 ? prev + 1 : prev));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose, setCurrentIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full mx-4">
        <img 
          src={images[currentIndex]} 
          alt="확대된 이미지" 
          className="w-full h-auto"
          onClick={(e) => e.stopPropagation()}
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

const StudyAccordion = ({ title, date, category, isOpen, onToggle, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  const registerImages = (imageArray) => {
    setImages(imageArray);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        onImageClick: handleImageClick,
        registerImages: registerImages
      });
    }
    return child;
  });

  return (
    <div className="bg-slate-50 rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
      <button
        className="w-full p-6 text-left border-b border-gray-200 focus:outline-none"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            <div className="flex gap-4 mt-2 text-gray-600">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                {category}
              </span>
            </div>
          </div>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="p-6">
          {childrenWithProps}
        </div>
      )}

      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        setCurrentIndex={setCurrentImageIndex}
      />
    </div>
  );
};

const Records = () => {
  const [openRecords, setOpenRecords] = useState({
    dockercompose: false,
    msa: false,
    loadBalancing: false,
    cicd: false,
    refactoring: false,
    autoCleanup: false,
    terraform: false,
    crawling: false,
    cloudPostgresConfig: false // 추가
  });

  const toggleRecord = (id) => {
    setOpenRecords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">Study Records</h1>
          
          <div className="space-y-4">
            <StudyAccordion
              title="오라클 클라우드 PostgreSQL 분리 및 운영 설정"
              date="2025.07.16"
              category="DevOps"
              isOpen={openRecords.cloudPostgresConfig}
              onToggle={() => toggleRecord('cloudPostgresConfig')}
            >
              <CloudPostgresConfigContent />
            </StudyAccordion>

            <StudyAccordion
              title="오라클 클라우드 기반 네이버 날씨/뉴스 크롤링 자동화"
              date="2025.05.22"
              category="Crawling"
              isOpen={openRecords.crawling}
              onToggle={() => toggleRecord('crawling')}
            >
              <CrawlingContent />
            </StudyAccordion>
            
            <StudyAccordion
              title="Docker Compose 분리를 통한 서비스 배포 최적화"
              date="2025.01.19"
              category="DevOps"
              isOpen={openRecords.dockercompose}
              onToggle={() => toggleRecord('dockercompose')}
            >
              <DockerComposeContent />
            </StudyAccordion>

            <StudyAccordion
              title="모놀리식 백엔드의 MSA 전환"
              date="2025.01.15"
              category="Backend"
              isOpen={openRecords.msa}
              onToggle={() => toggleRecord('msa')}
            >
              <MSAContent />
            </StudyAccordion>

            <StudyAccordion
              title="Nginx를 활용한 프론트엔드 로드밸런싱 구현"
              date="2025.01.12"
              category="DevOps"
              isOpen={openRecords.loadBalancing}
              onToggle={() => toggleRecord('loadBalancing')}
            >
              <LoadBalancingContent />
            </StudyAccordion>

            <StudyAccordion
              title="Jenkins를 활용한 System Auto-Cleanup 파이프라인 구축"
              date="2025.01.10"
              category="DevOps"
              isOpen={openRecords.autoCleanup}
              onToggle={() => toggleRecord('autoCleanup')}
            >
              <AutoCleanupContent />
            </StudyAccordion>

            <StudyAccordion
              title="쿠버네티스 Jenkins ArgoCD CICD 구축 영상"
              date="2025.01.08"
              category="DevOps"
              isOpen={openRecords.cicd}
              onToggle={() => toggleRecord('cicd')}
            >
              <CICDContent />
            </StudyAccordion>

            <StudyAccordion
              title="테라폼으로 AWS 인프라 구축하기"
              date="2025.01.05"
              category="DevOps"
              isOpen={openRecords.terraform}
              onToggle={() => toggleRecord('terraform')}
            >
              <TerraformContent />
            </StudyAccordion>


            <StudyAccordion
              date="2024.11.20"
              title="리액트 프로젝트 컴포넌트 리팩토링"
              category="Frontend"
              isOpen={openRecords.refactoring}
              onToggle={() => toggleRecord('refactoring')}
            >
              <RefactoringContent />
            </StudyAccordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Records;