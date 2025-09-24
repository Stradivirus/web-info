import React from 'react';
import { useParams } from 'react-router-dom';
import Overview from '../pages/Overview/Overview';
import Project1 from '../pages/Projects/Project1';
import Project2 from '../pages/Projects/Project2';
import Project3 from '../pages/Projects/Project3';
import Project4 from '../pages/Projects/Project4';
import Project5 from '../pages/Projects/Project5';
import Project8 from '../pages/Projects/Project8';

import Team1 from '../pages/TeamProject/TP1';
import './Main.scss';

const Main: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  
  const renderContent = () => {
    if (!id) return <Overview />;

    // 팀프로젝트는 별도 처리
    if (id === 'TP1') {
      return <Team1 />;
    }
    // 개인 프로젝트 ID에 따른 컴포넌트 렌더링
    const projectComponents: Record<string, React.ComponentType> = {
      '1': Project1,
      '2': Project2,
      '3': Project3,
      '4': Project4,
      '5': Project5,
      '8': Project8
    };
    const ProjectComponent = projectComponents[id] || Overview;
    return <ProjectComponent />;
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        {renderContent()}
      </div>
    </main>
  );
};

export default Main;