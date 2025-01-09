import ArchitectureDiagram from '../../../assets/images/architecture/Project6-Architecture.png';
import overviewDiagram from '../../../assets/images/overview/diagrams/Diagram6.png';
// 아키텍처 이미지 불러오기를 screenshots와 통합
const architectureImg = require('../../../assets/images/architecture/Project6-Architecture.png');

// 스크린샷 이미지 로드
const imageContext = require.context('../../../assets/images/project/Project6', false, /Screenshot\d+\.png$/);
const screenshots = imageContext.keys().sort().map((path, index) => {
  const id = String(index + 1);
  const captions = {
    '1': "프론트 페이지",
    '2': "MongoDB Atlas에 등록된 데이터"
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
    title: "Docker Container Monitoring System",
    period: "2025.01 - 2025.01", 
    description: "Docker 컨테이너의 리소스 사용량을 1분마다 모니터링하는 시스템",
 
    techStack: [
        "Vue.js",
        "PHP",
        "MongoDB Atlas",
        "Apache Kafka", 
        "Docker",
        "Jenkins"
    ],
 
    techDetails: [
        {
            title: "Frontend",
            items: [
                "Vue.js",
                "Server-Sent Events (SSE)"
            ]
        },
        {
            title: "Backend", 
            items: [
                "PHP",
                "Docker Socket API"
            ]
        },
        {
            title: "Infrastructure",
            items: [
                "MongoDB Atlas",
                "Apache Kafka",
                "Docker" ,
                "Jenkins"
            ]
        }
    ],
 
    objectives: [
        "도커 컨테이너의 리소스 모니터링 시스템 구축",
        "모니터링 대시보드 제공"
    ],
 
    features: [
        "컨테이너 그룹별 대시보드 뷰",
        "CPU, 메모리, 네트워크, 디스크 메트릭",
        "Health Status 모니터링",
        "자동 60초 갱신",
        "Running/Stopped 상태 표시"
    ],
 
    process: `1. 기본 환경 구축
 - MongoDB Atlas + Kafka 기반 메트릭 파이프라인 구축 
 - 도커 소켓 연동 및 메트릭 수집기 개발
 - API 엔드포인트 구현
 
 2. 핵심 기능 구현
 - 컨테이너 메트릭 수집 시스템 구현
 - Kafka Producer/Consumer 구현
 - MongoDB TTL(3일) 인덱스 설정
 
 3. 실시간 처리
 - SSE 기반 실시간 스트리밍 구현
 - 60초 주기 데이터 갱신
 - 에러 처리 및 재연결 로직 구현`,
 
    improvements: `개선 계획
- 리소스 사용량이 임계치 초과 시 알림 기능 추가
- 현재 1분 단위의 데이터만 제공하는 것을 개선하여 1시간/1일/3일 단위의 히스토리 데이터 시각화 구현 예정
- PHP의 동시성 처리 한계를 개선하기 위해 Go나 Python의 비동기 처리 기반으로 재구현 예정`,
 
    reflection: `1. 모니터링 시스템 자체를 모니터링 대상에 포함시켰을 때 순환 참조로 인한 CPU 사용률 142% 측정 이슈 발견
2. 모니터링 대상에서 모니터링 시스템 자체는 제외하도록 개선
3. 데이터 수집 주기(1분)와 프론트엔드 갱신 주기(30초)의 불일치로 인한 오류를 1분으로 통일하여 해결`,
 
    architectureImg: ArchitectureDiagram,
    
    media: allMedia,
      
    links: {
        github: "https://github.com/Stradivirus/monitoring",
        demo: "http://34.64.132.7:5173/"
    },
    
    overview: {
        description: "Docker 컨테이너의 리소스를 1분마다 모니터링하는 시스템",
        diagram: overviewDiagram
    }
 };