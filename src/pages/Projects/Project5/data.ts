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
  title: "멀티 클라우드 서버리스 자격증 CBT & 오답노트 플랫폼",
  period: "2024.11 - 2024.11 (2026.11 v2 UI/UX 및 쿼리 최적화 리메이크)",
  description: "AWS S3 + CloudFront, AWS Lambda(Python), MongoDB Atlas를 연동한 무서버(Serverless) 자격증 실전 모의고사 및 자동 오답노트 플랫폼",

  techStack: [
    "React 18 & TypeScript",
    "Vite & Tailwind CSS",
    "AWS S3 + CloudFront",
    "AWS Lambda (Python)",
    "MongoDB Atlas",
    "GitHub Actions"
  ],

  objectives: [
    "상시 구동 인스턴스 없이 AWS S3 + CloudFront, AWS Lambda, MongoDB Atlas를 결합한 멀티 클라우드 서버리스 아키텍처로 운영 비용 95% 이상 절감",
    "클라우드 자격증(NCA, AWS SAA, AWS SysOps)과 국가기술자격 PDF 기출문제(리눅스마스터 1급, 네트워크관리사 2급)를 아우르는 통합 실전 CBT 환경 구축",
    "AWS Lambda Warm Start 커넥션 풀링 및 MongoDB 집계($sample)·배치($in) 쿼리 최적화를 통한 채점 및 문제 출제 응답 속도 개선",
    "브라우저 LocalStorage 기반 자동 오답 노트 및 응시 히스토리 관리로 별도 DB 쓰기 비용 없이 개인화 학습 기능 제공"
  ],

  features: [
    "상단 Multi-Cloud Serverless 실시간 텔레메트리 바: S3+CloudFront · AWS Lambda · MongoDB Atlas 연결 상태 및 API 응답 지연시간(ms) 실시간 시각화",
    "클라우드 자격증 3종 실전 CBT 고사장: 1문제 집중 모드 ↔ 전체 스크롤 모드 전환, 우측 OMR 답안 팔레트, 재검토 북마크, 키보드 단축키(1~4, A~D, 방향키), 30분 타이머",
    "국가기술자격 PDF + OMR Split-Screen 뷰어: 좌측 PDF 시험지와 우측 OMR 답안 카드 분할 레이아웃, 키보드 1~4 입력 시 자동 다음 미응답 문항 스크롤 이동",
    "자동 오답 노트 & 성적 히스토리: 채점 시 오답 문항 자동 수집 및 재응시 정답 시 자동 졸업 처리, 정답 가리기/확인 복습 토글, 회차별 점수 기록 조회",
    "MongoDB Atlas $sample 랜덤 추출 및 $in 단일 배치 채점 쿼리를 통한 Lambda 실행 시간 단축"
  ],

  process: `1. 멀티 클라우드 서버리스 인프라 구축
- 정적 프론트엔드 에셋을 AWS S3에 호스팅하고 CloudFront CDN을 앞단에 배치하여 글로벌 캐싱 및 HTTPS 적용
- 문제 출제 및 채점 API를 AWS Lambda(Python) 함수로 구축하고 MongoDB Atlas 클라우드 데이터베이스와 연동
- GitHub Actions를 통해 커밋 메시지([up]) 기반 조건부 자동 빌드, S3 동기화 및 CloudFront 캐시 무효화 CI/CD 구성

2. AWS Lambda & MongoDB Atlas 쿼리 최적화 (v2 리메이크)
- Lambda 핸들러 외부 전역 싱글톤(_mongo_client, maxPoolSize=10) 커넥션 풀링을 적용하여 Warm Start 시 DB 재연결 오버헤드 제거
- 전체 컬렉션을 조회하던 기존 방식을 MongoDB $sample 집계 파이프라인으로 교체하여 20문항 랜덤 추출 속도 개선
- 채점 시 문항 수(20~100회)만큼 반복 호출되던 find_one(N+1 문제)을 $in 단일 배치 쿼리 1회로 압축

3. 실전형 CBT UI/UX 및 오답 노트 전면 리메이크 (v2 리메이크)
- Vite + React 18 + TypeScript + Tailwind CSS 기반 다크 테마 대시보드 및 실전 CBT 고사장 UI로 전면 개편
- 단일 문항 집중/전체 스크롤 전환, OMR 실시간 팔레트, 키보드 단축키 마킹, LocalStorage 기반 자동 오답 노트 및 성적 통계 기능 구현`,

  techDetails: [
    {
      title: "Frontend",
      items: [
        "React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons",
        "실전 CBT 고사장 UI (단일/스크롤 모드 전환, OMR 팔레트, 키보드 단축키, 타이머)",
        "PDF + OMR Split-Screen 뷰어 및 LocalStorage 기반 자동 오답 노트/성적 관리",
        "AWS S3 정적 웹 호스팅 + CloudFront CDN 배포"
      ]
    },
    {
      title: "Backend (Serverless)",
      items: [
        "AWS Lambda (Python 3) Function URL 기반 REST API 및 /health 상태 체크",
        "전역 MongoClient 싱글톤 커넥션 풀링으로 Lambda Warm Start 성능 극대화",
        "클라우드 객관식(base_handler) 및 PDF 기출(pdf_handler) 통합 채점 모듈"
      ]
    },
    {
      title: "Database",
      items: [
        "MongoDB Atlas (Cloud NoSQL Database)",
        "$sample 집계 파이프라인 기반 랜덤 문제 추출 및 $in 배치 쿼리 채점 최적화"
      ]
    },
    {
      title: "DevOps & CI/CD",
      items: [
        "GitHub Actions ([up] 커밋 트리거 기반 조건부 자동 배포 파이프라인)",
        "AWS S3 버킷 동기화 및 CloudFront 캐시 자동 무효화(Invalidation)"
      ]
    }
  ],
  improvements: `AWS Lambda 채점 N+1 쿼리 제거 및 DB 커넥션 풀링 적용
• 기존에는 50~100문항 PDF 시험 채점 시 문항마다 개별 find_one 쿼리를 호출하여 Lambda 실행 시간과 DB 네트워크 왕복 지연이 길었음
• $in 연산자를 활용한 단일 배치 쿼리로 1회 조회 후 메모리에서 채점하도록 개선하고, 전역 MongoClient 커넥션 풀링을 적용하여 응답 속도를 대폭 단축

실전 CBT 시험장 UX 및 개인화 학습(오답 노트) 도입
• 단순 문제 나열 화면에서 실제 자격증 CBT 고사장과 동일한 '1문제 집중/전체 스크롤 전환 + 우측 OMR 답안 팔레트 + 키보드 단축키(1~4)' 인터페이스로 고도화
• 읽기 전용 서버리스 DB의 장점을 유지하면서도 브라우저 LocalStorage를 활용해 틀린 문제를 자동 저장하고 복습할 수 있는 스마트 오답 노트를 구현`,

  reflection: `1. 초기에는 GCP Cloud Run + Go 언어로 개발을 진행한 뒤, AWS Lambda 환경으로 이전하면서 Python 런타임으로 마이그레이션하여 멀티 클라우드·다중 언어 서버리스 구축 경험을 쌓았습니다.
2. 상시 떠 있는 EC2/Docker 컨테이너 방식을 AWS S3 + CloudFront + Lambda + MongoDB Atlas 완전 서버리스 아키텍처로 전환하여 인프라 유지 비용을 95% 이상 절감했습니다.
3. 서버리스 환경에서 자주 발생하는 Cold/Warm Start 커넥션 관리 문제와 NoSQL N+1 쿼리 병목을 직접 프로파일링하고 $sample·$in 쿼리로 최적화하며 클라우드 네이티브 백엔드 설계 역량을 강화했습니다.`,

  media: allMedia,

  links: {
    github: "https://github.com/Stradivirus/exam_serverless",
    demo: {
      url:"https://d21ut8ed26cdxg.cloudfront.net/",
      isEnabled: true
    }
  },

  overview: {
    description: "AWS S3 + CloudFront, AWS Lambda(Python), MongoDB Atlas를 결합한 멀티 클라우드 서버리스 자격증 CBT 및 오답노트 플랫폼",
    diagram: overviewDiagram
  }
};