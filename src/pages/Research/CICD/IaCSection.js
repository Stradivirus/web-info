// IaCSection.js
import { useState } from 'react';
import { renderFeatureList, renderPricingSection, renderSectionLayout } from './DevOpsComponents';
import terraformData from './json/terraformData.json';
import ansibleData from './json/ansibleData.json';

const IaCSection = () => {
 const [expandedTool, setExpandedTool] = useState(null);

 const iacTools = [
   { id: 'terraform', data: terraformData.terraform },
   { id: 'ansible', data: ansibleData.ansible }
 ];

 const renderIntegrations = (integrations) => {
   if (!integrations) return null;

   return (
     <>
       <h4 className="mt-6">통합 지원</h4>
       <div className="devops-integration-section">
         <div className="devops-integration-list">
           <div className="devops-integration-item">
             <h5>CI/CD 도구</h5>
             <ul>
               {integrations.ci_cd.map((tool, idx) => (
                 <li key={idx}>{tool}</li>
               ))}
             </ul>
           </div>

           <div className="devops-integration-item">
             <h5>클라우드 제공자</h5>
             <ul>
               {integrations.cloud_providers.map((provider, idx) => (
                 <li key={idx}>{provider}</li>
               ))}
             </ul>
           </div>

           <div className="devops-integration-item">
             <h5>모니터링 도구</h5>
             <ul>
               {integrations.monitoring.map((tool, idx) => (
                 <li key={idx}>{tool}</li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     </>
   );
 };

 const renderUseCases = (useCases) => {
   if (!useCases) return null;

   return (
     <>
       <h4 className="mt-6">활용 사례</h4>
       <div className="devops-suitability-section">
         <div className="devops-suitable">
           <h5>적합한 경우</h5>
           <ul>
             {useCases.suitable.map((item, i) => (
               <li key={i}>{item}</li>
             ))}
           </ul>
         </div>
         <div className="devops-unsuitable">
           <h5>부적합한 경우</h5>
           <ul>
             {useCases.unsuitable.map((item, i) => (
               <li key={i}>{item}</li>
             ))}
           </ul>
         </div>
       </div>
     </>
   );
 };

 const renderContent = (data) => (
   <div className="devops-section-content">
     <div className="devops-content-grid">
       <div className="devops-feature-section">
         <div className="devops-feature-card">
           <h4>주요 특징</h4>
           {renderFeatureList(data.mainFeatures)}
           <h4>장점</h4>
           {renderFeatureList(data.advantages, 'advantage')}
           <h4>단점</h4>
           {renderFeatureList(data.disadvantages, 'disadvantage')}
         </div>
       </div>
       <div className="devops-info-section">
         <div className="devops-feature-card">
           {renderPricingSection(data.pricing)}
           {renderIntegrations(data.integrations)}
           {renderUseCases(data.useCases)}
         </div>
       </div>
     </div>
   </div>
 );

 return (
   <div>
     {iacTools.map(tool => renderSectionLayout(
       tool,
       expandedTool,
       setExpandedTool,
       renderContent
     ))}
   </div>
 );
};

export default IaCSection;