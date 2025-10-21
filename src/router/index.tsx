import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../layouts/Main';

// Page components
import Introduction from '../pages/Introduction';
import Overview from '../pages/Overview/Overview';
const CertificationsPage = React.lazy(() => import('../pages/Certifications'));
const RecordsPage = React.lazy(() => import('../pages/Records'));

// Project components
const Project1 = React.lazy(() => import('../pages/Projects/Project1'));
const Project2 = React.lazy(() => import('../pages/Projects/Project2'));
const Project3 = React.lazy(() => import('../pages/Projects/Project3'));
const Project4 = React.lazy(() => import('../pages/Projects/Project4'));
const Project5 = React.lazy(() => import('../pages/Projects/Project5'));
const Project8 = React.lazy(() => import('../pages/Projects/Project8'));

// Team Project components
const Team1 = React.lazy(() => import('../pages/TeamProject/TP1'));
const Team2 = React.lazy(() => import('../pages/TeamProject/TP2'));

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main Pages - Outside Main Layout */}
      <Route path="/Introduction" element={<Introduction />} />
      <Route path="/Records" element={<RecordsPage />} />
      <Route path="/Certifications" element={<CertificationsPage />} />

      {/* Main Layout with nested routes */}
      <Route path="/" element={<Main />}>
        <Route index element={<Overview />} />
        
        {/* Team Projects */}
        <Route path="project/TP1" element={<Team1 />} />
        <Route path="project/TP2" element={<Team2 />} />
        
        {/* Individual Projects */}
        <Route path="project/1" element={<Project1 />} />
        <Route path="project/2" element={<Project2 />} />
        <Route path="project/3" element={<Project3 />} />
        <Route path="project/4" element={<Project4 />} />
        <Route path="project/5" element={<Project5 />} />
        <Route path="project/8" element={<Project8 />} />
      </Route>
    </Routes>
  );
};
