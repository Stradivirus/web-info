import React, { useState } from 'react';
import { getVideoUrl } from '../../config/storage';
import { ChevronDown, ChevronUp } from 'lucide-react';

const terraformVideo: string = getVideoUrl('terraform_test.mp4');

export const StudyContent: React.FC = () => {
  const [isCodeVisible, setIsCodeVisible] = useState<boolean>(false);

  const terraformCode = `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-2"  # 서울 리전
}

# VPC 생성
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "terraform_test_vpc"
  }
}

# 퍼블릭 서브넷
resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "ap-northeast-2a"

  map_public_ip_on_launch = true

  tags = {
    Name = "terraform_test_public_subnet"
  }
}

# 프라이빗 서브넷
resource "aws_subnet" "private" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "ap-northeast-2c"

  tags = {
    Name = "terraform_test_private_subnet"
  }
}

# 인터넷 게이트웨이
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "terraform_test_igw"
  }
}

# NAT 게이트웨이용 EIP
resource "aws_eip" "nat" {
  vpc      = true
  tags = {
    Name = "terraform_test_nat_eip"
  }
}

# NAT 게이트웨이
resource "aws_nat_gateway" "main" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.public.id

  tags = {
    Name = "terraform_test_nat"
  }
}

# 퍼블릭 라우팅 테이블
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = {
    Name = "terraform_test_public_rt"
  }
}

# 프라이빗 라우팅 테이블
resource "aws_route_table" "private" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.main.id
  }

  tags = {
    Name = "terraform_test_private_rt"
  }
}

# 라우팅 테이블 연결
resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private" {
  subnet_id      = aws_subnet.private.id
  route_table_id = aws_route_table.private.id
}

# 보안 그룹
resource "aws_security_group" "main" {
  name        = "terraform_test_sg"
  description = "Terraform test security group"
  vpc_id      = aws_vpc.main.id

  # HTTP 인바운드 허용
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # VPC 내부 통신 허용
  ingress {
    from_port = 0
    to_port   = 0
    protocol  = "-1"
    self      = true
  }

  # 아웃바운드 허용
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "terraform_test_sg"
  }
}

# 퍼블릭 인스턴스
resource "aws_instance" "public" {
  ami           = "ami-04599ab1182cd7961"  # Ubuntu 22.04 LTS
  instance_type = "t2.medium"
  subnet_id     = aws_subnet.public.id

  vpc_security_group_ids = [aws_security_group.main.id]

  tags = {
    Name = "terraform_test_public"
  }
}

# 프라이빗 인스턴스들
resource "aws_instance" "private" {
  count = 2

  ami           = "ami-04599ab1182cd7961"  # Ubuntu 22.04 LTS
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.private.id

  vpc_security_group_ids = [aws_security_group.main.id]

  tags = {
    Name = "terraform_test_private_\${count.index + 1}"
  }
}`;

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
        <h3 className="text-lg font-medium mb-3">테라폼 코드</h3>
        <div className="relative">
          <button
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-gray-600">main.tf</span>
              </div>
              {isCodeVisible ? 
                <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                <ChevronDown className="w-5 h-5 text-gray-500" />
              }
            </div>
          </button>
          {isCodeVisible && (
            <div className="border-x border-b border-gray-200 rounded-b-lg">
              <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                <code className="text-sm font-mono text-gray-800 whitespace-pre">
                  {terraformCode.split('\n').map((line, i) => {
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