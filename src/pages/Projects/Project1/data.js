import ArchitectureDiagram from '../../../assets/images/architecture/Project1-Architecture.png';

export const projectData = {
  title: "Portfolio Website",
  period: "2024.11 - 2024.11",
  
  techStack: [
    "React",
    "AWS S3",
    "AWS Cloudfront",
    "GitHub Actions"
  ],

  objectives: [
    "프로젝트 이력을 담은 포트폴리오 웹사이트"
  ],

  features: [
    "GitHub Actions를 통한 CI/CD 구축",
    "AWS S3를 활용한 정적 웹사이트 호스팅",
    "React Router를 이용한 SPA 구현"
  ],

  process: `1. 초기 레이아웃 설계 및 컴포넌트 구조화
2. 기본 구조 완성 및 테스트
3. AWS S3 버킷 생성 및 정적 웹 호스팅 설정
4. CloudFront 배포
5. GitHub Actions 워크플로우 작성 및 배포 자동화 구축`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React - 사용자 인터페이스 구축",
        "React Router - 클라이언트 사이드 라우팅",
        "CSS - 반응형 디자인 및 스타일링"
      ]
    },
    {
      title: "Deployment",
      items: [
        "AWS S3 - 정적 웹사이트 호스팅",
        "GitHub Actions - CI/CD 자동화"
      ]
    }
  ],

  improvements: `현재 각 프로젝트 별로 나누다보니 컴포넌트 부분이나 CSS부분은 중복되는 부분이 많음

• 코드 구조 개선
- 현재: 각 프로젝트마다 동일한 컴포넌트와 CSS 코드 중복
- 개선: 공통 컴포넌트 라이브러리 구축 및 스타일 시스템 구축

• 컴포넌트 분리
- ImageGallery, Modal 등 재사용 가능한 컴포넌트 추출
- 프로젝트별 고유 로직과 UI 분리

• CSS 최적화
- 공통 스타일을 Base CSS로 분리
- CSS-in-JS 또는 Styled Components 도입 검토
- 테일윈드 유틸리티 클래스 활용 확대`,

  reflection: `이 프로젝트를 통해 React 컴포넌트 구조화와 GitHub Actions를 활용한 CI/CD 파이프라인 구축 경험을 쌓을 수 있었습니다.
특히 AWS 서비스를 활용한 배포 과정에서 많은 것을 배웠습니다.`,

  architectureImg: ArchitectureDiagram,

  links: {
    github: "https://github.com/stradivirus/web-info",
    demo: "https://d8d53oijcrep7.cloudfront.net/"
  }
};