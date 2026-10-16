import React, { useState } from 'react';
import { getCertificationImage } from '../../config/storage';

type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imagePath: string;
};

const certifications: Certification[] = [
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

const CertificationsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Certification | null>(null);

  const openModal = (cert: Certification) => {
    setSelectedImage(cert);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] w-full">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-5 border border-gray-200 text-center h-[440px] flex flex-col justify-between"
          >
            <div className="flex flex-col items-center w-full h-full">
              {cert.imagePath && (
                <img
                  src={cert.imagePath}
                  alt={cert.title}
                  className="w-full h-[280px] mb-[15px] rounded-lg object-contain transition-transform duration-200 hover:scale-[1.02] cursor-pointer"
                  onClick={() => openModal(cert)}
                />
              )}
              <h3 className="text-[22px] font-semibold text-[#1a1a1a] mb-3">{cert.title}</h3>
              <div className="flex flex-col gap-2 justify-center items-center mt-auto">
                <span className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded-2xl text-[13px] font-medium">
                  {cert.issuer}
                </span>
                <span className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded-2xl text-[13px] font-medium">
                  취득월: {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/75 flex justify-center items-center z-[1000] p-5"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 md:p-5 rounded-xl relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imagePath}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.issuer} | 취득월: {selectedImage.date}</p>
            </div>
            <button
              className="absolute top-2.5 right-2.5 bg-transparent border-none text-2xl cursor-pointer text-gray-600 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificationsPage;