import React, { useState } from 'react';
import DocumentGrid from './document/DocumentGrid';
import DocumentTable from './document/DocumentTable';
import ViewToggle from './document/ViewToggle';
import { documents } from '../data/documents';

export default function DocumentList() {
  const [viewType, setViewType] = useState<'list' | 'grid'>('list');

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm text-gray-600">Recent documents</h2>
        <ViewToggle viewType={viewType} onViewChange={setViewType} />
      </div>

      {viewType === 'list' ? (
        <DocumentTable documents={documents} />
      ) : (
        <DocumentGrid documents={documents} />
      )}
    </div>
  );
}