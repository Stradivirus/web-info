import React, { useState } from 'react';
import './AwsStorage.css';

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
  const renderS3Section = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        {data.features?.map((feature, idx) => (
          <div key={idx} className="aws-feature-item">
            <h4 className="aws-item-title">{feature.title}</h4>
            <ul className="aws-item-list">
              {feature.items?.map((item, itemIdx) => (
                <li key={itemIdx}>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      <h5 className="aws-item-subtitle">{item.name}</h5>
                      <ul className="aws-item-list">
                        {item.details?.map((detail, detailIdx) => (
                          <li key={detailIdx}>{detail}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="aws-feature-item">
          <h4 className="section-title">스토리지 클래스</h4>
          {data.storageClasses?.map((storageClass, index) => (
            <div key={index} className="storage-class-item">
              <h5 className="aws-item-subtitle">{storageClass.name}</h5>
              <FeatureList features={storageClass.details} />
            </div>
          ))}
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="section-title">Object Lock 모드</h4>
          {data.objectLockModes?.map((mode, index) => (
            <div key={index} className="storage-mode-item">
              <h5 className="aws-item-subtitle">{mode.name}</h5>
              <div className="feature-group">
                <h6 className="aws-item-subtitle">특징</h6>
                <FeatureList features={mode.features} />
                <h6 className="aws-item-subtitle">활용 사례</h6>
                <FeatureList features={mode.useCases} />
              </div>
            </div>
          ))}
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">비용 최적화</h4>
          {data.costOptimization?.features.map((feature, index) => (
            <div key={index} className="aws-feature-item">
              <h5 className="aws-item-subtitle">{feature.name}</h5>
              <FeatureList features={feature.details} />
              {feature.useCases && (
                <div className="feature-group">
                  <h6 className="aws-item-subtitle">활용 사례</h6>
                  <FeatureList features={feature.useCases} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEBSSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        {data.additionalFeatures && Object.entries(data.additionalFeatures).map(([key, value], idx) => (
          <div key={idx} className="aws-feature-item">
            <h4 className="aws-item-title">{key}</h4>
            {value.description && <p className="aws-description">{value.description}</p>}
            <FeatureList features={value.features || value.limitations} />
          </div>
        ))}
      </div>
      <div className="aws-right-column">
        <h4 className="section-title">볼륨 타입</h4>
        {data.volumeTypes?.map((volumeType, index) => (
          <div key={index} className="storage-volume-item">
            <h5 className="aws-item-subtitle">{volumeType.name}</h5>
            <p className="aws-description">{volumeType.description}</p>
            <div className="feature-group">
              <h6 className="aws-item-subtitle">특징</h6>
              <FeatureList features={volumeType.features} />
              <h6 className="aws-item-subtitle">활용 사례</h6>
              <FeatureList features={volumeType.useCases} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEFSSection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">주요 기능</h4>
          <FeatureList features={data.features} />
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">스토리지 클래스</h4>
          {data.storageClasses?.map((storageClass, index) => (
            <div key={index} className="storage-class-item">
              <h5 className="aws-item-subtitle">{storageClass.name}</h5>
              <FeatureList features={storageClass.details} />
            </div>
          ))}
        </div>
      </div>
      <div className="aws-right-column">
        <div className="aws-feature-item">
          <h4 className="section-title">성능 모드</h4>
          {data.performanceModes?.map((mode, index) => (
            <div key={index} className="storage-mode-item">
              <h5 className="aws-item-subtitle">{mode.name}</h5>
              <FeatureList features={mode.details} />
            </div>
          ))}
        </div>
        <div className="aws-feature-item">
          <h4 className="section-title">처리량 모드</h4>
          {data.throughputModes?.map((mode, index) => (
            <div key={index} className="storage-mode-item">
              <h5 className="aws-item-subtitle">{mode.name}</h5>
              <FeatureList features={mode.details} />
            </div>
          ))}
        </div>
        {data.accessPoints && (
          <div className="aws-feature-item">
            <h4 className="aws-item-title">액세스 포인트</h4>
            <p className="aws-description">{data.accessPoints.description}</p>
            <FeatureList features={data.accessPoints.features} />
          </div>
        )}
      </div>
    </div>
  );

  const renderStorageGatewaySection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">공통 기능</h4>
          <FeatureList features={data.commonFeatures} />
        </div>
      </div>
      <div className="aws-right-column">
        {data.gatewayTypes?.map((gateway, index) => (
          <div key={index} className="gateway-type-item">
            <h4 className="aws-item-title">{gateway.name}</h4>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">특징</h5>
              <FeatureList features={gateway.features} />
              <h5 className="aws-item-subtitle">활용 사례</h5>
              <FeatureList features={gateway.useCases} />
              {gateway.modes && (
                <div className="gateway-modes">
                  <h5 className="aws-item-subtitle">모드</h5>
                  {gateway.modes.map((mode, modeIdx) => (
                    <div key={modeIdx} className="storage-mode-item">
                      <h6 className="aws-item-subtitle">{mode.name}</h6>
                      <FeatureList features={mode.details} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSnowFamilySection = () => (
    <div className="aws-grid">
      <div className="aws-left-column">
        <div className="aws-feature-item">
          <h4 className="aws-item-title">공통 기능</h4>
          <FeatureList features={data.commonFeatures} />
        </div>
        {data.edgeComputing && (
          <div className="aws-feature-item">
            <h4 className="aws-item-title">엣지 컴퓨팅</h4>
            <FeatureList features={data.edgeComputing.features} />
            <div className="feature-group">
              <h5 className="aws-item-subtitle">활용 사례</h5>
              <FeatureList features={data.edgeComputing.useCases} />
            </div>
          </div>
        )}
      </div>
      <div className="aws-right-column">
        {data.devices?.map((device, index) => (
          <div key={index} className="snow-device-item">
            <h4 className="aws-item-title">{device.name}</h4>
            <div className="feature-group">
              <h5 className="aws-item-subtitle">특징</h5>
              <FeatureList features={device.features} />
              {device.variants?.map((variant, variantIdx) => (
                <div key={variantIdx} className="device-variant">
                  <h5 className="aws-item-subtitle">{variant.name}</h5>
                  <h6 className="aws-item-subtitle">사양</h6>
                  <FeatureList features={variant.specs} />
                  <h6 className="aws-item-subtitle">활용 사례</h6>
                  <FeatureList features={variant.useCases} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="aws-content">
      <p className="aws-main-description">{data.description}</p>
      {(() => {
        if (data.title.includes('S3')) return renderS3Section();
        if (data.title.includes('EBS')) return renderEBSSection();
        if (data.title.includes('EFS')) return renderEFSSection();
        if (data.title.includes('Gateway')) return renderStorageGatewaySection();
        if (data.title.includes('Snow')) return renderSnowFamilySection();
        return null;
      })()}
    </div>
  );
};

const AWSStorage = ({ data }) => {
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
            {service.title.includes('Amazon S3') ? 'S3' : 
             service.title.includes('EBS') ? 'EBS' : 
             service.title.includes('EFS') ? 'EFS' : 
             service.title.includes('Gateway') ? 'Storage Gateway' : 
             'Snow Family'}
          </button>
        ))}
      </div>
      <ServiceSection data={activeService} />
    </div>
  );
};

export default AWSStorage;