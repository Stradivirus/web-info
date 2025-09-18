// data.js
import { getDiagramImage, getProject8Image } from '../../../config/storage';
const overviewDiagram = getDiagramImage('Diagram8.png');

// 스크린샷 이미지를 Oracle Storage에서 가져오기
const captions = {
  '1': "Oracle Cloud 인스턴스 구성도",
  '2': "Jenkins 분산 빌드 노드 구성",
};

const screenshots = [1, 2].map(num => ({
  id: String(num),
  type: 'image',
  url: getProject8Image(`Screenshot${num}.png`),
  caption: captions[String(num)] || `스크린샷 ${num}`
}));

export const projectData = {
    title: "Oracle Cloud 인프라 관리 시스템",
    period: "2025.05 - 꾸준히 관리 중", 
    description: "Oracle Cloud 무료 인스턴스 4개로 구축한 엔터프라이즈급 인프라의 실제 운용 관리 경험과 자동화 시스템 구축",
 
    techStack: [
        "Oracle Cloud Infrastructure",
        "PostgreSQL",
        "Jenkins",
        "Docker & Docker Compose",
        "Nginx",
        "Caddy",
        "GitHub Actions",
        "Rocky Linux"
    ],
 
    techDetails: [
        {
            title: "Cloud Infrastructure",
            items: [
                "Oracle Cloud (Always Free Tier)",
                "4개 인스턴스 분산 구성",
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
            title: "CI/CD",
            items: [
                "Jenkins",
                "GitHub Actions",
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
        "CI/CD 파이프라인을 통한 완전 자동화된 운용 환경 구축", 
        "Git 기반 설정 관리를 통한 효율적인 운용 자동화"
    ],
 
    features: [
        "완전 무료 인프라 운용 ($0 비용으로 엔터프라이즈급 환경 운용)",
        "PostgreSQL 이중화를 통한 고가용성 데이터베이스 운용",
        "Docker Compose 분리로 서비스별 독립 배포 관리",
        "Caddy 자동 HTTPS로 간소화된 웹서버 운용",
    ],
 
    process: `1. 인프라 설계 및 인스턴스 구성
 - Oracle Cloud 무료 인스턴스 4개 역할 분담 설계
 - 메인 서버(3/18 ARM), Caddy 서버(1/1 AMD), DB Primary(1/6 ARM), DB Standby(1/1 AMD)
 
2. 데이터베이스 고가용성 구성
 - PostgreSQL Streaming Replication으로 Primary-Standby 구조 구축
 - 실시간 데이터 복제 및 장애 대응 체계 마련
 
3. CI/CD 및 자동화 시스템 구축
 - Jenkins 빌드 시스템으로 효율적인 배포 환경 구성
 - GitHub Actions 파이프라인 구축
 
4. 웹서버 및 운영 환경 최적화
 - Nginx에서 Caddy로 마이그레이션하여 자동 HTTPS 및 설정 간소화
 - Docker Compose 분리로 서비스별 독립 배포 체계 확립`,
 
    improvements: `1. 설정 관리 고도화 (계획)
 - 계획: 모든 인프라 설정을 코드로 관리 (Caddyfile, pg_hba.conf, pg_conf 등)
 
2. 자동화 확장 (계획)
 - Database 자동 페일오버 및 헬스체크 시스템 구축 예정
 - 백업 자동화 및 재해복구 시스템 구축 계획`,
 
    reflection: `1. 무료 리소스 활용한 효율적 인프라 운용
   - Oracle Cloud 무료 티어로 엔터프라이즈급 인프라 운용 성공
   - 제한된 리소스에서 최대 효율을 내는 설계의 중요성 체감
   - 비용 대비 성능 최적화 경험 습득

2. 실제 운영을 통한 DevOps 역량 강화
   - 단순 구축을 넘어 지속적인 운영과 개선 경험
   - 자동화를 통한 운영 효율성 향상과 안정성 확보
   - 실제 트러블슈팅과 문제 해결 역량 개발

3. 확장 가능한 아키텍처 설계 경험
   - 미래 확장을 고려한 유연한 인프라 구성
   - 각 컴포넌트 간 느슨한 결합을 통한 유지보수성 향상`,
 
    media: screenshots,
      
    links: {
        github: {
            url: "https://github.com/Stradivirus/oracle-cloud-infrastructure",
            isEnabled: false
        },
        demo: {
            url:"http://stradivirus.kro.kr",
            isEnabled: false
        }
    },
    
    overview: {
        description: "Oracle Cloud 무료 인스턴스 4개로 구축한 엔터프라이즈급 인프라의 실제 운용 관리 시스템",
        diagram: overviewDiagram
    }
};
