import React, { useState } from 'react';
import './AwsDatabase.css';

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
  const renderAuroraSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">에디션</h4>
          {data.editions?.map((edition, index) => (
            <div key={index} className="aws-db-edition-item">
              <h5 className="aws-item-subtitle">{edition.name}</h5>
              <div className="feature-group">
                <h6 className="aws-item-subtitle">특징</h6>
                <FeatureList features={edition.features} />
                <h6 className="aws-item-subtitle">활용 사례</h6>
                <FeatureList features={edition.useCases} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">안정성</h4>
          <FeatureList features={data.reliability} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">보안</h4>
          <FeatureList features={data.security} />
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">성능</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">성능 특징</h5>
            <FeatureList features={data.performance.features} />
            <h5 className="aws-item-subtitle">모니터링</h5>
            <FeatureList features={data.performance.monitoring} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderRDSSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">데이터베이스 엔진</h4>
          {data.engines?.map((engine, index) => (
            <div key={index} className="aws-db-engine-item">
              <h5 className="aws-item-subtitle">{engine.name}</h5>
              <div className="feature-group">
                <h6 className="aws-item-subtitle">특징</h6>
                <FeatureList features={engine.features} />
                <h6 className="aws-item-subtitle">활용 사례</h6>
                <FeatureList features={engine.useCases} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="section-title">모니터링</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">도구</h5>
            <FeatureList features={data.monitoring.tools} />
            <h5 className="aws-item-subtitle">지표</h5>
            <FeatureList features={data.monitoring.metrics} />
          </div>
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">보안</h4>
          <FeatureList features={data.security.features} />
        </div>
      </div>
    </div>
  );

  const renderDynamoDBSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">성능</h4>
          <FeatureList features={data.capabilities.performance} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">내구성</h4>
          <FeatureList features={data.capabilities.durability} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">데이터 타입</h4>
          <FeatureList features={data.dataTypes} />
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="section-title">인덱스</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">유형</h5>
            <FeatureList features={data.indexes.types} />
            <h5 className="aws-item-subtitle">특징</h5>
            <FeatureList features={data.indexes.features} />
          </div>
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">추가 기능</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.additional.dax.description}</h5>
            <FeatureList features={data.additional.dax.features} />
          </div>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.additional.streams.description}</h5>
            <FeatureList features={data.additional.streams.features} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentDBSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">확장성</h4>
          <h5 className="aws-item-subtitle">{data.capabilities.scaling.description}</h5>
          <FeatureList features={data.capabilities.scaling.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">보안</h4>
          <FeatureList features={data.capabilities.security.features} />
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">활용 사례</h4>
          <FeatureList features={data.useCases} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">성능</h4>
          <FeatureList features={data.performance.features} />
        </div>
      </div>
    </div>
  );

  const renderKeyspacesSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">장점</h4>
          <FeatureList features={data.advantages} />
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">활용 사례</h4>
          <FeatureList features={data.useCases} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">보안</h4>
          <FeatureList features={data.security.features} />
        </div>
      </div>
    </div>
  );

  const renderNeptuneSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        {data.queryLanguages?.map((lang, index) => (
          <div key={index} className="aws-feature-item">
            <h4 className="aws-item-title">{lang.name}</h4>
            <h5 className="aws-item-subtitle">활용 사례</h5>
            <FeatureList features={lang.useCases} />
          </div>
        ))}
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">성능</h4>
          <FeatureList features={data.performance.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">보안</h4>
          <FeatureList features={data.security} />
        </div>
      </div>
    </div>
  );

  const renderTimestreamSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">장점</h4>
          <FeatureList features={data.advantages} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">활용 사례</h4>
          <FeatureList features={data.useCases} />
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="section-title">데이터 보존</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.dataRetention.memory.description}</h5>
            <FeatureList features={data.dataRetention.memory.features} />
          </div>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.dataRetention.magnetic.description}</h5>
            <FeatureList features={data.dataRetention.magnetic.features} />
          </div>
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">분석 기능</h4>
          <FeatureList features={data.analytics.functions} />
        </div>
      </div>
    </div>
  );

  const renderQLDBSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">{data.capabilities.immutability.description}</h4>
          <FeatureList features={data.capabilities.immutability.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="aws-item-title">{data.capabilities.performance.description}</h4>
          <FeatureList features={data.capabilities.performance.features} />
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">활용 사례</h4>
          <FeatureList features={data.useCases} />
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">보안</h4>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">기능</h5>
            <FeatureList features={data.security.features} />
            <h5 className="aws-item-subtitle">규정 준수</h5>
            <FeatureList features={data.security.compliance} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderElastiCacheSection = () => (
  <div className="aws-grid">
    <div className="aws-left-column">
      <div className="aws-feature-item">
        <h4 className="aws-item-title">주요 기능</h4>
        <FeatureList features={data.features} />
      </div>
      <div className="aws-feature-item">
        <h4 className="section-title">엔진</h4>
        {data.engines?.map((engine, index) => (
          <div key={index} className="aws-db-engine-item">
            <h4 className="aws-item-title">{engine.name}</h4>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">특징</h5>
              <FeatureList features={engine.features} />
              <h5 className="aws-item-subtitle">활용 사례</h5>
              <FeatureList features={engine.useCases} />
              {engine.dataTypes && (
                <div className="feature-group">
                  <h5 className="aws-item-subtitle">데이터 타입</h5>
                  <FeatureList features={engine.dataTypes} />
                </div>
              )}
              {engine.scaling && (
                <div className="feature-group">
                  <h5 className="aws-item-subtitle">스케일링</h5>
                  <FeatureList features={engine.scaling} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="aws-right-column">
      <div className="aws-feature-item">
        <h4 className="section-title">모니터링</h4>
        <div className="feature-group">
          <h5 className="aws-item-subtitle">지표</h5>
          <FeatureList features={data.monitoring.metrics} />
          <h5 className="aws-item-subtitle">도구</h5>
          <FeatureList features={data.monitoring.tools} />
        </div>
      </div>
    </div>
  </div>
);

return (
  <div className="aws-content">
    <p className="aws-main-description">{data.description}</p>
    {(() => {
      if (data.title.includes('Aurora')) return renderAuroraSection();
      if (data.title.includes('RDS')) return renderRDSSection();
      if (data.title.includes('DynamoDB')) return renderDynamoDBSection();
      if (data.title.includes('DocumentDB')) return renderDocumentDBSection();
      if (data.title.includes('Keyspaces')) return renderKeyspacesSection();
      if (data.title.includes('Neptune')) return renderNeptuneSection();
      if (data.title.includes('Timestream')) return renderTimestreamSection();
      if (data.title.includes('QLDB')) return renderQLDBSection();
      if (data.title.includes('ElastiCache')) return renderElastiCacheSection();
      return null;
    })()}
  </div>
);
};

const AWSDatabase = ({ data }) => {
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
          {service.title.includes('Aurora') ? 'Aurora' :
           service.title.includes('RDS') ? 'RDS' :
           service.title.includes('DynamoDB') ? 'DynamoDB' :
           service.title.includes('DocumentDB') ? 'DocumentDB' :
           service.title.includes('Neptune') ? 'Neptune' :
           service.title.includes('ElastiCache') ? 'ElastiCache' : 
           service.title}
        </button>
      ))}
    </div>
    <ServiceSection data={activeService} />
  </div>
);
};

export default AWSDatabase;