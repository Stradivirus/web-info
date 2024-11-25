import ArchitectureDiagram from '../../../assets/images/architecture/Project3-Architecture.png';
import demoVideo from '../../../assets/videos/project/Project3/chat-record.mp4';

// 스크린샷 이미지 로드
const imageContext = require.context('../../../assets/images/project/Project3', false, /screenshot\d+\.png$/);
const screenshots = imageContext.keys()
  .map((path) => {
    const id = path.match(/screenshot(\d+)\.png$/)[1];
    const captions = {
      '1': "로그인 페이지",
      '2': "채팅 작동 화면"
    };
    return {
      id,
      type: 'image',
      caption: captions[id] || `스크린샷 ${id}`,
      url: imageContext(path)
    };
  })
  .sort((a, b) => Number(a.id) - Number(b.id));

// 모든 미디어 (이미지 + 비디오)
const allMedia = [
  ...screenshots,
  {
    id: 'video1',
    type: 'video',
    caption: '채팅 데모 영상',
    url: demoVideo
  }
];

export const projectData = {
  title: "다소니",
  description: "사랑하는 사람을 뜻하는 순 우리말. 소중한 인연을 더욱 특별하게 만든다는 의미를 담았다.",
  period: "2024.8 - 2024.8",
  layoutStyle: 'wide', // 7:3 비율을 위한 설정

  techStack: [
    "React",
    "Fastapi",
    "Postgresql",
    "Redis",
    "Docker-compose",
    "GCP",
    "Jenkins"
  ],

  objectives: [
    "안정적이고 확장 가능한 실시간 채팅 플랫폼 구축",
    "Redis를 활용한 효율적인 메시지 캐싱 및 데이터 동기화 구현",
    "WebSocket을 통한 실시간 양방향 통신 시스템 구현"
  ],

  features: [
    "WebSocket 기반 실시간 채팅 기능",
    "Redis를 활용한 메시지 캐싱 및 실시간 데이터 동기화",
    "실시간 접속자 모니터링 및 관리",
    "스팸 메시지 감지 및 자동 차단 시스템",
    "메시지 영구 저장 및 이력 관리"
  ],

  process: `1. 기본 환경 구축
• 아키텍처 설계 및 기술 스택 선정
• Nginx, React, FastAPI, Redis, PostgreSQL 환경 구성
• WebSocket 기반 실시간 통신 구현
• Docker 기반 개발 환경 구성

2. 핵심 기능 구현
• WebSocket 기반 실시간 채팅 시스템 개발
• Redis 캐싱 시스템 구현
• PostgreSQL 파티셔닝을 통한 메시지 저장소 최적화
• 사용자 관리 및 스팸 차단 기능 구현

3. 배포 및 운영
• Docker-compose 기반 멀티 컨테이너 구성
• GCP 환경 배포 및 서비스 실행
• Jenkins를 통한 CI/CD 파이프라인 구축`,

  techDetails: [
    {
      title: "Frontend & Backend",
      items: [
        "React - 사용자 인터페이스 구현",
        "FastAPI - 비동기 백엔드 서버",
        "WebSocket - 실시간 양방향 통신"
      ]
    },
    {
      title: "Database & Cache",
      items: [
        "Redis - 실시간 데이터 캐싱 및 세션 관리",
        "PostgreSQL - 메시지 및 사용자 데이터 영구 저장"
      ]
    },
    {
      title: "Infrastructure",
      items: [
        "Nginx - 웹 서버 및 리버스 프록시",
        "Docker & Docker-compose - 컨테이너 관리",
        "GCP - 클라우드 인프라",
        "Jenkins - CI/CD 자동화"
      ]
    }
  ],

  issues: [
    {
      title: "백엔드 연동 이슈",
      problem: "FastAPI, Redis, PostgreSQL 동시 연동 시 발생한 데이터 동기화 문제",
      solution: "단계적 연동 접근 - FastAPI와 Redis 연동 후 PostgreSQL 연동 순차적 구현"
    }
  ],

  improvements: `인증 시스템 및 보안 강화:

• 사용자 인증 시스템 개선
- 현재: 세션 기반 인증 사용
- 개선: JWT 토큰 기반 인증 구현

• 보안 아키텍처 강화
- 토큰 기반 인증으로 보안 레벨 향상
- Kafka를 활용한 안전한 데이터 처리`,

  reflection: `이 프로젝트를 통해 실시간 통신 시스템의 설계와 구현에 대한 실질적인 경험을 쌓을 수 있었습니다.
특히 WebSocket과 Redis를 활용한 실시간 메시지 처리 시스템 구축 과정에서 많은 기술적 도전과 해결 과정이 있었습니다.
Docker를 활용한 멀티 컨테이너 환경 구성과 FastAPI의 비동기 처리를 통해 확장 가능한 아키텍처 설계의 중요성을 이해하게 되었고,
실시간 서비스의 안정성과 성능 최적화에 대한 깊은 통찰을 얻을 수 있었습니다.`,

  architectureImg: ArchitectureDiagram,
  
  media: allMedia,  // 이미지와 비디오를 포함한 모든 미디어

  links: {
    github: "https://github.com/stradivirus/chat",
    demo: "http://34.64.132.7"
  },

  overview: {
    description: "Websocket, redis를 활용한 채팅",
    diagram: "../../assets/images/overview/diagrams/Diagram3.png"
  }
};