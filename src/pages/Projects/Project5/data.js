import ArchitectureDiagram from '../../../assets/images/architecture/Project5-Architecture.png';

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

export const projectData = {
    title: "시험 문제 출제 시스템",
    period: "2024.10 - 2024.11",
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
        "기존에 만들었던 CBT 사이트를 비용 절감을 위해 서버리스로 구축",  
        "서버리스 아키텍처를 통한 운영 부담 최소화",
        "멀티 클라우드 아키텍처를 활용한 비용 효율적인 시스템 구축"
    ],
  
    features: [
      "MongoDB Atlas에 저장된 시험 문제 풀에서 랜덤 출제",
      "AWS S3 정적 호스팅과 CloudFront를 통한 글로벌 배포",
      "GCP Cloud Run의 Go 서버를 통한 효율적인 API 처리",
      "GitHub Actions를 통한 자동화된 배포 프로세스"
    ],
  
    process: `1. 기본 환경 구축
- MongoDB atlas에 데이터 입력
- 기존의 Django 코드를 참고해서 GCP의 Cloud run에 Go로 구성된 백엔드 제작
- Vite + React + TypeScript 프런트엔드 개발 환경 구성
- GitHub Actions CI/CD 파이프라인 구성 및 S3와 CloudFront 연동

2. 핵심 기능 구현
- Frontend:
   - 시험 문제 출제 인터페이스 개발
   - 사용자 응답 처리 구현
- Backend:
   - Go API 서버 개발
   - MongoDB 연동 및 랜덤 문제 출제 로직 구현`,
  
    techDetails: [
      {
        title: "Frontend",
        items: [
          "Vite - 빌드 도구",
          "React + TypeScript - 사용자 인터페이스",
          "AWS S3 - 정적 호스팅",
          "CloudFront - CDN 배포"
        ]
      },
      {
        title: "Backend",
        items: [
          "Go - API 서버",
          "GCP Cloud Run - 서버리스 호스팅",
          "MongoDB Atlas - 데이터베이스"
        ]
      },
      {
        title: "DevOps",
        items: [
          "GitHub Actions - CI/CD",
          "WSL + VSCode - 개발 환경"
        ]
      }
    ],
  
    issues: [
      {
        title: "비용 최적화",
        problem: "기존 EC2 인스턴스 기반 구성의 높은 유지 비용",
        solution: "S3 정적 호스팅과 서버리스 아키텍처로 전환하여 70-80% 비용 절감"
      },
      {
        title: "배포 자동화",
        problem: "수동 배포로 인한 개발 생산성 저하",
        solution: "GitHub Actions를 통한 자동화된 배포 프로세스 구축"
      }
    ],
  
    improvements: `서비스 확장 계획:
- MongoDB Atlas에 시험 문제 추가`,
  
    reflection: `AWS와 GCP의 장점을 조합하여 비용 효율적이면서도 확장 가능한 시스템을 구축했습니다.
특히 서버리스 아키텍처를 통해 운영 부담을 최소화하면서도
안정적인 서비스를 제공할 수 있다는 것을 확인했습니다.
GitHub Actions를 통한 CI/CD 자동화로 개발 생산성도 크게 향상되었습니다.`,
  
    architectureImg: ArchitectureDiagram,

    media: screenshots,
  
    links: {
      github: "https://github.com/Stradivirus/exam_serverless",
      demo: "https://dc0lt4eu69rm8.cloudfront.net/"
    },

    overview: {
      description: "기존의 CBT를 멀티 클라우드로 재구성한 시스템",
      diagram: "../../assets/images/overview/diagrams/Diagram5.png"
    }
};