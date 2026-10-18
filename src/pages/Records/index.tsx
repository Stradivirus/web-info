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
import type { RecordAccentTheme } from '../../components/Records/RecordsCommon';
import { useRecords } from '../../hooks/useRecords';
import type { OpenRecordsState } from '../../hooks/useRecords';
import { BookOpen, Server, GitBranch, Layers } from 'lucide-react';

interface RecordItem {
  id: keyof OpenRecordsState;
  title: string;
  date: string;
  category: string;
  Content: React.FC;
}

const philosophyRecords: RecordItem[] = [
  {
    id: 'codeComments',
    title: 'Vibe Coding: 주석으로 AI를 지휘하는 오케스트레이션 전략',
    date: '2025.02.27',
    category: 'AI Philosophy',
    Content: CodeCommentsContent,
  },
  {
    id: 'blueprintStrategy',
    title: 'Blueprint Strategy: 데이터 중심의 효율적 개발 아키텍처',
    date: '2025.02.28',
    category: 'Strategy',
    Content: BlueprintStrategyContent,
  },
];

const cloudInfraRecords: RecordItem[] = [
  {
    id: 'infraArch',
    title: '보안을 고려한 인프라 아키텍처 및 자동화 구축',
    date: '2025.12.16',
    category: 'Security & Infra',
    Content: InfraArchitectureContent,
  },
  {
    id: 'assetMigration',
    title: 'React 앱의 정적 에셋을 Oracle Cloud Storage로 마이그레이션',
    date: '2025.09.18',
    category: 'Cloud & CDN',
    Content: AssetMigrationContent,
  },
  {
    id: 'webserver',
    title: 'Nginx에서 Caddy로 웹서버 마이그레이션',
    date: '2025.06.30',
    category: 'Web Server',
    Content: WebserverContent,
  },
  {
    id: 'loadBalancing',
    title: 'Nginx를 활용한 프론트엔드 로드밸런싱 구현',
    date: '2025.01.12',
    category: 'Network & HA',
    Content: LoadBalancingContent,
  },
  {
    id: 'terraform',
    title: '테라폼으로 AWS 인프라 구축하기',
    date: '2025.01.05',
    category: 'IaC',
    Content: TerraformContent,
  },
];

const cicdRecords: RecordItem[] = [
  {
    id: 'jenkins',
    title: 'Jenkins 기반 서버 운영 자동화 파이프라인 구축',
    date: '2025.09.01',
    category: 'Automation',
    Content: JenkinsContent,
  },
  {
    id: 'dockercompose',
    title: 'Docker Compose 분리를 통한 서비스 배포 최적화',
    date: '2025.01.19',
    category: 'Container Ops',
    Content: DockerComposeContent,
  },
  {
    id: 'cicd',
    title: '쿠버네티스 Jenkins ArgoCD CI/CD 구축 실습',
    date: '2025.01.08',
    category: 'GitOps & K8s',
    Content: CICDContent,
  },
];

const dbAppRecords: RecordItem[] = [
  {
    id: 'postgresqlReplication',
    title: 'PostgreSQL 17 스트리밍 복제 구축',
    date: '2025.08.18',
    category: 'Database HA',
    Content: PostgreSQLReplicationContent,
  },
  {
    id: 'cloudPostgresConfig',
    title: '오라클 클라우드를 활용해 PostgreSQL 분리 및 운영 설정',
    date: '2025.07.16',
    category: 'Database Ops',
    Content: CloudPostgresConfigContent,
  },
  {
    id: 'msa',
    title: '모놀리식 백엔드의 MSA 전환',
    date: '2025.01.15',
    category: 'Backend MSA',
    Content: MSAContent,
  },
  {
    id: 'refactoring',
    title: '리액트 프로젝트 컴포넌트 및 데이터 구조 리팩토링',
    date: '2024.11.20',
    category: 'Frontend Arch',
    Content: RefactoringContent,
  },
];

const Records: React.FC = () => {
  const {
    openRecords,
    scrollRefs,
    toggleRecord,
    isPhilosophyOpen,
    isCloudInfraOpen,
    isCicdOpen,
    isDbAppOpen,
    getCardStyle,
  } = useRecords();

  const sections: {
    id: string;
    title: string;
    subtitle: string;
    theme: RecordAccentTheme;
    icon: React.ReactNode;
    badgeBg: string;
    isOpen: boolean;
    items: RecordItem[];
  }[] = [
    {
      id: 'section-philosophy',
      title: 'AI & Engineering Philosophy',
      subtitle: 'AI 오케스트레이션과 데이터 중심 설계 철학',
      theme: 'indigo',
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      badgeBg: 'bg-indigo-100 text-indigo-700',
      isOpen: isPhilosophyOpen,
      items: philosophyRecords,
    },
    {
      id: 'section-cloud-infra',
      title: 'Cloud & Infrastructure',
      subtitle: '클라우드 아키텍처, 네트워크 보안, 웹서버 및 IaC 엔지니어링',
      theme: 'emerald',
      icon: <Server className="w-6 h-6 text-emerald-600" />,
      badgeBg: 'bg-emerald-100 text-emerald-700',
      isOpen: isCloudInfraOpen,
      items: cloudInfraRecords,
    },
    {
      id: 'section-cicd',
      title: 'CI/CD & Container Orchestration',
      subtitle: '무중단 배포 파이프라인, 컨테이너 분리 및 서버 운영 자동화',
      theme: 'sky',
      icon: <GitBranch className="w-6 h-6 text-sky-600" />,
      badgeBg: 'bg-sky-100 text-sky-700',
      isOpen: isCicdOpen,
      items: cicdRecords,
    },
    {
      id: 'section-db-app',
      title: 'Database & Application Architecture',
      subtitle: '고가용성 데이터베이스 구축, MSA 전환 및 프론트엔드 아키텍처 리팩토링',
      theme: 'purple',
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      badgeBg: 'bg-purple-100 text-purple-700',
      isOpen: isDbAppOpen,
      items: dbAppRecords,
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 md:px-8 py-10">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight border-b-4 border-blue-500 pb-3 inline-block">
          Study Records
        </h1>
      </div>

      {/* 4대 도메인 섹션 리스트 (1열 구성) */}
      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-8">
            {/* 섹션 헤더 */}
            <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                {section.icon}
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-wider">
                  {section.title}
                </h2>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${section.badgeBg}`}>
                  {section.items.length}
                </span>
              </div>
              <span className="hidden md:inline text-xs text-slate-400">
                {section.subtitle}
              </span>
            </div>

            {/* 섹션 카드 1열 리스트 */}
            <div className="flex flex-col gap-3">
              {section.items.map(({ id, title, date, category, Content }) => (
                <div
                  key={id}
                  ref={(el) => {
                    scrollRefs.current[id] = el;
                  }}
                  className={getCardStyle(openRecords[id], section.isOpen)}
                >
                  <StudyAccordion
                    title={title}
                    date={date}
                    category={category}
                    theme={section.theme}
                    isOpen={openRecords[id]}
                    onToggle={() => toggleRecord(id)}
                  >
                    <Content />
                  </StudyAccordion>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Records;