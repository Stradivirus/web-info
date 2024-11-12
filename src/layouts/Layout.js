import React from 'react';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b h-16 fixed w-full top-0 z-50">
        <div className="mx-auto px-[8%] h-full flex items-center">
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>
      </header>

      <div className="flex pt-16 min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r fixed h-full">
          <div className="p-4">
            {/* Sidebar content will go here */}
            <nav className="space-y-2">
              <div className="p-2 hover:bg-gray-100 rounded">Menu 1</div>
              <div className="p-2 hover:bg-gray-100 rounded">Menu 2</div>
              <div className="p-2 hover:bg-gray-100 rounded">Menu 3</div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64">
          <div className="px-[8%] py-6">
            {/* Main content will go here */}
            <div className="bg-white rounded-lg p-6">
              Main Content Area
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;