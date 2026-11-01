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
  period: "2025.05 - 지속적 아키텍처 고도화 및 운영 중", 
  description: "Oracle Cloud 무료 인스턴스 4대와 매니지드 DB를 조합해 역할 분리(WAS / DevOps / Gateway·모니터링 / 백업) 및 무중단 원격 배포를 구현한 하이브리드 인프라 구축 경험 (상세 구현 코드는 'Records' 메뉴 참조)",

  techStack: [
    "Oracle Cloud Infrastructure",
    "Oracle MySQL HeatWave",
    "Docker & Docker Compose",
    "Jenkins",
    "Prometheus & Grafana",
    "Caddy",
    "GitHub Actions & Crontab",
    "Rocky Linux"
  ],

  techDetails: [
    {
      title: "Cloud Infrastructure",
      items: [
        "Oracle Cloud (Always Free Tier)",
        "4개 인스턴스 역할별 완전 분리 (ARM/AMD 혼합)",
        "NSG(네트워크 보안 그룹) 및 내부 사설망 포트 격리"
      ]
    },
    {
      title: "Database", 
      items: [
        "PostgreSQL → Oracle MySQL HeatWave (MySQL 8.4) 이관",
        "백업 전용 인스턴스(1/1)를 통한 주기적 자동 백업 동기화",
        "서비스 특성에 맞춘 멀티 DB 운영 (MySQL HeatWave & MongoDB Atlas)"
      ]
    },
    {
      title: "DevOps & Monitoring",
      items: [
        "DevOps 전용 서버(1/4) 분리: Jenkins 빌드 후 SSH 파이프 원격 배포",
        "GitHub Actions (포트폴리오 정적 빌드/배포 자동화)",
        "Prometheus + Grafana + Node Exporter 4대 서버 통합 모니터링"
      ]
    },
    {
      title: "Container & Web Gateway",
      items: [
        "Docker Compose 기반 변경 감지 선택적 무중단 배포",
        "Caddy 리버스 프록시 게이트웨이 (단일 443 포트로 내부망 라우팅)",
        "자동 HTTPS(Let's Encrypt) 및 도메인 통합 관리"
      ]
    }
  ],

  objectives: [
    "무료 클라우드 리소스를 활용한 엔터프라이즈급 역할 분리 인프라 구축",
    "빌드 부하와 운영(WAS) 부하를 물리적으로 분리하여 서비스 안정성 극대화",
    "매니지드 DB(MySQL HeatWave) 이관 및 독립 백업 체계를 통한 데이터 안정성 확보",
    "단일 리버스 프록시 관문(Caddy)과 사설망 격리를 통한 보안성 강화"
  ],

  features: [
    "완전 무료 인프라 운용 ($0 비용으로 4대 VM + 매니지드 DB 엔터프라이즈 환경 구축)",
    "DevOps 서버에서 이미지 빌드 후 내부망 SSH 스트리밍으로 메인 서버 무중단 배포",
    "Oracle MySQL HeatWave 도입 및 4시간 주기 독립 백업 DB 동기화",
    "Caddy 리버스 프록시를 통해 외부 노출 포트를 443으로 단일화하고 내부 서비스 보호",
    "Prometheus & Grafana 기반 4대 인스턴스 실시간 메트릭 모니터링"
  ],

  process: `1. 인프라 재설계 및 4대 인스턴스 역할 완전 분리
 - Oracle Cloud 무료 인스턴스 4대의 아키텍처(ARM/AMD) 특성에 맞춘 역할 분담
 - 메인 서버(1/8 ARM, WAS 전용), DevOps 서버(1/4 ARM, Jenkins 빌드 & Prometheus 수집), 웹/모니터링 서버(1/1 AMD, Caddy 게이트웨이 & Grafana), 백업 DB 서버(1/1 AMD, MySQL 백업)
 
2. 데이터베이스 마이그레이션 및 백업 자동화
 - 기존 자체 구축 PostgreSQL(Primary-Standby)에서 Oracle MySQL HeatWave(MySQL 8.4)로 마이그레이션하여 VM 메모리 확보 및 관리 효율화
 - 기존 DB 서버였던 인스턴스(1/1 AMD)를 백업 전용 MySQL 서버로 전환하여 주기적 데이터 동기화(Sync) 구축
 
3. 빌드/배포 분리형 CI/CD 파이프라인 및 통합 모니터링 구축
 - 기존 메인 서버에서 함께 돌던 Jenkins와 Prometheus를 별도 DevOps 인스턴스(1/4 ARM)로 분리 이관하여 메인 서버 가용 메모리 80% 확보
 - Git diff 기반 변경 감지 후 DevOps 서버에서 Docker 이미지를 빌드하고, 내부망 SSH 파이프(docker save | ssh docker load)로 메인 서버에 이미지만 전송해 빌드 부하 없이 즉시 배포
 - 4대 서버 전체에 Node Exporter를 구성하고 Prometheus & Grafana로 실시간 리소스 모니터링 환경 완비
 
4. 웹 게이트웨이(Reverse Proxy) 및 보안 최적화
 - 웹서버(1/1 AMD)의 Caddy를 리버스 프록시 관문으로 활용하여 포트폴리오 서빙뿐만 아니라 내부망의 Grafana, Jenkins 대시보드 및 Webhook까지 단일 HTTPS(443)로 안전하게 라우팅
 - 외부 불필요 포트(8080 등)를 전면 차단하고 내부 사설망 통신으로 일원화`,

  improvements: `1. 설정 관리 고도화 (계획)
 - 계획: 모든 인프라 설정 및 서버 프로비저닝을 코드로 관리 (IaC 도입 검토)
 
2. 모니터링 알림 고도화 (계획)
 - Prometheus Alertmanager 및 Slack 연동을 통한 리소스 임계치 초과 실시간 알림 고도화
 - 백업 DB 동기화 상태 자동 검증 및 복구 리허설 자동화`,

  reflection: `1. 관심사 분리(Separation of Concerns)를 통한 인프라 안정성 극대화
   - 초기에는 메인 서버에 WAS, Jenkins, Prometheus를 함께 구동하고 VM에 직접 DB를 올렸으나, 빌드 시점의 CPU/메모리 스파이크가 운영 서비스에 영향을 줄 수 있음을 확인
   - DB를 Oracle MySQL HeatWave로 이관하면서 확보된 VM 자원을 DevOps 전용 서버(1/4)와 백업 DB 서버(1/1)로 재배치하여, 빌드 부하와 운영 환경을 물리적으로 완벽히 분리함

2. 리버스 프록시 게이트웨이와 사설망을 활용한 보안 아키텍처 체감
   - 각 서비스(Jenkins 8080, Grafana 3000 등)의 포트를 외부에 개별 개방할 때 발생하는 무차별 스캔 공격 위험을 인지
   - Caddy를 앞단 게이트웨이로 세워 443(HTTPS) 단일 출입구만 열어두고 내부 사설망(10.0.0.x)으로 프록시 처리함으로써 보안성과 도메인 관리 편의성을 동시에 달성함

3. 지속적인 리팩토링을 통한 실전 DevOps 역량 축적
   - 단순 최초 구축에 머무르지 않고 PostgreSQL → MySQL 이관, 무중단 원격 이미지 스트리밍 배포, 모니터링 체계 재구축까지 실제 운영 중인 서비스를 무중단으로 개편하며 실전 인프라 엔지니어링 역량을 크게 강화함`,

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