import { getDiagramImage } from '../../../config/storage';
const overviewDiagram = getDiagramImage('Diagram4.png');

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
  };

  return {
    id,
    type: 'image',
    url: imageContext(path),
    caption: captions[id] || `스크린샷 ${id}`
  };
});

const allMedia = [
  ...screenshots
];

export const projectData = {
  title: "사전 예약 시스템",
  description: "Express.js를 SpringBoot로 전환하여, 사용자 검증, 쿠폰 관리 서비스로 운영하는 축제 예약 시스템",
  period: "2024.9 - 2025.1",

  techStack: [
    "React",
    "SpringBoot",
    "Django",
    "Postgresql",
    "Docker-Compose",
    "Oracle Cloud",
    "Jenkins",
    "Nginx",
  ],

  objectives: [
    "축제 참여 인원 예측",
    "사전 예약 신청자에게 추첨권 코드 발급",
    "안정적인 서비스 제공을 위한 부하 분산",
  ],

  features: [
    "Nginx 로드밸런서를 통한 프론트엔드 서버 3대의 부하분산 (라운드로빈 방식)",
    "사용자 검증 서비스: 이메일과 전화번호 중복 체크 (SpringBoot)",
    "쿠폰 서비스: 등록 확인과 추첨권 발급/사용 관리 (SpringBoot)",
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
- Express.js 백엔드를  SpringBoot로 마이그레이션
- 오라클 무료 인스턴스를 사용해 DB를 분리하여 안정성 및 성능 향상

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
      title: "SpringBoot",
      items: [
        "사용자 검증 서비스",
        "쿠폰 관리 서비스",
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
        "Oracle Cloud",
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

알림 서비스 개선
• SpringBoot로 마이그레이션 하면서 기존의 Slack 알림 기능이 사라짐
• 컨트롤러를 추가해 Slack 알림 기능을 다시 구현`,

  reflection: `1. Django 어드민에서 대량 데이터 조회 시 발생하는 성능 저하 문제를 페이지네이션 구현과 DB 인덱스 최적화를 통해 개선했습니다.
  3. NestJS로 MSA 구조로 만들어봤으나, 복잡한 의존성 문제로 인해 유지보수가 어려워졌습니다.
  2. NestJS 이후 SpringBoot로 마이그레이션 해보면서 Spring에 대한 구조와 이해를 높일 수 있었습니다.`,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/reservation",
    demo: {
    url:"http://140.83.49.106:8000/",
    isEnabled: true
    }
  },

  overview: {
    description: "React와 SpringBoot로 구성된 백엔드, Django로 admin을 구성하고, Nginx 로드밸런서를 통해 고가용성을 확보한 시스템",
    diagram: overviewDiagram
  }
};