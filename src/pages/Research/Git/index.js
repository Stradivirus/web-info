import React, { useState } from 'react';
import gitOverview from './json/git-overview.json';
import gitCommands from './json/git-commands.json';
import gitWorkflow from './json/git-workflow.json';
import gitVersion from './json/git-version.json';
import gitAutomation from './json/git-automation.json';
import GitSection from './GitSection';
import './GitBase.css';
import './GitContent.css';

const GitPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // 개요와 명령어를 합친 데이터 생성
  const overviewData = {
    ...gitOverview,
    basicCommands: gitCommands.basicCommands,
    advancedCommands: gitCommands.advancedCommands
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="git-container">
          <h2 className="git-page-title">Git Guide</h2>
          
          <GitSection 
            title="Git 개요"
            data={overviewData}
            isExpanded={expandedSection === 'overview'}
            onToggle={() => toggleSection('overview')}
          />

          <GitSection 
            title="Git 워크플로우"
            data={gitWorkflow}
            isExpanded={expandedSection === 'workflow'}
            onToggle={() => toggleSection('workflow')}
          />

          <GitSection 
            title="버전 관리"
            data={gitVersion}
            isExpanded={expandedSection === 'version'}
            onToggle={() => toggleSection('version')}
          />

          <GitSection 
            title="Git 자동화"
            data={gitAutomation}
            isExpanded={expandedSection === 'automation'}
            onToggle={() => toggleSection('automation')}
          />
        </div>
      </div>
    </main>
  );
};

export default GitPage;