import React from 'react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div 
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 animate-bounce duration-300 transition-all max-w-sm"
    >
      <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <i className="fa-solid fa-check text-xs"></i>
      </div>
      <p className="text-xs sm:text-sm font-medium text-slate-100 flex-1">{message}</p>
      <button 
        onClick={onClose}
        aria-label="Close notification"
        className="text-slate-400 hover:text-white transition-colors p-1"
      >
        <i className="fa-solid fa-xmark text-sm"></i>
      </button>
    </div>
  );
}
