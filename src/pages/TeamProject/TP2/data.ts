import { getDiagramImage, getTeamP2Image, getPPTUrl } from '../../../config/storage';
import type { MediaItem, ProjectData } from '../../../types/types';

// Oracle Storage에서 데이터 불러오기
const overviewDiagram: string = getDiagramImage('TeamProject2.png');
const dashboardImage: string = getTeamP2Image('Screenshot1.png');
const datasetImage: string = getTeamP2Image('Screenshot2.png');
const visualizationImage: string = getTeamP2Image('Screenshot3.png');
const cronSettingImage: string = getTeamP2Image('Screenshot4.png');
const mongoDBImage: string = getTeamP2Image('Screenshot5.png');
const postgreSQLImage: string = getTeamP2Image('Screenshot6.png');

const allMedia: MediaItem[] = [
  {
    id: 'dashboard',
    type: 'image',
    url: dashboardImage,
    caption: '메인 대시보드'
  },
  {
    id: 'dataset',
    type: 'image',
    url: datasetImage,
    caption: 'DataSet'
  },
  {
    id: 'visualization',
    type: 'image',
    url: visualizationImage,
    caption: '시각화'
  },
  {
    id: 'cronSetting',
    type: 'image',
    url: cronSettingImage,
    caption: 'Cron 설정'
  },
  {
    id: 'mongoDBImage',
    type: 'image',
    url: mongoDBImage,
    caption: 'MongoDB 저장 데이터'
  },
  {
    id: 'postgreSQLImage',
    type: 'image',
    url: postgreSQLImage,
    caption: 'PostgreSQL 저장 데이터'
  },
];

export const projectData: ProjectData = {
  title: 'Cron을 이용한 환율 예측 프로젝트',
  period: '2025.09 - 2025.10',
  description: 'Cron을 활용하여 주요 국가의 환율 정보를 주기적으로 수집하고, 사용자에게 환율 정보와 과거 데이터 기반의 예측 정보를 제공하는 대시보드 프로젝트입니다.',
  techStack: [
    'React', 'Vite', 'TypeScript', 'SpringBoot', 'Java', 'Python', 'PostgreSQL', 'Cron', 'Docker'
  ],
  techDetails: [
    {
      title: 'Frontend',
      items: ['React', 'Vite', 'TypeScript']
    },
    {
      title: 'Dashboard Backend',
      items: ['SpringBoot', 'Java']
    },
    {
      title: 'Data 수집 & 시각화',
      items: ['Python', 'Plotly']
    },
    {
      title: 'Infra',
      items: ['MongoDB', 'PostgreSQL', 'Cron', 'Docker']
    }
  ],
  objectives: [
    '주요 국가별 환율 정보를 자동 수집하는 시스템 구축',
    '수집된 데이터를 시각적으로 표현하는 동적 대시보드 개발',
    '사용자가 원하는 통화를 기준으로 환율을 계산할 수 있는 계산기 기능 구현',
    '과거 환율 데이터를 기반으로 미래 환율을 예측하는 모델 적용'
  ],
  features: [
    '실시간 환율 정보 및 등락률 표시',
    '과거 환율 데이터 조회 (1년, 5년, 10년)',
    '주요 통화(USD, EUR, JPY, CNY) 간 환율 계산 기능',
    '시계열 데이터를 활용한 환율 예측 그래프',
    '데이터 시각화를 위한 반응형 차트 제공'
  ],
  process: `1. 요구사항 분석 및 아키텍처 설계
2. MongoDB Atlas를 이용한 Raw 데이터 수집
3. Cron을 이용한 데이터 정제 및 PostgreSQL 저장 자동화
4. Spring Boot 기반 백엔드 API 개발
5. React 기반 프론트엔드 대시보드 개발
6. Plotly를 이용한 데이터 시각화 및 정적 HTML 생성
7. 기능 테스트 및 Docker를 이용한 배포`,
  improvements: `머신러닝 기반의 환율 예측 모델 고도화
  지원하는 통화 종류 확장
  사용자 맞춤형 알림 기능(예: 목표 환율 도달 시 알림) 추가`,
  reflection: `Cron을 이용한 주기적인 데이터 수집 자동화 경험을 통해 백엔드 스케줄링에 대한 이해를 높였습니다. 또한, 대용량 시계열 데이터를 효과적으로 시각화하는 방법에 대해 깊이 고민할 수 있었고, SpringBoot와 React를 연동하여 풀스택 애플리케이션을 개발하는 전반적인 과정을 성공적으로 완료했습니다.`,
  
  media: allMedia,
  links: {
    github: 'https://github.com/Stradivirus/team_exchange',
    demo: {
      url: 'http://140.83.49.106:8005',
      isEnabled: true
    },
    document: getPPTUrl('financial independence.pptx'),
  },
  overview: {
    description: 'Cron으로 자동 수집된 정보를 기반으로 환율 데이터를 제공하고 환율 계산 및 예측 기능을 제공하는 대시보드입니다.',
    diagram: overviewDiagram
  }
};
