// data.js
import ArchitectureDiagram from '../../../assets/images/architecture/Project7-Architecture.png';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram7.png';

const architectureImg = require('../../../assets/images/architecture/Project7-Architecture.png');

// 스크린샷 이미지 로드
const imageContext = require.context('../../../assets/images/project/Project7', false, /Screenshot\d+\.png$/);
const screenshots = imageContext.keys().sort().map((path, index) => {
  const id = String(index + 1);
  const captions = {
    '1': "Grafana 대시보드",
    '2': "Prometheus 메트릭",
    '3': "Node Exporter 데이터"
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
    title: "Prometheus & Grafana Monitoring System",
    period: "2025.01 - 진행중", 
    description: "Prometheus와 Grafana를 활용한 서버 및 애플리케이션 모니터링 시스템",
 
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
            title: "Infrastructure",
            items: [
                "Docker",
                "Docker Compose",
                "Nginx"
            ]
        }
    ],
 
    objectives: [
        "서버 리소스 및 애플리케이션 상태 통합 모니터링",
        "알림 시스템 구축",
        "시각화된 대시보드 제공"
    ],
 
    features: [
        "서버 하드웨어 리소스 모니터링",
        "컨테이너 리소스 사용량 추적",
        "커스텀 메트릭 수집",
        "Slack 알림 연동",
        "실시간 메트릭 대시보드",
        "HTTP 엔드포인트 상태 모니터링"
    ],
 
    process: `1. 기본 인프라 구축
 - Prometheus + Grafana + Node Exporter 설치 및 구성
 - Docker Compose를 통한 컨테이너 오케스트레이션
 - 메트릭 수집 파이프라인 구성
 
 2. 모니터링 설정
 - Node Exporter를 통한 서버 메트릭 수집
 - cAdvisor를 통한 컨테이너 메트릭 수집
 - Blackbox Exporter로 HTTP 엔드포인트 모니터링
 
 3. 알림 시스템 구축
 - AlertManager 설정
 - Slack 웹훅 연동
 - 알림 규칙 및 임계치 설정`,
 
    improvements: `개선 계획
- Kubernetes 클러스터 모니터링 추가
- 커스텀 메트릭 익스포터 개발
- 로그 수집 및 분석을 위한 Loki 통합
- 메트릭 데이터 장기 보관을 위한 원격 스토리지 구성`,
 
    reflection: `1. Prometheus의 Pull 방식 아키텍처의 장단점 파악
2. 시계열 데이터베이스의 특성과 최적화 방안 학습
3. PromQL을 활용한 효율적인 메트릭 쿼리 작성 경험
4. 모니터링 시스템의 안정성과 가용성 확보의 중요성 인식`,
 
    architectureImg: ArchitectureDiagram,
    
    media: allMedia,
      
    links: {
        github: "https://github.com/Stradivirus/prometheus-grafana-monitoring",
        demo: "https://grafana.yourdomain.com"  // 실제 Grafana 대시보드 URL로 변경 필요
    },
    
    overview: {
        description: "Prometheus와 Grafana를 활용한 통합 모니터링 시스템",
        diagram: overviewDiagram
    }
};