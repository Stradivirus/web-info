// src/components/study/Terraform.js
import React from 'react';
import terraformVideo from '../../assets/videos/study/terraform_test.mp4';

export const StudyContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-3">실습 배경</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>AWS 인프라를 코드로 관리하는 IaC(Infrastructure as Code) 학습 필요성 인식</li>
          <li>테라폼을 사용하여 AWS 리소스를 자동으로 프로비저닝하는 방법 학습</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">구현 내용</h3>
        <div className="space-y-4 text-gray-600">
          <div>
            <h4 className="font-medium mb-2">네트워크 구성</h4>
            <div className="space-y-2 pl-4">
              <p>- VPC CIDR: 10.0.0.0/16 설정</p>
              <p>- 퍼블릭 서브넷(10.0.1.0/24)과 프라이빗 서브넷(10.0.2.0/24) 구성</p>
              <p>- 인터넷 게이트웨이와 NAT 게이트웨이를 통한 인터넷 접근 설정</p>
              <p>- 라우팅 테이블을 통한 서브넷 간 통신 구성</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">인스턴스 구성</h4>
            <div className="space-y-2 pl-4">
              <p>- 퍼블릭 서브넷: t2.medium Ubuntu 22.04 LTS 인스턴스 1개 배포</p>
              <p>- 프라이빗 서브넷: t2.micro Ubuntu 22.04 LTS 인스턴스 2개 배포</p>
              <p>- 보안 그룹을 통한 HTTP 및 VPC 내부 통신 허용</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">테라폼 사용 이점</h4>
            <div className="space-y-2 pl-4">
              <p>- 인프라 구성을 코드로 버전 관리 가능</p>
              <p>- 재사용 가능한 모듈화된 인프라 구성</p>
              <p>- 인프라 변경 사항을 쉽게 추적하고 롤백 가능</p>
              <p>- 동일한 인프라를 다른 환경에 쉽게 복제 가능</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">테라폼 구현 가능 목록</h3>
        <div className="space-y-2 pl-4 text-gray-600">
          <p className="mb-2">* 현재는 기본적인 VPC와 EC2 구성만 진행했으며, 테라폼으로 다음과 같은 다양한 AWS 리소스들을 구현할 수 있습니다:</p>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>Auto Scaling 그룹과 시작 템플릿 구성</li>
              <li>Lambda와 API Gateway 서버리스 아키텍처</li>
              <li>ECS/EKS 컨테이너 서비스</li>
              <li>RDS, DynamoDB 데이터베이스</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Route 53과 CloudFront CDN</li>
              <li>Application/Network Load Balancer</li>
              <li>CloudWatch 모니터링</li>
              <li>S3, EFS 스토리지</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-3">실습 영상</h3>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video 
            className="w-full h-full object-contain"
            controls
            playsInline
            src={terraformVideo}
          >
            <source src={terraformVideo} type="video/mp4" />
            죄송합니다. 브라우저에서 비디오를 지원하지 않습니다.
          </video>
        </div>
      </section>
    </div>
  );
};