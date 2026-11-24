import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Venue({ onShowToast }) {
  const venue = siteConfig.venueDetails;

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(message);
    }).catch(() => {
      onShowToast("Copied to clipboard!");
    });
  };

  return (
    <section 
      id="venue" 
      className="py-16 sm:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Venue Details Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crimson/10 text-crimson text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-map-pin"></i>
              <span>Official Symposium Venue</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Universiti Teknologi Malaysia (UTM) &bull; Johor Bahru
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The symposium will be hosted at the main campus of <strong>Universiti Teknologi Malaysia (UTM) in Johor Bahru, Malaysia</strong>, jointly organized with <strong>Universitas Hasanuddin (UNHAS)</strong> in a convenient <strong>Hybrid format (Offline &amp; Online)</strong> to accommodate global researchers, presenters, and participants.
            </p>

            {/* Logistics Cards */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 text-crimson flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-plane-arrival"></i>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">International Airport Accessibility</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Easily accessible via Senai International Airport (JHB) in Johor Bahru, or via Singapore Changi Airport (SIN) with cross-border ground transfers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 text-crimson flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-video"></i>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">Hybrid Presentation Access</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Full hybrid facilities with interactive online video conferencing for remote plenary sessions, parallel track paper presentations, and live Q&amp;A.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 text-crimson flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-passport"></i>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">Entry &amp; eVisa Information</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {venue.visaNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Copy Address & Contact */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => copyToClipboard(siteConfig.venueDetails.address, "Venue address copied to clipboard!")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <i className="fa-regular fa-copy text-slate-500"></i>
                <span>Copy UTM Venue Address</span>
              </button>

              <button
                type="button"
                onClick={() => copyToClipboard(siteConfig.secretariat.unhas.email, "Secretariat email copied to clipboard!")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <i className="fa-regular fa-envelope text-slate-500"></i>
                <span>Copy Secretariat Email</span>
              </button>
            </div>
          </div>

          {/* Interactive Map & Imagery Right Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200">
              
              {/* Destination Imagery */}
              <div className="relative rounded-xl overflow-hidden mb-5 group">
                <img
                  src="/assets/images/venue/utm-campus.jpg"
                  alt="Universiti Teknologi Malaysia (UTM) Campus Gate"
                  loading="lazy"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-rose-400"></i>
                  <span>Universiti Teknologi Malaysia (UTM), Johor Bahru, Malaysia</span>
                </div>
              </div>

              {/* Coordinates & Distances */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center mb-5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Coordinates</div>
                  <div className="font-mono text-xs font-bold text-slate-800 mt-0.5">{venue.coordinates}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Senai Airport (JHB)</div>
                  <div className="font-mono text-xs font-bold text-slate-800 mt-0.5">~20 min (Direct)</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Changi Airport (SIN)</div>
                  <div className="font-mono text-xs font-bold text-slate-800 mt-0.5">~55 min (Cross-Border)</div>
                </div>
              </div>

              {/* Responsive Google Maps Embed */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-video w-full">
                <iframe
                  title="Universiti Teknologi Malaysia Map"
                  src={venue.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={siteConfig.links.venueGoogleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-crimson hover:text-crimson-hover transition-colors"
                >
                  <i className="fa-solid fa-compass"></i>
                  <span>Explore UTM on Google Maps</span>
                </a>
                <span className="text-xs text-slate-400">Time Zone: {siteConfig.schedule.timeZone}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
