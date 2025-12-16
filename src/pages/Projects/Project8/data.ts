import { getDiagramImage, getProject8Image } from '../../../config/storage';
import type { MediaItem, ProjectData } from '../../../types/types';
const overviewDiagram = getDiagramImage('Diagram8.png');

const captions: Record<string, string> = {
  '1': "Oracle Cloud 인스턴스 구성도",
  '2': "초기 Jenkins 분산 빌드 아키텍처 (Legacy)",
};

const screenshots: MediaItem[] = [1, 2].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject8Image(`Screenshot${num}.png`),
  caption: captions[String(num)] || `스크린샷 ${num}`
}));

export const projectData: ProjectData = {
  title: "Oracle Cloud 인프라 관리 시스템",
  period: "2025.05 - 꾸준히 관리 중", 
  // [수정] Records 페이지 참조 문구 추가
  description: "Oracle Cloud 무료 인스턴스 환경에서의 고가용성 인프라 구축 및 리소스 최적화 경험 (상세 구현 코드는 'Records' 메뉴 참조)",

  techStack: [
    "Oracle Cloud Infrastructure",
    "PostgreSQL",
    "Docker & Docker Compose",
    "Jenkins (Initial)",
    "Crontab (Current)",
    "Caddy",
    "GitHub Actions",
    "Rocky Linux"
  ],

  techDetails: [
    {
      title: "Cloud Infrastructure",
      items: [
        "Oracle Cloud (Always Free Tier)",
        "4개 인스턴스 분산 구성 (ARM/AMD 혼합)",
        "네트워크 보안 그룹 관리"
      ]
    },
    {
      title: "Database", 
      items: [
        "PostgreSQL Streaming Replication",
        "Primary-Standby 이중화 구성",
        "고가용성 운영 체계"
      ]
    },
    {
      title: "Automation & CI/CD",
      items: [
        "GitHub Actions (배포 자동화)",
        "Jenkins (초기 구축 경험, Records에 코드 보관)", // [수정] 안내 추가
        "Crontab (리소스 최적화를 위한 운영 전환)"
      ]
    },
    {
      title: "Container & Web",
      items: [
        "Docker Compose 분리 배포",
        "Nginx → Caddy 마이그레이션",
        "자동 HTTPS 및 도메인 관리"
      ]
    }
  ],

  objectives: [
    "무료 클라우드 리소스를 활용한 효율적인 인프라 운용 방안 구축",
    "고가용성 데이터베이스 시스템의 실제 운용 및 관리 경험",
    "리소스 제약 환경에서의 시스템 최적화 및 경량화",
    "Git 기반 설정 관리를 통한 효율적인 운용 자동화"
  ],

  features: [
    "완전 무료 인프라 운용 ($0 비용으로 엔터프라이즈급 환경 운용)",
    "PostgreSQL 이중화를 통한 고가용성 데이터베이스 운용",
    "Docker Compose 분리로 서비스별 독립 배포 관리",
    "Caddy 자동 HTTPS로 간소화된 웹서버 운용",
    "운영 자동화 스크립트를 통한 시스템 헬스체크 및 관리"
  ],

  process: `1. 인프라 설계 및 인스턴스 구성
 - Oracle Cloud 무료 인스턴스 4개 역할 분담 설계 (ARM/AMD 리소스 최적 분배)
 - 메인 서버(3/18 ARM), Caddy 서버(1/1 AMD), DB Primary(1/6 ARM), DB Standby(1/1 AMD)
 
2. 데이터베이스 고가용성 구성
 - PostgreSQL Streaming Replication으로 Primary-Standby 구조 구축
 - 실시간 데이터 복제 및 장애 대응 체계 마련
 
3. CI/CD 및 자동화 시스템 고도화
 - [Phase 1] Jenkins 분산 빌드 시스템 구축: 체계적인 배포 환경 구성
 - [Phase 2] GitHub Actions 전환: 배포 파이프라인 경량화
 - [Phase 3] 운영 자동화 최적화: Jenkins Agent의 메모리 점유율 문제를 해결하기 위해 Crontab 기반의 관리 스크립트로 전환 (상세 코드는 Records 메뉴의 'Jenkins 기반 서버 운영 자동화' 참조)
 
4. 웹서버 및 운영 환경 최적화
 - Nginx에서 Caddy로 마이그레이션하여 자동 HTTPS 및 설정 간소화
 - Docker Compose 분리로 서비스별 독립 배포 체계 확립`,

  improvements: `1. 설정 관리 고도화 (계획)
 - 계획: 모든 인프라 설정을 코드로 관리 (IaC 도입 검토)
 
2. 자동화 확장 (계획)
 - Database 자동 페일오버 및 헬스체크 시스템 고도화
 - 백업 자동화 및 재해복구 시스템 구축 계획`,

  reflection: `1. 무료 리소스 활용한 효율적 인프라 운용
   - Oracle Cloud 무료 티어로 엔터프라이즈급 인프라 운용 성공
   - 제한된 리소스에서 최대 효율을 내는 설계의 중요성 체감

2. 리소스 한계 극복을 위한 과감한 아키텍처 변경 (Refactoring)
   - 초기에는 Jenkins로 자동화를 구축했으나, Java 기반의 무거운 리소스 점유로 인해 인스턴스 부하 발생
   - 이를 해결하기 위해 CI/CD는 GitHub Actions로, 시스템 관리는 OS Native한 Crontab 스크립트로 전환
   - 결과적으로 메모리 점유율을 대폭 낮추고 시스템 안정성을 확보함

3. 실제 운영을 통한 DevOps 역량 강화
   - 단순 구축을 넘어 지속적인 운영과 트러블슈팅 경험 축적
   - 상황에 맞는 적절한 도구 선택의 중요성을 배움`,

  media: screenshots,
    
  links: {
    github: {
      url: "https://github.com/Stradivirus/oracle-cloud-infrastructure",
      isEnabled: false
    }
  },
  
  overview: {
    description: "Oracle Cloud 무료 인스턴스 4개로 구축한 엔터프라이즈급 인프라 및 최적화된 운영 시스템",
    diagram: overviewDiagram
  }
};