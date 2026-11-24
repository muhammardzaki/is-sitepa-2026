import React from 'react';
import { topics } from '../data/topics';

export default function Topics() {
  return (
    <section 
      id="topics" 
      className="py-16 sm:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Aligned with Pamphlet */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 text-crimson text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-layer-group"></i>
            <span>Symposium Scope &amp; Topics</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Five Core Thematic Areas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Infrastructure &bull; Transportation &bull; Environment &bull; Planning &bull; Architecture
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((track, index) => {
            const isLastOdd = index === 4;
            return (
              <div
                key={track.id}
                className={`bg-white rounded-xl shadow-sm border border-slate-200 border-t-4 ${track.borderColorClass} p-6 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between ${
                  isLastOdd ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                data-purpose="track-card"
              >
                <div>
                  <div className={`w-12 h-12 rounded-lg ${track.iconBgClass} flex items-center justify-center text-xl mb-4 font-bold`}>
                    <i className={track.icon}></i>
                  </div>
                  <span className="text-xs font-bold tracking-wider text-deepblue uppercase">
                    {track.trackNumber}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mt-1 mb-3">
                    {track.title}
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-2">
                    {track.topics.map((sub, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <i className="fa-solid fa-chevron-right text-[10px] text-crimson mt-0.5 shrink-0"></i>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-deepblue">{track.hosts}</span>
                  <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded font-mono font-medium">
                    {track.code}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
