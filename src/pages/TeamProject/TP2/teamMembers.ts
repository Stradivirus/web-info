export interface TeamMember {
  id: string;
  name: string;
  role: string;
  parts: string[];
}

export interface GroupCollaboration {
  groupName: string;
  memberIds: string[];
  collaborations: string[];
  achievements: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'hong',
    name: '홍XX',
    role: '팀장 / 데이터 분석',
    parts: [
      '환율과 뉴스 지수 상관관계 분석',
      '환율과 금리 데이터 분석',
      '팀 프로젝트 전체 일정 관리 및 조율'
    ]
  },
  {
    id: 'moon',
    name: '문성종',
    role: '데이터 수집, 인프라 관리 및 코드 통합',
    parts: [
      'MongoDB Atlas 연계 작업 및 데이터 수집 자동화',
      '팀원들이 작성한 데이터 분석 및 그래프 생성 코드 통합',
      'Cron 스케줄링 설정 및 코드 정리',
      'PostgreSQL 데이터베이스 설계 및 관리',
      'Docker를 이용한 배포 환경 구축',
      'Oracle Cloud 인프라에 애플리케이션 배포',
    ]
  },
  {
    id: 'jang',
    name: '장XX',
    role: '개발',
    parts: [
      'React + TypeScript 기반 프론트엔드 개발',
      'Spring Boot 백엔드 API 서버 개발',
      'RESTful API 설계 및 구현',
      'UI/UX 설계 및 반응형 디자인 구현',
      'Docker 컨테이너화 및 배포 환경 구축',
      '프론트엔드-백엔드 통합 작업'
    ]
  },
  {
    id: 'gu',
    name: '구XX',
    role: '데이터 분석',
    parts: [
      '환율과 주가 지수 상관관계 분석',
    ]
  },
  {
    id: 'kim',
    name: '김XX',
    role: '데이터 분석',
    parts: [
      '환율과 금/은/동 가격 상관관계 분석',
    ]
  }
];

export const groupCollaborations: GroupCollaboration[] = [
  {
    groupName: '데이터 분석 및 시각화',
    memberIds: ['hong', 'gu', 'kim'],
    collaborations: [
      'Python 기반 데이터 분석 코드 작성',
      'Plotly를 이용한 그래프 생성 코드 개발',
      '환율 예측 모델 연구 및 적용',
      '데이터 분석 결과 검증 및 개선',
      '작성한 코드를 문성종에게 전달하여 Cron 통합'
    ],
    achievements: [
      '효과적인 데이터 시각화 코드 개발',
      '환율 예측 모델 적용 및 검증 완료',
      'Plotly 기반 정적 HTML 그래프 생성 완료'
    ]
  }
];