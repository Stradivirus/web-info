import React, { useState } from 'react';
import devToolsData from './json/DevToolsData.json';
import DevToolsSection from './DevToolsSection';
import './DevTools.css';

const DevToolsPage = () => {
  const [expandedTool, setExpandedTool] = useState(null);

  const toggleTool = (tool) => {
    setExpandedTool(expandedTool === tool ? null : tool);
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="devtools-container">
          <h2 className="devtools-page-title">Development Tools & Platforms</h2>
          
          {devToolsData.developmentTools.map((tool) => (
            <DevToolsSection
              key={tool.name.toLowerCase()}
              toolData={tool}
              isExpanded={expandedTool === tool.name.toLowerCase()}
              onToggle={() => toggleTool(tool.name.toLowerCase())}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DevToolsPage;