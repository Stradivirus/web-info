import React from 'react';
import { useNavigate } from 'react-router-dom';

// 프로젝트 데이터 import
import { projectData as project1Data } from '../Projects/Project1/data';
import { projectData as project3Data } from '../Projects/Project3/data';
import { projectData as project4Data } from '../Projects/Project4/data';
import { projectData as project5Data } from '../Projects/Project5/data';
import { projectData as project8Data } from '../Projects/Project8/data';
import { projectData as TP2Data } from '../TeamProject/TP2/data';

// 다이어그램 이미지 import - Oracle Storage 사용
import { getDiagramImage } from '../../config/storage';

const diagram1 = getDiagramImage('Diagram1.png');
const diagram3 = getDiagramImage('Diagram3.png');
const diagram4 = getDiagramImage('Diagram4.png');
const diagram5 = getDiagramImage('Diagram5.png');
const diagram8 = getDiagramImage('Diagram8.png');
const diagramTP2 = getDiagramImage('TeamProject2.png');

type ProjectType = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  isTeam?: boolean;
  isInfra?: boolean;
};

const projects: ProjectType[] = [
  {
    id: 'TP2',
    title: TP2Data.title,
    description: TP2Data.overview.description,
    image: diagramTP2,
    tags: TP2Data.techStack,
    isTeam: true
  },
  {
    id: 8,
    title: project8Data.title,
    description: project8Data.overview.description,
    image: diagram8,
    tags: project8Data.techStack,
    isInfra: true
  },
  {
    id: 4,
    title: project4Data.title,
    description: project4Data.overview.description,
    image: diagram4,
    tags: project4Data.techStack
  },
  {
    id: 3,
    title: project3Data.title,
    description: project3Data.overview.description,
    image: diagram3,
    tags: project3Data.techStack
  },
  {
    id: 5,
    title: project5Data.title,
    description: project5Data.overview.description,
    image: diagram5,
    tags: project5Data.techStack
  },  
  {
    id: 1,
    title: project1Data.title,
    description: project1Data.overview.description,
    image: diagram1,
    tags: project1Data.techStack
  },
];

const Overview: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string | number) => {
    navigate(`/project/${projectId}`);
  };

  const getCardBorderClass = (project: ProjectType) => {
    if (project.isTeam) return 'border-[3px] border-[#6AFFA8]';
    if (project.isInfra) return 'border-[3px] border-[#FFA500]';
    return 'border border-gray-200';
  };

  return (
    <div className="flex gap-5 items-start mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-[26px] mx-auto w-full">
        {projects.map((project, idx) => (
          <div 
            key={project.id}
            className={`bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-5 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[400px] text-center ${getCardBorderClass(project)}`}
            onClick={() => handleProjectClick(project.id)}
          >
            <div className="flex flex-col items-center justify-center w-full mb-5">
              <h3 className="text-[26px] font-semibold text-[#1a1a1a] mb-3 text-center">{project.title}</h3>
              <p className="text-gray-600 leading-normal text-center">{project.description}</p>
              <img 
                src={project.image} 
                alt={`${project.title} 아키텍처`} 
                className={`mx-auto my-[15px] rounded-lg object-contain block ${
                  idx === 2 ? 'w-[95%] h-[200px] scale-110' : 'w-[80%] h-[180px]'
                }`}
              />
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center w-full">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-600 px-2 py-1 md:px-3 md:py-1.5 rounded-2xl text-[11px] md:text-[13px] font-medium transition-all duration-200 text-center hover:bg-blue-600 hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;