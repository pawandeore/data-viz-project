// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import VeriticalSidebar from '../components/VeriticalSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-20 border-r">
        <VeriticalSidebar />
      </aside>
      <main className="flex-1 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
