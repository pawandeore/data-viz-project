import React from 'react';
import { Search } from 'lucide-react';

interface NavBarProps {
  items: { label: string; active: boolean }[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => (
    <nav>
    <ul className="flex space-x-3">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className={`text-sm font-medium py-2.5 px-5 rounded-md transition-colors duration-200 whitespace-nowrap ${
              item.active
                ? 'bg-[#242424] text-white border border-neutral-600'
                : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
            }`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

const Header: React.FC = () => {
  const navItems = [
    { label: 'Charging Stations', active: true },
    { label: 'Fleet Sizing', active: false },
    { label: 'Parking', active: false },
  ];

  return (
    <header className="bg-[#161618] border-b border-neutral-800 py-4 px-6">
      <div className="flex justify-between items-center">
        <NavBar items={navItems} />
        
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-primary-black border border-neutral-600 rounded-md py-2 px-10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-4 w-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;