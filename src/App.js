import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './layouts/Main';
import CertificationsPage from './pages/Certifications';
import ProgrammingPage from './pages/Study-Skills/Programming';
import DatabasePage from './pages/Study-Skills/Database';
import CICDPage from './pages/Study-Skills/CICD';
import DevToolsPage from './pages/Study-Skills/DevTools';
import ContainerPage from './pages/Study-Skills/DK';
import AwsPage from './pages/Study-Skills/Aws';
import GitPage from './pages/Study-Skills/Git';
import MonitoringPage from './pages/Study-Skills/Monitoring';


function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;