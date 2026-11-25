import React, { useState, useEffect } from 'react';
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
import PresentationSchedulePage from './pages/PresentationSchedulePage';

export default function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '' });

  // Feature Flag: Set to true when ready to publish the schedule page
  const ENABLE_SCHEDULE_PAGE = false;

  // Route state: 'home' or 'schedule'
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (!ENABLE_SCHEDULE_PAGE || typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('/schedule') || hash.includes('schedule')) {
      return 'schedule';
    }
    return 'home';
  });

  useEffect(() => {
    // If schedule page is disabled and user navigates directly to /schedule, redirect to home
    if (!ENABLE_SCHEDULE_PAGE) {
      if (typeof window !== 'undefined' && window.location.pathname.toLowerCase().includes('/schedule')) {
        window.history.replaceState({}, '', '/');
      }
      return;
    }

    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/schedule') || hash.includes('schedule')) {
        setCurrentRoute('schedule');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [ENABLE_SCHEDULE_PAGE]);

  const navigateToSchedule = ENABLE_SCHEDULE_PAGE ? () => {
    setCurrentRoute('schedule');
    window.history.pushState({}, '', '/schedule');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } : undefined;

  const navigateToHome = (hash = '') => {
    setCurrentRoute('home');
    window.history.pushState({}, '', '/' + hash);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3500);
  };

  const closeToast = () => {
    setToast({ visible: false, message: '' });
  };

  if (ENABLE_SCHEDULE_PAGE && currentRoute === 'schedule') {
    return (
      <PresentationSchedulePage 
        onNavigateHome={() => navigateToHome('')}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <Navbar onNavigateSchedule={navigateToSchedule} />

      <main className="flex-grow">
        <Hero onNavigateSchedule={navigateToSchedule} />
        <About />
        <Topics />
        <Speakers onSelectSpeaker={setSelectedSpeaker} />
        <ImportantDates onNavigateSchedule={navigateToSchedule} />
        <RegistrationFees />
        <Committee />
        <Venue onShowToast={showToast} />
      </main>

      <Footer onNavigateSchedule={navigateToSchedule} />

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
