import React, { useState, useEffect, useRef } from 'react';
import { StudyContent as CICDContent } from './CICD';
import { StudyContent as RefactoringContent } from './Refactoring';
import { StudyContent as TerraformContent } from './Terraform';
import { StudyContent as LoadBalancingContent } from './LoadBalancing';
import { StudyContent as MSAContent } from './BackendMSA';
import { StudyContent as DockerComposeContent } from './DockerCompose';
import { StudyContent as CloudPostgresConfigContent } from './CloudPostgresConfig';
import { StudyContent as PostgreSQLReplicationContent } from './PostgreSQLReplication';
import { StudyContent as WebserverContent } from './webserver';
import { StudyContent as JenkinsContent } from './jenkins';
import { StudyContent as AssetMigrationContent } from './AssetMigration';
import { StudyContent as InfraArchitectureContent } from './InfraArchitecture';
import { StudyContent as CodeCommentsContent } from './CodeComments';
import { StudyContent as BlueprintStrategyContent } from './BlueprintStrategy'; // [추가됨]
import { StudyAccordion } from '../../components/Records/RecordsCommon';
import { BookOpen, Server, Layers } from 'lucide-react';

interface OpenRecordsState {
  webserver: boolean;
  dockercompose: boolean;
  msa: boolean;
  loadBalancing: boolean;
  cicd: boolean;
  refactoring: boolean;
  autoCleanup: boolean;
  terraform: boolean;
  crawling: boolean;
  cloudPostgresConfig: boolean;
  jenkins: boolean;
  assetMigration: boolean;
  postgresqlReplication: boolean;
  infraArch: boolean;
  codeComments: boolean;
  blueprintStrategy: boolean; // [추가됨]
}

