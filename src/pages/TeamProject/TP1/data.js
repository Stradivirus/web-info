// TP1 팀 프로젝트 데이터 예시
import overviewDiagram from '../../../assets/images/overview/diagrams/TeamProject1.png';
import demoVideo from '../../../assets/videos/project/TeamProject1/Teamproject1_record.mp4';

import ArchitectureDiagram from '../../../assets/images/project/Teamp1/system_overview.png';
const architectureImg = require('../../../assets/images/project/Teamp1/system_overview.png');

const screenshotContext = require.context('../../../assets/images/project/Teamp1', false, /Screenshot\d+\.png$/);
const screenshotCaptions = {
  '1': "김XX - 데이터 그룹화 기능",
  '2': "문성종 - 게시판",
  '3': "문성종 - 기능들",
  '4': "문성종 - 첫 대시보드와 간단한 프로필",
  '5': "이XX - 프로젝트 적용 전 개발 화면",
  '6': "이XX - 프로젝트 적용 화면",
  '7': "이XX - 그래프(개발팀)",
  '8': "이XX - 데이터 CRUD",
  '9': "홍XX - 그래프(보안팀, 사업팀)",
  '10': "홍XX - 데이터",
};
// 숫자 기준으로 정렬
const screenshotKeys = screenshotContext.keys().sort((a, b) => {
  const getNum = s => parseInt(s.match(/Screenshot(\d+)\.png$/)[1], 10);
  return getNum(a) - getNum(b);
});
const screenshots = screenshotKeys.map((path, index) => {
  const id = String(index + 1);
  return {
    id,
    type: 'image',
    url: screenshotContext(path),
    caption: screenshotCaptions[id] || '',
  };
});

const allMedia = [
  {
    id: 'system-overview',
    type: 'image',
    url: architectureImg,
    caption: '전체 기능 소개'
  },
  // 비디오 추가
  {
    id: 'demo-video',
    type: 'video',
    url: demoVideo,
    caption: '시연 영상'
  },
  ...screenshots
];

export const projectData = {
  title: '로우코드 기반 통합 관리 시스템',
  period: '2025.06 - 2025.07',
  description: '팀 프로젝트이며 요구사항 수집부터 배포까지 전 과정을 협업으로 진행.',
  techStack: [
    'React', 'Vite', 'TypeScript', 'Fastapi', 'MongoDB Atlas', 'Docker'
  ],
  techDetails: [
    {
      title: 'Frontend',
      items: ['React','Vite', 'TypeScript']
    },
    {
      title: 'Backend',
      items: ['Fastapi']
    },
    {
      title: 'Infra',
      items: ['MongoDB Atlas', 'Docker', 'Jenkins']
    }
  ],
  objectives: [
    '기업 관리자와 고객이 다양한 데이터를 효율적으로 관리·시각화할 수 있는 통합 웹 플랫폼 구축',
    '실시간 협업 및 업무 분배 효율화',
    '권한 기반 데이터 접근 및 보안 강화',
    '클라우드 기반 인프라와 확장성 확보'
  ],
  features: [
    '대시보드/그래프: NCSI 랭킹, 보안/사업/개발팀 통계 시각화',
    '데이터 관리: 사업/개발/보안팀 데이터 CRUD 및 실시간 연동',
    '인증/계정: 관리자 초대, 임시 비밀번호 발급, 통합 로그인',
    '게시판: 게시글/댓글 CRUD, 관리자 공지/답변',
    '권한 관리: 관리자/멤버별 기능 및 접근 제한',
    '메일 연동(실제 메일 발송)',
    '페이지네이션 등 데이터 처리 최적화',
    '반응형 UI 및 접근성 강화'
  ],
  process: `1. 요구사항 상세 기획서 작성\n2. 프레임워크 시스템 아키텍처 및 DB 설계\n3. 사용할 프레임워크 선정\n4. 프론트엔드/백엔드 분업 개발\n5. 통합테스트 및 수정사항 반영\n6. 구글 클라우드 배포`,
  improvements: `현재 하드 코딩 되어 있는 변수들을 환경 변수로 분리 (보안성/유지보수성 강화)
  고객 정보 관리 기능 확장(기업별 Comment 컬럼 등)
  세션 관리 개선 및 중복 로그인 방지
  데이터 시각화 라이브러리(Chart.js, Matplotlib) 통합으로 일관성 및 유지보수성 강화`,
  reflection: `1. 컴포넌트 기반 설계와 API 중심 구조의 확장성 체감
  2. 클라우드 기반 MongoDB로 인해 유연한 데이터 관리 및 확장성 확보
  3. 실시간 협업 도구(깃허브, 슬랙) 활용의 중요성 인식`,
  
  architectureImg: ArchitectureDiagram,
  media: allMedia,
  links: {
    github: 'https://github.com/Stradivirus/blackpink',
    demo: {
      url: 'http://34.64.60.39:8002/',
      isEnabled: true
    },
  },
  overview: {
    description: '기업 관리자와 고객이 실시간 협업, 데이터 관리, 시각화, 권한 기반 접근을 모두 경험할 수 있는 통합 플랫폼.',
    diagram: overviewDiagram
  }
};
