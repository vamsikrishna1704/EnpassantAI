import { useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Modal from './components/Modal';
import Features from './components/Features';
import './App.css';
import { HowItWorks } from './components/HowItWorks';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='App'>
      <div className="relative">
        <NavBar onPreBook={() => setModalOpen(true)} />
        <Hero onPreBook={() => setModalOpen(true)} />
        <main>
          <Features />
          <HowItWorks />
          {/* HowItWorks could be another component if needed */}
          <CTA onPreBook={() => setModalOpen(true)} />
        </main>
        <Modal visible={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}

export default App
