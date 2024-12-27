import React, { useState } from 'react';
import './AwsAnalytics.css';

const FeatureList = ({ features }) => {
  if (!features) return null;

  return (
    <ul className="aws-item-list">
      {features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  );
};

const ServiceSection = ({ data }) => {
  const renderRedshiftSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-analytics-node-types">
          <h4 className="section-title">노드 타입</h4>
          {data.components.nodeTypes?.map((node, index) => (
            <div key={index} className="aws-analytics-node-item">
              <h5 className="aws-item-subtitle">{node.name}</h5>
              <p className="aws-description">{node.description}</p>
              <FeatureList features={node.features} />
            </div>
          ))}
        </div>
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-features">
          <h4 className="section-title">추가 기능</h4>
          {Object.entries(data.components.features).map(([key, value]) => (
            <div key={key} className="aws-analytics-feature-item">
              <h5 className="aws-item-subtitle">{value.name}</h5>
              <FeatureList features={value.details} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAthenaSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">지원 데이터 형식</h4>
          <FeatureList features={data.capabilities.dataFormats} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">통합 서비스</h4>
          <FeatureList features={data.capabilities.integrations} />
        </div>
      </div>
      <div className="aws-analytics-right-column">
        {Object.entries(data.capabilities.features).map(([key, value]) => (
          <div key={key} className="aws-analytics-feature-item">
            <h4 className="aws-item-title">{value.description}</h4>
            <FeatureList features={key === 'federation' ? value.sources : value.features} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderGlueSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">{data.components.dataCatalog.description}</h4>
          <FeatureList features={data.components.dataCatalog.features} />
        </div>
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">{data.components.crawlers.description}</h4>
          <FeatureList features={data.components.crawlers.sources} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">{data.components.studio.description}</h4>
          <FeatureList features={data.components.studio.features} />
        </div>
      </div>
    </div>
  );

  const renderKinesisSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        {data.services.map((service, index) => (
          <div key={index} className="aws-analytics-feature-item">
            <h4 className="aws-item-title">{service.name}</h4>
            <FeatureList features={service.features} />
            {service.scaling && (
              <div className="feature-group">
                <h5 className="aws-item-subtitle">{service.scaling.description}</h5>
                <FeatureList features={service.scaling.features} />
              </div>
            )}
            {service.advantages && (
              <>
                <h5 className="aws-item-subtitle">성능</h5>
                <FeatureList features={service.advantages.performance} />
                <h5 className="aws-item-subtitle">안정성</h5>
                <FeatureList features={service.advantages.reliability} />
              </>
            )}
            {service.destinations && (
              <div className="feature-group">
                <h5 className="aws-item-subtitle">지원 대상</h5>
                <FeatureList features={service.destinations} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">활용 사례</h4>
          {data.useCases.map((useCase, index) => (
            <div key={index} className="feature-group">
              <h5 className="aws-item-subtitle">{useCase.name}</h5>
              <p className="aws-description">{useCase.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEMRSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">지원 프레임워크</h4>
          <FeatureList features={data.frameworks} />
        </div>
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">처리 기능</h4>
          <FeatureList features={data.capabilities.processing} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">관리 기능</h4>
          <FeatureList features={data.capabilities.management.features} />
        </div>
      </div>
    </div>
  );

  const renderQuickSightSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">데이터 소스</h4>
          <FeatureList features={data.capabilities.dataSources} />
        </div>
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">분석 기능</h4>
          <FeatureList features={data.capabilities.analysis.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">공유 기능</h4>
          <FeatureList features={data.capabilities.sharing.features} />
        </div>
      </div>
    </div>
  );

  const renderLakeFormationSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">보안</h4>
          <FeatureList features={data.capabilities.security.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">관리</h4>
          <FeatureList features={data.capabilities.management.features} />
        </div>
      </div>
    </div>
  );

  const renderConfigSection = () => (
    <div className="aws-analytics-grid">
      <div className="aws-analytics-left-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">추적</h4>
          <FeatureList features={data.capabilities.tracking.features} />
        </div>
      </div>
      <div className="aws-analytics-right-column">
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">규정 준수</h4>
          <FeatureList features={data.capabilities.compliance.features} />
        </div>
        <div className="aws-analytics-feature-item">
          <h4 className="aws-item-title">보안</h4>
          <FeatureList features={data.capabilities.security.features} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="aws-content">
      <p className="aws-main-description">{data.description}</p>
      {(() => {
        if (data.title.includes('Redshift')) return renderRedshiftSection();
        if (data.title.includes('Athena')) return renderAthenaSection();
        if (data.title.includes('Glue')) return renderGlueSection();
        if (data.title.includes('Kinesis')) return renderKinesisSection();
        if (data.title.includes('EMR')) return renderEMRSection();
        if (data.title.includes('QuickSight')) return renderQuickSightSection();
        if (data.title.includes('Lake Formation')) return renderLakeFormationSection();
        if (data.title.includes('Config')) return renderConfigSection();
        return null;
      })()}
    </div>
  );
};

const AWSAnalytics = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeService = data.services[activeTabIndex];

  return (
    <div className="aws-computing">
      <div className="aws-tabs">
        {data.services.map((service, index) => (
          <button
            key={index}
            className={`aws-tab-button ${activeTabIndex === index ? 'active' : ''}`}
            onClick={() => setActiveTabIndex(index)}
          >
            {service.title.includes('Redshift') ? 'Redshift' :
             service.title.includes('Athena') ? 'Athena' :
             service.title.includes('Glue') ? 'Glue' :
             service.title.includes('Kinesis') ? 'Kinesis' :
             service.title.includes('EMR') ? 'EMR' :
             service.title.includes('QuickSight') ? 'QuickSight' :
             service.title.includes('Lake Formation') ? 'Lake Formation' :
             service.title.includes('Config') ? 'Config' :
             service.title}
          </button>
        ))}
      </div>
      <ServiceSection data={activeService} />
    </div>
  );
};

export default AWSAnalytics;