// src/components/VerticalSidebar.tsx
import {
  BellIcon,
  CircleUserIcon,
  ClipboardListIcon,
  CloudUploadIcon,
  HomeIcon,
  MenuIcon,
  SettingsIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VerticalSidebar = () => {
  return (
    <nav className="flex flex-col justify-between items-center p-5 bg-black h-full fixed">
      {/* Top icons */}
      <div className="flex flex-col space-y-8 items-center">
        <MenuIcon className="w-6 h-6 text-gray-400 mt-1" />
        <Link to="/dashboard">
          <div className='border border-neutral-600 bg-neutral-800 p-2 rounded-md'>
            <HomeIcon className="w-5 h-5 text-gray-400 hover:text-neutral-600" />
          </div>
        </Link>
        <BellIcon className="w-5 h-5 text-gray-400" />
        <ClipboardListIcon className="w-5 h-5 text-gray-400" />
        <CloudUploadIcon className="w-5 h-5 text-gray-400" />
        <SettingsIcon className="w-5 h-5 text-gray-400" />
      </div>

      {/* Bottom icon: Profile */}
      <Link to="/profile">
        <CircleUserIcon className="w-5 h-5 text-gray-400 hover:text-neutral-600 mb-3" />
      </Link>
    </nav>
  );
};

export default VerticalSidebar;
