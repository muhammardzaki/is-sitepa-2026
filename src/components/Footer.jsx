import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const quickLinks = [
    { name: "Call for Papers (CFP)", href: "#about" },
    { name: "Author Guidelines & Template", href: "#topics" },
    { name: "Important Dates & Submission", href: "#dates" },
    { name: "Registration & Payment Tiers", href: "#registration" },
    { name: "Travel & Accommodation", href: "#venue" },
    { name: "Organizing & Scientific Committee", href: "#committee" },
    { name: "Publication Ethics & Malpractice", href: "#registration" }
  ];

  return (
    <footer className="bg-crimson-gradient text-slate-200 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Institutional & Symposium Logos & About (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-4 sm:gap-5 bg-white p-2.5 sm:p-3 rounded-xl shadow-md border border-white/40">
              <img 
                src="/assets/images/logos/unhas.png" 
                alt="Universitas Hasanuddin (UNHAS)" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <img 
                src="/assets/images/logos/is-sitepa.png" 
                alt="IS-SITEPA 2026" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <img 
                src="/assets/images/logos/utm.png" 
                alt="Universiti Teknologi Malaysia (UTM)" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">
              {siteConfig.shortName}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {siteConfig.fullName}. Jointly organized by {siteConfig.organizers.lead} and {siteConfig.organizers.partner}.
            </p>
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded text-slate-300 border border-white/10">
                ISSN: 2988-412X
              </span>
              <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded text-slate-300 border border-white/10">
                Scopus Indexed
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="text-xs space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <i className="fa-solid fa-angle-right text-[10px] text-slate-400"></i>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Secretariat Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Secretariat Offices
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              
              {/* UNHAS Office */}
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-building-columns text-amber-300 mt-1 shrink-0"></i>
                <div>
                  <strong className="text-white">{siteConfig.secretariat.unhas.institution}:</strong><br />
                  {siteConfig.secretariat.unhas.office}, {siteConfig.secretariat.unhas.address}
                </div>
              </div>

              {/* UTM Office */}
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-graduation-cap text-sky-300 mt-1 shrink-0"></i>
                <div>
                  <strong className="text-white">{siteConfig.secretariat.utm.institution}:</strong><br />
                  {siteConfig.secretariat.utm.office}, {siteConfig.secretariat.utm.address}
                </div>
              </div>

              {/* Emails and Hotline */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <i className="fa-solid fa-envelope text-slate-400"></i>
                  <a 
                    href={`mailto:${siteConfig.secretariat.unhas.email}`} 
                    className="hover:text-amber-300 transition-colors font-mono"
                  >
                    {siteConfig.secretariat.unhas.email}
                  </a>
                  <span className="text-slate-400">/</span>
                  <a 
                    href={`mailto:${siteConfig.secretariat.utm.email}`} 
                    className="hover:text-amber-300 transition-colors font-mono"
                  >
                    {siteConfig.secretariat.utm.email}
                  </a>
                </div>
                {siteConfig.links.whatsappHotline && (
                  <div className="flex items-center gap-2">
                    <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                    <a 
                      href={`https://wa.me/${siteConfig.links.whatsappHotline?.replace('+', '') || ''}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-amber-300 transition-colors font-mono"
                    >
                      {siteConfig.links.whatsappHotlineDisplay || siteConfig.links.whatsappHotline} (Secretariat Hotline)
                    </a>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {siteConfig.shortName}. Jointly hosted by Universitas Hasanuddin & Universiti Teknologi Malaysia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
