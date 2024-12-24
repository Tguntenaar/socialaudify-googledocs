import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Modal from './modal/Modal';
import AddCompanyForm from './forms/AddCompanyForm';
import { Company } from '../types/company';

export default function FloatingActionButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: Company | File) => {
    // Handle form submission or file upload
    console.log('Submitted:', data);
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center border transition-shadow"
        onClick={() => setIsModalOpen(true)}
        aria-label="Add new company"
      >
        <Plus className="w-8 h-8 text-blue-600" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Company"
      >
        <AddCompanyForm
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}