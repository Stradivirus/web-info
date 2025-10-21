import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/Layout';
import { AppRouter } from './router';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        }>
          <AppRouter />
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;