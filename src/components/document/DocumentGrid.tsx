import React from 'react';
import { MoreVertical, Users, Mail } from 'lucide-react';
import { Document } from '../../types/document';

interface DocumentGridProps {
  documents: Document[];
}

export default function DocumentGrid({ documents }: DocumentGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {documents.map((doc) => (
        <div 
          key={doc.id}
          className="group relative bg-white border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
        >
          <div className="aspect-w-3 aspect-h-4 mb-3">
            <img 
              src="/doc-icon.png" 
              alt="Document" 
              className="w-12 h-12 mx-auto"
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium truncate">{doc.title}</h3>
              <button className="p-1 opacity-0 group-hover:opacity-100 hover:bg-gray-100 rounded-full transition-opacity">
                <MoreVertical size={16} />
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="truncate">{doc.owner}</span>
              <div className="flex items-center space-x-2">
                {doc.shared && <Users size={12} />}
                <div className="flex items-center">
                  <Mail size={12} className="mr-1" />
                  <span>{doc.followUpCount}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-xs text-gray-500">
              <span>Modified: {doc.lastModified}</span>
              <span>Opened: {doc.lastOpened || 'Never'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}