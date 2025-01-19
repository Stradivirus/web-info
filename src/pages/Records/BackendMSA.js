import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const StudyContent = () => {
 const [isRegistrationCodeVisible, setIsRegistrationCodeVisible] = useState(false);
 const [isServiceCodeVisible, setIsServiceCodeVisible] = useState(false);

 return (
   <div className="space-y-8">
     <section>
       <h3 className="text-lg font-medium mb-3">리팩토링 배경</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>단일 NestJS 서버에서 모든 백엔드 기능을 처리하던 모놀리식 구조</li>
         <li>사전등록, 알림, 쿠폰 기능이 하나의 서비스에 강하게 결합되어 있음</li>
         <li>각 기능의 독립적인 확장과 관리의 어려움 발생</li>
       </ul>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">구현 내용</h3>
       <div className="space-y-4 text-gray-600">
         <div>
           <h4 className="font-medium mb-2">서비스 분리</h4>
           <div className="space-y-2 pl-4">
             <p>- Registration(8086): 사전등록 및 메인 비즈니스 로직 처리</p>
             <p>- Notification(8084): 마일스톤 알림 전송 담당</p>
             <p>- Coupon(8085): 쿠폰 생성 및 관리 담당</p>
           </div>
         </div>
         
         <div>
           <h4 className="font-medium mb-2">서비스 간 통신</h4>
           <div className="space-y-2 pl-4">
             <p>- Registration → Coupon: 신규 등록 시 쿠폰 생성 요청</p>
             <p>- Registration → Notification: 마일스톤 달성 시 알림 요청</p>
             <p>- Frontend → Coupon: 쿠폰 사용 직접 요청</p>
           </div>
         </div>
       </div>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">주요 코드</h3>
       <div className="space-y-4">
         <div>
           <button
             onClick={() => setIsRegistrationCodeVisible(!isRegistrationCodeVisible)}
             className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
           >
             <div className="flex items-center justify-between">
               <div className="flex items-center space-x-3">
                 <span className="font-mono text-gray-600">Registration Service</span>
               </div>
               {isRegistrationCodeVisible ? 
                 <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                 <ChevronDown className="w-5 h-5 text-gray-500" />
               }
             </div>
           </button>
           {isRegistrationCodeVisible && (
             <div className="border-x border-b border-gray-200 rounded-b-lg">
               <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                 <code className="text-sm font-mono text-gray-800">
{`async register(data: PreRegistrationDto): Promise<RegistrationResponseDto> {
 try {
   // 쿠폰 서비스 호출
   const couponResponse = await this.httpService.axiosRef.post(
     'http://coupon:8085/coupon/generate'
   );
   const couponCode = couponResponse.data.coupon_code;

   const now = moment().tz('Asia/Seoul');

   // 등록 데이터 생성
   await this.registrationModel.create({
     email: data.email,
     phone: data.phone,
     privacy_consent: data.privacy_consent,
     created_at: now.toDate(),
     coupon_code: couponCode,
     is_coupon_used: false
   });

   // 총 등록자 수 확인
   const totalCount = await this.registrationModel.count();

   // 알림 서비스 호출
   await this.httpService.axiosRef.post(
     'http://notification:8084/notifications/milestone',
     { count: totalCount }
   );

   return {
     message: '사전 등록이 완료되었습니다.',
     created_at: now.format('YYYY-MM-DD HH:mm:ss'),
     coupon_code: couponCode
   };
 } catch (error) {
   this.logger.error(\`Registration error: \${error.message}\`);
   throw error;
 }
}`}
                 </code>
               </pre>
             </div>
           )}
         </div>

         <div>
           <button
             onClick={() => setIsServiceCodeVisible(!isServiceCodeVisible)}
             className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
           >
             <div className="flex items-center justify-between">
               <div className="flex items-center space-x-3">
                 <span className="font-mono text-gray-600">Service Configuration</span>
               </div>
               {isServiceCodeVisible ? 
                 <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                 <ChevronDown className="w-5 h-5 text-gray-500" />
               }
             </div>
           </button>
           {isServiceCodeVisible && (
             <div className="border-x border-b border-gray-200 rounded-b-lg">
               <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                 <code className="text-sm font-mono text-gray-800">
{`// Notification Service (내부망)
const port = process.env.PORT || 8084;
await app.listen(port);

// Coupon Service (외부 접근 필요)
app.enableCors({
 origin: process.env.ALLOWED_ORIGINS || 'http://34.64.132.7:8080',
 methods: ['GET', 'POST'],
 credentials: true,
});
const port = process.env.PORT || 8085;
await app.listen(port);`}
                 </code>
               </pre>
             </div>
           )}
         </div>
       </div>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">개선된 점</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>각 서비스의 독립적인 확장과 관리 가능</li>
         <li>서비스 간 책임이 명확하게 분리됨</li>
         <li>필요한 서비스만 선택적으로 스케일링 가능</li>
         <li>알림 서비스의 외부 접근 차단으로 보안 강화</li>
       </ul>
     </section>
   </div>
 );
};