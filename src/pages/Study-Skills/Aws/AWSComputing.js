import React, { useState } from 'react';

const ServiceSection = ({ data }) => {
  const renderInstanceTypes = (instances, index) => (
    <div key={index} className="aws-feature-item">
      <h3 className="section-title">{instances.title}</h3>
      {instances.description && (
        <p className="aws-description">{instances.description}</p>
      )}
      <div className="aws-grid">
        {instances.items?.map((item, idx) => (
          <div key={idx} className="aws-feature-item">
            <h4 className="aws-item-title">{item.name}</h4>
            <ul className="aws-item-list">
              {item.details.map((detail, detailIdx) => (
                <li key={detailIdx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAdvantagesDisadvantages = (advantages, disadvantages) => (
    <div className="aws-grid">
      <div className="aws-feature-item">
        <h3 className="aws-advantages-title">장점</h3>
        <ul className="aws-item-list">
          {advantages.map((adv, index) => (
            <li key={index}>{adv}</li>
          ))}
        </ul>
      </div>
      <div className="aws-feature-item">
        <h3 className="aws-disadvantages-title">단점</h3>
        <ul className="aws-item-list">
          {disadvantages.map((disadv, index) => (
            <li key={index}>{disadv}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderServerless = (services) => (
    <div className="aws-feature-item">
      <h3 className="section-title">서비스 목록</h3>
      <div className="aws-grid">
        {services.map((service, index) => (
          <div key={index} className="aws-feature-item">
            <h3 className="aws-item-title">{service.name}</h3>
            <ul className="aws-item-list">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            {service.advantages && (
              <div className="feature-group">
                <div className="aws-grid">
                  <div>
                    <h4 className="aws-advantages-title">장점</h4>
                    <ul className="aws-item-list">
                      {service.advantages.map((adv, i) => (
                        <li key={i}>{adv}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="aws-disadvantages-title">단점</h4>
                    <ul className="aws-item-list">
                      {service.disadvantages.map((disadv, i) => (
                        <li key={i}>{disadv}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="aws-content">
      {/* Service Description */}
      {data.description && (
        <p className="aws-main-description">{data.description}</p>
      )}

      {/* Features Section */}
      {data.features && data.features.map(renderInstanceTypes)}

      {/* Services Section */}
      {data.services && renderServerless(data.services)}

      {/* Advantages & Disadvantages */}
      {data.advantages && data.disadvantages && 
        renderAdvantagesDisadvantages(data.advantages, data.disadvantages)}
    </div>
  );
};

const UseCasesSection = ({ useCases }) => (
  <div className="aws-feature-item">
    <h3 className="section-title">활용 사례</h3>
    <div className="aws-grid">
      {useCases.examples.map((useCase, index) => (
        <div key={index} className="aws-feature-item">
          <h4 className="aws-item-title">{useCase.title}</h4>
          <p className="aws-description">{useCase.details}</p>
        </div>
      ))}
    </div>
    <h3 className="section-title">모범 사례</h3>
    <div className="aws-grid">
      {useCases.bestPractices.map((practice, index) => (
        <div key={index} className="aws-feature-item">
          <p className="aws-description">{practice}</p>
        </div>
      ))}
    </div>
  </div>
);

const AWSComputing = ({ data }) => {
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
            {service.title}
          </button>
        ))}
      </div>

      <ServiceSection data={activeService} />

      {/* Use Cases - Only for first tab */}
      {activeTabIndex === 0 && data.useCases && (
        <UseCasesSection useCases={data.useCases} />
      )}
    </div>
  );
};

export default AWSComputing;