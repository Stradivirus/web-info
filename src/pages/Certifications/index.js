import React, { useState } from 'react';
import 정보처리기능사 from './static/0-20241112160852435.png';
import AWS from './static/AWS Certified Cloud Practitioner certificate.png';
import NCP from './static/Naver Cloud Platform.png';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: "정보처리기능사",
    issuer: "한국산업인력공단",
    date: "2024.07",
    imagePath: 정보처리기능사,
  },
  {
    id: 2,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024.11",
    imagePath: AWS,
  },
  {
    id: 3,
    title: "NAVER Cloud Platform Certified Associate",
    issuer: "NAVER Cloud",
    date: "2024.07",
    imagePath: NCP,
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
                  <span className="certification-tag">취득일: {cert.date}</span>
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
                <p>{selectedImage.issuer} | 취득일: {selectedImage.date}</p>
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