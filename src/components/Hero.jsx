import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  const isTBA = !siteConfig.schedule.targetDateISO || siteConfig.schedule.targetDateISO === "TBA";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    if (isTBA) return;

    // Target Date from siteConfig (WITA UTC+8)
    const targetTimestamp = new Date(siteConfig.schedule.targetDateISO).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTimestamp - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isExpired: false
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [isTBA]);

  return (
    <section 
      id="hero"
      className="relative overflow-hidden bg-crimson-gradient text-white py-16 sm:py-24 lg:py-28"
    >
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 hero-mesh-overlay opacity-30 pointer-events-none"></div>

      {/* Moving Ambient Blue Glow (Top / Left) */}
      <div className="absolute top-1/4 -left-28 w-[420px] h-[420px] bg-deepblue rounded-full blur-3xl pointer-events-none animate-glow-blue"></div>
      <div className="absolute -top-10 left-1/3 w-[300px] h-[300px] bg-[#008FD5]/25 rounded-full blur-3xl pointer-events-none animate-glow-blue" style={{ animationDelay: '-4s' }}></div>

      {/* Moving Ambient Green Glow (Bottom / Right) */}
      <div className="absolute bottom-8 -right-20 w-[420px] h-[420px] bg-ecogreen rounded-full blur-3xl pointer-events-none animate-glow-green"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[280px] h-[280px] bg-[#62B035]/20 rounded-full blur-3xl pointer-events-none animate-glow-green" style={{ animationDelay: '-5s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Title & Theme */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          
          {/* Institutional & Symposium Logos (UNHAS - IS-SITEPA - UTM) */}
          <div className="flex justify-center pb-2">
            <div className="inline-flex items-center gap-5 sm:gap-8 bg-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-2xl shadow-2xl border border-white/50">
              <img 
                src="/assets/images/logos/unhas.png" 
                alt="Universitas Hasanuddin (UNHAS)" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
              />
              <img 
                src="/assets/images/logos/is-sitepa.png" 
                alt="IS-SITEPA 2026" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
              />
              <img 
                src="/assets/images/logos/utm.png" 
                alt="Universiti Teknologi Malaysia (UTM)" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            IS-SITEPA <span className="text-amber-300">2026</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 tracking-normal max-w-3xl mx-auto">
            {siteConfig.fullName}
          </p>
          <div className="pt-2 flex flex-col items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider shadow-md">
              <i className="fa-solid fa-bullhorn text-xs"></i>
              <span>Call For Contributions</span>
            </span>
            <p className="inline-block px-4 py-2 rounded-xl bg-black/30 border border-white/15 text-xs sm:text-sm md:text-base font-semibold text-emerald-300 max-w-3xl">
              <i className="fa-solid fa-leaf mr-2 text-ecogreen-light"></i>
              Scope: Infrastructure &bull; Transportation &bull; Environment &bull; Planning &bull; Architecture
            </p>
          </div>
        </div>

        {/* Symposium Metadata Badges - Aligned with Official Flyer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm max-w-5xl mx-auto">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
            <i className="fa-regular fa-calendar-days text-amber-300"></i>
            <span className="font-semibold text-white">{siteConfig.schedule.dates}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
            <i className="fa-solid fa-location-dot text-rose-300"></i>
            <span className="font-semibold text-white">{siteConfig.schedule.locationName}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
            <i className="fa-solid fa-video text-emerald-300"></i>
            <span className="font-semibold text-white">Hybrid Format (Offline &amp; Online)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
            <i className="fa-solid fa-book-bookmark text-sky-300"></i>
            <span className="font-semibold text-white">Scopus Indexed Journal &amp; Book Chapter</span>
          </div>
        </div>

        {/* Countdown Timer Container */}
        <div className="mt-10 max-w-xl mx-auto" data-purpose="countdown-container">
          {isTBA ? (
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                <i className="fa-regular fa-clock"></i>
                <span>Schedule & Countdown: To Be Announced (TBA)</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                Official Symposium Dates Pending Confirmation
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-md mx-auto leading-relaxed">
                The call for papers timeline, milestone deadlines, and live countdown timer will be activated upon committee ratification.
              </p>
            </div>
          ) : timeLeft.isExpired ? (
            <div className="backdrop-blur-md bg-white/15 border border-emerald-400/40 rounded-2xl p-6 text-center shadow-xl animate-pulse">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold uppercase tracking-wider mb-2">
                <i className="fa-solid fa-circle-play"></i>
                <span>Event In Progress</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                The Symposium is Now Live!
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-2">
                Welcome to IS-SITEPA 2026. Access plenary sessions and hybrid live streams via attendee portal.
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                  Symposium Countdown ({siteConfig.schedule.timeZone})
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2.5 sm:gap-4 text-center">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg">
                  <span className="block font-heading text-2xl sm:text-4xl font-extrabold text-white">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Days
                  </span>
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg">
                  <span className="block font-heading text-2xl sm:text-4xl font-extrabold text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Hours
                  </span>
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg">
                  <span className="block font-heading text-2xl sm:text-4xl font-extrabold text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Minutes
                  </span>
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 sm:p-4 shadow-lg">
                  <span className="block font-heading text-2xl sm:text-4xl font-extrabold text-white">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Seconds
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Dual Call-to-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.links.submitAbstract}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-heading font-bold text-sm sm:text-base shadow-lg shadow-amber-400/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Submit Your Abstract</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
          <a
            href={siteConfig.links.downloadCFP}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-200"
          >
            <i className="fa-regular fa-file-pdf text-rose-300"></i>
            <span>Download Call for Papers (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
