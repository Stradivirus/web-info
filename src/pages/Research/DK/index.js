import React, { useState } from 'react';
import ContainerSection from './ContainerSection';
import dockerData from './json/dockerData.json';
import kubernetesData from './json/KubernetesData.json';
import './Container.css';

const ContainerPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="container-info">
          <h2 className="container-page-title">Container Technologies</h2>
          
          <ContainerSection 
            name="Docker"
            subtitle="컨테이너 가상화 플랫폼"
            data={dockerData}
            isExpanded={expandedSection === 'docker'}
            onToggle={() => toggleSection('docker')}
          />

          <ContainerSection 
            name="Kubernetes"
            subtitle="컨테이너 오케스트레이션 플랫폼"
            data={kubernetesData}
            isExpanded={expandedSection === 'kubernetes'}
            onToggle={() => toggleSection('kubernetes')}
          />
        </div>
      </div>
    </main>
  );
};

export default ContainerPage;