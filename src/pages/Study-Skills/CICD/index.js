import React from 'react';
import CiSection from './CiSection';
import CdSection from './CdSection';
import IaCSection from './IaCSection';
import './index.css';
import './CiSection.css';
import './CdSection.css';
import './IaCSection.css';

const IndexPage = () => {
  return (
    <main className="main-content">
      <div className="main-inner">
        {/* CI Container */}
        <div className="database-container">
          <h2 className="devops-page-title">
            CI(Continuous Integration) 도구           
          </h2>
          <div className="mt-6">
            <CiSection />
          </div>
        </div>

        {/* CD Container */}
        <div className="database-container mt-8">
          <h2 className="devops-page-title">
            CD(Continuous Deployment/Delivery) 도구
          </h2>
          <div className="mt-6">
            <CdSection />
          </div>
        </div>

        {/* IaC Container */}
        <div className="database-container mt-8">
          <h2 className="devops-page-title">
            IaC(Infrastructure as Code) 도구
          </h2>
          <div className="mt-6">
            <IaCSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;