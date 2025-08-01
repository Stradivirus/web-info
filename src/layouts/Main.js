import React from 'react';
import { useParams } from 'react-router-dom';
import Overview from '../pages/Overview/Overview';
import Project1 from '../pages/Projects/Project1';
import Project2 from '../pages/Projects/Project2';
import Project3 from '../pages/Projects/Project3';
import Project4 from '../pages/Projects/Project4';
import Project5 from '../pages/Projects/Project5';
import Project6 from '../pages/Projects/Project6';
import Project7 from '../pages/Projects/Project7';
import Team1 from '../pages/TeamProject/TP1';
import './Main.css';

const Main = () => {
  const { id } = useParams();
  
  const renderContent = () => {
    if (!id) return <Overview />;

    // 팀프로젝트는 별도 처리
    if (id === 'TP1') {
      return <Team1 />;
    }
    // 개인 프로젝트 ID에 따른 컴포넌트 렌더링
    const projectComponents = {
      '1': Project1,
      '2': Project2,
      '3': Project3,
      '4': Project4,
      '5': Project5,
      '6': Project6,
      '7': Project7
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