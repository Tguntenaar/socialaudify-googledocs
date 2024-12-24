import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';

interface DrawerProps {
  isOpen: boolean;
}

export default function Drawer({ isOpen }: DrawerProps) {
  return (
    <div className={`fixed left-0 top-14 h-full w-64 bg-white border-r transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav className="py-4">
        {navigationItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => 
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-gray-100' : ''}`
            }
          >
            <Icon size={20} className="mr-3" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}