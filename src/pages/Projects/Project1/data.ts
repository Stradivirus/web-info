import { getDiagramImage } from '../../../config/storage';
import type { MediaItem, ProjectData } from '../../../types/types';

const overviewDiagram = getDiagramImage('Diagram1.png');

const allMedia: MediaItem[] = [];

export const projectData: ProjectData = {
  title: "Portfolio Website (기술 아카이브 & 포트폴리오)",
  description: "Oracle Cloud(Caddy + Object Storage)와 시맨틱 버전 자동화 CI/CD 기반의 개인 기술 아카이브 및 포트폴리오 플랫폼",
  period: "2024.11 - 현재 (지속적 리팩토링 및 아키텍처 고도화 중)",
  
  techStack: [
    "React 18 & TypeScript",
    "Vite & Tailwind CSS",
    "Caddy (Reverse Proxy & HTTPS)",
    "Oracle Cloud (VM & Object Storage)",
    "GitHub Actions (Semantic Versioning)"
  ],

  objectives: [
    "프로젝트 아키텍처 변천사와 인프라·풀스택 트러블슈팅 기록(Study Records)을 체계적으로 통합한 기술 아카이브 구축",
    "데이터(Blueprint)와 UI 컴포넌트를 엄격히 분리하여 새로운 프로젝트 및 학습 기록 추가 시 유지보수 비용 최소화",
    "대용량 미디어 에셋을 Oracle Cloud Object Storage로 분리하고 Caddy 차등 캐싱을 적용해 초기 로딩 속도 및 빌드 성능 극대화",
    "커밋 메시지 태그([100], [010], [001]) 기반 시맨틱 버전 자동 관리 및 무중단 배포 파이프라인 구현"
  ],

  features: [
    "Blueprint 기반 데이터-UI 분리 설계: 공통 ProjectDetail 렌더러와 타입 안전(TypeScript) 데이터 모듈 구조화",
    "Study Records 기술 문서 시스템: 인프라·DevOps·DB·풀스택 14개 핵심 엔지니어링 주제를 아코디언 뷰와 코드 토글로 제공",
    "Oracle Cloud Object Storage 연동: 중앙화된 URL 헬퍼(storage.ts)로 이미지·다이어그램·데모 영상을 분리해 번들 경량화",
    "Caddy 웹서버 자동 HTTPS(한글 도메인 Punycode) 및 파일 유형별 차등 Cache-Control(HTML no-cache, 이미지 2주, 영상 1달) 최적화",
    "커밋 태그([100]/[010]/[001]) 기반 자동 시맨틱 버저닝(Major/Minor/Patch), dev→master 자동 병합 및 빌드 시각(KST) 자동 주입"
  ],

  process: `1. 프론트엔드 모던화 및 Blueprint 아키텍처 수립
- 초기 CRA(JavaScript) 환경에서 Vite + React 18 + TypeScript + Tailwind CSS + SCSS 환경으로 전면 마이그레이션
- 프로젝트 상세 페이지와 Study Records 페이지의 UI 로직과 데이터를 분리하여 확장성 및 재사용성 확보
- React.lazy 및 Suspense를 활용한 라우트 단위 코드 스플리팅 적용

2. Oracle Cloud Object Storage 정적 에셋 분리 마이그레이션
- 기존 Git 저장소와 React 번들에 포함되어 있던 고해상도 스크린샷·아키텍처 다이어그램·데모 비디오를 Oracle Cloud Object Storage 퍼블릭 버킷으로 이관
- src/config/storage.ts를 통해 도메인 및 버킷 경로를 중앙 관리하여 빌드 시간을 1분 이상 단축하고 번들 크기를 대폭 감소시킴

3. Nginx → Caddy 웹서버 전환 및 캐싱/보안 고도화
- 한글 도메인(문쫑.홈페이지.한국)에 대한 Let's Encrypt SSL 인증서 발급·갱신 자동화를 위해 Caddy 도입
- 정적 파일 확장자별 차등 캐싱(CSS/JS 24시간, 이미지/폰트 2주, 동영상 1달, HTML 캐시 금지) 및 Gzip 압축을 적용해 재방문 시 Object Storage API 호출 최소화

4. 시맨틱 버전 자동화 CI/CD 파이프라인 구축 (GitHub Actions)
- dev 브랜치 푸시 시 커밋 메시지의 [100](Major), [010](Minor), [001](Patch) 태그를 감지해 package.json 버전을 자동 계산·커밋하고 master 브랜치로 자동 병합
- 한국 시간(Asia/Seoul) 기준 배포 시각을 VITE_BUILD_TIME 환경변수로 주입해 빌드한 뒤, SCP를 통해 Oracle Cloud 웹서버(/var/web/portfolio)로 자동 배포`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React 18, TypeScript, Vite 7, React Router v6",
        "Tailwind CSS, SCSS, Lucide Icons",
        "React.lazy 코드 스플리팅 & 커스텀 훅(useRecords) 기반 상태 관리"
      ]
    },
    {
      title: "Cloud & Storage",
      items: [
        "Oracle Cloud Infrastructure (Compute VM - Rocky Linux)",
        "Oracle Cloud Object Storage (미디어·다이어그램·비디오 전용 버킷 분리)",
        "storage.ts 중앙화된 에셋 라우팅 유틸리티"
      ]
    },
    {
      title: "Web Server (Gateway)",
      items: [
        "Caddy Web Server (자동 HTTPS / Punycode 한글 도메인 지원)",
        "파일 변경 주기에 맞춘 차등 Cache-Control 헤더 및 Gzip 압축",
        "X-Content-Type-Options, X-Frame-Options 등 웹 보안 헤더 적용"
      ]
    },
    {
      title: "CI/CD & DevOps",
      items: [
        "GitHub Actions ([100]/[010]/[001] 태그 기반 조건부 자동 배포)",
        "dev → master 브랜치 자동 병합 및 package.json 버전 자동 태깅",
        "KST 빌드 타임스탬프 환경변수 자동 주입 및 SSH/SCP 무중단 배포"
      ]
    }
  ],

  improvements: `대용량 정적 에셋 분리를 통한 빌드 속도 및 초기 로딩 개선
• 기존에는 프로젝트 스크린샷과 시연 영상이 로컬 폴더에 포함되어 있어 Git 클론과 Vite 빌드 시간이 길어지는 문제가 있었음
• 모든 미디어 에셋을 Oracle Cloud Object Storage로 분리하고 Caddy의 차등 캐시 정책을 결합하여 빌드 시간을 1분 이상 단축하고 재방문 시 빠른 로딩 속도를 확보함

커밋 태그 기반 시맨틱 버저닝 및 브랜치 전략 자동화
• 단순 푸시 배포 시 사소한 오타 수정에도 불필요한 배포가 발생하거나 버전 이력 관리가 누락되는 불편함이 있었음
• 커밋 메시지에 [100], [010], [001] 태그가 있을 때만 배포가 실행되고, Major/Minor/Patch 버전 계산부터 master 병합, 배포 시각 표시까지 전 과정을 자동화하여 운영 효율을 높임`,

  reflection: `1. 포트폴리오 사이트 자체를 하나의 실전 프로덕트로 바라보고, CRA에서 Vite + TypeScript 전환, 컴포넌트 추상화, 스토리지 분리까지 지속적으로 리팩토링하며 프론트엔드 아키텍처 설계 역량을 다졌습니다.
2. AWS 프리티어 만료 후 Oracle Cloud로 인프라를 이전하면서 VM 웹서버(Caddy)와 Object Storage를 결합해 비용($0)과 성능을 모두 잡는 클라우드 마이그레이션 경험을 쌓았습니다.
3. GitHub Actions에서 Git 브랜치 제어, 버전 파싱 스크립트, 동적 환경변수 주입, 원격 SSH 배포를 직접 구현하며 맞춤형 CI/CD 워크플로우 설계 능력을 체득했습니다.`,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/web-info",
    demo: {
      url: "https://stradivirus.com",
      isEnabled: true
    }
  },
  
  overview: {
    description: "Oracle Cloud(Caddy + Object Storage)와 시맨틱 버전 자동화 CI/CD로 구축한 기술 아카이브 및 포트폴리오 플랫폼",
    diagram: overviewDiagram
  }
};