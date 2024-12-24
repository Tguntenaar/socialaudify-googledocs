import { FileText, Clock, PieChart, FileBox, Settings } from 'lucide-react';
import { NavItem } from '../types/navigation';

export const navigationItems: NavItem[] = [
  { 
    icon: Clock, 
    label: 'Recent', 
    path: '/' 
  },
  { 
    icon: FileText, 
    label: 'Audits', 
    path: '/audits' 
  },
  { 
    icon: PieChart, 
    label: 'Reports', 
    path: '/reports' 
  },
  { 
    icon: FileBox, 
    label: 'Templates', 
    path: '/templates' 
  },
  { 
    icon: Settings, 
    label: 'Settings', 
    path: '/settings' 
  }
];