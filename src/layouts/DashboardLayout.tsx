// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import VeriticalSidebar from '../components/VeriticalSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-20">
        <VeriticalSidebar />
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
