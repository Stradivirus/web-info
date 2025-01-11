import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './layouts/Main';
import DatabasePage from './pages/Research/Database';

// 각 페이지를 lazy로 import
const CertificationsPage = React.lazy(() => import('./pages/Certifications'));
const ProgrammingPage = React.lazy(() => import('./pages/Research/Programming'));
const CICDPage = React.lazy(() => import('./pages/Research/CICD'));
const DevToolsPage = React.lazy(() => import('./pages/Research/DevTools'));
const ContainerPage = React.lazy(() => import('./pages/Research/DK'));
const AwsPage = React.lazy(() => import('./pages/Research/Aws'));
const GitPage = React.lazy(() => import('./pages/Research/Git'));
const MonitoringPage = React.lazy(() => import('./pages/Research/Monitoring'));
const RecordsPage = React.lazy(() => import('./pages/Records'));

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
            <Route path="/Records" element={<RecordsPage />} />
            <Route path="/Project/:id" element={<Main />} />
            <Route path="/Certifications" element={<CertificationsPage />} />
            <Route path="/Research/Programming" element={<ProgrammingPage />} />
            <Route path="/Research/Database" element={<DatabasePage />} />
            <Route path="/Research/CICD" element={<CICDPage />} />
            <Route path="/Research/DevTools" element={<DevToolsPage />} />
            <Route path="/Research/Container" element={<ContainerPage />} />
            <Route path="/Research/Aws" element={<AwsPage />} />
            <Route path="/Research/Git" element={<GitPage />} />
            <Route path="/Research/Monitoring" element={<MonitoringPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;