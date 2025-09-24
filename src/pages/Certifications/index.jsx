import React, { useState } from 'react';
import { getCertificationImage } from '../../config/storage';
import './Certifications.css';

const certifications = [
  {
    id: 9,
    title: "데이터 분석 준전문가",
    issuer: "한국데이터 산업진흥원",
    date: "2025.09",
    imagePath: getCertificationImage('adsp.png'),
  },
  {
    id: 8,
    title: "네트워크 관리사",
    issuer: "한국정보통신 진흥협회",
    date: "2025.07",
    imagePath: getCertificationImage('network_manager_2.png'),
  },
  {
    id: 7,
    title: "SQLD",
    issuer: "한국데이터 산업진흥원",
    date: "2025.06",
    imagePath: getCertificationImage('sqld.png'),
  },
  {
    id: 6,
    title: "리눅스마스터 2급",
    issuer: "한국정보통신 진흥협회",
    date: "2025.01",
    imagePath: getCertificationImage('linuxmaster2.png'),
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024.12",
    imagePath: getCertificationImage('AWS Certified Solutions Architect.png'),
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024.11",
    imagePath: getCertificationImage('AWS Certified Cloud Practitioner certificate.png'),
  },
  {
    id: 4,
    title: "NAVER Cloud Certified Professional",
    issuer: "NAVER Cloud",
    date: "2024.11",
    imagePath: getCertificationImage('NCP.png'),
  },
  {
    id: 3,
    title: "NAVER Cloud Certified Associate",
    issuer: "NAVER Cloud",
    date: "2024.07",
    imagePath: getCertificationImage('Naver Cloud Platform.png'),
  },
  {
    id: 1,
    title: "정보처리기능사",
    issuer: "한국산업인력공단",
    date: "2024.07",
    imagePath: getCertificationImage('0-20241112160852435.png'),
  }
  
];

const CertificationsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (cert) => {
    setSelectedImage(cert);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-content">
                {cert.imagePath && (
                  <img
                    src={cert.imagePath}
                    alt={cert.title}
                    className="certification-image"
                    onClick={() => openModal(cert)}
                    style={{ cursor: 'pointer' }}
                  />
                )}
                <h3>{cert.title}</h3>
                <div className="certification-tags">
                  <span className="certification-tag">{cert.issuer}</span>
                  <span className="certification-tag">취득월: {cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 이미지 모달 */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage.imagePath}
                alt={selectedImage.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.issuer} | 취득월: {selectedImage.date}</p>
              </div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CertificationsPage;