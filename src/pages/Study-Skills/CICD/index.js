import React from 'react';
import CiSection from './CiSection';
import CdSection from './CdSection';
import IaCSection from './IaCSection';
import './CiSection.css';
import './CdSection.css';
import './IaCSection.css';

const IndexPage = () => {
  return (
    <main className="main-content">
      <div className="main-inner">
        {/* CI Container */}
        <div className="database-container">
          <h2 className="ci-page-title">
            CI(Continuous Integration) 도구
            <p className="text-lg font-normal text-gray-600 mt-2">
              지속적 통합을 위한 자동화 도구들을 비교해보세요
            </p>
          </h2>
          <div className="mt-6">
            <CiSection />
          </div>
        </div>

        {/* CD Container */}
        <div className="database-container mt-8">
          <h2 className="cd-page-title">
            CD(Continuous Deployment/Delivery) 도구
            <p className="text-lg font-normal text-gray-600 mt-2">
              지속적 배포/제공을 위한 자동화 도구들을 비교해보세요
            </p>
          </h2>
          <div className="mt-6">
            <CdSection />
          </div>
        </div>

        {/* IaC Container */}
        <div className="database-container mt-8">
          <h2 className="iac-page-title">
            IaC(Infrastructure as Code) 도구
            <p className="text-lg font-normal text-gray-600 mt-2">
              인프라스트럭처를 코드로 관리하기 위한 도구들을 비교해보세요
            </p>
          </h2>
          <div className="mt-6">
            <IaCSection />
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-600 mb-8">
          <p className="text-lg">DevOps 도구들의 특징을 쉽게 비교하고 선택하세요</p>
        </footer>
      </div>
    </main>
  );
};

export default IndexPage;