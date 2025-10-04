import React, { useState } from 'react';
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
import { StudyAccordion } from '../../components/Records/RecordsCommon';

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
  postgresqlReplication?: boolean;
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
    postgresqlReplication: false
  });

  const toggleRecord = (id: keyof OpenRecordsState) => {
    setOpenRecords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6 text-blue-800 border-b-2 border-blue-200 pb-2">Study Records</h1>
          
          <div className="space-y-4">

            <StudyAccordion
              title="React 앱의 정적 에셋을 Oracle Cloud Storage로 마이그레이션"
              date="2025.09.18"
              category="Cloud"
              isOpen={openRecords.assetMigration}
              onToggle={() => toggleRecord('assetMigration')}
            >
              <AssetMigrationContent />
            </StudyAccordion>

            <StudyAccordion
              title="Jenkins 기반 서버 운영 자동화 파이프라인 구축"
              date="2025.09.01"
              category="DevOps"
              isOpen={openRecords.jenkins}
              onToggle={() => toggleRecord('jenkins')}
            >
              <JenkinsContent />
            </StudyAccordion>

            <StudyAccordion
              title="PostgreSQL 17 스트리밍 복제 구축"
              date="2025.08.18"
              category="Database"
              isOpen={openRecords.postgresqlReplication ?? false}
              onToggle={() => toggleRecord('postgresqlReplication')}
            >
              <PostgreSQLReplicationContent />
            </StudyAccordion>

            <StudyAccordion
              title="오라클 클라우드를 활용해 PostgreSQL 분리 및 운영 설정"
              date="2025.07.16"
              category="DevOps"
              isOpen={openRecords.cloudPostgresConfig}
              onToggle={() => toggleRecord('cloudPostgresConfig')}
            >
              <CloudPostgresConfigContent />
            </StudyAccordion>

            <StudyAccordion
              title="Nginx에서 Caddy로 웹서버 마이그레이션"
              date="2025.06.30"
              category="Frontend"
              isOpen={openRecords.webserver}
              onToggle={() => toggleRecord('webserver')}
            >
              <WebserverContent />
            </StudyAccordion>

            <StudyAccordion
              title="Docker Compose 분리를 통한 서비스 배포 최적화"
              date="2025.01.19"
              category="DevOps"
              isOpen={openRecords.dockercompose}
              onToggle={() => toggleRecord('dockercompose')}
            >
              <DockerComposeContent />
            </StudyAccordion>

            <StudyAccordion
              title="모놀리식 백엔드의 MSA 전환"
              date="2025.01.15"
              category="Backend"
              isOpen={openRecords.msa}
              onToggle={() => toggleRecord('msa')}
            >
              <MSAContent />
            </StudyAccordion>

            <StudyAccordion
              title="Nginx를 활용한 프론트엔드 로드밸런싱 구현"
              date="2025.01.12"
              category="DevOps"
              isOpen={openRecords.loadBalancing}
              onToggle={() => toggleRecord('loadBalancing')}
            >
              <LoadBalancingContent />
            </StudyAccordion>

            <StudyAccordion
              title="쿠버네티스 Jenkins ArgoCD CICD 구축 영상"
              date="2025.01.08"
              category="DevOps"
              isOpen={openRecords.cicd}
              onToggle={() => toggleRecord('cicd')}
            >
              <CICDContent />
            </StudyAccordion>

            <StudyAccordion
              title="테라폼으로 AWS 인프라 구축하기"
              date="2025.01.05"
              category="DevOps"
              isOpen={openRecords.terraform}
              onToggle={() => toggleRecord('terraform')}
            >
              <TerraformContent />
            </StudyAccordion>

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
      </div>
    </main>
  );
};

export default Records;