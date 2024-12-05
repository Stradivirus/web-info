import ArchitectureDiagram from '../../../assets/images/architecture/Project2-Architecture.png';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram2.png';
// 아키텍처 이미지 불러오기를 screenshots와 통합
const architectureImg = require('../../../assets/images/architecture/Project2-Architecture.png');

// 스크린샷 이미지 불러오기
const imageContext = require.context('../../../assets/images/project/Project2/', false, /screenshot\d+\.png$/);
const screenshots = imageContext.keys()
  .map((path) => {
    const id = path.match(/screenshot(\d+)\.png$/)[1];
    const url = imageContext(path);
    const captions = {
      '1': "메인 페이지",
      '2': "NCA 시험 페이지",
      '3': "NCA 결과 및 오답 확인 페이지", 
      '4': "리눅스 마스터 1급 시험 페이지",
      '5': "리눅스 마스터 1급 결과 페이지"
    };
    return {
      id,
      type: 'image',  // 추가
      url,
      caption: captions[id] || `스크린샷 ${id}`
    };
  })
  .sort((a, b) => Number(a.id) - Number(b.id));

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
  title: "CBT 까짓것 내가 만든다",
  description: "3-Tier 아키텍처 기반의 시험 문제 관리 플랫폼 (Nginx + Django + PostgreSQL)",
  period: "2024.6 - 2024.6",

  techStack: [
    "Django",
    "Postgresql",
    "Docker-Compose",
    "GCP",
    "Jenkins"
  ],

  objectives: [
    "기존 TXT/PDF 형식의 시험 문제들을 실제 CBT(Computer Based Test) 환경으로 구현",
    "새로운 시험 문제를 추가하고 관리할 수 있는 확장 가능한 플랫폼 구축"
  ],

  features: [
    "텍스트 기반 시험 문제 데이터베이스 등록 및 관리",
    "랜덤 문제 출제 (20문제) 기능",
    "PDF 파일과 정답 데이터 연동 시스템",
    "시험 점수 확인 및 오답 확인 기능"
  ],

  process: `1. 기본 환경 구축
• Nginx, Django, PostgreSQL 연동 구성
• 메인 페이지 및 기본 라우팅 설정

2. 단계별 기능 구현
• TXT 파일 기반 문제 데이터베이스 등록 시스템 개발
• PDF 문제 답안 데이터베이스 등록 및 연동
• 랜덤 문제 출제 및 채점 시스템 구현

3. 시스템 배포
• Docker 컨테이너화 및 Docker-compose 구성
• GCP 환경 배포 및 서비스 실행`,

  techDetails: [
    {
      title: "Backend & Infrastructure",
      items: [
        "Nginx - 웹 서버",
        "Django - 웹 애플리케이션 프레임워크",
        "PostgreSQL - 관계형 데이터베이스",
        "Docker & Docker-compose - 컨테이너화",
        "Google Cloud Platform - 클라우드 서버",
        "Jenkins - Docker 이미지 자동 빌드 및 배포 자동화"
      ]
    }
  ],

  improvements: `데이터베이스 마이그레이션 계획: PostgreSQL(Docker) → MongoDB Atlas
• SQL과 쉘 스크립트 기반의 수동 데이터 관리를 MongoDB Atlas의 유연한 관리 방식으로 전환
• 텍스트 기반 데이터의 특성을 고려하여 MongoDB Atlas 무료 티어 활용으로 운영 효율화`,

  reflection: `기존 3-Tier 아키텍처를 Docker Compose로 전환하는 과정에서 Nginx, Django, PostgreSQL 컨테이너 간 네트워크 연동 문제를 해결하며 컨테이너 간 통신 구조에 대한 이해도를 높였습니다.`,

  architectureImg: ArchitectureDiagram,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/exam",
    demo: "http://34.64.132.7:8001/"
  },

  overview: {
    description: "Django와 Postgresql, Docker compose를 활용한 CBT 제작",
    diagram: overviewDiagram
  }
};