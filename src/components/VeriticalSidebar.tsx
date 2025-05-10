// src/components/VerticalSidebar.tsx
import { Link } from 'react-router-dom';

const VerticalSidebar = () => {

  return (
    <nav className="flex flex-col space-y-4">
      <Link to="/profile" className="text-blue-600 hover:underline font-medium">Profile</Link>
    </nav>
  );
};

export default VerticalSidebar;
