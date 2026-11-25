import React, { useState, useMemo } from 'react';
import { siteConfig } from '../data/siteConfig';
import { scheduleMetadata, paperSchedule, presentationGuidelines } from '../data/presentationSchedule';

export default function PresentationSchedulePage({ onNavigateHome }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('all'); // 'all', 'track-a', 'track-b'
  const [searchQuery, setSearchQuery] = useState('');

  // Filter papers based on active track and search query
  const filteredPapers = useMemo(() => {
    return paperSchedule.filter((item) => {
      // Track filter
      if (selectedTrack !== 'all' && item.track !== selectedTrack) {
        return false;
      }
      // If it's a break row, keep it when track is 'all' or 'track-b', unless searching
      if (item.isBreak) {
        return searchQuery.trim() === '';
      }
      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const titleMatch = item.title?.toLowerCase().includes(q);
      const presenterMatch = item.presenter?.toLowerCase().includes(q);
      const authorsMatch = item.authors?.toLowerCase().includes(q);
      const universityMatch = item.university?.toLowerCase().includes(q);
      const roomMatch = item.room?.toLowerCase().includes(q);
      return titleMatch || presenterMatch || authorsMatch || universityMatch || roomMatch;
    });
  }, [selectedTrack, searchQuery]);

  // Count papers by track
  const trackACount = paperSchedule.filter(p => p.track === 'track-a' && !p.isBreak).length;
  const trackBCount = paperSchedule.filter(p => p.track === 'track-b' && !p.isBreak).length;
  const totalCount = trackACount + trackBCount;

  // Track A and Track B filtered subsets
  const trackAPapers = filteredPapers.filter(p => p.track === 'track-a' && !p.isBreak);
  const trackBPapers = filteredPapers.filter(p => p.track === 'track-b');

  const handlePrint = () => {
    window.print();
  };

  const getRoleBadge = (roleType, role) => {
    switch (roleType) {
      case 'master':
        return (
          <span className="inline-block mt-1 px-2 py-0.5 text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-300 rounded">
            {role}
          </span>
        );
      case 'doctoral':
        return (
          <span className="inline-block mt-1 px-2 py-0.5 text-[11px] font-bold bg-purple-100 text-purple-900 border border-purple-300 rounded">
            {role}
          </span>
        );
      case 'professor':
        return (
          <span className="inline-block mt-1 px-2 py-0.5 text-[11px] font-bold bg-rose-100 text-[#560911] border border-rose-300 rounded">
            {role}
          </span>
        );
      case 'faculty':
      default:
        return (
          <span className="inline-block mt-1 px-2 py-0.5 text-[11px] font-bold bg-amber-100 text-amber-950 border border-amber-300 rounded">
            {role}
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans antialiased selection:bg-[#560911] selection:text-white">
      {/* =========================================================================
          HEADER & STICKY NAVBAR
      ========================================================================== */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm" id="main-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logos & Branding */}
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="flex items-center gap-3 group focus:outline-none"
                aria-label="IS-SITEPA Home"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/logos/unhas.png"
                    alt="Unhas Logo"
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                  <img
                    src="/assets/images/logos/is-sitepa.png"
                    alt="IS-SITEPA Logo"
                    className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                  <img
                    src="/assets/images/logos/utm.png"
                    alt="UTM Logo"
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="hidden sm:flex flex-col border-l border-slate-300 pl-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#560911]">
                    IS-SITEPA 2026
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600">
                    FT UNHAS × FKA &amp; FABU UTM
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-6">
              <a
                href="/"
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="text-sm font-semibold text-slate-700 hover:text-[#560911] transition-colors flex items-center gap-1.5"
              >
                <i className="fa-solid fa-arrow-left text-xs text-slate-400"></i>
                <span>Main Symposium</span>
              </a>
              <a
                href="#presentation-schedule"
                className="text-sm font-bold text-[#560911] border-b-2 border-[#560911] pb-1 transition-colors"
              >
                Schedule
              </a>
              <a
                href="#guidelines"
                className="text-sm font-semibold text-slate-700 hover:text-[#560911] transition-colors"
              >
                Author Guidelines
              </a>
              <a
                href="#registration"
                className="text-sm font-semibold text-slate-700 hover:text-[#560911] transition-colors"
              >
                Registration
              </a>
              <a
                href="#secretariat"
                className="text-sm font-semibold text-slate-700 hover:text-[#560911] transition-colors"
              >
                Secretariat
              </a>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="#presentation-schedule"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-[#0A4D7C] text-[#0A4D7C] hover:bg-sky-50 text-xs font-bold transition-all"
              >
                <i className="fa-solid fa-calendar-check text-xs"></i>
                <span>View Schedule</span>
              </a>
              <a
                href={siteConfig.links.registerNow}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-md bg-[#560911] hover:bg-[#720E18] text-white text-xs lg:text-sm font-bold shadow transition-all"
              >
                <i className="fa-solid fa-pen-to-square text-xs"></i>
                <span>Register Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-700 hover:text-[#560911] hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <a
              href="/"
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#560911]"
            >
              ← Back to Main Symposium
            </a>
            <a
              href="#presentation-schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#560911]"
            >
              Presentation Schedule
            </a>
            <a
              href="#guidelines"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#560911]"
            >
              Author Guidelines
            </a>
            <a
              href="#registration"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#560911]"
            >
              Registration
            </a>
            <a
              href="#secretariat"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-slate-800 hover:text-[#560911]"
            >
              Secretariat
            </a>
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={siteConfig.links.registerNow}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 bg-[#560911] text-white rounded-md font-bold text-sm"
              >
                Open Google Form Registration
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* =========================================================================
            SECTION 1: REGISTRATION HERO & GOOGLE FORM PORTAL
        ========================================================================== */}
        <section className="w-full bg-slate-50 border-b border-slate-200 py-10 sm:py-12 px-4 sm:px-6 lg:px-12" id="registration">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            
            {/* Top Scholarly Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 rounded-lg p-3 sm:px-5 shadow-sm">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 text-[#560911] border border-rose-200 rounded font-bold text-xs uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm font-bold">verified</span>
                  <span>IS-SITEPA 2026 Academic Portal</span>
                </span>
                <span className="text-slate-300 text-sm hidden sm:inline">|</span>
                <span className="text-slate-800 font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#0A4D7C]">calendar_today</span>
                  <span>Presentation Date: Friday, 27 November 2026</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-semibold text-xs sm:text-sm">
                <span className="material-symbols-outlined text-sm text-[#4E8C2A]">school</span>
                <span>Joint Symposium: FT UNHAS × FABU &amp; FKA UTM</span>
              </div>
            </div>

            {/* Editorial Hero Header Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Heading, description & Key Indicators */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="inline-block text-[#560911] font-bold text-xs uppercase tracking-widest font-heading">
                  OFFICIAL REGISTRATION &amp; AUTHOR ACCREDITATION
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                  Universal Free Registration for Authors, Presenters &amp; Observers
                </h1>
                <p className="text-base text-slate-700 font-normal leading-relaxed">
                  All academic, industry participants, and student researchers are warmly invited to register free of charge. Complete the official Google Form registration to secure your scheduled presentation slot, hybrid presentation link, digital symposium package, and official Scopus-indexed proceeding eligibility.
                </p>

                {/* 4 Stats & Indicator Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-[#560911]">14</span>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Selected Papers</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-[#0A4D7C]">100%</span>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Free Access</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-[#4E8C2A]">Scopus</span>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Indexed Series</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                    <span className="block font-serif text-2xl font-bold text-slate-800">Hybrid</span>
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Online &amp; UTM</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Google Form Card */}
              <div className="lg:col-span-5 bg-white border-2 border-[#560911]/20 rounded-lg p-6 sm:p-7 shadow-md flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-clipboard-list text-lg text-[#560911]"></i>
                      <span className="text-xs font-bold tracking-wider text-[#560911] uppercase">
                        Google Forms Registration Service
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-[11px] rounded uppercase">
                      Portal Open
                    </span>
                  </div>

                  <h2 className="text-xl font-serif font-bold text-slate-900 mt-1">
                    Submit Delegate &amp; Author Credentials
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                    Authors with accepted abstracts/papers must register through this Google Form before{' '}
                    <strong className="text-slate-900 font-bold">25 November 2026</strong> to guarantee inclusion in the official program book and venue roster.
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-800 mt-1 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4E8C2A] text-base shrink-0">check_circle</span>
                      <span>Formal Certificate of Presentation &amp; Attendance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4E8C2A] text-base shrink-0">check_circle</span>
                      <span>Complimentary Digital Symposium Book &amp; Conference Kit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4E8C2A] text-base shrink-0">check_circle</span>
                      <span>Parallel Technical Session Access &amp; Discussion Privileges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4E8C2A] text-base shrink-0">check_circle</span>
                      <span>Zoom Room Credentials issued upon registration</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-slate-200">
                  <a
                    href={siteConfig.links.registerNow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#560911] hover:bg-[#720E18] text-white font-bold text-sm rounded shadow-sm hover:shadow transition-colors text-center"
                  >
                    <span>Open Google Forms Registration Portal</span>
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                  <p className="text-center text-[12px] text-slate-600 font-medium">
                    Zero registration fee required. Direct verified submission powered by Google Workspace.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SCHEDULE OF PAPER PRESENTATION
        ========================================================================== */}
        <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 text-slate-900 border-b border-slate-200" id="presentation-schedule">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            
            {/* Academic Header Replica */}
            <div className="bg-slate-50 p-6 sm:p-8 border border-slate-300 rounded-lg shadow-sm flex flex-col items-center text-center gap-2 relative">
              <div className="w-20 h-1.5 bg-[#560911] rounded mb-1"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#560911]">
                OFFICIAL SYMPOSIUM PROCEEDINGS TIMELINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 max-w-4xl">
                Schedule of Paper Presentation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 font-medium max-w-3xl">
                International Symposium on Sustainability in Infrastructure, Transportation, Environment, Planning, and Architecture 2026 (IS-SITEPA - 2026)
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-3 pt-4 border-t border-slate-300 w-full text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#560911] text-base">pin_drop</span>
                  <span>UTM Campus, Skudai, Johor Bahru</span>
                </div>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#560911] text-base">event</span>
                  <span>Friday, 27 November 2026</span>
                </div>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#0A4D7C] text-base">meeting_room</span>
                  <span>Dewan Premier Sarawak FABU (Room A)</span>
                </div>
              </div>
            </div>

            {/* Controls & Filter Toolbar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-50 p-3 sm:p-4 border border-slate-300 rounded-lg" id="filter-toolbar">
              {/* Interactive Track Tabs */}
              <div className="flex flex-wrap items-center gap-2" id="filter-tabs">
                <button
                  type="button"
                  onClick={() => setSelectedTrack('all')}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded transition-all ${
                    selectedTrack === 'all'
                      ? 'bg-[#560911] text-white shadow'
                      : 'bg-white hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  All Tracks ({totalCount} Papers)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTrack('track-a')}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded transition-all ${
                    selectedTrack === 'track-a'
                      ? 'bg-[#560911] text-white shadow'
                      : 'bg-white hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  Track A: Infrastructure ({trackACount})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTrack('track-b')}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded transition-all ${
                    selectedTrack === 'track-b'
                      ? 'bg-[#560911] text-white shadow'
                      : 'bg-white hover:bg-slate-200 text-slate-800 border border-slate-300'
                  }`}
                >
                  Track B: Transportation ({trackBCount})
                </button>
              </div>

              {/* Search Input & Export Button */}
              <div className="flex items-center gap-3 flex-1 md:flex-initial justify-end">
                <div className="relative w-full md:w-72">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-500 text-sm">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search presenter, title, author..."
                    className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded text-slate-900 placeholder-slate-500 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#560911] focus:ring-1 focus:ring-[#560911]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                      title="Clear search"
                    >
                      <i className="fa-solid fa-circle-xmark text-xs"></i>
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  title="Print / Save PDF"
                  className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-[#560911] font-bold text-xs sm:text-sm rounded flex items-center gap-1.5 shrink-0 shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span className="hidden sm:inline">Export</span>
                </button>
              </div>
            </div>

            {/* SCHEDULE TABLE */}
            <div className="bg-white border border-slate-300 rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" id="presentation-table">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider border-b border-slate-400">
                      <th scope="col" className="py-3 px-3 w-12 text-center">No</th>
                      <th scope="col" className="py-3 px-4 min-w-[280px] lg:min-w-[340px]">Title</th>
                      <th scope="col" className="py-3 px-4 min-w-[170px]">Presenter</th>
                      <th scope="col" className="py-3 px-4 min-w-[220px]">Authors</th>
                      <th scope="col" className="py-3 px-4 min-w-[170px]">University</th>
                      <th scope="col" className="py-3 px-3 w-28 text-center">Time</th>
                      <th scope="col" className="py-3 px-3 w-36 text-center">Room</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {/* Render Track A */}
                    {(selectedTrack === 'all' || selectedTrack === 'track-a') && trackAPapers.length > 0 && (
                      <>
                        <tr className="bg-rose-50 border-t-2 border-[#560911]">
                          <td colSpan="7" className="py-2.5 px-4 font-bold text-sm text-[#560911]">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-[#560911] inline-block rounded-full"></span>
                                <span className="uppercase tracking-wider">A. Infrastructure Engineering</span>
                              </div>
                              <span className="text-xs text-slate-700 uppercase font-semibold">
                                Morning Session | 09:00 - 10:45 MYT
                              </span>
                            </div>
                          </td>
                        </tr>
                        {trackAPapers.map((paper, idx) => (
                          <tr
                            key={paper.id}
                            className={`hover:bg-slate-50 transition-colors ${
                              idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                            }`}
                          >
                            <td className="py-3 px-3 text-center font-bold text-slate-700 align-top">
                              {paper.no}
                            </td>
                            <td className="py-3 px-4 align-top">
                              <div className="font-bold text-slate-900 leading-snug">
                                {paper.title}
                              </div>
                            </td>
                            <td className="py-3 px-4 align-top">
                              <div className="font-bold text-slate-900">{paper.presenter}</div>
                              {getRoleBadge(paper.roleType, paper.role)}
                            </td>
                            <td className="py-3 px-4 align-top text-slate-700 text-xs leading-relaxed font-medium">
                              {paper.authors}
                            </td>
                            <td className="py-3 px-4 align-top font-bold text-slate-900">
                              {paper.university}
                            </td>
                            <td className="py-3 px-3 align-top text-center font-mono text-xs text-[#560911] font-bold whitespace-nowrap bg-slate-100 rounded">
                              {paper.time}
                            </td>
                            <td className="py-3 px-3 align-top text-center text-xs font-semibold text-slate-700">
                              {paper.room}
                            </td>
                          </tr>
                        ))}
                      </>
                    )}

                    {/* Render Track B */}
                    {(selectedTrack === 'all' || selectedTrack === 'track-b') && trackBPapers.length > 0 && (
                      <>
                        <tr className="bg-sky-50 border-t-2 border-[#0A4D7C]">
                          <td colSpan="7" className="py-2.5 px-4 font-bold text-sm text-[#0A4D7C]">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-[#0A4D7C] inline-block rounded-full"></span>
                                <span className="uppercase tracking-wider">B. Transportation System</span>
                              </div>
                              <span className="text-xs text-slate-700 uppercase font-semibold">
                                Midday &amp; Afternoon Session | 11:00 - 14:15 MYT
                              </span>
                            </div>
                          </td>
                        </tr>
                        {trackBPapers.map((item, idx) => {
                          if (item.isBreak) {
                            return (
                              <tr
                                key={item.id}
                                className="bg-slate-100 text-slate-900 font-bold border-y border-slate-300"
                              >
                                <td colSpan="7" className="py-3 px-4 text-center">
                                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-800">
                                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-[#560911]">
                                      {item.time} MYT
                                    </span>
                                    <i className="fa-solid fa-utensils text-amber-600"></i>
                                    <span>{item.title}</span>
                                    <span className="text-slate-500 font-normal">({item.room})</span>
                                  </div>
                                </td>
                              </tr>
                            );
                          }
                          return (
                            <tr
                              key={item.id}
                              className={`hover:bg-slate-50 transition-colors ${
                                idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                              }`}
                            >
                              <td className="py-3 px-3 text-center font-bold text-slate-700 align-top">
                                {item.no}
                              </td>
                              <td className="py-3 px-4 align-top">
                                <div className="font-bold text-slate-900 leading-snug">
                                  {item.title}
                                </div>
                              </td>
                              <td className="py-3 px-4 align-top">
                                <div className="font-bold text-slate-900">{item.presenter}</div>
                                {getRoleBadge(item.roleType, item.role)}
                              </td>
                              <td className="py-3 px-4 align-top text-slate-700 text-xs leading-relaxed font-medium">
                                {item.authors}
                              </td>
                              <td className="py-3 px-4 align-top font-bold text-slate-900">
                                {item.university}
                              </td>
                              <td className="py-3 px-3 align-top text-center font-mono text-xs text-[#0A4D7C] font-bold whitespace-nowrap bg-slate-100 rounded">
                                {item.time}
                              </td>
                              <td className="py-3 px-3 align-top text-center text-xs font-semibold text-slate-700">
                                {item.room}
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    )}

                    {/* Empty State */}
                    {filteredPapers.length === 0 && (
                      <tr>
                        <td colSpan="7" className="py-12 text-center text-slate-500">
                          <i className="fa-solid fa-magnifying-glass text-3xl text-slate-300 mb-3 block"></i>
                          <p className="font-semibold text-base text-slate-700">No matching presentations found</p>
                          <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or track filter.</p>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedTrack('all');
                              setSearchQuery('');
                            }}
                            className="mt-3 px-4 py-1.5 bg-[#560911] text-white rounded text-xs font-bold"
                          >
                            Reset Filter
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Table Legend & Time Allocation Strip */}
              <div className="p-4 bg-slate-50 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between text-slate-800 text-xs font-medium gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#560911]">info</span>
                  <span>
                    Presentation time allocation: <strong>10 minutes</strong> oral delivery + <strong>5 minutes</strong> scientific Q&amp;A.
                  </span>
                </div>
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-blue-100 border border-blue-400 rounded-sm inline-block"></span>
                    <span>Master Student</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-purple-100 border border-purple-400 rounded-sm inline-block"></span>
                    <span>Doctoral Student</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-3 h-3 bg-amber-100 border border-amber-400 rounded-sm inline-block"></span>
                    <span>Faculty / Professor</span>
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                SECTION 3: GUIDELINES & SECRETARIAT
            ========================================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4" id="guidelines">
              
              {/* Author Guidelines */}
              <div className="lg:col-span-8 bg-white border border-slate-300 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <div className="w-10 h-10 bg-[#560911] text-white rounded flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">gavel</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#560911] uppercase tracking-wider">
                      Author Instructions
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                      Oral Presentation Protocol &amp; Technical Rules
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {presentationGuidelines.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 p-3.5 bg-slate-50 border border-slate-200 rounded">
                      <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${
                        item.color === 'crimson' ? 'text-[#560911]' : item.color === 'deepblue' ? 'text-[#0A4D7C]' : 'text-[#4E8C2A]'
                      }`}>
                        <span className="material-symbols-outlined text-base">{item.icon}</span>
                        <span>{item.title}</span>
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secretariat Support Desk */}
              <div className="lg:col-span-4 bg-white border border-slate-300 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col gap-5" id="secretariat">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-[#0A4D7C] uppercase tracking-wider">
                    Helpdesk &amp; Inquiries
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                    Secretariat Support
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 font-normal leading-normal">
                  For presentation timing adjustments, technical accommodations, or special certificates, please contact the joint secretariat immediately:
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 bg-rose-50/60 border border-rose-200 rounded">
                    <span className="text-[11px] font-bold text-[#560911] uppercase tracking-wider block mb-1">
                      Coordinator Desk
                    </span>
                    <a
                      href="mailto:is-sitepa@unhas.ac.id"
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#560911] flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm text-[#560911]">mail</span>
                      <span>is-sitepa@unhas.ac.id</span>
                    </a>
                    <span className="text-xs text-slate-600 mt-1 block font-medium">
                      FT UNHAS Gowa Campus, Indonesia
                    </span>
                  </div>

                  <div className="p-3.5 bg-sky-50/60 border border-sky-200 rounded">
                    <span className="text-[11px] font-bold text-[#0A4D7C] uppercase tracking-wider block mb-1">
                      UTM Campus Desk
                    </span>
                    <a
                      href="mailto:sitepa@utm.my"
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0A4D7C] flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm text-[#0A4D7C]">mail</span>
                      <span>sitepa@utm.my</span>
                    </a>
                    <span className="text-xs text-slate-600 mt-1 block font-medium">
                      FABU &amp; FKA UTM, Skudai, Johor Bahru
                    </span>
                  </div>

                  <a
                    href={siteConfig.links.registerNow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-[#560911] text-white font-bold text-xs sm:text-sm rounded transition-colors text-center shadow-sm"
                  >
                    <span>Verify Registration Status</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      {/* =========================================================================
          MAIN FOOTER
      ========================================================================== */}
      <footer className="bg-crimson-gradient text-slate-100 border-t border-rose-900 pt-14 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/20">
            
            {/* Column 1: Logos & Symposium Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-3 bg-white p-2.5 rounded-lg shadow">
                <img
                  src="/assets/images/logos/unhas.png"
                  alt="Unhas Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
                <img
                  src="/assets/images/logos/is-sitepa.png"
                  alt="IS-SITEPA Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <img
                  src="/assets/images/logos/utm.png"
                  alt="UTM Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>

              <h3 className="font-serif font-bold text-lg text-white">IS-SITEPA 2026</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm font-normal">
                International Symposium on Sustainable Infrastructure, Transportation, Environment, Planning, and Architecture. Jointly organized by Faculty of Engineering UNHAS and Universiti Teknologi Malaysia (UTM).
              </p>

              <div className="flex items-center gap-3 pt-1">
                <span className="text-xs font-mono font-bold bg-white/20 px-2.5 py-1 rounded text-white border border-white/30">
                  ISSN: 2988-412X
                </span>
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded text-white border border-white/30">
                  Scopus Indexed
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-300">Quick Links</h4>
              <ul className="text-xs sm:text-sm space-y-2 text-slate-200">
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      if (onNavigateHome) {
                        e.preventDefault();
                        onNavigateHome();
                      }
                    }}
                    className="hover:text-amber-300 transition-colors"
                  >
                    Main Conference Home
                  </a>
                </li>
                <li>
                  <a href="#presentation-schedule" className="hover:text-amber-300 transition-colors">
                    Presentation Schedule
                  </a>
                </li>
                <li>
                  <a href="#guidelines" className="hover:text-amber-300 transition-colors">
                    Author Guidelines &amp; Protocol
                  </a>
                </li>
                <li>
                  <a href="#registration" className="hover:text-amber-300 transition-colors">
                    Registration &amp; Accreditation
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.registerNow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Google Forms Registration
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Secretariat Offices */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-300">Secretariat Offices</h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <i className="fa-solid fa-building-columns text-amber-300 mt-1 shrink-0"></i>
                  <div>
                    <strong className="text-white font-bold">UNHAS Secretariat:</strong><br />
                    Faculty of Engineering, Gowa Campus, Universitas Hasanuddin, Jl. Poros Malino Km. 6, Borongloe, Gowa, South Sulawesi 92171, Indonesia.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <i className="fa-solid fa-graduation-cap text-sky-300 mt-1 shrink-0"></i>
                  <div>
                    <strong className="text-white font-bold">UTM Secretariat:</strong><br />
                    Faculty of Civil Engineering (FKA) &amp; FABU, Universiti Teknologi Malaysia, 81310 Skudai, Johor Bahru, Malaysia.
                  </div>
                </div>

                <div className="pt-2 border-t border-white/20 space-y-1">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-envelope text-slate-300"></i>
                    <a className="hover:text-amber-300 font-mono text-white underline" href="mailto:is-sitepa@unhas.ac.id">
                      is-sitepa@unhas.ac.id
                    </a>
                    <span>/</span>
                    <a className="hover:text-amber-300 font-mono text-white underline" href="mailto:sitepa@utm.my">
                      sitepa@utm.my
                    </a>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                    <a
                      className="hover:text-amber-300 font-mono text-white font-bold"
                      href={`https://wa.me/${siteConfig.links.whatsappHotline?.replace('+', '') || '62811444992'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {siteConfig.links.whatsappHotlineDisplay || '+62 811-4449-92'} (Hotline)
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
            <p>© 2026 IS-SITEPA. Jointly hosted by Universitas Hasanuddin &amp; Universiti Teknologi Malaysia. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">Academic Portal</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer">Author Terms</span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
