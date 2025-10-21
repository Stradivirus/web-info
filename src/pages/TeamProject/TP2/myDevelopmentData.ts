export interface WorkItem {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface MyDevelopmentData {
  dataCollection: WorkItem[];
  dataProcessing: WorkItem[];
  achievements: {
    results: string;
    learning: string;
  };
}

export const myDevelopmentData: MyDevelopmentData = {
  dataCollection: [
    {
      id: 'exchange-rate',
      title: '💱 환율 데이터',
      description: '한국은행 ECOS API - USD, JPY, CNY, EUR 일별 환율',
      details: [
        '매일 최근 5일 데이터 수집',
        'MongoDB ATLAS 저장'
      ]
    },
    {
      id: 'interest-rate',
      title: '📈 금리 데이터',
      description: '한국 기준금리 + 미국 연방기금금리',
      details: [
        '한국은행 ECOS API + FRED API',
        '매일 금리 변동 체크'
      ]
    },
    {
      id: 'stock-index',
      title: '📊 주가지수',
      description: 'KOSPI, KOSDAQ, DOW, NASDAQ, S&P 500',
      details: [
        'Yahoo Finance API (yfinance)',
        'Open/High/Low/Close/Volume'
      ]
    },
    {
      id: 'commodities',
      title: '🛢️ 원자재 & 지수',
      description: '금/은/구리, 원유, 곡물, 달러인덱스, VIX',
      details: [
        'Yahoo Finance API',
        '12개 원자재 + 2개 지수'
      ]
    },
    {
      id: 'sentiment-index',
      title: '📰 심리지수',
      description: '소비자심리지수, 경제심리지수, 뉴스심리지수',
      details: [
        '한국은행 ECOS API',
        '매일 최근 7일 데이터 수집'
      ]
    },
    {
      id: 'economic-indicators',
      title: '📉 경제지표',
      description: 'CPI, 수출입 물가지수, 기대인플레이션율',
      details: [
        '한국은행 ECOS API',
        '물가 관련 주요 지표'
      ]
    }
  ],
  dataProcessing: [
    {
      id: 'exchange-processing',
      title: '💱 환율 정제',
      description: 'MongoDB → PostgreSQL 이관 (exchange 테이블)',
      details: [
        'exchange_cron.py',
        '4개 통화 최신 환율 정제',
        '중복 방지 로직'
      ]
    },
    {
      id: 'interest-processing',
      title: '📈 금리 정제',
      description: '한국 & 미국 금리 데이터 정제 (interest_rate 테이블)',
      details: [
        'interest_cron.py',
        '최근 1년 데이터 처리',
        '날짜별 금리 변동 추적'
      ]
    },
    {
      id: 'stock-processing',
      title: '📊 주가 정제',
      description: '5개 주가지수 종가 & 거래량 정제 (stock 테이블)',
      details: [
        'stock_cron.py',
        '일별 종가 + 거래량',
        'upsert 방식으로 저장'
      ]
    },
    {
      id: 'commodities-processing',
      title: '🛢️ 원자재 정제',
      description: '원자재 평균가 & 거래량 계산 (commodities, grains, commodities_index)',
      details: [
        'commodities_cron.py',
        'Open/High/Low/Close 4가 평균',
        '3개 테이블로 분류 저장'
      ]
    },
    {
      id: 'pca-processing',
      title: '🔍 PCA 차원 축소',
      description: '원자재/주가 데이터 PCA 변환 (pca 테이블)',
      details: [
        'all_pca_cron.py',
        'Rolling Window 3년',
        '9개 PCA 컴포넌트 생성'
      ]
    },
    {
      id: 'team-analysis-graph',
      title: '📊 팀원 분석 그래프 생성',
      description: '팀원들의 분석 코드를 서브프로세스로 실행 (매일 2회)',
      details: [
        'graph/main.py - 통합 실행기',
        '홍은교/구진모/김서현 분석 코드 병렬 실행',
        'Plotly 기반 HTML 그래프 자동 생성'
      ]
    },
    {
      id: 'image-server',
      title: '🖼️ 별도 이미지 서버 구축',
      description: '그래프 이미지를 미리 생성하여 서버 부담 최소화',
      details: [
        '요청 시마다 HTML 생성 → 사전 생성 방식으로 전환',
        '응답 속도 대폭 개선 (수 초 → 밀리초)',
        '별도 정적 파일 서버로 분리'
      ]
    }
  ],
  achievements: {
    results: '6개 카테고리, 20개 이상의 데이터 소스 자동 수집 파이프라인 구축.\nMongoDB Atlas와 PostgreSQL을 활용한 2단계 데이터 처리 구조 완성.\nCron을 통한 일 4회 데이터 수집, 일 2회 팀원 분석 그래프 생성 자동화.\n별도 이미지 서버 구축으로 응답 속도 대폭 개선.',
    learning: '외부 API 통합 경험, Cron 스케줄링, MongoDB upsert 패턴, PostgreSQL 정제 파이프라인 구축.\n팀원 분석 코드를 서브프로세스로 통합하는 방법, 정적 파일 서버 분리를 통한 성능 최적화 경험.\n원시 데이터 수집부터 정제, 시각화, 서빙까지 전체 데이터 엔지니어링 프로세스 경험.'
  }
};
