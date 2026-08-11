import React, { useState } from 'react';
import { X, Smartphone, MapPin, Star, ShieldCheck, IndianRupee, Car, Dumbbell, Users, CheckCircle2, ExternalLink, Play, Wifi, Battery, Radio } from 'lucide-react';
import { projects } from '../data/portfolioData';

interface PhoneSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectId?: string;
}

export const PhoneSimulatorModal: React.FC<PhoneSimulatorModalProps> = ({
  isOpen,
  onClose,
  initialProjectId = 'helply-customer'
}) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(initialProjectId);
  const [activeTab, setActiveTab] = useState<'preview' | 'features' | 'tech'>('preview');

  if (!isOpen) return null;

  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">3D App Interactive Inspector</h3>
              <p className="text-xs text-cyan-400 font-mono">Live Mobile Device Simulation</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">

          {/* Left App Selector List */}
          <div className="lg:col-span-4 p-4 border-r border-slate-800 bg-slate-950/50 space-y-2 overflow-y-auto max-h-[500px] lg:max-h-none">
            <div className="text-xs font-mono text-gray-400 px-2 py-1 uppercase tracking-wider">
              Select Application to Test
            </div>

            {projects.map((proj) => {
              const isActive = proj.id === activeProjectId;
              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveProjectId(proj.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/60 text-white shadow-md shadow-cyan-950/50'
                      : 'bg-slate-900/40 border-slate-800/80 text-gray-400 hover:bg-slate-900/80 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs truncate">{proj.title}</span>
                    {proj.isLiveApp && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Live
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 line-clamp-1">{proj.shortDesc}</div>
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-cyan-400">
                    <span>{proj.appType}</span>
                    <span>•</span>
                    <span>{proj.technologies[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Middle 3D Phone Mockup Container */}
          <div className="lg:col-span-5 p-6 bg-[#0a0d14] flex flex-col items-center justify-center relative min-h-[450px]">

            {/* Glowing Backdrop Circle */}
            <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

            {/* Simulated Smartphone Device Frame */}
            <div className="relative w-72 h-[420px] bg-slate-950 rounded-[40px] border-4 border-slate-700 shadow-2xl p-3 flex flex-col justify-between overflow-hidden shadow-cyan-500/20 ring-1 ring-cyan-500/30">

              {/* Speaker Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center gap-2">
                <div className="w-10 h-1 bg-slate-700 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
              </div>

              {/* Status Bar */}
              <div className="pt-2 px-3 flex items-center justify-between text-[10px] font-mono text-gray-400 z-10">
                <span>09:41</span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Wifi className="w-3 h-3 text-cyan-400" />
                  <Radio className="w-3 h-3 text-emerald-400" />
                  <Battery className="w-3 h-3 text-cyan-400" />
                </div>
              </div>

              {/* App Screen Content */}
              <div className="flex-1 my-2 bg-slate-900/95 rounded-2xl p-3 border border-slate-800 flex flex-col justify-between overflow-y-auto">

                {/* Simulated Screen Header */}
                <div className="border-b border-slate-800 pb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate max-w-[140px]">
                      {currentProject.title.split('-')[0]}
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      {currentProject.appType}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5">{currentProject.company || 'Production Release'}</p>
                </div>

                {/* Simulated Main Feature Interactive Card */}
                <div className="my-2 p-3 rounded-xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase">Live Operations</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <div className="text-xs font-bold text-white">
                    {currentProject.stats || 'Active User Session'}
                  </div>

                  <div className="text-[10px] text-gray-300 leading-tight">
                    {currentProject.shortDesc}
                  </div>

                  {/* Simulated App Metrics/Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className="bg-slate-800/80 p-1.5 rounded-lg text-center font-mono text-cyan-300">
                      Flutter Clean Arch
                    </div>
                    <div className="bg-slate-800/80 p-1.5 rounded-lg text-center font-mono text-orange-300">
                      Laravel API Sync
                    </div>
                  </div>
                </div>

                {/* Simulated Action List */}
                <div className="space-y-1.5">
                  <div className="text-[9px] font-mono text-gray-400 uppercase">Core Capability</div>
                  {currentProject.features.slice(0, 3).map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-[10px] text-gray-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Bottom CTA */}
                <div className="pt-2">
                  <button className="w-full py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 text-[11px] font-bold shadow">
                    Active Production Module
                  </button>
                </div>

              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="pb-1 flex justify-center">
                <div className="w-24 h-1 bg-slate-600 rounded-full"></div>
              </div>

            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-3 p-6 bg-slate-900/90 border-l border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {currentProject.category} • {currentProject.appType}
              </span>
              <h3 className="font-bold text-lg text-white mt-1">{currentProject.title}</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">{currentProject.fullDesc}</p>
            </div>

            {/* Architecture Stack */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-gray-400 uppercase">Tech Stack & Plugins</div>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-cyan-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-gray-400 uppercase">Key Deliverables</div>
              <div className="space-y-1.5">
                {currentProject.features.map((f, i) => (
                  <div key={i} className="text-xs text-gray-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {currentProject.isLiveApp && (
              <div className="pt-3 border-t border-slate-800">
                <a
                  href={currentProject.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-xs hover:bg-emerald-500/30 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Google Play Store App
                </a>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
