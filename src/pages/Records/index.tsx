import React from 'react';
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
import { StudyContent as BlueprintStrategyContent } from './BlueprintStrategy';
import { StudyAccordion } from '../../components/Records/RecordsCommon';
import { useRecords } from '../../hooks/useRecords';
import { BookOpen, Server, Layers } from 'lucide-react';

const Records: React.FC = () => {
  const {
    openRecords,
    scrollRefs,
    toggleRecord,
    isInfraOpen,
    isFullstackOpen,
    isPhilosophyOpen,
    getCardStyle,
  } = useRecords();

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
                <div ref={el => scrollRefs.current.codeComments = el} className={getCardStyle(openRecords.codeComments, isPhilosophyOpen)}>
                  <StudyAccordion title="Vibe Coding: 주석으로 AI를 지휘하는 오케스트레이션 전략" date="2025.02.27" category="Philosophy" isOpen={openRecords.codeComments} onToggle={() => toggleRecord('codeComments')}>
                    <CodeCommentsContent />
                  </StudyAccordion>
                </div>
                <div ref={el => scrollRefs.current.blueprintStrategy = el} className={getCardStyle(openRecords.blueprintStrategy, isPhilosophyOpen)}>
                  <StudyAccordion title="Blueprint Strategy: 데이터 중심의 효율적 개발 아키텍처" date="2025.02.28" category="Strategy" isOpen={openRecords.blueprintStrategy} onToggle={() => toggleRecord('blueprintStrategy')}>
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
                {[
                  { id: 'infraArch', title: '보안을 고려한 인프라 아키텍처 및 자동화 구축', date: '2025.12.16', category: 'DevOps', Content: InfraArchitectureContent },
                  { id: 'jenkins', title: 'Jenkins 기반 서버 운영 자동화 파이프라인 구축', date: '2025.09.01', category: 'DevOps', Content: JenkinsContent },
                  { id: 'assetMigration', title: 'React 앱의 정적 에셋을 Oracle Cloud Storage로 마이그레이션', date: '2025.09.18', category: 'Cloud', Content: AssetMigrationContent },
                  { id: 'dockercompose', title: 'Docker Compose 분리를 통한 서비스 배포 최적화', date: '2025.01.19', category: 'DevOps', Content: DockerComposeContent },
                  { id: 'cicd', title: '쿠버네티스 Jenkins ArgoCD CICD 구축 영상', date: '2025.01.08', category: 'DevOps', Content: CICDContent },
                  { id: 'terraform', title: '테라폼으로 AWS 인프라 구축하기', date: '2025.01.05', category: 'DevOps', Content: TerraformContent },
                  { id: 'loadBalancing', title: 'Nginx를 활용한 프론트엔드 로드밸런싱 구현', date: '2025.01.12', category: 'DevOps', Content: LoadBalancingContent },
                  { id: 'webserver', title: 'Nginx에서 Caddy로 웹서버 마이그레이션', date: '2025.06.30', category: 'Frontend', Content: WebserverContent },
                ].map(({ id, title, date, category, Content }) => (
                  <div key={id} ref={el => scrollRefs.current[id] = el} className={getCardStyle(openRecords[id as keyof typeof openRecords], isInfraOpen)}>
                    <StudyAccordion title={title} date={date} category={category} isOpen={openRecords[id as keyof typeof openRecords]} onToggle={() => toggleRecord(id as keyof typeof openRecords)}>
                      <Content />
                    </StudyAccordion>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Fullstack & Database */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-7 h-7 text-purple-600" />
                <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">Fullstack & Database</h2>
              </div>
              <div className={`grid grid-cols-1 ${isFullstackOpen ? '' : 'lg:grid-cols-2'} gap-6 transition-all duration-500`}>
                {[
                  { id: 'postgresqlReplication', title: 'PostgreSQL 17 스트리밍 복제 구축', date: '2025.08.18', category: 'Database', Content: PostgreSQLReplicationContent },
                  { id: 'cloudPostgresConfig', title: '오라클 클라우드를 활용해 PostgreSQL 분리 및 운영 설정', date: '2025.07.16', category: 'DevOps', Content: CloudPostgresConfigContent },
                  { id: 'msa', title: '모놀리식 백엔드의 MSA 전환', date: '2025.01.15', category: 'Backend', Content: MSAContent },
                  { id: 'refactoring', title: '리액트 프로젝트 컴포넌트 리팩토링', date: '2024.11.20', category: 'Frontend', Content: RefactoringContent },
                ].map(({ id, title, date, category, Content }) => (
                  <div key={id} ref={el => scrollRefs.current[id] = el} className={getCardStyle(openRecords[id as keyof typeof openRecords], isFullstackOpen)}>
                    <StudyAccordion title={title} date={date} category={category} isOpen={openRecords[id as keyof typeof openRecords]} onToggle={() => toggleRecord(id as keyof typeof openRecords)}>
                      <Content />
                    </StudyAccordion>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Records;