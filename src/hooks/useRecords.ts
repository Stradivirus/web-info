import { useState, useRef } from 'react';

export interface OpenRecordsState {
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
  blueprintStrategy: boolean;
}

const initialState: OpenRecordsState = {
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
  blueprintStrategy: false,
};

export function useRecords() {
  const [openRecords, setOpenRecords] = useState<OpenRecordsState>(initialState);
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleRecord = (id: keyof OpenRecordsState) => {
    setOpenRecords(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      if (newState[id]) {
        setTimeout(() => {
          scrollRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      return newState;
    });
  };

  const isInfraOpen = [
    openRecords.infraArch, openRecords.jenkins, openRecords.assetMigration,
    openRecords.dockercompose, openRecords.cicd, openRecords.terraform,
    openRecords.loadBalancing, openRecords.webserver,
  ].some(Boolean);

  const isFullstackOpen = [
    openRecords.postgresqlReplication, openRecords.cloudPostgresConfig,
    openRecords.msa, openRecords.refactoring,
  ].some(Boolean);

  const isPhilosophyOpen = openRecords.codeComments || openRecords.blueprintStrategy;

  const getCardStyle = (isOpen: boolean, isAnyInSectionOpen: boolean) => {
    if (isOpen) return 'lg:col-span-2 ring-4 ring-blue-500/20 border-blue-500 shadow-2xl scale-[1.01] z-10 transition-all duration-300';
    if (isAnyInSectionOpen) return 'opacity-50 grayscale-[20%] scale-[0.98] transition-all duration-300';
    return 'transition-all duration-300';
  };

  return {
    openRecords,
    scrollRefs,
    toggleRecord,
    isInfraOpen,
    isFullstackOpen,
    isPhilosophyOpen,
    getCardStyle,
  };
}