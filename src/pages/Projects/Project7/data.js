// data.js
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram7.png';

const imageContext = require.context('../../../assets/images/project/Project7', false, /Screenshot\d+\.png$/);
const screenshots = imageContext.keys().sort().map((path, index) => {
  const id = String(index + 1);
  const captions = {
    '1': "Grafana 대시보드",
    '2': "Prometheus 타겟 상태",
  };

  return {
    id,
    type: 'image',
    url: imageContext(path),
    caption: captions[id] || `스크린샷 ${id}`
  };
});

export const projectData = {
    title: "Prometheus & Grafana Monitoring System",
    period: "2025.01 - 진행중", 
    description: "기존 PHP/Kafka 기반 모니터링의 한계를 극복하기 위해 구축한 Prometheus와 Grafana 기반의 전문적인 통합 모니터링 시스템",
 
    techStack: [
        "Prometheus",
        "Grafana",
        "Node Exporter",
        "cAdvisor",
        "Docker",
        "AlertManager"
    ],
 
    techDetails: [
        {
            title: "Monitoring",
            items: [
                "Prometheus",
                "Grafana",
                "AlertManager"
            ]
        },
        {
            title: "Exporters", 
            items: [
                "Node Exporter",
                "cAdvisor",
                "Blackbox Exporter"
            ]
        },
        {
            title: "Security",
            items: [
                "Grafana Anonymous Access",
                "Admin Authentication",
                "RBAC"
            ]
        }
    ],
 
    objectives: [
        "기존 PHP/Kafka 기반 모니터링의 제한된 메트릭 수집 한계 극복",
        "더 전문적이고 확장 가능한 모니터링 시스템 구축",
        "세밀한 시스템 메트릭 수집 및 시각화",
        "읽기 전용 대시보드의 공개 접근성 확보"
    ],
 
    features: [
        "익명 사용자를 위한 읽기 전용 대시보드",
        "관리자 전용 대시보드 수정 기능",
        "서버 하드웨어 리소스 모니터링",
        "도커 컨테이너별 상세 메트릭",
        "커스텀 메트릭 수집",
        "실시간 메트릭 대시보드",
    ],
 
    process: `1. 기존 시스템 분석 및 설계
 - PHP/Kafka 기반 시스템의 한계점 분석
 - Prometheus + Grafana 기반 새로운 아키텍처 설계
 
2. 기본 인프라 구축
 - Prometheus + Grafana + Node Exporter 설치 및 구성
 - Docker Compose를 통한 컨테이너 오케스트레이션
 - 메트릭 수집 파이프라인 구성
 
3. 보안 및 접근 제어 구현
 - 익명 사용자용 읽기 전용 접근 설정
 - 관리자 인증 및 권한 설정
 - RBAC 구성`,
 
    improvements: `- 모니터링 시스템을 별도 인스턴스로 분리하여 시스템 자원 효율화
 현재: 애플리케이션과 모니터링 시스템이 동일 인스턴스에서 실행되어 리소스 경합 발생
 개선: 모니터링 전용 인스턴스를 구성하여 안정성과 성능 향상 도모
- 메트릭 데이터 장기 보관을 위한 원격 스토리지 구성
- 로그 통합을 위한 Loki 도입 검토
- 슬랙 알림 추가
- 커스텀 대시보드 템플릿 개발`,
 
    reflection: `1. 기존 PHP/Kafka 시스템 대비 수집 가능한 메트릭의 다양성과 깊이가 크게 향상
2. 전문적인 모니터링 도구 사용으로 운영 효율성 증가
3. 보안과 접근성의 균형 있는 설계의 중요성 인식
4. CPU 사용량 등 메트릭 데이터가 기존 시스템과 다르게 측정되는 현상 발견
   - 원인: 기존 시스템은 단순 시스템 API 호출로 데이터 수집
   - Prometheus는 다양한 시스템 지표를 동시에 수집하는 과정에서 추가적인 시스템 리소스 사용
   - 더 정확하고 포괄적인 모니터링을 위한 트레이드오프로 이해 및 수용`,
 
    media: screenshots,
      
    links: {
        github: "https://github.com/Stradivirus/monitoring-prometheus-system",
        demo: {
        url:"http://34.64.58.11:8000/",
        isEnabled: false
        }
    },
    
    overview: {
        description: "기존 모니터링 시스템의 한계를 극복하기 위해 구축한 Prometheus와 Grafana 기반의 전문적인 통합 모니터링 시스템",
        diagram: overviewDiagram
    }
};