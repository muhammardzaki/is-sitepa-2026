import React, { useState } from 'react';
import { committees } from '../data/committee';

export default function Committee() {
  const [activeTab, setActiveTab] = useState('organizing'); // 'steering' | 'organizing' | 'scientific'

  const tabs = [
    {
      id: 'steering',
      label: 'Steering Committee',
      icon: 'fa-solid fa-crown',
      count: committees.steering.length,
      data: committees.steering
    },
    {
      id: 'organizing',
      label: 'Organizing Committee',
      icon: 'fa-solid fa-users-gear',
      count: committees.organizing.length,
      data: committees.organizing
    },
    {
      id: 'scientific',
      label: 'Scientific Committee & Reviewers',
      icon: 'fa-solid fa-award',
      count: committees.scientific.length,
      data: committees.scientific
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[1];

  return (
    <section 
      id="committee" 
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deepblue/10 text-deepblue text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-sitemap"></i>
            <span>Leadership & Advisory Board</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Committees & Scientific Reviewers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Bilateral leadership between Universitas Hasanuddin and Universiti Teknologi Malaysia supported by an international advisory board.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-10">
          <div 
            role="tablist" 
            aria-label="Committee Categories"
            className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex-wrap justify-center gap-1 sm:gap-2 max-w-full"
          >
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-crimson ${
                    isSelected
                      ? 'bg-crimson text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div 
          id={`panel-${currentTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentTab.id}`}
          className="animate-in fade-in duration-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentTab.data.map((member, index) => {
              const name = member.name || "To Be Announced (TBA)";
              const role = member.role || "Committee Member";
              const institution = member.institution || "To Be Announced";
              const country = member.country || "TBA";
              const isTBA = name.includes("TBA") || name.includes("To Be Announced");

              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-deepblue/10 text-deepblue">
                        {role}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {country}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base mt-2 flex items-center gap-1.5">
                      <span>{name}</span>
                    </h3>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {institution}
                    </p>

                    {member.expertise && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">Expertise: </span>
                        <span>{member.expertise}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px]">
                    {isTBA ? (
                      <span className="flex items-center gap-1.5 text-amber-700 font-medium">
                        <i className="fa-solid fa-clock text-[10px]"></i>
                        <span>Pending Appointment</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-crimson font-medium">
                        <i className="fa-solid fa-circle-check text-[10px]"></i>
                        <span>Verified Committee</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
