import { getDiagramImage, getProject2Image } from '../../../config/storage';
import type { MediaItem, ProjectData } from '../../../types/types';
const overviewDiagram = getDiagramImage('Diagram2.png');

const captions: Record<string, string> = {
  '1': "메인 페이지",
  '2': "NCA 시험 페이지",
  '3': "NCA 결과 및 오답 확인 페이지", 
  '4': "리눅스 마스터 1급 시험 페이지",
  '5': "리눅스 마스터 1급 결과 페이지"
};


const screenshots: MediaItem[] = [1, 2, 3, 4, 5].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject2Image(`screenshot${num}.png`),
  caption: captions[String(num)] || `스크린샷 ${num}`
}));

const allMedia: MediaItem[] = [
  ...screenshots
];


export const projectData: ProjectData = {
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
- 동일한 도메인을 서버리스 아키텍처로 재구현하여 운영 환경을 완전히 대체함
- 기존 3-Tier 아키텍처는 학습 및 레퍼런스 용도로만 유지`,

  reflection: `1. 교육 과정 중 처음으로 만들어 본 프로젝트라서 알파버전은 리눅스 쉘에서 작동 되는 것을 만들었고 새롭게 웹에 띄워보는 것을 목표로 해서 만들었습니다.
  2. 기존 3-Tier 아키텍처를 Docker Compose로 전환하는 과정에서 Nginx, Django, PostgreSQL 컨테이너 간 네트워크 연동 문제를 해결하며 컨테이너 간 통신 구조에 대한 이해도를 높였습니다.
  3. 초기 구조에서는 데이터 추가가 복잡하고 시간이 많이 소요되었으나, 서버리스 전환으로 이러한 문제점들이 해결되어 프로젝트를 성공적으로 마무리할 수 있었습니다.`,

  media: allMedia,

  links: {
    github: "https://github.com/stradivirus/exam",
    demo: {
      url: "http://34.64.206.210:8001/",
      isEnabled: false
    }
  },

  overview: {
    description: "Django와 Postgresql, Docker compose를 활용한 CBT 제작",
    diagram: overviewDiagram
  }
};