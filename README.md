프로젝트 구조 설명
1. src/layouts/Layout.js: 전체 애플리케이션의 레이아웃을 정의하는 컴포넌트입니다.
2. src/components/Profile/: 사용자 프로필과 관련된 컴포넌트를 포함합니다.
3. src/components/Navigation/: 사이드바 및 내비게이션 관련 컴포넌트를 포함합니다.
4. src/pages/Overview/: 개요 페이지의 내용을 포함합니다.
5. src/pages/Projects/: 각 프로젝트에 대한 상세 정보를 포함하는 페이지입니다.

새로운 프로젝트를 추가하려면 다음 단계를 따르세요
1. 프로젝트 파일 생성: src/pages/Projects/ 폴더에 새로운 프로젝트 파일을 생성합니다. 예를 들어, Project3.js라는 파일을 생성합니다.

2. Layout.js 수정: web-info/src/layouts/Main.js 파일에 새로 추가한 프로젝트를 import 합니다.

3. Navigation.js 수정: src/components/Navigation/Navigation.js 파일을 열고, 새로운 프로젝트에 대한 NavLink를 추가합니다. 

4. Overview.js 수정: src/pages/Overview/Overview.js 파일을 열고, projects 배열에 새로운 프로젝트 객체를 추가합니다.