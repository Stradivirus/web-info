import React from 'react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <main className="flex-1 ml-0 md:ml-[360px] w-full md:w-auto min-h-[calc(100vh-160px)]">
      <div className="pt-6 h-full max-w-none">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;