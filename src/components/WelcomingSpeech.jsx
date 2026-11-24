import React from 'react';
import { welcomingDignitaries } from '../data/welcoming';

export default function WelcomingSpeech() {
  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/assets/images/speakers/default-avatar.svg";
  };

  return (
    <section
      id="welcoming-speech"
      className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
                {/* Top subtle brand accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${isLeadHost ? 'bg-crimson' : 'bg-crimson'
                    }`}
                />

                {/* Portrait with Pure White Background */}
                <div className="relative mb-5 mt-2">
                  <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md bg-white flex items-center justify-center p-1 group-hover:border-slate-300 transition-colors">
                    <img
                      src={dignitary.photo}
                      alt={dignitary.name}
                      loading="lazy"
                      onError={handleImageError}
                      className="w-full h-full object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  {/* Verified Dignitary Badge */}
                  <span
                    title={dignitary.hostRole}
                    className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow border whitespace-nowrap ${isLeadHost
                        ? 'bg-crimson text-white border-crimson-dark'
                        : 'bg-deepblue text-white border-deepblue'
                      }`}
                  >
                    {dignitary.hostRole}
                  </span>
                </div>

                {/* Dignitary Name */}
                <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-snug mt-3 min-h-[3rem] flex items-center justify-center px-1">
                  {dignitary.name}
                </h3>

                {/* Faculty & Title */}
                <p className={`text-xs sm:text-sm font-semibold mt-1 ${isLeadHost ? 'text-crimson' : 'text-deepblue'}`}>
                  {dignitary.title}
                </p>

                {/* Institution & Country */}
                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  {dignitary.institution} &bull; {dignitary.country}
                </p>

                {/* Welcoming Speech Message Note */}
                <div className="mt-5 w-full bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 text-left flex items-start gap-2.5 flex-1">
                  <i className="fa-solid fa-quote-left text-slate-300 text-xs mt-0.5 shrink-0"></i>
                  <p className="text-[11px] sm:text-xs text-slate-600 italic leading-relaxed">
                    {dignitary.speechNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
