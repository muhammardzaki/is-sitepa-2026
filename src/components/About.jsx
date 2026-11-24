import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  const highlights = [
    "Scopus Indexed International Journal (Selected Paper)",
    "Book Chapter Publication Opportunities",
    "Hybrid Format (Offline at UTM & Online)",
    "Joint Initiative: FT UNHAS (Indonesia) & UTM (Malaysia)"
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 bg-white subtle-grid border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Overview Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deepblue/10 text-deepblue text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-circle-nodes"></i>
              <span>About The Symposium</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Bridging Cutting-Edge Engineering with Climate-Resilient Urban Realities
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The <strong className="text-slate-800">{siteConfig.fullName} ({siteConfig.shortName})</strong> is a premier interdisciplinary academic conference jointly organized by the <strong>{siteConfig.organizers.lead}</strong>, Indonesia, and the <strong>{siteConfig.organizers.partner}</strong>.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              As climate volatility escalates across the Asia-Pacific and equatorial zones, civil infrastructure and urban habitats demand urgent transformation. IS-SITEPA 2026 unites academics, researchers, urban authorities, and industry pioneers to exchange breakthroughs in net-zero structural designs, electric transit systems, disaster-resilient water systems, and smart spatial planning.
            </p>

            {/* Key Features Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-ecogreen/15 text-ecogreen flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-xs"></i>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Conference At A Glance Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700/60 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-crimson/30 rounded-full blur-2xl"></div>

              <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                <h3 className="font-heading text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  <i className="fa-solid fa-chart-pie text-amber-400"></i>
                  <span>Conference at a Glance</span>
                </h3>
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                  Global Hybrid 2026
                </span>
              </div>

              {/* Metric Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-heading text-3xl font-extrabold text-amber-300">
                    {siteConfig.metrics.expectedParticipants}
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Expected Participants</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-heading text-3xl font-extrabold text-sky-400">
                    {siteConfig.metrics.participatingCountries}
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Participating Countries</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-heading text-3xl font-extrabold text-ecogreen-light">
                    {siteConfig.metrics.scientificTracks}
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Interdisciplinary Scope</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="font-heading text-3xl font-extrabold text-rose-400">
                    {siteConfig.metrics.peerReviewedRate}
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-1">Peer-Reviewed Indexing</div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
                <span>Keynotes: {siteConfig.metrics.keynoteCount}</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <i className="fa-solid fa-certificate"></i>
                  <span>Official Certificates</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
