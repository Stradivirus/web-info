import React, { useState } from 'react';
import pythonData from './json/pythonData.json';
import goData from './json/goData.json';
import javascriptData from './json/javascriptData.json';
import typescriptData from './json/typescriptData.json';
import LanguageSection from './LanguageSection';
import './Programming.css';

const ProgrammingPage = () => {
  const [expandedLanguage, setExpandedLanguage] = useState(null);

  const toggleLanguage = (language) => {
    setExpandedLanguage(expandedLanguage === language ? null : language);
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="programming-container">
          <h2 className="page-title">Programming Languages</h2>
          
          <LanguageSection 
            language="Python"
            data={pythonData}
            isExpanded={expandedLanguage === 'python'}
            onToggle={() => toggleLanguage('python')}
          />

          <LanguageSection 
            language="JavaScript"
            data={javascriptData}
            isExpanded={expandedLanguage === 'javascript'}
            onToggle={() => toggleLanguage('javascript')}
          />

          <LanguageSection 
            language="Go"
            data={goData}
            isExpanded={expandedLanguage === 'go'}
            onToggle={() => toggleLanguage('go')}
          />

          <LanguageSection 
            language="TypeScript"
            data={typescriptData}
            isExpanded={expandedLanguage === 'typescript'}
            onToggle={() => toggleLanguage('typescript')}
          />
        </div>
      </div>
    </main>
  );
};

export default ProgrammingPage;