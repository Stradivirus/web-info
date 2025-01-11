import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MonitoringTools from './monitoring-tools';
import MonitoringGuide from './monitoring-guide';
import './monitoring.css';

const Index = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeTab, setActiveTab] = useState('tools'); // 'tools' or 'guide'

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const tools = [
    {
      id: 'prometheus',
      name: 'Prometheus + Grafana',
      description: '오픈소스 시계열 데이터베이스 및 모니터링 시스템'
    },
    {
      id: 'elk',
      name: 'ELK Stack',
      description: '통합 로그 관리 및 분석 플랫폼'
    },
    {
      id: 'datadog',
      name: 'Datadog',
      description: '클라우드 기반 통합 모니터링 플랫폼'
    },
    {
      id: 'splunk',
      name: 'Splunk',
      description: '엔터프라이즈급 데이터 분석 및 SIEM 플랫폼'
    },
    {
      id: 'nagios',
      name: 'Nagios',
      description: '전통적인 IT 인프라 모니터링 도구'
    }
  ];

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="monitoring-info">
          <h2 className="monitoring-page-title">모니터링 도구 비교</h2>
          
          {/* 탭 메뉴 */}
          <div className="monitoring-tabs">
            <button 
              className={`monitoring-tab ${activeTab === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveTab('tools')}
            >
              모니터링 도구
            </button>
            <button 
              className={`monitoring-tab ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => setActiveTab('guide')}
            >
              선택 가이드
            </button>
          </div>

          {/* 도구 목록 */}
          {activeTab === 'tools' && (
            <div className="monitoring-sections">
              {tools.map((tool) => (
                <div key={tool.id} className="monitoring-section">
                  <button 
                    className={`monitoring-section-button ${expandedSection === tool.id ? 'expanded' : ''}`}
                    onClick={() => toggleSection(tool.id)}
                  >
                    <div className="monitoring-button-content">
                      <div className="monitoring-button-left">
                        <h3>{tool.name}</h3>
                        <p className="monitoring-subtitle">{tool.description}</p>
                      </div>
                      {expandedSection === tool.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  {expandedSection === tool.id && <MonitoringTools toolId={tool.id} />}
                </div>
              ))}
            </div>
          )}

          {/* 선택 가이드 */}
          {activeTab === 'guide' && (
            <div className="monitoring-guide-container">
              <MonitoringGuide />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Index;