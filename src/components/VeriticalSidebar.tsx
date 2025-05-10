// src/components/VerticalSidebar.tsx
import {
  BellIcon,
  CircleUserIcon,
  ClipboardListIcon,
  CloudUploadIcon,
  HomeIcon,
  SettingsIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VerticalSidebar = () => {
  return (
    <nav className="flex flex-col justify-between items-center p-5 bg-primary-black h-full">
      {/* Top icons */}
      <div className="flex flex-col space-y-6 items-center">
        <Link to="/dashboard">
          <HomeIcon className="w-6 h-6 text-gray-400 hover:text-blue-600" />
        </Link>
        <BellIcon className="w-6 h-6 text-gray-400" />
        <ClipboardListIcon className="w-6 h-6 text-gray-400" />
        <CloudUploadIcon className="w-6 h-6 text-gray-400" />
        <SettingsIcon className="w-6 h-6 text-gray-400" />
      </div>

      {/* Bottom icon: Profile */}
      <Link to="/profile">
        <CircleUserIcon className="w-6 h-6 text-gray-400 hover:text-blue-600" />
      </Link>
    </nav>
  );
};

export default VerticalSidebar;
