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
  description: "AWS S3를 활용한 서버리스 정적 웹 호스팅",
  period: "2024.11 - 2024.12",
  
  techStack: [
    "React",
    "AWS S3",
    "AWS Cloudfront",
    "GitHub Actions"
  ],

  objectives: [
    "프로젝트 경험과 기술 스택을 정리한 개인 개발 아카이브"
  ],

  features: [
    "GitHub Actions를 통한 CI/CD 구축",
    "AWS S3를 활용한 정적 웹사이트 호스팅"
  ],

  process: `1. 프로젝트 설계 및 구조화()
- 레이아웃 설계 및 컴포넌트 구조화

2. AWS 인프라 구축 및 배포 자동화
- S3 정적 웹 호스팅 구축
- CloudFront 배포 설정
- GitHub Actions를 활용한 조건부 자동 배포([] 태그 기반)

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
        "AWS S3",
        "GitHub Actions"
      ]
    }
  ],

  reflection: `1. 프로젝트별 데이터 구조 통합 과정에서 발생한 오류를 해결하며 리팩토링에 대한 경험을 얻었습니다.
2. GitHub Actions를 사용하여 조건부 배포와 버전 정보 업데이트를 구현함으로써 새로운 CI/CD 경험을 쌓았습니다.`,

  architectureImg: ArchitectureDiagram,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/web-info",
    demo: "https://d8d53oijcrep7.cloudfront.net/"
  },
  
  overview: {
    description: "서버리스로 구현한 포트폴리오 웹사이트 제작 프로젝트",
    diagram: overviewDiagram
  }
};