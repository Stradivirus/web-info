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

2. 단계별 기능 구현
• TXT 파일 기반 문제 데이터베이스 등록 시스템 개발
• PDF 문제 답안 데이터베이스 등록 및 연동
• 랜덤 문제 출제 및 채점 시스템 구현

3. 시스템 배포
• GCP 환경 배포 및 서비스 실행`,

  techDetails: [
    {
      title: "Backend & Infrastructure",
      items: [
        "Nginx",
        "Django",
        "PostgreSQL",
        "Docker & Docker-compose",
        "Google Cloud Platform",
        "Jenkins"
      ]
    }
  ],

  improvements: `업데이트 종료
- 서버리스 아키텍처로 성공적으로 전환 완료되어 더 이상의 업데이트 계획 없음
- 기존 시스템의 문제점들이 해결되어 프로젝트 종료`,

  reflection: `1. 교육 과정 중 처음으로 만들어 본 프로젝트라서 알파버전은 리눅스 쉘에서 작동 되는 것을 만들었고 새롭게 웹에 띄워보는 것을 목표로 해서 만들었습니다.
  2. 기존 3-Tier 아키텍처를 Docker Compose로 전환하는 과정에서 Nginx, Django, PostgreSQL 컨테이너 간 네트워크 연동 문제를 해결하며 컨테이너 간 통신 구조에 대한 이해도를 높였습니다.
  3. 초기 구조에서는 데이터 추가가 복잡하고 시간이 많이 소요되었으나, 서버리스 전환으로 이러한 문제점들이 해결되어 프로젝트를 성공적으로 마무리할 수 있었습니다.`,

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