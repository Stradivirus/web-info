// src/pages/Records/LoadBalancing.js
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getRecordsImage } from '../../config/storage';

const loadBalancer1 = getRecordsImage('Loadbalancer1.png');
const loadBalancer2 = getRecordsImage('Loadbalancer2.png');

export const StudyContent = ({ registerImages }) => {
 const [isConfigVisible, setIsConfigVisible] = useState(false);

 useEffect(() => {
   registerImages([loadBalancer1, loadBalancer2]);
 }, [registerImages]);

 const nginxConfig = `user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
   worker_connections 1024;
}

http {
   include /etc/nginx/mime.types;
   default_type application/octet-stream;
   
   # 로그 포맷 정의
   log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                   '$status $body_bytes_sent "$http_referer" '
                   '"$http_user_agent" "$http_x_forwarded_for" "$upstream_addr"';
   
   access_log /var/log/nginx/access.log main;

   # 업스트림 서버 정의 (헬스 체크 포함)
   upstream frontend {
       server frontend1:3000 max_fails=3 fail_timeout=30s;
       server frontend2:3000 max_fails=3 fail_timeout=30s;
       server frontend3:3000 max_fails=3 fail_timeout=30s;
   }

   server {
       listen 80;
       server_name localhost;

       # 기본적인 프록시 설정
       location / {
           proxy_pass http://frontend;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           
           # 어떤 프론트엔드 서버가 응답했는지 헤더에 추가
           add_header X-Served-By $upstream_addr;

           # 프록시 타임아웃 설정
           proxy_connect_timeout 300;
           proxy_send_timeout 300;
           proxy_read_timeout 300;
           send_timeout 300;
       }
   }

   sendfile on;
   keepalive_timeout 65;
}`;

 return (
   <div className="space-y-8">
     <section>
       <h3 className="text-lg font-medium mb-3">리팩토링 배경</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>단일 컨테이너에서 운영되던 프론트엔드 서버의 부하 분산 필요</li>
         <li>서버 장애 시에도 서비스를 계속 제공하기 위한 구조 필요</li>
         <li>동일한 React 애플리케이션을 여러 서버에서 서비스하여 안정성 향상</li>
       </ul>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">구현 내용</h3>
       <div className="space-y-4 text-gray-600">
         <div>
           <h4 className="font-medium mb-2">Nginx 로드밸런서 설정</h4>
           <div className="space-y-2 pl-4">
             <p>- 3개의 프론트엔드 서버로 트래픽 분산</p>
             <p>- 서버당 max_fails=3, fail_timeout=30s로 헬스 체크</p>
             <p>- X-Served-By 헤더로 어떤 서버가 응답했는지 추적 가능</p>
             <p>- 300초의 타임아웃 설정으로 긴 작업 지원</p>
           </div>
         </div>
         
         <div>
           <h4 className="font-medium mb-2">Docker Compose 구성 변경</h4>
           <div className="space-y-2 pl-4">
             <p>- 기존: Nginx + React 빌드 파일이 하나의 컨테이너</p>
             <p>- 변경: 로드밸런서 1개 + 프론트엔드 서버 3개로 분리</p>
             <p>- app-network로 컨테이너 간 통신</p>
           </div>
         </div>
       </div>
     </section>

     <section>
       <h3 className="text-lg font-medium mb-3">개선된 점</h3>
       <ul className="list-disc pl-5 space-y-2 text-gray-600">
         <li>하나의 서버가 다운되어도 서비스 계속 가능</li>
         <li>여러 서버로 트래픽 분산되어 부하 감소</li>
         <li>헬스 체크로 문제 있는 서버는 자동으로 제외</li>
       </ul>
     </section>
     
     <section>
       <h3 className="text-lg font-medium mb-3">Nginx 설정</h3>
       <div className="relative">
         <button
           onClick={() => setIsConfigVisible(!isConfigVisible)}
           className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
         >
           <div className="flex items-center justify-between">
             <div className="flex items-center space-x-3">
               <span className="font-mono text-gray-600">nginx.conf</span>
             </div>
             {isConfigVisible ? 
               <ChevronUp className="w-5 h-5 text-gray-500" /> : 
               <ChevronDown className="w-5 h-5 text-gray-500" />
             }
           </div>
         </button>
         {isConfigVisible && (
           <div className="border-x border-b border-gray-200 rounded-b-lg">
             <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
               <code className="text-sm font-mono text-gray-800 whitespace-pre">
                 {nginxConfig.split('\n').map((line, i) => {
                   if (line.trim().startsWith('#')) {
                     return <div key={i} className="text-emerald-600">{line}</div>;
                   }
                   return <div key={i}>{line}</div>;
                 })}
               </code>
             </pre>
           </div>
         )}
       </div>
     </section>
     
     <section>
       <h3 className="text-lg font-medium mb-3">구현 결과</h3>
       <div className="flex gap-4">
         <div className="w-[70%] space-y-2">
           <div 
             className="rounded-lg overflow-hidden border border-gray-200"
           >
             <img 
               src={loadBalancer1} 
               alt="Docker 컨테이너 상태" 
               className="w-full"
             />
           </div>
           <p className="text-sm text-gray-600">
             * 7개의 컨테이너가 모두 정상 동작 중입니다. frontend1, 2, 3 서버의 CPU와 메모리 사용량이 
             비슷한 수준으로 유지되는 것을 확인할 수 있습니다.
           </p>
         </div>

         <div className="w-[30%] space-y-2">
           <div 
             className="rounded-lg overflow-hidden border border-gray-200"
           >
             <img 
               src={loadBalancer2} 
               alt="로드밸런싱 결과" 
               className="w-full"
             />
           </div>
           <p className="text-sm text-gray-600">
             * 컨테이너의 IP 주소와 X-Served-By 헤더를 통해 요청이 192.168.64.3, 192.168.64.4, 192.168.64.6 
             서버로 분산되어 처리되는 것을 확인할 수 있습니다.
           </p>
         </div>
       </div>
     </section>
   </div>
 );
};