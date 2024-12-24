import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  viewType: 'list' | 'grid';
  onViewChange: (view: 'list' | 'grid') => void;
}

export default function ViewToggle({ viewType, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex space-x-2">
      <button 
        className={`p-2 rounded text-sm flex items-center ${viewType === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
        onClick={() => onViewChange('list')}
      >
        <List size={16} className="mr-2" />
        List view
      </button>
      <button 
        className={`p-2 rounded text-sm flex items-center ${viewType === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
        onClick={() => onViewChange('grid')}
      >
        <LayoutGrid size={16} className="mr-2" />
        Grid view
      </button>
    </div>
  );
}