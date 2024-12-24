import React from 'react';
import { Menu, Search, Grid, Settings as SettingsIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="flex items-center px-4 py-2 border-b">
      <div className="flex items-center flex-1">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
        <img src="/docs-icon.png" alt="Docs" className="h-8 w-8 mx-2" />
        <h1 className="text-[22px] text-gray-800">Docs</h1>
      </div>
      
      {isHome && (
        <div className="flex-[2] max-w-[720px]">
          <div className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2">
            <Search size={20} className="text-gray-500 mr-3" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent outline-none flex-1"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-end flex-1 space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Grid size={20} />
        </button>
        <Link 
          to="/settings" 
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label="Settings"
        >
          <SettingsIcon size={20} />
        </Link>
        <button className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          A
        </button>
      </div>
    </header>
  );
}