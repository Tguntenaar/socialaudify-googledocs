import React from 'react';

export default function EmailTemplates() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Email Templates</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="followup" className="block text-sm font-medium text-gray-700">
            Follow-up Template
          </label>
          <textarea
            id="followup"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your follow-up email template..."
          />
        </div>
        <div>
          <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
            Email Signature
          </label>
          <textarea
            id="signature"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email signature..."
          />
        </div>
      </div>
    </div>
  );
}