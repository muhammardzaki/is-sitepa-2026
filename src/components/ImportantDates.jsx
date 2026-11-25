import React from 'react';
import { importantDates } from '../data/dates';

export default function ImportantDates({ onNavigateSchedule }) {
  return (
    <section 
      id="dates" 
      className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Matching Mockup */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100 text-xs font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <i className="fa-solid fa-clock-rotate-left text-xs text-sky-700"></i>
            <span>Milestones &amp; Deadlines</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Important Dates
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            Mark your calendar. Authors must adhere strictly to submission and camera-ready milestones.
          </p>
        </div>

        {/* 7-Card Horizontal Timeline Grid */}
        <div className="relative">
          {/* Subtle Horizontal Guide Line for Desktop */}
          <div 
            className="hidden lg:block absolute top-[68%] left-6 right-6 h-0.5 bg-slate-200/80 -translate-y-1/2 z-0 pointer-events-none" 
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 xl:gap-4 items-stretch relative z-10">
            {importantDates.map((item) => {
              const isActive = item.status === 'active';
              const isEvent = item.status === 'event';
              const isPassed = item.status === 'passed';
              const isFinal = item.status === 'final';

              // Card Container border styling
              let borderClass = 'border border-slate-200/90 shadow-sm hover:shadow-md';
              if (isActive) {
                borderClass = 'border-2 border-crimson shadow-md hover:shadow-lg ring-1 ring-crimson/20';
              } else if (isEvent) {
                borderClass = 'border-2 border-deepblue shadow-md hover:shadow-lg ring-1 ring-deepblue/20';
              }

              // Left circular badge styling
              let iconClass = 'bg-sky-50 text-sky-800';
              if (isPassed) {
                iconClass = 'bg-emerald-50 text-emerald-600 border border-emerald-100';
              } else if (isActive) {
                iconClass = 'bg-crimson text-white shadow-xs';
              } else if (isEvent) {
                iconClass = 'bg-deepblue text-white shadow-xs';
              } else if (isFinal) {
                iconClass = 'bg-slate-100 text-slate-600';
              }

              // Right status label styling
              let statusBadgeClass = 'bg-sky-50 text-sky-700';
              if (isPassed) {
                statusBadgeClass = 'bg-slate-100 text-slate-500';
              } else if (isActive) {
                statusBadgeClass = 'bg-emerald-50 text-emerald-700 border border-emerald-200';
              } else if (isEvent) {
                statusBadgeClass = 'bg-amber-100 text-amber-800 font-bold';
              } else if (isFinal) {
                statusBadgeClass = 'bg-slate-100 text-slate-600';
              }

              // Date text color styling
              let dateTextClass = 'text-slate-700 font-semibold';
              if (isActive) {
                dateTextClass = 'text-crimson font-bold';
              } else if (isEvent) {
                dateTextClass = 'text-deepblue font-bold';
              }

              return (
                <div
                  key={item.step}
                  className={`relative bg-white rounded-2xl p-4 flex flex-col justify-between transition-all duration-200 min-h-[240px] sm:min-h-[250px] ${borderClass}`}
                >
                  {/* Floating ACTIVE Top Pill for Card 2 */}
                  {isActive && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-crimson text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm whitespace-nowrap">
                      <i className="fa-solid fa-fire text-amber-300 text-[10px]"></i>
                      <span>ACTIVE</span>
                    </div>
                  )}

                  {/* Top Row: Circular Step Icon & Status Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-3 pt-0.5">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${iconClass}`}>
                        {isPassed ? <i className="fa-solid fa-check text-[11px]"></i> : item.icon}
                      </span>

                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${statusBadgeClass}`}>
                        {item.statusLabel}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h4 className="font-heading font-bold text-sm text-slate-900 leading-snug">
                      {item.title}
                    </h4>

                    {/* Milestone Description */}
                    <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: Date */}
                  <div className={`mt-4 pt-3 border-t border-slate-100 text-xs ${dateTextClass} leading-snug`}>
                    {item.date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Presentation Schedule Timetable Quick Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
              <i className="fa-solid fa-calendar-day text-[#560911] text-base"></i>
            </div>
            <div>
              <h5 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                Official Paper Presentation Schedule Published
              </h5>
              <p className="text-xs sm:text-sm text-slate-600">
                View the complete oral presentation roster for Track A (Infrastructure) and Track B (Transportation).
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onNavigateSchedule}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#560911] hover:bg-[#720E18] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>View Presentation Schedule</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

      </div>
    </section>
  );
}
