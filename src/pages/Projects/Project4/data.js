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
  description: "Express.js를 NestJS 기반의 마이크로서비스 아키텍처로 전환하여, 사용자 검증, 쿠폰 관리, 알림 발송을 독립적인 서비스로 운영하는 축제 예약 시스템",
  period: "2024.9 - 2025.1",

  techStack: [
    "React",
    "NestJS",
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
    "안정적인 서비스 제공을 위한 부하 분산",
    "마이크로서비스 아키텍처를 통한 서비스 모듈화"
  ],

  features: [
    "Nginx 로드밸런서를 통한 프론트엔드 서버 3대의 부하분산 (라운드로빈 방식)",
    "사용자 검증 서비스: 이메일과 전화번호 중복 체크 후 다른 서비스 호출 (NestJS)",
    "쿠폰 서비스: 등록 확인과 추첨권 발급/사용 관리 (NestJS)",
    "알림 서비스: 슬랙 웹훅 연동으로 10명마다 알림 발송 (NestJS)",
    "어드민 페이지에서 등록자 데이터 조회 및 관리 (Django)"
  ],

  process: `1. 초기 개발 (인턴 기간)
- React + Django + PostgreSQL 모놀리식 아키텍처로 구현
- 사전 예약 및 추첨권 발급 기본 기능 개발

2. 백엔드 분리 및 어드민 독립
- 저작권 이슈가 있는 미디어 제거 후 완전히 새로운 버전으로 재개발
- React + Express.js + PostgreSQL + Django 로 백엔드 전환
- Django Admin을 별도 서비스로 분리하여 관리 기능 강화

3. 시스템 확장
- Nginx 로드밸런서 도입으로 프론트엔드 서버 부하 분산 구현
- Express.js 백엔드를  Nest.JS로 마이그레이션 후 3개의 독립적인 서비스로 분리

4. Docker Compose 최적화
- 프론트엔드/백엔드/어드민 서비스별 Docker Compose 분리
- 독립적인 배포 환경으로 각 서비스 변경 시 해당 부분만 재배포 가능한 구조 구현`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React",
        "3대의 프론트엔드 서버 구성"
      ]
    },
    {
      title: "Microservices (NestJS)",
      items: [
        "사용자 검증 서비스",
        "쿠폰 관리 서비스",
        "알림 서비스"
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

  improvements: `데이터베이스 가용성 강화
• PostgreSQL 읽기 전용 복제본 구성으로 조회 성능 향상
• 스탠바이 데이터베이스 구축으로 장애 대비 및 무중단 운영 체계 확보

성능 최적화
• Redis 캐싱 계층 도입으로 반복 조회 쿼리 부하 감소
• 쿠폰 코드 유효성 검증 캐싱으로 응답 속도 개선
• 실시간 사용자 중복 체크 데이터 캐싱

메시징 시스템 도입 (Kafka)
• 이벤트 기반 아키텍처로 전환
  - 사용자 등록 이벤트
  - 쿠폰 발급/사용 이벤트
  - 알림 발송 이벤트
• 시스템 간 결합도 감소 및 확장성 향상
• 데이터 파이프라인 구축으로 실시간 모니터링 강화`,

  reflection: `1. 슬랙 웹훅 URL이 노출되어 서비스가 중단되는 보안 문제가 발생했으나, Jenkins Credentials와 환경 변수를 활용하여 민감 정보 관리 체계를 구축했습니다.
2. Django 어드민에서 대량 데이터 조회 시 발생하는 성능 저하 문제를 페이지네이션 구현과 DB 인덱스 최적화를 통해 개선했습니다.
3. Express.js에서 NestJS 마이크로서비스로의 전환 과정에서 서비스 간 통신 구조를 효율적으로 설계하여 시스템 확장성을 확보했습니다.
4. 로드밸런서 도입과 마이크로서비스 아키텍처 적용으로 시스템 안정성이 향상되었으며, 향후 트래픽 증가에도 유연하게 대응할 수 있는 기반을 마련했습니다.`,

  architectureImg: ArchitectureDiagram,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/reservation",
    demo: {
    url:"http://34.64.160.67:8000/",
    isEnabled: true
    }
  },

  overview: {
    description: "React와 NestJS 마이크로서비스로 구성된 백엔드, Django로 admin을 구성하고, Nginx 로드밸런서를 통해 고가용성을 확보한 시스템",
    diagram: overviewDiagram
  }
};