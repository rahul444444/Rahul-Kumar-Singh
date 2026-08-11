import React from 'react';
import { ArrowRight, Download, Smartphone, Layers, ShieldCheck, MapPin, ExternalLink, Sparkles, Code, CheckCircle2, Play } from 'lucide-react';
import { personalDetails, keyAchievements } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenHireModal: () => void;
  onLaunch3DSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenHireModal,
  onLaunch3DSimulator
}) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Main Details */}
          <div className="lg:col-span-7 space-y-6">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-md shadow-cyan-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Mobile & Full Stack Roles</span>
              <span className="text-slate-600">|</span>
              <span className="text-gray-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personalDetails.location}
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400">
                  Rahul Kumar Singh
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-cyan-200/90 font-mono flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                Flutter & Laravel Developer
                <span className="text-slate-600">•</span>
                <span className="text-orange-400">Full Stack Architect</span>
              </p>
            </div>

            {/* Summary Text */}
            <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed max-w-2xl">
              Specialized in engineering production-ready mobile apps and high-performance Laravel backend systems. Delivered <strong className="text-white font-semibold">15+ commercial applications</strong> and <strong className="text-white font-semibold">10+ live Google Play Store applications</strong> incorporating Clean Architecture, WebSockets, Firebase, and payment integrations.
            </p>

            {/* Tech Stack Chips */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono">
              {[
                { name: 'Flutter', bg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
                { name: 'Laravel (PHP)', bg: 'bg-orange-500/10 text-orange-300 border-orange-500/30' },
                { name: 'Firebase', bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
                { name: 'WebSockets', bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
                { name: 'GetX / Bloc', bg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' },
                { name: 'MySQL', bg: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
                { name: 'Google Maps API', bg: 'bg-teal-500/10 text-teal-300 border-teal-500/30' },
                { name: 'Razorpay', bg: 'bg-purple-500/10 text-purple-300 border-purple-500/30' }
              ].map((tech, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 rounded-lg border ${tech.bg} font-medium backdrop-blur-sm`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-sky-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all active:scale-95 group cursor-pointer"
              >
                <Smartphone className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                Explore 3D Live Apps
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onLaunch3DSimulator}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-md hover:border-cyan-400 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                3D Phone Simulator
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-slate-900/70 hover:bg-slate-800 text-gray-200 border border-slate-700 hover:border-slate-500 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download CV
              </button>
            </div>

            {/* Direct Contact Quick Links */}
            <div className="pt-2 flex items-center gap-6 text-xs text-gray-400">
              <a
                href={`tel:${personalDetails.phone}`}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <span className="text-cyan-400 font-bold">Call:</span> {personalDetails.phone}
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <span className="text-cyan-400 font-bold">Email:</span> {personalDetails.email}
              </a>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <span className="text-cyan-400 font-bold">GitHub:</span> TechRizex
              </a>
            </div>

          </div>

          {/* Right Column - Interactive 3D Developer Card & Live Mobile Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">

              {/* Top Accent Line */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

              {/* Developer Profile Header inside Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-orange-500 p-[2px]">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-xl text-cyan-400">
                      RKS
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Rahul Kumar Singh</h3>
                    <p className="text-xs text-gray-400 font-mono">2+ Yrs Professional Exp</p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Dev
                </div>
              </div>

              {/* Live App Launcher Preview Widget */}
              <div className="py-5 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>PRODUCTION PORTFOLIO</span>
                  <span className="text-cyan-400">GOOGLE PLAY APPS</span>
                </div>

                <div
                  onClick={onLaunch3DSimulator}
                  className="group relative bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.02] shadow-lg shadow-cyan-950/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                        <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                          Interactive 3D Phone Simulator
                        </div>
                        <div className="text-xs text-gray-400">
                          Inspect The Helply, Driver24x7, PaisaWasul & FitAmigo
                        </div>
                      </div>
                    </div>
                    <Play className="w-5 h-5 text-cyan-400 fill-cyan-400/20 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {keyAchievements.map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 hover:border-slate-700 transition-all"
                    >
                      <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 font-mono">
                        {item.metric}
                      </div>
                      <div className="text-xs font-bold text-gray-200 mt-0.5">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1 line-clamp-1">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-gray-400">Current Role:</span>
                <span className="text-cyan-300 font-semibold">Ontech Digital Solutions</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
