import React, { useState } from 'react';
import { Calendar, GitBranch, ChevronDown, ChevronUp } from 'lucide-react';
import cicdVideo from '../../assets/videos/study/cicd.mp4';

const StudyAccordion = ({ title, date, category, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
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
          {children}
        </div>
      )}
    </div>
  );
};

const Records = () => {
  const [openRecords, setOpenRecords] = useState({
    cicd: false,
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
          <h1 className="text-3xl font-bold mb-6">Study Records</h1>
          
          <StudyAccordion
            title="쿠버네티스 Jenkins ArgoCD CICD 구축기"
            date="2024.01.08"
            category="DevOps"
            isOpen={openRecords.cicd}
            onToggle={() => toggleRecord('cicd')}
          >
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-medium mb-3">구현 환경</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>쿠버네티스 클러스터</li>
                  <li>Jenkins</li>
                  <li>ArgoCD</li>
                  <li>Git Repository</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-medium mb-3">구현 내용</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-medium mb-2">애플리케이션 변경사항</h4>
                    <p>- 메시지 전송 버튼의 텍스트를 'send'에서 '전송'으로 변경</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">인프라 변경사항</h4>
                    <p>- 쿠버네티스 Pod 수를 8개에서 7개로 조정</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">CI/CD 파이프라인</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-blue-600">Jenkins (CI)</p>
                        <p className="pl-4">- 'yaml' 폴더를 제외한 Git Repository의 변경사항 감지</p>
                        <p className="pl-4">- 변경 감지 시 자동으로 Docker 이미지 빌드</p>
                        <p className="pl-4">- 빌드된 이미지를 Docker Hub에 자동 업로드</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-600">ArgoCD (CD)</p>
                        <p className="pl-4">- Git Repository의 'yaml' 폴더와 Docker Hub 모니터링</p>
                        <p className="pl-4">- 변경사항 감지 시 Canary 배포 전략 적용</p>
                        <p className="pl-4">- Pod를 2개씩 순차적으로 업데이트하여 안전한 배포 진행</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-medium mb-3">실습 영상</h3>
                <div className="bg-black rounded-lg overflow-hidden">
                  <video
                    src={cicdVideo}
                    controls
                    className="w-full max-h-[600px] object-contain"
                  >
                    브라우저가 비디오 재생을 지원하지 않습니다.
                  </video>
                </div>
                <p className="mt-4 text-gray-600 bg-gray-50 p-4 rounded-lg">
                  Jenkins와 ArgoCD를 활용한 CICD 파이프라인 구축 실습 과정입니다.
                  실제 환경에서 진행한 데모를 담고 있습니다.
                </p>
              </section>
            </div>
          </StudyAccordion>
        </div>
      </div>
    </main>
  );
};

export default Records;