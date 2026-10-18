import React, { useState } from 'react';
import { getVideoUrl } from '../../config/storage';
import { ChevronDown, ChevronUp, Cloud, FileCode, PlayCircle, CheckCircle2, Layers } from 'lucide-react';

const terraformVideo: string = getVideoUrl('terraform_test.mp4');

const HighlightComments = (code: string) => {
  const parts = code.split(/(#.*$)/m);
  return parts.map((part, i) => {
    if (part.startsWith('#')) {
      return <span key={i} className="text-emerald-400 italic font-medium">{part}</span>;
    }
    return part;
  });
};

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
    <div className="space-y-12 py-4">
      {/* 1. 요약 배너 */}
      <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 shadow-sm flex items-start gap-4">
        <Cloud className="w-7 h-7 text-emerald-600 mt-0.5 flex-shrink-0" />
        <div className="space-y-1.5">
          <h4 className="font-bold text-emerald-900 text-lg">Terraform(IaC)을 활용한 AWS 네트워크 및 컴퓨팅 자동 프로비저닝</h4>
          <p className="text-emerald-800/90 leading-relaxed text-sm">
            수동 콘솔 클릭에 의존하던 AWS 인프라 구축을 코드로 선언화(Infrastructure as Code)하여,
            <strong> VPC·Public/Private 서브넷·IGW/NAT 게이트웨이·EC2 인스턴스</strong>를 단 한 번의 명령어로 일관되게 배포 및 삭제할 수 있는 환경을 구축했습니다.
          </p>
        </div>
      </div>

      {/* 2. 프로비저닝 아키텍처 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Provisioned AWS Architecture</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              VPC & Network
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• VPC CIDR: <code className="bg-slate-100 px-1 rounded">10.0.0.0/16</code> (ap-northeast-2)</li>
              <li>• Public Subnet (<code className="bg-slate-100 px-1 rounded">10.0.1.0/24</code>, 2a)</li>
              <li>• Private Subnet (<code className="bg-slate-100 px-1 rounded">10.0.2.0/24</code>, 2c)</li>
              <li>• IGW + NAT Gateway 라우팅 분리</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              EC2 & Security Group
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• Public EC2: <code className="bg-slate-100 px-1 rounded">t2.medium</code> Ubuntu 22.04 (x1)</li>
              <li>• Private EC2: <code className="bg-slate-100 px-1 rounded">t2.micro</code> Ubuntu 22.04 (x2)</li>
              <li>• HTTP(80) 인바운드 및 VPC 내부망 전용 통신 허용</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-3 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              IaC Benefits & Expansion
            </h4>
            <ul className="text-xs text-slate-600 space-y-2">
              <li>• 인프라 형상 버전 관리 및 즉각적인 환경 복제</li>
              <li>• Auto Scaling, ALB, EKS, RDS, CloudFront 등으로 모듈 확장 가능</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Terraform HCL 코드 */}
      <section>
        <div className="flex items-center gap-2 mb-6 border-b pb-2">
          <FileCode className="w-5 h-5 text-slate-700" />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Terraform HCL Code</h3>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <button
            type="button"
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            className="w-full bg-slate-800 p-4 text-left flex items-center justify-between hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileCode className="w-5 h-5 text-emerald-400" />
              <span className="font-mono text-slate-200 text-sm">main.tf (AWS VPC, Subnets, NAT & EC2 Provisioning)</span>
            </div>
            {isCodeVisible ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
          </button>
          {isCodeVisible && (
            <pre className="p-6 bg-slate-900 text-[13px] leading-relaxed text-slate-300 overflow-x-auto font-mono max-h-[520px]">
              <code>{HighlightComments(terraformCode)}</code>
            </pre>
          )}
        </div>
      </section>

      {/* 4. 실습 데모 영상 */}
      <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-bold text-slate-800">Terraform 프로비저닝 실습 영상</h3>
          </div>
          <span className="text-xs font-mono text-slate-400">terraform init → plan → apply</span>
        </div>

        <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
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

        <div className="flex items-center gap-2 bg-slate-50 px-5 py-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>코드 한 줄로 AWS VPC부터 서브넷, 라우팅 테이블, EC2 인스턴스까지 자동으로 생성되는 과정을 담은 시연 영상입니다.</span>
        </div>
      </section>
    </div>
  );
};
export default StudyContent;