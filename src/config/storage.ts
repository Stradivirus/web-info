const BUCKET_BASE_URL = 'https://axt322c13ce3.objectstorage.ap-osaka-1.oci.customer-oci.com/p/-hBVFia2EFUl12RcRNNIS20YdYD0OlX6WG5AZuxuatVZWfvaqTk03J3XDH6L0t5d/n/axt322c13ce3/b/PortFolio/o/';

export const getImageUrl = (path: string): string => {
  return `${BUCKET_BASE_URL}${path}`;
};

//기록, 다이어그램, 자격증, 픽셀아트, 비디오, 프로필 사진, PPT, PDF
export const getRecordsImage = (filename: string): string => getImageUrl(`records/${filename}`);
export const getDiagramImage = (filename: string): string => getImageUrl(`diagram/${filename}`);
export const getCertificationImage = (filename: string): string => getImageUrl(`certifications/${filename}`);
export const getPixelImage = (filename: string): string => getImageUrl(`pixel/${filename}`);
export const getVideoUrl = (filename: string): string => getImageUrl(`video/${filename}`);
export const getProfileImage = (filename: string): string => getImageUrl(`profile/${filename}`);
export const getPDFUrl = (filename: string): string => getImageUrl(`pdf/${filename}`);

//개인 프로젝트
export const getProject2Image = (filename: string): string => getImageUrl(`project/2/${filename}`);
export const getProject3Image = (filename: string): string => getImageUrl(`project/3/${filename}`);
export const getProject4Image = (filename: string): string => getImageUrl(`project/4/${filename}`);
export const getProject5Image = (filename: string): string => getImageUrl(`project/5/${filename}`);
export const getProject8Image = (filename: string): string => getImageUrl(`project/8/${filename}`);

//팀 프로젝트
export const getTeamP1Image = (filename: string): string => getImageUrl(`project/TeamP1/${filename}`);
export const getTeamP2Image = (filename: string): string => getImageUrl(`project/TeamP2/${filename}`);