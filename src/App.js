import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './layouts/Main';
import Introduction from './pages/Introduction';

// 각 페이지를 lazy로 import
const CertificationsPage = React.lazy(() => import('./pages/Certifications'));
const RecordsPage = React.lazy(() => import('./pages/Records'));
const Team1 = React.lazy(() => import('./pages/TeamProject/TP1'));

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
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/Certifications" element={<CertificationsPage />} />
            <Route path="/TeamProject/tp1" element={<Team1 />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;