import React from 'react';
import { welcomingDignitaries } from '../data/welcoming';
import { speakers, DEFAULT_SPEAKER_TEMPLATE } from '../data/speakers';

const DEFAULT_AVATAR = "/assets/images/speakers/default-avatar.svg";

export default function Speakers({ onSelectSpeaker }) {
  const handleKeynoteImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = DEFAULT_AVATAR;
  };

  const handleWelcomingImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = DEFAULT_AVATAR;
  };

  return (
    <section 
      id="speakers" 
      className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* PART 1: WELCOMING SPEECH (LEADERSHIP REMARKS)             */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 text-crimson text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <i className="fa-solid fa-landmark"></i>
            <span>Leadership & Welcoming Remarks</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Welcoming Speech
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Officiating messages and greetings from the Deans of Host and Co-Host Faculties.
          </p>
        </div>

        {/* 3 Dignitaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {welcomingDignitaries.map((dignitary, index) => {
            const isLeadHost = index === 0;

            return (
              <div
                key={dignitary.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center relative overflow-hidden group"
                data-purpose="welcoming-card"
              >
                {/* Top subtle brand accent line - Unified Crimson Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-crimson" />

                {/* Portrait with Pure White Background (Raw user-edited 1080x1080) */}
                <div className="relative mb-5 mt-2">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md bg-white flex items-center justify-center p-1 group-hover:border-slate-300 transition-colors">
                    <img
                      src={dignitary.photo}
                      alt={dignitary.name}
                      loading="lazy"
                      onError={handleWelcomingImageError}
                      className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Dignitary Name */}
                <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-snug mt-1 min-h-[3.25rem] flex items-center justify-center px-1">
                  {dignitary.name}
                </h3>

                {/* Faculty & Title - Unified Crimson Accent */}
                <p className="text-xs sm:text-sm font-semibold mt-1.5 text-crimson">
                  {dignitary.title}
                </p>

                {/* Institution & Country */}
                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  {dignitary.institution} &bull; {dignitary.country}
                </p>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* SUBTLE TRANSITION DIVIDER                                 */}
        {/* ========================================================= */}
        <div className="my-16 sm:my-20 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex items-center gap-2 bg-white px-5 py-1 rounded-full border border-slate-200/80 shadow-xs text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="w-2 h-2 rounded-full bg-crimson"></span>
            <span>Plenary Keynote Sessions</span>
            <span className="w-2 h-2 rounded-full bg-crimson"></span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: KEYNOTE SPEAKERS                                  */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/10 text-crimson text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-microphone-lines"></i>
            <span>Distinguished Plenary</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keynote Speakers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Gaining visionary insights from world-leading researchers across Asia and Europe.
          </p>
        </div>

        {/* 3-Column Keynote Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker) => {
            const name = speaker.name || DEFAULT_SPEAKER_TEMPLATE.name;
            const role = speaker.role || DEFAULT_SPEAKER_TEMPLATE.role;
            const institution = speaker.institution || DEFAULT_SPEAKER_TEMPLATE.institution;
            const photo = speaker.photo || DEFAULT_AVATAR;
            const trackCategory = speaker.trackCategory || DEFAULT_SPEAKER_TEMPLATE.trackCategory;
            const badgeColorClass = speaker.badgeColorClass || DEFAULT_SPEAKER_TEMPLATE.badgeColorClass;
            const shortBio = speaker.shortBio || DEFAULT_SPEAKER_TEMPLATE.shortBio;

            return (
              <div
                key={speaker.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center flex flex-col items-center hover:border-slate-300 hover:shadow-md transition-all duration-200 shadow-sm"
                data-purpose="speaker-card"
              >
                <div className="relative mb-4">
                  <img
                    src={photo}
                    alt={name}
                    loading="lazy"
                    onError={handleKeynoteImageError}
                    className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white transition-transform duration-200 hover:scale-105 bg-slate-100"
                  />
                  {photo === DEFAULT_AVATAR && (
                    <span 
                      title="Speaker profile pending confirmation"
                      className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-900 text-[11px] font-bold flex items-center justify-center border-2 border-white shadow"
                    >
                      <i className="fa-solid fa-clock"></i>
                    </span>
                  )}
                </div>

                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded mb-2 ${badgeColorClass}`}>
                  {trackCategory}
                </span>

                <h3 className="font-heading font-bold text-slate-900 text-base line-clamp-2">
                  {name}
                </h3>

                <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">
                  {role}
                </p>

                <p className="text-xs font-semibold text-crimson mt-1 line-clamp-2">
                  {institution}
                </p>

                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                  {shortBio}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectSpeaker(speaker)}
                  className="mt-4 text-xs font-semibold text-crimson hover:text-crimson-hover flex items-center gap-1.5 focus:outline-none focus:underline group cursor-pointer"
                  aria-label={`View bio and abstract for ${name}`}
                >
                  <span>View Bio & Abstract</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
