import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DocumentList from './components/DocumentList';
import Settings from './pages/Settings';
import Audits from './pages/Audits';
import Reports from './pages/Reports';
import Templates from './pages/Templates';
import FloatingActionButton from './components/FloatingActionButton';
import Drawer from './components/navigation/Drawer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header onMenuClick={() => setIsDrawerOpen(!isDrawerOpen)} />
        <Drawer isOpen={isDrawerOpen} />
        <main className={`transition-all duration-200 ${isDrawerOpen ? 'ml-64' : ''}`}>
          <Routes>
            <Route path="/" element={
              <>
                <DocumentList />
                <FloatingActionButton />
              </>
            } />
            <Route path="/audits" element={<Audits />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;