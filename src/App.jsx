import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';
import Speakers from './components/Speakers';
import SpeakerModal from './components/SpeakerModal';
import ImportantDates from './components/ImportantDates';
import RegistrationFees from './components/RegistrationFees';
import Committee from './components/Committee';
import Venue from './components/Venue';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3500);
  };

  const closeToast = () => {
    setToast({ visible: false, message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <About />
        <Topics />
        <Speakers onSelectSpeaker={setSelectedSpeaker} />
        <ImportantDates />
        <RegistrationFees />
        <Committee />
        <Venue onShowToast={showToast} />
      </main>

      <Footer />

      {/* Interactive Keynote Speaker Modal */}
      <SpeakerModal 
        speaker={selectedSpeaker} 
        onClose={() => setSelectedSpeaker(null)} 
      />

      {/* Copy / Action Toast Notification */}
      <Toast 
        visible={toast.visible} 
        message={toast.message} 
        onClose={closeToast} 
      />
    </div>
  );
}
