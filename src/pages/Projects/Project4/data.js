import ArchitectureDiagram from '../../../assets/images/architecture/Project4-Architecture.png';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram4.png';
// 아키텍처 이미지 불러오기를 screenshots와 통합
const architectureImg = require('../../../assets/images/architecture/Project4-Architecture.png');

// 스크린샷 이미지 로드
const imageContext = require.context('../../../assets/images/project/Project4', false, /festival\d+\.png$/);
const screenshots = imageContext.keys().sort().map((path, index) => {
  const id = String(index + 1);
  const captions = {
    '1': "사전 예약 메인 페이지",
    '2': "추첨권 발급 페이지",
    '3': "추첨권 사용 페이지",
    '4': "추첨권만 있는 경우 직접 입력 페이지",
    '5': "어드민 페이지(Django)",
    '6': "슬렉 알림"
  };

  return {
    id,
    type: 'image',
    url: imageContext(path),
    caption: captions[id] || `스크린샷 ${id}`
  };
});

const allMedia = [
  {
    id: 'architecture',
    type: 'image',
    url: architectureImg,
    caption: '시스템 아키텍처'
  },
  ...screenshots
];

export const projectData = {
  title: "사전 예약 시스템",
  description: "Express.js와 Django가 하나의 DB를 공유하여 각각 사전 예약과 관리를 담당하는 축제 예약 시스템",
  period: "2024.9 - 2024.9",

  techStack: [
    "React",
    "Expressjs",
    "Django",
    "Postgresql",
    "Docker-Compose",
    "GCP",
    "Jenkins",
    "Nginx",
    "Slack"
  ],

  objectives: [
    "축제 참여 인원 예측",
    "사전 예약 신청자에게 추첨권 코드 발급",
    "안정적인 서비스 제공을 위한 부하 분산"
  ],

  features: [
    "Nginx 로드밸런서를 통한 프론트엔드 서버 3대의 부하분산 (라운드로빈 방식)",
    "사람들로부터 이메일과 전화번호 수집 (Express.js)",
    "등록 확인과 추첨권 번호 발급 (Express.js)",
    "추첨권 사용 확인 (Express.js)",
    "슬렉 웹훅 연동으로 10명마다 슬렉 알림 (Express.js)",
    "어드민 페이지에서 등록자 데이터 조회 및 관리 (Django)"
  ],

  process: `1. 기본 환경 구축
• Nginx를 통한 로드밸런서 구성 (라운드로빈 방식의 3대 프론트엔드 서버)
• React(프론트엔드) - Express.js(API 서버) - Postgresql - Django(admin) 연동

2. 핵심 기능 구현
Express.js 백엔드:
   • 사전 예약 API 개발
   • 쿠폰 발급 및 검증 시스템 구현
   • 슬랙 웹훅 알림 시스템 구현
Django 어드민:
   • 커스텀 어드민 페이지 개발
   • 데이터 조회 기능 구현

3. 시스템 배포
• Jenkins를 통한 자동화된 배포 파이프라인 구축
• Nginx 로드밸런서를 통한 고가용성 확보`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React",
        "3대의 프론트엔드 서버 구성"
      ]
    },
    {
      title: "Main Backend (Express.js)",
      items: [
        "Express.js",
        "Express-Postgres"
      ]
    },
    {
      title: "Admin Backend (Django)",
      items: [
        "Django Admin"
      ]
    },
    {
      title: "Infrastructure",
      items: [
        "Nginx",
        "PostgreSQL",
        "Docker & Docker-compose",
        "Jenkins",
        "GCP",
        "Slack"
      ]
    }
  ],

  improvements: `서버리스 아키텍처 전환
• 비동기 작업을 GCP Cloud Run으로 마이그레이션
• 운영 효율성 및 비용 최적화

데이터 안정성 강화
• GCP Cloud Storage 기반 자동 백업 시스템 구축

로드밸런싱 고도화
• 헬스 체크 기능 추가`,

  reflection: `1. 슬랙 웹훅 URL이 노출되어 서비스가 중단되는 보안 문제가 발생했으나, Jenkins Credentials와 환경 변수를 활용하여 민감 정보 관리 체계를 구축했습니다.
2. Django 어드민에서 대량 데이터 조회 시 발생하는 성능 저하 문제를 페이지네이션 구현과 DB 인덱스 최적화를 통해 개선했습니다.
3. 이미지 리사이징 및 전환 과정에서 입력값이 초기화되는 문제를 컴포넌트 분리를 통해 해결했습니다.
4. 로드밸런서 도입으로 시스템 안정성이 향상되었으며, 향후 트래픽 증가에도 유연하게 대응할 수 있는 기반을 마련했습니다.`,

  architectureImg: ArchitectureDiagram,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/reservation",
    demo: "http://34.64.132.7:8080/"
  },

  overview: {
    description: "React와 Expressjs로 웹서버 구동과 Django로 admin을 구성하고, Nginx 로드밸런서를 통해 고가용성을 확보한 시스템",
    diagram: overviewDiagram
  }
};