const Records: React.FC = () => {
  const [openRecords, setOpenRecords] = useState<OpenRecordsState>({
    webserver: false,
    dockercompose: false,
    msa: false,
    loadBalancing: false,
    cicd: false,
    refactoring: false,
    autoCleanup: false,
    terraform: false,
    crawling: false,
    cloudPostgresConfig: false,
    jenkins: false,
    assetMigration: false,
    postgresqlReplication: false,
    infraArch: false,
    codeComments: false,
    blueprintStrategy: false // [추가됨]
  });

  // 스크롤 이동을 위한 Ref 관리
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleRecord = (id: keyof OpenRecordsState) => {
    setOpenRecords(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      
      if (newState[id]) {
        setTimeout(() => {
          scrollRefs.current[id]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
      
      return newState;
    });
  };

  // 각 섹션별로 하나라도 열려있는지 확인
  const isInfraOpen = [
    openRecords.infraArch, openRecords.jenkins, openRecords.assetMigration, 
    openRecords.dockercompose, openRecords.cicd, openRecords.terraform, 
    openRecords.loadBalancing, openRecords.webserver
  ].some(Boolean);

  const isFullstackOpen = [
    openRecords.postgresqlReplication, openRecords.cloudPostgresConfig, 
    openRecords.msa, openRecords.refactoring
  ].some(Boolean);

  const isPhilosophyOpen = openRecords.codeComments || openRecords.blueprintStrategy; // [수정됨]

  // 공통 카드 스타일 생성 함수
  const getCardStyle = (isOpen: boolean, isAnyInSectionOpen: boolean) => {
    if (isOpen) {
      return "lg:col-span-2 ring-4 ring-blue-500/20 border-blue-500 shadow-2xl scale-[1.01] z-10 transition-all duration-300";
    }
    if (isAnyInSectionOpen) {
      return "opacity-50 grayscale-[20%] scale-[0.98] transition-all duration-300";
    }
    return "transition-all duration-300";
  };

  return (
    <main className="main-content py-10">
      <div className="main-inner">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-extrabold mb-12 text-slate-900 tracking-tight border-b-4 border-blue-500 pb-4 inline-block">
            Study Records
          </h1>
          
          <div className="space-y-24">
            {/* Section 1: Philosophy & Strategy */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-7 h-7 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">Philosophy & Strategy</h2>
              </div>
              <div className={`grid grid-cols-1 ${isPhilosophyOpen ? '' : 'lg:grid-cols-2'} gap-6 transition-all duration-500`}>
                <div 
                  ref={el => scrollRefs.current.codeComments = el}
                  className={getCardStyle(openRecords.codeComments, isPhilosophyOpen)}
                >
                  <StudyAccordion
                    title="Vibe Coding: 주석으로 AI를 지휘하는 오케스트레이션 전략"
                    date="2025.02.27"
                    category="Philosophy"
                    isOpen={openRecords.codeComments}
                    onToggle={() => toggleRecord('codeComments')}
                  >
                    <CodeCommentsContent />
                  </StudyAccordion>
                </div>

                <div 
                  ref={el => scrollRefs.current.blueprintStrategy = el}
                  className={getCardStyle(openRecords.blueprintStrategy, isPhilosophyOpen)}
                >
                  <StudyAccordion
                    title="Blueprint Strategy: 데이터 중심의 효율적 개발 아키텍처"
                    date="2025.02.28"
                    category="Strategy"
                    isOpen={openRecords.blueprintStrategy}
                    onToggle={() => toggleRecord('blueprintStrategy')}
                  >
                    <BlueprintStrategyContent />
                  </StudyAccordion>
                </div>
              </div>
            </section>

            {/* Section 2: Infrastructure & DevOps */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Server className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">Infrastructure & DevOps</h2>
              </div>
              <div className={`grid grid-cols-1 ${isInfraOpen ? '' : 'lg:grid-cols-2'} gap-6 transition-all duration-500`}>
                <div ref={el => scrollRefs.current.infraArch = el} className={getCardStyle(openRecords.infraArch, isInfraOpen)}>
                  <StudyAccordion
                    title="보안을 고려한 인프라 아키텍처 및 자동화 구축"
                    date="2025.12.16"
                    category="DevOps"
                    isOpen={openRecords.infraArch}
                    onToggle={() => toggleRecord('infraArch')}
                  >
                    <InfraArchitectureContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.jenkins = el} className={getCardStyle(openRecords.jenkins, isInfraOpen)}>
                  <StudyAccordion
                    title="Jenkins 기반 서버 운영 자동화 파이프라인 구축"
                    date="2025.09.01"
                    category="DevOps"
                    isOpen={openRecords.jenkins}
                    onToggle={() => toggleRecord('jenkins')}
                  >
                    <JenkinsContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.assetMigration = el} className={getCardStyle(openRecords.assetMigration, isInfraOpen)}>
                  <StudyAccordion
                    title="React 앱의 정적 에셋을 Oracle Cloud Storage로 마이그레이션"
                    date="2025.09.18"
                    category="Cloud"
                    isOpen={openRecords.assetMigration}
                    onToggle={() => toggleRecord('assetMigration')}
                  >
                    <AssetMigrationContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.dockercompose = el} className={getCardStyle(openRecords.dockercompose, isInfraOpen)}>
                  <StudyAccordion
                    title="Docker Compose 분리를 통한 서비스 배포 최적화"
                    date="2025.01.19"
                    category="DevOps"
                    isOpen={openRecords.dockercompose}
                    onToggle={() => toggleRecord('dockercompose')}
                  >
                    <DockerComposeContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.cicd = el} className={getCardStyle(openRecords.cicd, isInfraOpen)}>
                  <StudyAccordion
                    title="쿠버네티스 Jenkins ArgoCD CICD 구축 영상"
                    date="2025.01.08"
                    category="DevOps"
                    isOpen={openRecords.cicd}
                    onToggle={() => toggleRecord('cicd')}
                  >
                    <CICDContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.terraform = el} className={getCardStyle(openRecords.terraform, isInfraOpen)}>
                  <StudyAccordion
                    title="테라폼으로 AWS 인프라 구축하기"
                    date="2025.01.05"
                    category="DevOps"
                    isOpen={openRecords.terraform}
                    onToggle={() => toggleRecord('terraform')}
                  >
                    <TerraformContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.loadBalancing = el} className={getCardStyle(openRecords.loadBalancing, isInfraOpen)}>
                  <StudyAccordion
                    title="Nginx를 활용한 프론트엔드 로드밸런싱 구현"
                    date="2025.01.12"
                    category="DevOps"
                    isOpen={openRecords.loadBalancing}
                    onToggle={() => toggleRecord('loadBalancing')}
                  >
                    <LoadBalancingContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.webserver = el} className={getCardStyle(openRecords.webserver, isInfraOpen)}>
                  <StudyAccordion
                    title="Nginx에서 Caddy로 웹서버 마이그레이션"
                    date="2025.06.30"
                    category="Frontend"
                    isOpen={openRecords.webserver}
                    onToggle={() => toggleRecord('webserver')}
                  >
                    <WebserverContent />
                  </StudyAccordion>
                </div>
              </div>
            </section>

            {/* Section 3: Fullstack & Database */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-7 h-7 text-purple-600" />
                <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">Fullstack & Database</h2>
              </div>
              <div className={`grid grid-cols-1 ${isFullstackOpen ? '' : 'lg:grid-cols-2'} gap-6 transition-all duration-500`}>
                <div ref={el => scrollRefs.current.postgresqlReplication = el} className={getCardStyle(openRecords.postgresqlReplication, isFullstackOpen)}>
                  <StudyAccordion
                    title="PostgreSQL 17 스트리밍 복제 구축"
                    date="2025.08.18"
                    category="Database"
                    isOpen={openRecords.postgresqlReplication}
                    onToggle={() => toggleRecord('postgresqlReplication')}
                  >
                    <PostgreSQLReplicationContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.cloudPostgresConfig = el} className={getCardStyle(openRecords.cloudPostgresConfig, isFullstackOpen)}>
                  <StudyAccordion
                    title="오라클 클라우드를 활용해 PostgreSQL 분리 및 운영 설정"
                    date="2025.07.16"
                    category="DevOps"
                    isOpen={openRecords.cloudPostgresConfig}
                    onToggle={() => toggleRecord('cloudPostgresConfig')}
                  >
                    <CloudPostgresConfigContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.msa = el} className={getCardStyle(openRecords.msa, isFullstackOpen)}>
                  <StudyAccordion
                    title="모놀리식 백엔드의 MSA 전환"
                    date="2025.01.15"
                    category="Backend"
                    isOpen={openRecords.msa}
                    onToggle={() => toggleRecord('msa')}
                  >
                    <MSAContent />
                  </StudyAccordion>
                </div>

                <div ref={el => scrollRefs.current.refactoring = el} className={getCardStyle(openRecords.refactoring, isFullstackOpen)}>
                  <StudyAccordion
                    date="2024.11.20"
                    title="리액트 프로젝트 컴포넌트 리팩토링"
                    category="Frontend"
                    isOpen={openRecords.refactoring}
                    onToggle={() => toggleRecord('refactoring')}
                  >
                    <RefactoringContent />
                  </StudyAccordion>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Records;
