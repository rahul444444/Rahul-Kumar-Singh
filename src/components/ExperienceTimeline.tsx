import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceTimelineProps {
  onSelectProjectByName?: (name: string) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onSelectProjectByName }) => {
  const [selectedExpId, setSelectedExpId] = useState<string>('ontech');

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>2+ YEARS PROFESSIONAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Work Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
              Live Deliveries
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Professional track record building production Android applications, scalable Laravel backends, and high-frequency real-time systems.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Side Navigation Cards */}
          <div className="lg:col-span-4 space-y-4">
            {experiences.map((exp) => {
              const isSelected = selectedExpId === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-xl shadow-cyan-950/40 backdrop-blur-xl'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-sky-500"></div>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-xs font-mono px-2.5 py-0.5 rounded-md border ${
                        exp.isCurrent
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-slate-800 text-gray-400 border-slate-700'
                      }`}>
                        {exp.period}
                      </span>
                      <h3 className="font-bold text-lg text-white mt-2">{exp.role}</h3>
                      <p className="text-sm font-medium text-cyan-300 flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.duration}
                    </span>
                    <span className="text-cyan-400 flex items-center gap-1">
                      View Details
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side Experience Detailed View */}
          <div className="lg:col-span-8">
            {experiences.map((exp) => {
              if (exp.id !== selectedExpId) return null;

              return (
                <div
                  key={exp.id}
                  className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-2xl relative"
                >
                  {/* Header */}
                  <div className="border-b border-slate-800/80 pb-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                              Active Role
                            </span>
                          )}
                        </div>
                        <p className="text-base text-cyan-300 font-semibold mt-1">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-right text-xs text-gray-400 font-mono space-y-1">
                        <div className="flex items-center gap-1.5 justify-end text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.duration} ({exp.period})
                        </div>
                        <div className="flex items-center gap-1.5 justify-end">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300/90 leading-relaxed mt-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                      Core Responsibilities & Achievements
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/50 hover:border-slate-700/80 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Applications Delivered section if available */}
                  {exp.liveAppsDelivered && exp.liveAppsDelivered.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-mono tracking-wider text-orange-400 uppercase flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          Live Commercial Applications Delivered ({exp.liveAppsDelivered.length})
                        </h4>
                        <span className="text-[10px] text-gray-400">Google Play Store Live</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.liveAppsDelivered.map((app, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-400/50 transition-all group cursor-pointer"
                            onClick={() => {
                              const el = document.getElementById('projects');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <h5 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                                {app.name}
                              </h5>
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                                {app.badge}
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1.5 line-clamp-2">
                              {app.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
