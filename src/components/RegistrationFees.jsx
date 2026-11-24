import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function RegistrationFees() {
  const benefits = [
    {
      title: "Full Plenary & Technical Track Access",
      desc: "Entry to all 4 keynote sessions, 5 scientific tracks, and panel discussions."
    },
    {
      title: "Scopus / Indexed Proceedings Eligibility",
      desc: "Peer review processing and publication consideration in partner indexed series."
    },
    {
      title: "Official Certificate of Participation",
      desc: "Verified digital certification co-issued by UNHAS and UTM for all attendees."
    },
    {
      title: "Hybrid Online Live Stream Access",
      desc: "Interactive Zoom streaming, digital proceedings pack, and presentation recordings."
    }
  ];

  return (
    <section 
      id="registration" 
      className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Publication Opportunities Strip */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-center gap-2">
              <i className="fa-solid fa-book-open text-crimson"></i>
              <span>Official Publication Opportunities</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-crimson transition-all">
              <div className="w-10 h-10 rounded-xl bg-crimson/10 text-crimson flex items-center justify-center font-bold text-lg">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold text-crimson tracking-wider">Publication Track</div>
                <div className="font-heading font-extrabold text-slate-900 text-xs sm:text-sm">International Journal Indexed by Scopus (Selected Paper)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs hover:border-crimson transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-lg">
                <i className="fa-solid fa-book-bookmark"></i>
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold text-amber-600 tracking-wider">Book Series</div>
                <div className="font-heading font-extrabold text-slate-900 text-xs sm:text-sm">Book Chapter Publication</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Free Registration for All Attendees &amp; Presenters
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto">
            Inclusive of indexed proceedings processing, peer review, symposium digital pack, keynote access, and official certificates for all participants.
          </p>
        </div>

        {/* Free Registration Hero Card - Matching Mockup */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
          
          {/* Card Top Banner (Deep Crimson Wine Gradient) */}
          <div className="bg-gradient-to-b from-[#700b14] via-[#52070e] to-[#340307] text-white py-9 px-6 sm:px-10 text-center">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
              Free Registration
            </h3>
            <p className="text-red-100 text-xs sm:text-sm mt-2.5 max-w-xl mx-auto leading-relaxed">
              Complimentary registration open to all domestic &amp; international academics, presenters, researchers, students, and industry observers.
            </p>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10">
            {/* 2x2 Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
              {benefits.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4.5 sm:p-5 flex items-start gap-3.5 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <i className="fa-solid fa-check text-xs font-bold"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="flex justify-center">
              <a
                href={siteConfig.links.registerNow || "#registration"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-crimson hover:bg-crimson-hover text-white font-heading font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <i className="fa-solid fa-ticket text-amber-300 text-base"></i>
                <span>Register for Free</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
