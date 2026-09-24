import React from 'react';

export const Logo = ({ className = '', lightMode = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized DES Monogram Badge */}
      <div className="relative flex items-center justify-center">
        <span className={`font-bold text-2xl tracking-tighter ${lightMode ? 'text-slate-900' : 'text-white'}`}>
          DES
        </span>
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col leading-tight border-l border-white/20 pl-2.5">
        <span className={`font-bold text-sm tracking-tight ${lightMode ? 'text-slate-900' : 'text-white'}`}>
          Digital Elite Services
        </span>
        <span className="text-[10px] tracking-wide font-medium text-[#F5A623]">
          Your Growth, Our Strategy
        </span>
      </div>
    </div>
  );
};
