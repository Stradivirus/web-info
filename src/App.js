import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './layouts/Main';
import CertificationsPage from './pages/Certifications';
import ProgrammingPage from './pages/Study-Skills/Programming';
import DatabasePage from './pages/Study-Skills/Database';
import CICDPage from './pages/Study-Skills/CICD';

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

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;