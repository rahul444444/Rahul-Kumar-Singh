import React from 'react';
import { ArrowUp, Smartphone, Mail, Phone, Github, Heart } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-900 py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="font-bold text-white text-base tracking-wide flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-orange-500 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center text-xs font-black text-cyan-400">
                  RK
                </div>
              </div>
              Rahul Kumar Singh
            </div>
            <p className="text-xs text-gray-500 font-mono">
              Flutter & Laravel Developer • 15+ Commercial Applications Delivered
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs">
            <a href={`tel:${personalDetails.phone}`} className="hover:text-cyan-400 transition-colors">
              {personalDetails.phone}
            </a>
            <a href={`mailto:${personalDetails.email}`} className="hover:text-cyan-400 transition-colors">
              {personalDetails.email}
            </a>
            <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub: TechRizex
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 hover:text-white transition-all cursor-pointer group"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
          <div>
            © {new Date().getFullYear()} Rahul Kumar Singh. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            Engineered with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for High-Performance Mobile & Full Stack Apps
          </div>
        </div>

      </div>
    </footer>
  );
};
