import React from 'react';
import UserProfile from '../components/settings/UserProfile';
import EmailTemplates from '../components/settings/EmailTemplates';

export default function Settings() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Settings</h1>
      <div className="space-y-12">
        <UserProfile />
        <EmailTemplates />
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}