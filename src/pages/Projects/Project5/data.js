import ArchitectureDiagram from '../../../assets/images/architecture/Project5-Architecture.png';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram5.png';
// 아키텍처 이미지 불러오기를 screenshots와 통합
const architectureImg = require('../../../assets/images/architecture/Project5-Architecture.png');

// 스크린샷 이미지 로드
const imageContext = require.context('../../../assets/images/project/Project5', false, /Screenshot\d+\.png$/);
const screenshots = imageContext.keys().sort().map((path, index) => {
  const id = String(index + 1);
  const captions = {
    '1': "시험 문제 출제 페이지",
    '2': "Cloud Run에 등록된 Go 함수",
    '3': "MongoDB Atlas에 등록된 데이터"
  };

  return {
    id,
    type: 'image',
    url: imageContext(path),
    caption: captions[id] || `스크린샷 ${id}`
  };
});

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
    title: "서버리스 CBT",
    period: "2024.11 - 2024.11",
    description: "멀티 클라우드 기반의 시험 문제 출제 시스템",
  
    techStack: [
      "Vite",
      "React",
      "TypeScript",
      "Go",
      "AWS S3",
      "AWS CloudFront",
      "GCP Cloud Run",
      "MongoDB Atlas",
      "GitHub Actions"  
    ],
  
    objectives: [
        "기존의 CBT 사이트를 비용 절감과 운영 부담 최소화를 위해 멀티 클라우드 서버리스로 구축",  
    ],
  
    features: [
      "MongoDB Atlas에 저장된 시험 문제 풀에서 랜덤 출제",
    ],
  
    process: `환경 구축
• MongoDB Atlas 데이터베이스 등록
• Go 백엔드 서버 (GCP Cloud Run) 구축
• React + TypeScript 프론트엔드 개발
• GitHub Actions를 통한 조건부 자동 배포 구성

주요 기능 구현
• 시험 문제 출제 및 응답 처리 UI 개발`,
  
    techDetails: [
      {
        title: "Frontend",
        items: [
          "Vite",
          "React + TypeScript",
          "AWS S3",
          "CloudFront"
        ]
      },
      {
        title: "Backend",
        items: [
          "Go",
          "GCP Cloud Run",
          "MongoDB Atlas"
        ]
      },
      {
        title: "DevOps",
        items: [
          "GitHub Actions",
          "WSL + VSCode"
        ]
      }
    ],
    improvements: `서비스 확장 계획:
- MongoDB Atlas에 시험 문제 추가`,
  
    reflection: `1. Go 언어를 처음 도입하는 과정에서 새로운 언어의 동시성 처리와 문법 패턴을 익히는 데 어려움이 있었습니다.
2. AWS(CloudFront, S3)와 GCP(Cloud Run), MongoDB Atlas를 연동하는 멀티 클라우드 아키텍처 구축 과정에서 각 서비스 간 통신 설정과 보안 구성에 어려움이 있었습니다.
3. EC2 인스턴스의 Docker 기반 서비스를 서버리스로 마이그레이션하여 인프라 운영 비용을 95% 이상 절감했습니다.`,
  
    architectureImg: ArchitectureDiagram,

    media: allMedia,
  
    links: {
      github: "https://github.com/Stradivirus/exam_serverless",
      demo: {
      url:"http://217.142.233.232:8000",
      isEnabled: true
    }
    },

    overview: {
      description: "기존의 CBT를 멀티 클라우드로 재구성한 시스템",
      diagram: overviewDiagram
    }
};