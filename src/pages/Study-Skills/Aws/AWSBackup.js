import React from 'react';
import './AwsBackup.css';

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
  const renderBackupSection = () => (
    <div className="aws-backup-grid">
      <div className="aws-backup-left-column">
        <div className="aws-backup-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-backup-feature-item">
          <h4 className="aws-item-title">지원 서비스</h4>
          {data.supportedServices.map((service, index) => (
            <div key={index} className="feature-group">
              <h5 className="aws-item-subtitle">{service.name}</h5>
              <FeatureList features={service.backupFeatures} />
            </div>
          ))}
        </div>
        <div className="aws-backup-feature-item">
          <h4 className="aws-item-title">백업 계획</h4>
          <h5 className="aws-item-subtitle">구성 요소</h5>
          <FeatureList features={data.backupPlans.components} />
          {data.backupPlans.features.map((feature, index) => (
            <div key={index} className="feature-group">
              <h5 className="aws-item-subtitle">{feature.name}</h5>
              <FeatureList features={feature.details} />
            </div>
          ))}
        </div>
      </div>
      <div className="aws-backup-right-column">
        <div className="aws-backup-feature-item">
          <h4 className="aws-item-title">규정 준수</h4>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={data.compliance.features} />
          <h5 className="aws-item-subtitle">지원 표준</h5>
          <FeatureList features={data.compliance.standards} />
          <h5 className="aws-item-subtitle">보고</h5>
          <FeatureList features={data.compliance.reporting} />
        </div>
        <div className="aws-backup-feature-item">
          <h4 className="aws-item-title">복구</h4>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={data.recovery.capabilities} />
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.recovery.features.crossRegion.description}</h5>
            <FeatureList features={data.recovery.features.crossRegion.benefits} />
          </div>
          <div className="feature-group">
            <h5 className="aws-item-subtitle">{data.recovery.features.crossAccount.description}</h5>
            <FeatureList features={data.recovery.features.crossAccount.benefits} />
          </div>
        </div>
        <div className="aws-backup-feature-item">
          <h4 className="aws-item-title">비용 최적화</h4>
          <h5 className="aws-item-subtitle">기능</h5>
          <FeatureList features={data.costOptimization.features} />
          <h5 className="aws-item-subtitle">전략</h5>
          <FeatureList features={data.costOptimization.strategies} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="aws-content">
      <p className="aws-main-description">{data.description}</p>
      {renderBackupSection()}
    </div>
  );
};

const AWSBackup = ({ data }) => {
  const activeService = data.services[0]; // AWS Backup만 있으므로 첫 번째 서비스 사용

  return (
    <div className="aws-computing">
      <ServiceSection data={activeService} />
    </div>
  );
};

export default AWSBackup;