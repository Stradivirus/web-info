import { getDiagramImage, getProject5Image } from '../../../config/storage';
import type { MediaItem, ProjectData } from '../../../types/types';
const overviewDiagram = getDiagramImage('Diagram5.png');

const captions: Record<string, string> = {
  '1': "시험 문제 출제 페이지",
  '2': "AWS에 등록된 파이썬 함수",
  '3': "MongoDB Atlas에 등록된 데이터"
};


const screenshots: MediaItem[] = [1, 2, 3].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject5Image(`Screenshot${num}.png`),
  caption: captions[String(num)] || `스크린샷 ${num}`
}));

const allMedia: MediaItem[] = [
  ...screenshots
];


export const projectData: ProjectData = {
  title: "서버리스 CBT",
  period: "2024.11 - 2024.11",
  description: "멀티 클라우드 기반의 시험 문제 출제 시스템",

  techStack: [
    "React",
    "Aws S3 + CloudFront",
    "Aws Lambda",
    "MongoDB Atlas",
    "GitHub Actions"
  ],

  objectives: [
    "기존의 CBT 사이트를 비용 절감과 운영 부담 최소화를 위해 멀티 클라우드로 구축",
  ],

  features: [
    "MongoDB Atlas에 저장된 시험 문제 풀에서 랜덤 출제",
  ],

  process: `환경 구축
• MongoDB Atlas 데이터베이스 등록
• Python 백엔드 서버 (AWS Lambda) 구축
• React + TypeScript 프론트엔드 개발
• GitHub Actions를 통한 조건부 자동 배포 구성

주요 기능 구현
• 시험 문제 출제 및 응답 처리 UI 개발`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React + Vite + TypeScript",
        "Aws S3 + CloudFront"
      ]
    },
    {
      title: "Backend",
      items: [
        "Aws Lambda",
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

  reflection: `1. 초기에는 GCP Cloud Run + Go 언어로 개발을 진행했습니다.
    2. AWS Lambda로 이전하는 과정에서 Go 언어 지원 제한으로 인해 Python으로 마이그레이션했습니다.
    3. AWS(CloudFront, S3)와 AWS Lambda, MongoDB Atlas를 연동하는 멀티 클라우드 아키텍처 구축 과정에서 각 서비스 간 권한 설정과 보안 구성에 어려움이 있었습니다.
    4. 인스턴스의 Docker 기반 서비스를 서버리스로 마이그레이션하여 인프라 운영 비용을 95% 이상 절감했습니다.
    5. AWS 무료 티어를 활용하여 CloudFront + S3, Lambda 기반의 완전 서버리스 아키텍처로 구축하여 운영 비용을 최소화했습니다.`,

  media: allMedia,

  links: {
    github: "https://github.com/Stradivirus/exam_serverless",
    demo: {
      url:"https://d21ut8ed26cdxg.cloudfront.net/",
      isEnabled: true
    }
  },

  overview: {
    description: "기존의 CBT를 멀티 클라우드로 재구성한 시스템",
    diagram: overviewDiagram
  }
};