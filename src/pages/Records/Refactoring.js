// src/pages/Records/Refactoring.js
import React, { useEffect } from 'react';
import refactoringCommit from '../../assets/images/records/refactoring.png';
import refactoringCommit2 from '../../assets/images/records/refactoring2.png';

export const StudyContent = ({ onImageClick, registerImages }) => {
 useEffect(() => {
   registerImages([refactoringCommit, refactoringCommit2]);
 }, [registerImages]);

 return (
   <div className="space-y-8">
     <section>
       <h3 className="text-lg font-medium mb-3">리팩토링 배경</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>포트폴리오에 기록된 5개의 프로젝트 코드에서 중복되는 부분이 많이 발견됨</li>
         <li>각 프로젝트마다 비슷한 UI 컴포넌트와 스타일이 반복되어 있었음</li>
         <li>프로젝트 데이터(제목, 설명, 기간 등)가 컴포넌트 내부에 하드코딩되어 있었음</li>
         <li>코드 유지보수와 추후 프로젝트 추가를 위해 구조 개선이 필요했음</li>
       </ul>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">구현 내용</h3>
       <div className="space-y-4 text-gray-600">
         <div>
           <h4 className="font-medium mb-2">주요 변경사항</h4>
           <div className="space-y-2 pl-4">
             <p>- 프로젝트 정보를 독립적인 data.js 파일로 분리하여 관리</p>
             <p>- 공통으로 사용되는 UI 컴포넌트를 components 폴더로 분리</p>
             <p>- 중복되는 스타일을 공통 CSS로 분리하고 프로젝트별 스타일은 개별 관리</p>
             <p>- 18개 파일 수정, 889줄 추가, 2077줄 제거</p>
           </div>
         </div>
         
         <div>
           <h4 className="font-medium mb-2">개선된 점</h4>
           <div className="space-y-2 pl-4">
             <p>- 프로젝트 데이터 수정이나 추가가 필요할 때 data.js만 수정하면 되어 편리</p>
             <p>- 공통 컴포넌트 재사용으로 코드 중복 제거</p>
             <p>- CSS 모듈화로 스타일 관리가 용이하고 충돌 가능성 감소</p>
             <p>- 새로운 프로젝트 추가 시 기존 구조를 쉽게 활용 가능</p>
           </div>
         </div>
       </div>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">Git 커밋 내역</h3>
       <div className="flex gap-8">
         <div className="flex-1">
           <p className="mb-2 text-base text-gray-800">
             Portfolio 리팩토링<br></br>총 18개 파일이 변경되었으며, 컴포넌트와 데이터의 분리를 통해 889줄이 추가되고 2077줄이 제거되었습니다.
           </p>
           <div 
             className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
             onClick={() => onImageClick(0)}
           >
             <img 
               src={refactoringCommit} 
               alt="포트폴리오 리팩토링 커밋 내역" 
               className="w-full"
             />
           </div>
         </div>
         <div className="flex-1">
           <p className="mb-2 text-base text-gray-800">
             Exam_serverless 리팩토링<br></br> 총 15개 파일이 변경되었으며, 공통 컴포넌트 분리를 통해 796줄이 추가되고 1171줄이 제거되었습니다.
           </p>
           <div 
             className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
             onClick={() => onImageClick(1)}
           >
             <img 
               src={refactoringCommit2} 
               alt="exam_serverless 리팩토링 커밋 내역" 
               className="w-full"
             />
           </div>
         </div>
       </div>
     </section>
   </div>
 );
};