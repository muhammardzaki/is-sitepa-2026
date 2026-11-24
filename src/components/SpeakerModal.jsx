import React, { useEffect, useRef } from 'react';
import { DEFAULT_SPEAKER_TEMPLATE } from '../data/speakers';

const DEFAULT_AVATAR = "/assets/images/speakers/default-avatar.svg";

export default function SpeakerModal({ speaker, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = DEFAULT_AVATAR;
  };

  useEffect(() => {
    if (!speaker) return;

    // Save active element to restore later
    const previousActiveElement = document.activeElement;

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      
      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };
  }, [speaker, onClose]);

  if (!speaker) return null;

  const name = speaker.name || DEFAULT_SPEAKER_TEMPLATE.name;
  const role = speaker.role || DEFAULT_SPEAKER_TEMPLATE.role;
  const institution = speaker.institution || DEFAULT_SPEAKER_TEMPLATE.institution;
  const country = speaker.country || DEFAULT_SPEAKER_TEMPLATE.country;
  const photo = speaker.photo || DEFAULT_AVATAR;
  const trackCategory = speaker.trackCategory || DEFAULT_SPEAKER_TEMPLATE.trackCategory;
  const badgeColorClass = speaker.badgeColorClass || DEFAULT_SPEAKER_TEMPLATE.badgeColorClass;
  const fullBio = speaker.fullBio || DEFAULT_SPEAKER_TEMPLATE.fullBio;
  const keynoteTitle = speaker.keynoteTitle || DEFAULT_SPEAKER_TEMPLATE.keynoteTitle;
  const abstract = speaker.abstract || DEFAULT_SPEAKER_TEMPLATE.abstract;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="speaker-modal-name"
    >
      <div 
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-crimson/10 text-crimson">
              Keynote Speaker Profile
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-crimson"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Speaker Quick Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative shrink-0">
              <img 
                src={photo} 
                alt={name}
                onError={handleImageError}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-white ring-2 ring-slate-100 bg-slate-100"
              />
            </div>
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${badgeColorClass}`}>
                {trackCategory}
              </span>
              <h3 id="speaker-modal-name" className="font-heading text-xl font-bold text-slate-900">
                {name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600">
                {role}
              </p>
              <p className="text-xs font-semibold text-crimson flex items-center justify-center sm:justify-start gap-1.5">
                <i className="fa-solid fa-building-columns text-slate-400"></i>
                <span>{institution}{country ? ` • ${country}` : ''}</span>
              </p>
            </div>
          </div>

          {/* Keynote Presentation Topic */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-crimson uppercase tracking-wider">
              <i className="fa-solid fa-microphone-lines"></i>
              <span>Plenary Keynote Lecture</span>
            </div>
            <h4 className="font-heading text-sm sm:text-base font-bold text-slate-900">
              "{keynoteTitle}"
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              {abstract}
            </p>
          </div>

          {/* Detailed Biography */}
          <div className="space-y-2">
            <h4 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-user-graduate text-crimson"></i>
              <span>Biography & Background</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {fullBio}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
