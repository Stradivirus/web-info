// src/pages/Records/AutoCleanup.js
import React, { useEffect } from 'react';
import cleanupPipeline from '../../assets/images/records/clean1.png';
import cleanupSlack from '../../assets/images/records/clean2.png';

export const StudyContent = ({ onImageClick, registerImages }) => {
 useEffect(() => {
   registerImages([cleanupPipeline, cleanupSlack]);
 }, [registerImages]);

 return (
   <div className="space-y-8">
     <section>
       <h3 className="text-lg font-medium mb-3">구현 배경</h3>
       <div className="space-y-2 text-gray-600">
         <p>기존에 운영 중이던 Docker Compose 기반 서비스에서 빌드 실패 문제가 발생했습니다. 
            원인을 파악해보니 Docker 이미지가 업데이트될 때마다 이전 버전이 정리되지 않고 누적되어 
            디스크 공간을 차지하고 있었습니다.</p>
         <p className="mt-2">수동으로 정리 작업을 진행하면서, 이러한 관리 작업을 자동화할 필요성을 느꼈습니다. 
            Linux의 cron과 Jenkins를 비교 검토한 결과, 다른 CI/CD 작업들과 함께 통합 관리할 수 있는 
            Jenkins를 선택하여 자동화 파이프라인을 구축했습니다.</p>
       </div>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">구현 환경</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>Jenkins (기존 CI/CD 환경)</li>
         <li>Docker & Docker Compose (운영 중인 서비스 환경)</li>
         <li>Slack Webhook (알림 시스템)</li>
       </ul>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">구현 내용</h3>
       <div className="space-y-4 text-gray-600">
         <div>
           <h4 className="font-medium mb-2">자동화 작업 범위</h4>
           <div className="space-y-2 pl-4">
             <p>- 디스크 사용량 모니터링 및 보고</p>
             <p>- 사용하지 않는 Docker 이미지, 컨테이너, 볼륨 정리</p>
             <p>- 작업 결과 Slack 알림 (디스크 정리 전/후 사용량 비교)</p>
           </div>
         </div>
         
         <div>
           <h4 className="font-medium mb-2">Jenkins 파이프라인 구성</h4>
           <div className="space-y-2">
             <div>
               <p className="font-medium text-blue-600">스케줄링</p>
               <p className="pl-4">- 매주 일요일 자정 자동 실행 (cron: '0 0 * * 0')</p>
               <p className="pl-4">- 필요시 수동 실행 가능</p>
             </div>
             <div>
               <p className="font-medium text-blue-600">디스크 체크 스테이지</p>
               <p className="pl-4">- 현재 디스크 사용량 확인</p>
               <p className="pl-4">- 초기 상태 Slack 알림</p>
             </div>
             <div>
               <p className="font-medium text-blue-600">Docker 정리 스테이지</p>
               <p className="pl-4">- docker system prune -a -f --volumes 실행</p>
               <p className="pl-4">- 미사용 이미지, 컨테이너, 볼륨 정리</p>
               <p className="pl-4">- 확보된 공간 계산 및 보고</p>
             </div>
           </div>
         </div>

         <div>
           <h4 className="font-medium mb-2">알림 시스템 구현</h4>
           <div className="space-y-2 pl-4">
             <p>- Jenkins 시스템 환경변수를 활용한 Slack Webhook 연동</p>
             <p>- 작업 시작, 완료, 오류 발생시 자동 알림</p>
             <p>- 디스크 공간 변화 리포트 제공</p>
           </div>
         </div>
       </div>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">개선 및 학습 효과</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>디스크 공간 문제로 인한 빌드 실패 예방</li>
         <li>수동 관리 작업의 자동화로 운영 효율성 향상</li>
         <li>Jenkins 파이프라인과 시스템 관리 자동화에 대한 실무 경험 획득</li>
         <li>운영 환경에서의 문제 해결 과정을 통한 DevOps 실전 학습</li>
       </ul>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">구현 결과</h3>
       <div className="flex gap-8">
         <div className="flex-1">
           <p className="mb-2 text-base text-gray-800">
             Jenkins Pipeline 코드<br></br>
             매주 일요일 자정에 실행되는 시스템 자동 정리 파이프라인입니다. 디스크 사용량 체크와 Docker 리소스 정리를 수행합니다.
           </p>
           <div 
             className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
             onClick={() => onImageClick(0)}
           >
             <img 
               src={cleanupPipeline} 
               alt="시스템 정리 파이프라인 코드" 
               className="w-full"
             />
           </div>
         </div>
         <div className="flex-1">
           <p className="mb-2 text-base text-gray-800">
             Slack 알림 결과<br></br>
             파이프라인 실행 결과가 Slack으로 전송됩니다. 디스크 사용량과 정리 작업 완료 상태를 실시간으로 확인할 수 있습니다.
           </p>
           <div 
             className="rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
             onClick={() => onImageClick(1)}
           >
             <img 
               src={cleanupSlack} 
               alt="Slack 알림 결과" 
               className="w-full"
             />
           </div>
         </div>
       </div>
     </section>
   </div>
 );
};