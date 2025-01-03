import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './layouts/Main';

// 각 페이지를 lazy로 import
const CertificationsPage = React.lazy(() => import('./pages/Certifications'));
const ProgrammingPage = React.lazy(() => import('./pages/Study-Skills/Programming'));
const DatabasePage = React.lazy(() => import('./pages/Study-Skills/Database'));
const CICDPage = React.lazy(() => import('./pages/Study-Skills/CICD'));
const DevToolsPage = React.lazy(() => import('./pages/Study-Skills/DevTools'));
const ContainerPage = React.lazy(() => import('./pages/Study-Skills/DK'));
const AwsPage = React.lazy(() => import('./pages/Study-Skills/Aws'));
const GitPage = React.lazy(() => import('./pages/Study-Skills/Git'));
const MonitoringPage = React.lazy(() => import('./pages/Study-Skills/Monitoring'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:id" element={<Main />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/study-skills/programming" element={<ProgrammingPage />} />
            <Route path="/study-skills/database" element={<DatabasePage />} />
            <Route path="/study-skills/CICD" element={<CICDPage />} />
            <Route path="/study-skills/devtools" element={<DevToolsPage />} />
            <Route path="/study-skills/container" element={<ContainerPage />} />
            <Route path="/study-skills/Aws" element={<AwsPage />} />
            <Route path="/study-skills/git" element={<GitPage />} />
            <Route path="/study-skills/monitoring" element={<MonitoringPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;