# 프로젝트 구조 설명

## 기본 구조
1. `src/layouts/`
   - Layout.tsx: 전체 애플리케이션의 레이아웃 구조
   - Sidebar.tsx: 사이드바 컴포넌트
   - Main.tsx: 메인 컨텐츠 영역 컴포넌트

2. `src/components/`
   - ProjectDetail/: 프로젝트 상세 페이지를 위한 공통 컴포넌트
     - common/: 공통 컴포넌트 (MediaModal, MediaSection, OverviewDiagram 등)
     - styles/: 프로젝트 상세 페이지 스타일
     - teamp/: 팀 프로젝트 전용 컴포넌트
   - Navigation/: 사이드바 및 내비게이션 컴포넌트
   - JourneyAnimation/: 인터랙티브 애니메이션 컴포넌트
   - Records/: 학습 기록 관련 공통 컴포넌트

3. `src/pages/`
   - Introduction/: 자기소개 페이지
   - Overview/: 프로젝트 개요 페이지 (홈)
   - Projects/: 개인 프로젝트 상세 정보
   - TeamProject/: 팀 프로젝트 상세 정보
   - Certifications/: 자격증 페이지
   - Records/: 학습 기록 페이지 (DevOps, Backend 등)

4. `src/router/`
   - index.tsx: React Router 라우팅 설정

5. `src/config/`
   - storage.ts: Oracle Cloud Storage URL 관리

6. **미디어 파일 관리**
   - 모든 이미지, 비디오는 Oracle Cloud Storage에 저장
   - `src/config/storage.ts`를 통해 URL 관리

## 새로운 프로젝트 추가 방법

### 1. 프로젝트 데이터 및 컴포넌트 생성

**개인 프로젝트:**
```
src/pages/Projects/Project[N]/
├── data.ts     # 프로젝트 데이터 (TypeScript)
└── index.tsx   # 프로젝트 컴포넌트 (React + TypeScript)
```

**팀 프로젝트:**
```
src/pages/TeamProject/TP[N]/
├── data.ts              # 프로젝트 데이터
├── index.tsx            # 프로젝트 컴포넌트
├── myDevelopmentData.ts # 개인 개발 파트 데이터
└── teamMembers.ts       # 팀원 정보
```

### 2. 프로젝트 리소스 추가
- Oracle Cloud Storage에 이미지/비디오 업로드
- `src/config/storage.ts`에 해당 프로젝트 경로 함수 추가:
```typescript
export const getProject[N]Image = (filename: string): string => 
  getImageUrl(`project/[N]/${filename}`);
```

### 3. 라우터 설정 (`src/router/index.tsx`)
```typescript
// 프로젝트 컴포넌트 import
import Project[N] from '../pages/Projects/Project[N]';

// 라우트 추가
<Route path="project/[N]" element={<Project[N] />} />
```

### 4. 네비게이션 추가 (`src/components/Navigation/Navigation.tsx`)
```typescript
<NavLink to="/project/[N]" className={getLinkClassName}>
  <FolderOpen className="nav-icon" size={18} />
  <span>프로젝트 제목</span>
</NavLink>
```

### 5. 개요 페이지 수정 (`src/pages/Overview/Overview.tsx`)
- 프로젝트 데이터 import 추가
- 다이어그램 이미지 import 추가
- `projects` 배열에 새 프로젝트 정보 추가:
```typescript
{
  id: [N],  // 또는 'TP[N]' (팀 프로젝트)
  title: project[N]Data.title,
  description: project[N]Data.overview.description,
  image: diagram[N],
  tags: project[N]Data.techStack,
  isTeam: false  // 팀 프로젝트는 true
}

```

## 주요 페이지 설명

### Introduction (자기소개) 페이지
- 경로: `/Introduction`
- 구현: `src/pages/Introduction/index.tsx`
- 설명: 인터랙티브 애니메이션을 통한 자기소개
- 특징: JourneyAnimation 컴포넌트를 활용한 픽셀아트 기반 스토리텔링

### Certifications (자격증) 페이지
- 경로: `/Certifications`
- 구현: `src/pages/Certifications/index.tsx`
- 설명: 보유 자격증 목록과 상세 이미지를 모달로 확인
- 특징: React.lazy를 통한 코드 스플리팅 적용

### Records (학습 기록) 페이지
- 경로: `/Records`
- 구현: `src/pages/Records/index.tsx`
- 설명: DevOps, Backend, Frontend 등 다양한 주제의 학습/실습 기록
- 특징: 
  - React.lazy를 통한 코드 스플리팅 적용
  - 아코디언 UI와 이미지 모달로 구성
  - 세부 기록: Docker Compose, CI/CD, Terraform, PostgreSQL Replication 등

## 프로젝트 데이터 구조 (TypeScript)

### 개인 프로젝트
```typescript
export interface ProjectData {
  title: string;                    // 프로젝트 제목
  description: string;              // 간단한 설명
  period: string;                   // 프로젝트 기간
  techStack: string[];              // 사용 기술 스택
  objectives: string[];             // 프로젝트 목표
  features: string[];               // 주요 기능
  process: string;                  // 개발 과정
  techDetails: TechDetail[];        // 기술 상세 설명
  reflection: string;               // 느낀 점/회고
  media: ProjectMedia[];            // 이미지/비디오 목록
  links: ProjectLinks;              // GitHub, Demo 링크
  overview: ProjectOverview;        // 개요 (다이어그램 포함)
}

export interface TechDetail {
  title: string;
  items: string[];
}

export interface ProjectLinks {
  github?: string;
  demo?: {
    url: string;
    isEnabled: boolean;
  };
}

export interface ProjectOverview {
  description: string;
  diagram: string;
}

export interface ProjectMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption: string;
}
```

### 팀 프로젝트 추가 구조
```typescript
// myDevelopmentData.ts
export interface MyDevelopment {
  role: string;
  responsibilities: string[];
  technicalDetails: TechDetail[];
  challenges: string;
  achievements: string[];
}

// teamMembers.ts
export interface TeamMember {
  name: string;
  role: string;
  responsibilities: string[];
  github?: string;
}
```

## 기술 스택
- **Frontend**: React 18, TypeScript, React Router
- **Styling**: SCSS, CSS Modules, Tailwind CSS
- **Build**: Vite
- **Deploy**: GitHub Actions → Oracle Cloud Storage
- **Code Splitting**: React.lazy (Certifications, Records 페이지)

## 배포 정보
- 빌드 시간 정보는 `vite.config.js`에서 환경 변수로 주입
- Navigation 컴포넌트에서 빌드 시간과 버전 정보 표시
- Oracle Cloud Storage를 통한 정적 파일 호스팅

