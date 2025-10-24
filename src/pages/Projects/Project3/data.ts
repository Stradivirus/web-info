import { getDiagramImage, getVideoUrl, getProject3Image } from '../../../config/storage';

const demoVideo = getVideoUrl('chat-record.mp4');
const overviewDiagram = getDiagramImage('Diagram3.png');

const captions: Record<string, string> = {
  '1': "로그인 페이지",
};

export type MediaItem = {
  id: string;
  type: 'image' | 'video';
  caption: string;
  url: string;
};

const screenshots: MediaItem[] = [1].map(num => ({
  id: String(num),
  type: 'image',
  caption: captions[String(num)] || `스크린샷 ${num}`,
  url: getProject3Image(`screenshot${num}.png`)
}));

const allMedia: MediaItem[] = [
  ...screenshots,
  {
    id: 'video1',
    type: 'video',
    caption: '채팅 데모 영상',
    url: demoVideo
  }
];

export type ProjectLink = {
  github?: string;
  demo?: {
    url: string;
    isEnabled: boolean;
  };
};

export type TechDetail = {
  title: string;
  items: string[];
};

export type ProjectOverview = {
  description: string;
  diagram: string;
};

export type ProjectData = {
  title: string;
  description: string;
  period: string;
  techStack: string[];
  objectives: string[];
  features: string[];
  process: string;
  techDetails: TechDetail[];
  improvements?: string;
  reflection: string;
  media: MediaItem[];
  links: ProjectLink;
  overview: ProjectOverview;
};

export const projectData: ProjectData = {
  title: "다소니 - 채팅 프로그램",
  description: "사랑하는 사람을 뜻하는 순 우리말. 소중한 인연을 더욱 특별하게 만든다는 의미를 담았다.",
  period: "2024.8 - 2024.8",
  techStack: [
    "React",
    "Fastapi",
    "Postgresql",
    "Redis",
    "Docker-compose",
    "Oracle Cloud",
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
• 당시엔 Django만 배운 상태라 Django로 만들 생각이었지만 Fastapi라는 웹소켓에 어울리는 프레임워크로 변경
• 메시지 브로커로 Redis 도입
• WebSocket 기반 실시간 통신 구현
• Docker 기반 개발 환경 구성

2. 핵심 기능 구현
• WebSocket 기반 실시간 채팅 시스템 개발
• Redis 캐싱 시스템 구현
• PostgreSQL 파티셔닝을 통한 메시지 저장소 최적화
• 사용자 관리 및 스팸 차단 기능 구현

3. 배포 및 운영
• Oracle Cloud 환경 배포 및 서비스 실행
• Jenkins를 통한 CI/CD 파이프라인 구축
• 오라클 무료 인스턴스를 사용해 DB를 분리하여 안정성 및 성능 향상`,

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
        "Oracle Cloud",
        "Jenkins"
      ]
    }
  ],
  improvements: `인증/보안 시스템 강화
• 세션 기반에서 JWT 기반 인증으로 전환
• Kafka 도입을 통한 데이터 처리 보안 강화

Redis 클러스터 수동 설정의 자동화 구현
• Jenkins와 docker-compose를 활용한 CI/CD 파이프라인 구축

쿠버네티스(GKE) 기반 인프라 전환
• 마이크로서비스 아키텍처 도입
• 자동 스케일링 및 무중단 배포 체계 구축`,

  reflection: `1. fastapi와 postgresql을 캐싱 없이 바로 연결하니 부하 테스트 시 채팅 내역이 제대로 저장 되지 않은 문제가 생겨 redis와 kafka 도입을 결정했습니다.
  2. 수정된 아키텍처는 Kafka와 Redis를 함께 사용하도록 설계되었으나, 개발 과정에서 순환 참조로 인해 CPU 사용량이 지속적으로 100%에 달하는 문제가 발생했습니다. 
  3. 이로 인해 아키텍처를 변경하여 Kafka를 제거하고 Redis Cluster로 대체하게 되었습니다.
  4. 채팅 내역 저장 과정에서 FastAPI에서 Redis와 PostgreSQL에 동시에 채팅 내역이 저장되는 문제를 FastAPI → Redis → PostgreSQL 순서로 데이터 흐름을 개선하여 해결했습니다.
  5. 부하 테스트 시 로커스트를 이용해서 단순 접속은 950명까지 채팅은 110명까지 되는걸 확인했습니다.`,
  
  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/chat",
    demo: {
      url: "http://140.83.49.106/",
      isEnabled: true
    }
  },

  overview: {
    description: "Websocket, redis를 활용한 채팅",
    diagram: overviewDiagram
  }
};