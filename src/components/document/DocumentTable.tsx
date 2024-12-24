import React from 'react';
import { MoreVertical, Users, Mail } from 'lucide-react';
import { Document } from '../../types/document';

interface DocumentTableProps {
  documents: Document[];
}

export default function DocumentTable({ documents }: DocumentTableProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center px-4 py-2 text-sm font-medium text-gray-500">
        <div className="w-8" /> {/* Icon space */}
        <span className="flex-1">Title</span>
        <span className="w-8" /> {/* Shared icon space */}
        <span className="w-32">Owner</span>
        <span className="w-32">Modified</span>
        <span className="w-32">Last Opened</span>
        <span className="w-24">Follow-ups</span>
        <div className="w-8" /> {/* Actions space */}
      </div>
      
      {documents.map((doc) => (
        <div 
          key={doc.id}
          className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <img 
            src="/doc-icon.png" 
            alt="Document" 
            className="w-6 h-6 mr-2"
          />
          <span className="flex-1">{doc.title}</span>
          {doc.shared && (
            <Users size={16} className="text-gray-500 w-8" />
          )}
          {!doc.shared && <div className="w-8" />}
          <span className="text-sm text-gray-500 w-32">{doc.owner}</span>
          <span className="text-sm text-gray-500 w-32">{doc.lastModified}</span>
          <span className="text-sm text-gray-500 w-32">{doc.lastOpened || 'Never'}</span>
          <div className="flex items-center w-24">
            <Mail size={14} className="text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">{doc.followUpCount}</span>
          </div>
          <button className="p-1 hover:bg-gray-200 rounded-full">
            <MoreVertical size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}