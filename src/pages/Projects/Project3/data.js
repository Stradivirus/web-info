import ArchitectureDiagram from '../../../assets/images/architecture/Project3-Architecture.png';
import demoVideo from '../../../assets/videos/project/Project3/chat-record.mp4';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram3.png';

// 아키텍처 이미지 불러오기를 screenshots와 통합
const architectureImg = require('../../../assets/images/architecture/Project3-Architecture.png');

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
  {
    id: 'architecture',
    type: 'image',
    url: architectureImg,
    caption: '시스템 아키텍처'
  },
  ...screenshots,
  {
    id: 'video1',
    type: 'video',
    caption: '채팅 데모 영상',
    url: demoVideo
  }
];

export const projectData = {
  title: "다소니 - 채팅 프로그램",
  description: "사랑하는 사람을 뜻하는 순 우리말. 소중한 인연을 더욱 특별하게 만든다는 의미를 담았다.",
  period: "2024.8 - 2024.8",
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
    "실시간 양방향 통신 기반의 채팅 서비스 구축"
  ],

  features: [
    "WebSocket 기반 실시간 채팅 기능",
    "Redis를 활용한 메시지 캐싱 및 실시간 데이터 동기화",
    "메시지 영구 저장 및 이력 관리"
  ],

  process: `1. 기본 환경 구축
• 가장 먼저 배운 프레임워크인 Django로 만들 생각이었지만 Fastapi라는 웹소켓에 어울리는 프레임워크로 변경
• 메시지 브로커로 Kafka와 Redis를 비교했으나, 실시간 채팅에 적합한 인메모리 기반의 가벼운 Redis 선택
• WebSocket 기반 실시간 통신 구현
• Docker 기반 개발 환경 구성

2. 핵심 기능 구현
• WebSocket 기반 실시간 채팅 시스템 개발
• Redis 캐싱 시스템 구현
• PostgreSQL 파티셔닝을 통한 메시지 저장소 최적화
• 사용자 관리 및 스팸 차단 기능 구현

3. 배포 및 운영
• GCP 환경 배포 및 서비스 실행
• Jenkins를 통한 CI/CD 파이프라인 구축`,

  techDetails: [
    {
      title: "Frontend & Backend",
      items: [
        "React",
        "FastAPI",
        "WebSocket"
      ]
    },
    {
      title: "Database & Cache",
      items: [
        "Redis",
        "PostgreSQL"
      ]
    },
    {
      title: "Infrastructure",
      items: [
        "Nginx",
        "Docker & Docker-compose",
        "GCP",
        "Jenkins"
      ]
    }
  ],
  improvements: `인증/보안 시스템 강화
• 세션 기반에서 JWT 기반 인증으로 전환
• Kafka 도입을 통한 데이터 처리 보안 강화

Redis 클러스터의 수동 설정 방식을 docker-compose와 Jenkins를 활용한 자동화 배포 시스템으로 개선하고자 합니다.

쿠버네티스(GKE) 기반 인프라 전환
• 마이크로서비스 아키텍처 도입
• 자동 스케일링 및 무중단 배포 체계 구축`,

  reflection: `1. 초기 아키텍처는 Kafka와 Redis를 함께 사용하도록 설계되었으나, 개발 과정에서 순환 참조로 인해 CPU 사용량이 지속적으로 100%에 달하는 문제가 발생했습니다. 이로 인해 아키텍처를 변경하여 Kafka를 제거하고 Redis Cluster로 대체하게 되었습니다.
  2. 채팅 내역 저장 과정에서 FastAPI에서 Redis와 PostgreSQL에 동시에 채팅 내역이 저장되는 문제를 FastAPI → Redis → PostgreSQL 순서로 데이터 흐름을 개선하여 해결했습니다.`,

  architectureImg: ArchitectureDiagram,
  
  media: allMedia,  // 이미지와 비디오를 포함한 모든 미디어

  links: {
    github: "https://github.com/stradivirus/chat",
    demo: "http://34.64.132.7"
  },

  overview: {
    description: "Websocket, redis를 활용한 채팅",
    diagram: overviewDiagram
  }
};