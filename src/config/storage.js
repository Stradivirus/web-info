// Oracle Cloud Object Storage 설정
const BUCKET_BASE_URL = 'https://objectstorage.ap-osaka-1.oraclecloud.com/n/axt322c13ce3/b/PortFolio/o/';

// 기본 이미지 URL 생성 함수
export const getImageUrl = (path) => {
  return `${BUCKET_BASE_URL}${path}`;
};

// Records 폴더 이미지 전용 함수
export const getRecordsImage = (filename) => {
  return getImageUrl(`records/${filename}`);
};

// Diagram 폴더 이미지 전용 함수
export const getDiagramImage = (filename) => {
  return getImageUrl(`diagram/${filename}`);
};

// Certifications 폴더 이미지 전용 함수
export const getCertificationImage = (filename) => {
  return getImageUrl(`certifications/${filename}`);
};

// Pixel 폴더 이미지 전용 함수
export const getPixelImage = (filename) => {
  return getImageUrl(`pixel/${filename}`);
};

// Video 폴더 비디오 전용 함수
export const getVideoUrl = (filename) => {
  return getImageUrl(`video/${filename}`);
};