# 프로젝트 구조 설명

## 기본 구조
1. `src/layouts/`
   - Layout.js: 전체 애플리케이션의 레이아웃 구조
   - Header.js: 상단 헤더 컴포넌트
   - Sidebar.js: 사이드바 컴포넌트
   - Main.js: 메인 컨텐츠 영역 컴포넌트

2. `src/components/`
   - common/ProjectDetail/: 프로젝트 상세 페이지를 위한 공통 컴포넌트
   - common/Record/: 학습 기록(Study Records) 관련 공통 컴포넌트
   - Profile/: 사용자 프로필 관련 컴포넌트
   - Navigation/: 사이드바 및 내비게이션 컴포넌트

3. `src/pages/`
   - Overview/: 프로젝트 개요 페이지
   - Projects/: 각 프로젝트 상세 정보
   - Certifications/: 자격증 페이지
   - Records/: 학습 기록(Study Records) 페이지

4. `src/assets/`
   - images/: 이미지 파일 저장
   - videos/: 비디오 파일 저장

## 새로운 프로젝트 추가 방법

1. 프로젝트 데이터 및 컴포넌트 생성
src/pages/Projects/Project[N]/
├── data.js     # 프로젝트 데이터
└── index.js    # 프로젝트 컴포넌트

2. 프로젝트 리소스 추가
- 오라클 스토리지로 이전

3. App.js 수정
- `src/App.js` 파일에 새로운 프로젝트 라우트 추가

4. Navigation.js 수정
- `src/components/Navigation/Navigation.js` 파일에 새로운 프로젝트 NavLink 추가

5. Overview.js 수정
- `src/pages/Overview/Overview.js` 파일의 projects 배열에 새 프로젝트 정보 추가

## Certifications(자격증) 페이지
- 구현: `src/pages/Certifications/index.js`에서 직접 관리
- 설명: 보유 자격증 목록과 상세 이미지를 모달로 확인할 수 있는 페이지

## Records(학습 기록) 페이지
- 구현: `src/pages/Records/index.js`에서 직접 관리
- 설명: DevOps, Backend, Frontend 등 다양한 주제의 학습/실습 기록을 아코디언 UI와 이미지 모달로 제공

## 프로젝트 데이터 구조
```javascript
{
title: "프로젝트 제목",
period: "프로젝트 기간",
description: "프로젝트 설명(선택사항)",
techStack: ["사용 기술"],
objectives: ["프로젝트 목표"],
features: ["주요 기능"],
process: "개발 과정",
techDetails: [
 {
   title: "카테고리",
   items: ["기술 상세"]
 }
],
improvements: "개선점 및 향후 계획",
reflection: "느낀 점",
architectureImg: "아키텍처 다이어그램 경로",
screenshots: ["스크린샷 정보(선택사항)"],
links: {
 github: "GitHub 저장소 링크",
 demo: "데모 사이트 링크"
}
}
```

