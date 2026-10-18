import { useState, useRef } from 'react';

export interface OpenRecordsState {
  dbAccessControl: boolean;
  webserver: boolean;
  dockercompose: boolean;
  msa: boolean;
  loadBalancing: boolean;
  cicd: boolean;
  refactoring: boolean;
  terraform: boolean;
  cloudPostgresConfig: boolean;
  jenkins: boolean;
  assetMigration: boolean;
  postgresqlReplication: boolean;
  infraArch: boolean;
  codeComments: boolean;
  blueprintStrategy: boolean;
}

const initialState: OpenRecordsState = {
  dbAccessControl: false,
  webserver: false,
  dockercompose: false,
  msa: false,
  loadBalancing: false,
  cicd: false,
  refactoring: false,
  terraform: false,
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

  const isPhilosophyOpen = openRecords.codeComments || openRecords.blueprintStrategy;

  const isCloudInfraOpen = [
    openRecords.dbAccessControl,
    openRecords.infraArch,
    openRecords.assetMigration,
    openRecords.webserver,
    openRecords.loadBalancing,
    openRecords.terraform,
  ].some(Boolean);

  const isCicdOpen = [
    openRecords.jenkins,
    openRecords.dockercompose,
    openRecords.cicd,
  ].some(Boolean);

  const isDbAppOpen = [
    openRecords.postgresqlReplication,
    openRecords.cloudPostgresConfig,
    openRecords.msa,
    openRecords.refactoring,
  ].some(Boolean);

  const getCardStyle = (isOpen: boolean, _isAnyInSectionOpen?: boolean) => {
    if (isOpen) {
      return 'ring-2 ring-slate-900/5 shadow-lg z-10 transition-all duration-200';
    }
    return 'transition-all duration-200';
  };

  return {
    openRecords,
    scrollRefs,
    toggleRecord,
    isPhilosophyOpen,
    isCloudInfraOpen,
    isCicdOpen,
    isDbAppOpen,
    getCardStyle,
  };
}