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
    "새로운 시험 문제를 쉽게 추가하고 관리할 수 있는 확장 가능한 플랫폼 구축",
    "사용자 친화적인 인터페이스를 통한 효율적인 학습 환경 제공"
  ],

  features: [
    "텍스트 기반 시험 문제 데이터베이스 등록 및 관리",
    "랜덤 문제 출제 (30문제) 기능",
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

  improvements: `현재 PostgreSQL(Docker)에서 MongoDB Atlas로의 마이그레이션 계획

데이터 관리 방식 개선
- 현재: 새로운 문제가 추가 될시 수동으로 SQL과 쉘 스크립트 기반 데이터 관리
- 개선: MongoDB를 통한 더 유연한 데이터 관리

리소스 최적화
- 텍스트 기반 데이터로 용량 효율적
- MongoDB Atlas 무료 티어로 충분히 운영 가능`,

  reflection: `이 프로젝트를 통해 Django와 PostgreSQL을 활용한 웹 애플리케이션 개발의 전반적인 과정을 경험할 수 있었습니다.
특히 Docker를 활용한 컨테이너화 과정에서 개발 환경과 배포 환경의 일관성 유지의 중요성을 배웠습니다. 
또한, 기존 학습 자료를 디지털화하는 과정에서 데이터 구조화의 중요성과 사용자 편의성을 고려한 기능 설계의 가치를 깊이 이해하게 되었습니다.`,

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