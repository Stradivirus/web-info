import { getDiagramImage, getProject4Image } from '../../../config/storage';
import type { MediaItem, ProjectData } from '../../../types/types';
const overviewDiagram = getDiagramImage('Diagram4.png');

const captions: Record<string, string> = {
  '1': "사전 예약 메인 페이지 & 로드밸런서 실시간 노드 표시",
  '2': "사전 등록 및 실시간 중복 검증 폼",
  '3': "모바일 QR 입장권(티켓) 발급 및 재조회 모달",
  '4': "실시간 확률형 경품 추첨(Lucky Draw) & 당첨 영수증",
  '5': "KPI 통계·차트·통합 검색 관리자 대시보드",
};


const screenshots: MediaItem[] = [1, 2, 3, 4, 5].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject4Image(`festival${num}.png`),
  caption: captions[String(num)] || `스크린샷 ${num}`
}));

const allMedia: MediaItem[] = [
  ...screenshots
];


export const projectData: ProjectData = {
  title: "가을 꽃 축제 사전 예약 & 럭키드로우 시스템",
  description: "Nginx 라운드로빈 로드밸런싱 실시간 시각화와 Spring Boot 3.5(Java 24) 기반 모바일 QR 티켓 발급·확률형 경품 추첨·통계 대시보드를 제공하는 축제 사전예약 플랫폼",
  period: "2024.09 - 2025.01 (2026.11 v3 전면 리메이크 및 고도화)",

  techStack: [
    "React 18 & TypeScript",
    "Vite & Tailwind CSS",
    "Spring Boot 3.5 (Java 24)",
    "Oracle MySQL HeatWave",
    "Nginx (Load Balancer)",
    "Docker & Docker Compose",
    "Jenkins (DevOps CI/CD)",
    "Oracle Cloud",
  ],

  objectives: [
    "Nginx 로드밸런서를 통한 프론트엔드 멀티 컨테이너(replicas: 2) 부하 분산 및 실시간 연결 노드 시각화",
    "사전 예약 완료 즉시 모바일 QR 입장권(패스) 발급 및 예약자 티켓 재조회 UX 제공",
    "단순 쿠폰 사용 처리를 확률 기반 1~4등 실시간 경품 추첨(Lucky Draw) 및 당첨 영수증 발급으로 고도화",
    "Spring Boot 단일 백엔드 통합 및 멀티스테이지 Docker 빌드를 통한 컨테이너 메모리 경량화",
  ],

  features: [
    "Nginx 라운드로빈 부하 분산 및 X-Served-By 헤더 기반 실시간 연결 노드(frontend-1 ↔ frontend-2) 상태 위젯",
    "모바일 QR 티켓 패스: 사전예약 즉시 QR코드·절취선 티켓 디자인·8자리 추첨 코드 발급 및 이메일/연락처 기반 티켓 재조회",
    "실시간 확률형 럭키드로우: SecureRandom 기반 1등(5%)~4등(50%) 슬롯 추첨 연출 및 기사용 코드 당첨 영수증 조회",
    "관리자 대시보드: 원클릭 데모 로그인, 4종 KPI 요약 카드, 일별 예약 추이 바 차트 & 경품 분포 도넛 차트, 통합 검색/필터링",
    "Spring Scheduler(@Scheduled) 기반 매일 자정 10건의 랜덤 사전예약 및 경품 추첨 데이터 자동 생성"
  ],

  process: `1. v1 초기 개발 (Django 모놀리식 아키텍처 - legacy/v1-django 브랜치 보관)
- React(CRA) + Django + PostgreSQL 기반으로 사전 예약 및 추첨권 발급 기본 기능 구현

2. v2 백엔드 전환 및 로드밸런서 도입 (legacy/v2-springboot 브랜치 보관)
- 직접 촬영한 가을 꽃 축제 사진으로 미디어 에셋을 전면 교체하여 저작권 이슈 해소
- Nginx 로드밸런서를 앞단에 배치하여 프론트엔드 컨테이너 라운드로빈 부하 분산 구현
- 핵심 예약·쿠폰 API를 Spring Boot로 마이그레이션하고 DB를 Oracle MySQL HeatWave로 이전

3. v3 풀스택 전면 리메이크 및 아키텍처 단일화 (현재 버전)
- 분리되어 있던 구 Django 어드민 컨테이너를 완전히 제거하고 Spring Boot 3.5(Java 24) 단일 백엔드로 통합
- 구버전 CRA(Node 14) 프론트엔드를 Vite + React 18 + TypeScript + Tailwind CSS 기반으로 전면 재구축
- 모바일 QR 티켓 발급/재조회, 1~4등 확률형 럭키드로우 추첨, 일일 10건 자동 시딩 스케줄러(@Scheduled), 차트 기반 관리자 대시보드 구현

4. 멀티스테이지 Docker 경량화 및 DevOps 원격 배포 파이프라인
- 백엔드(eclipse-temurin:24-jre-alpine)와 프론트엔드(node:20-alpine) 멀티스테이지 빌드를 적용해 컨테이너 리소스 점유율 대폭 절감
- DevOps 서버의 Jenkins에서 이미지를 빌드한 후 내부망 SSH 파이프로 메인 서버에 무중단 배포하는 CI/CD 파이프라인 구축`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React 18, TypeScript, Vite, Tailwind CSS",
        "프론트엔드 2개 컨테이너(replicas: 2) 구성 및 Nginx X-Served-By 헤더 실시간 파싱",
        "qrcode.react 기반 모바일 QR 입장권 생성 및 인터랙티브 호버 줌 포토 슬라이더"
      ]
    },
    {
      title: "Backend (Spring Boot)",
      items: [
        "Spring Boot 3.5.3 & Java 24 (JPA / Specification 동적 쿼리)",
        "실시간 중복 검증, 모바일 티켓 재조회, SecureRandom 확률형(1~4등) 경품 추첨 서비스",
        "Spring @Scheduled 기반 일일 10건 랜덤 사전예약/추첨 데이터 자동 생성 스케줄러"
      ]
    },
    {
      title: "Database",
      items: [
        "Oracle MySQL HeatWave (MySQL 8.4)",
        "일별 사전예약 추이 집계 및 경품 등급별 당첨 통계 그룹 쿼리 최적화"
      ]
    },
    {
      title: "Infrastructure & CI/CD",
      items: [
        "Nginx (Round-Robin Load Balancer & Reverse Proxy)",
        "Docker & Docker Compose (Multi-stage JRE/Node Alpine 경량 이미지)",
        "Jenkins (DevOps 전용 서버 분리 빌드 & SSH 원격 이미지 스트리밍 배포)",
        "Oracle Cloud Infrastructure"
      ]
    }
  ],

  improvements: `로드밸런서 가시성 및 컨테이너 스케일아웃 개선
• 기존에는 Nginx에서 X-Served-By 헤더만 반환하고 화면에 표시되지 않아 부하 분산 동작을 직관적으로 확인하기 어려웠음
• 프론트엔드 컨테이너를 2대(replicas: 2)로 스케일아웃하고, 상단 글로벌 바에 실시간 응답 노드(frontend-1 ↔ frontend-2)와 업스트림 상태를 시각화하여 포트폴리오 방문자가 즉시 라운드로빈 동작을 체감할 수 있도록 개선

컨테이너 메모리 다이어트 및 아키텍처 통합
• 기존 v2에서는 무거운 JDK 통째 이미지와 별도 Django 어드민 컨테이너로 인해 메모리 소모가 컸음
• Django 컨테이너를 제거해 Spring Boot 3.5(Java 24)로 관리자 통계/검색 API까지 일원화하고, JRE Alpine 멀티스테이지 빌드를 적용하여 메모리 사용량을 절반 이하로 절감

사용자 경험(UX) 및 포트폴리오 데모 완성도 고도화
• 단순 텍스트 코드 발급에서 '모바일 QR 패스 발급 + 내 티켓 재조회 + 100% 당첨 확률형 럭키드로우 + 당첨 영수증 카드' 흐름으로 전면 개편
• 매일 자정 10건씩 사전예약 및 추첨 데이터를 자동 누적하는 스케줄러와 원클릭 관리자 데모 로그인을 통해 언제 접속하더라도 풍부한 통계 차트를 확인할 수 있도록 구현`,

  reflection: `1. 아키텍처 변천사(v1 Django → v2 Spring Boot 전환 → v3 고도화 리메이크)를 GitHub 브랜치별로 보존하며, 왜 특정 기술을 도입하고 통합했는지 명확한 엔지니어링 근거를 확립할 수 있었습니다.
2. 프론트엔드와 백엔드로 나뉜 다중 서비스 환경에서 Nginx 로드밸런서의 DNS 해상도 및 업스트림 부하 분산 원리를 깊이 이해하고, 이를 UI 텔레메트리 배지로 시각화해 인프라 구성을 직관적으로 증명했습니다.
3. JPA Specification을 활용한 다중 조건(날짜·사용여부·경품등급·통합검색어) 동적 필터링과 멀티스테이지 Docker 이미지 경량화를 적용하며 실전 Spring Boot 백엔드 및 DevOps 역량을 한 단계 끌어올렸습니다.`,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/reservation",
    demo: {
      url:"https://reservation.stradivirus.workers.dev/",
      isEnabled: true
    }
  },

  overview: {
    description: "Nginx 라운드로빈 로드밸런서(React 2노드)와 Spring Boot 3.5(Java 24), Oracle MySQL HeatWave로 구축한 축제 사전예약·QR티켓·럭키드로우 시스템",
    diagram: overviewDiagram
  }
};