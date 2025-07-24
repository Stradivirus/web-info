import ArchitectureDiagram from '../../../assets/images/architecture/Project1-Architecture.png';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram1.png';
const architectureImg = require('../../../assets/images/architecture/Project1-Architecture.png');

const allMedia = [
  {
    id: 'architecture',
    type: 'image',
    url: architectureImg,
    caption: '시스템 아키텍처'
  },
];

export const projectData = {
  title: "Portfolio Website",
  description: "Oracle Cloud를 활용한 정적 웹 호스팅",
  period: "2024.11 - 2025.07(꾸준히 업데이트 중)",
  
  techStack: [
    "React",
    "Oracle Cloud",
    "GitHub Actions"
  ],

  objectives: [
    "프로젝트 경험과 기술 스택을 정리한 개인 개발 아카이브"
  ],

  features: [
    "GitHub Actions를 통한 CI/CD 구축",
    "Oracle Cloud를 활용한 정적 웹사이트 호스팅"
  ],

  process: `1. 프로젝트 설계 및 구조화()
- 레이아웃 설계 및 컴포넌트 구조화

2. Oracle Cloud Free Tier를 활용한 정적 웹사이트 호스팅
- 기존 Aws 계정 만료로 인해 오라클 클라우드 무료 계정으로 이전
- GitHub Actions를 활용한 조건부 자동 배포([xxx] 태그 기반)

3. 성능 최적화 및 리팩토링
- 공통 컴포넌트 분리 및 코드 정리
- 데이터/UI 로직 분리 및 스타일 최적화
- 개발 과정 중 정리한 기술 문서를 네이버 블로그로 이전 및 lazy import 적용`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React",
        "React Router",
        "CSS"
      ]
    },
    {
      title: "Deployment",
      items: [
        "Oracle Cloud",
        "GitHub Actions"
      ]
    }
  ],

  reflection: `1. 프로젝트별 데이터 구조 통합 과정에서 발생한 오류를 해결하며 리팩토링에 대한 경험을 얻었습니다.
2. GitHub Actions를 사용하여 조건부 배포와 버전 정보 업데이트를 구현함으로써 새로운 CI/CD 경험을 쌓았습니다.
3. 현재 Aws 계정 만료로 인해 오라클 클라우드 무료 계정으로 이전하여 사용하고 있습니다.`,


  architectureImg: ArchitectureDiagram,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/web-info",
    demo: {
    url: "https://문쫑.홈페이지.한국",
    isEnabled: true
    }
  },
  
  overview: {
    description: "Oracle Cloud로 구현한 포트폴리오 웹사이트 제작 프로젝트",
    diagram: overviewDiagram
  }
};