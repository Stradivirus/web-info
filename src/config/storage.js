// Oracle Cloud Object Storage 설정
const BUCKET_BASE_URL = 'https://axt322c13ce3.objectstorage.ap-osaka-1.oci.customer-oci.com/p/-hBVFia2EFUl12RcRNNIS20YdYD0OlX6WG5AZuxuatVZWfvaqTk03J3XDH6L0t5d/n/axt322c13ce3/b/PortFolio/o/';

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

// Profile 폴더 이미지 전용 함수
export const getProfileImage = (filename) => {
  return getImageUrl(`profile/${filename}`);
};

// Project 별 폴더 이미지 전용 함수들
export const getProject2Image = (filename) => {
  return getImageUrl(`project/2/${filename}`);
};

export const getProject3Image = (filename) => {
  return getImageUrl(`project/3/${filename}`);
};

export const getProject4Image = (filename) => {
  return getImageUrl(`project/4/${filename}`);
};

export const getProject5Image = (filename) => {
  return getImageUrl(`project/5/${filename}`);
};

export const getProject8Image = (filename) => {
  return getImageUrl(`project/8/${filename}`);
};

// TeamProject 별 폴더 이미지 전용 함수들
export const getTeamP1Image = (filename) => {
  return getImageUrl(`project/TeamP1/${filename}`);
};