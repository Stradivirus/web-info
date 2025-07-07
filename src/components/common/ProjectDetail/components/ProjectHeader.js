import React from 'react';
import { Calendar } from 'lucide-react';

const ProjectHeader = ({ title, description, period }) => {
  return (
    <div className="project-header">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex items-center gap-2 text-gray-600 mb-3">
        <Calendar size={16} />
        <span>{period}</span>
      </div>
    </div>
  );
};

export default ProjectHeader;
