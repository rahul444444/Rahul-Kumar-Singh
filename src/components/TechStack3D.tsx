import React, { useState } from 'react';
import { Code2, Smartphone, Server, Layers, Database, Radio, Cpu, Wrench, CheckCircle, Sparkles } from 'lucide-react';
import { skillCategories, personalDetails } from '../data/portfolioData';

export const TechStack3D: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'Server': return Server;
      case 'Layers': return Layers;
      case 'Database': return Database;
      case 'Radio': return Radio;
      case 'Cpu': return Cpu;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL STACK TECHNICAL TAXONOMY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Technical Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400">
              Proficiency Matrix
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Comprehensive skill set covering Flutter mobile engineering, Clean Architecture, Laravel REST APIs, WebSocket real-time pipelines, and cloud database engines.
          </p>
        </div>

        {/* Category Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/50 text-white scale-[1.02]'
                    : 'bg-slate-950/60 border-slate-800 text-gray-400 hover:border-slate-700 hover:text-gray-200'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-cyan-400' : 'text-gray-500'}`} />
                <div>
                  <div className="font-bold text-xs truncate">{cat.title}</div>
                  <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                    {cat.skills.length} Techs
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Skills Display for Selected Category */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">

          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">
                  {skillCategories[activeCategoryIndex].title}
                </h3>
                <p className="text-xs text-gray-400">
                  Production-tested frameworks, packages & architectures
                </p>
              </div>
            </div>

            <span className="text-xs font-mono text-cyan-400">
              Category {activeCategoryIndex + 1} of {skillCategories.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategoryIndex].skills.map((skill, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{skill.name}</span>
                    {skill.highlight && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                        Core Specialty
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-orange-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Soft Skills & Languages Row */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Soft Skills */}
          <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
            <h4 className="text-xs font-mono tracking-wider text-cyan-400 uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Professional Soft Skills & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {personalDetails.softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 text-xs font-medium text-gray-200 border border-slate-800 flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Spoken */}
          <div className="lg:col-span-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between">
            <h4 className="text-xs font-mono tracking-wider text-orange-400 uppercase mb-2">
              Languages
            </h4>
            <div className="space-y-2">
              {personalDetails.languages.map((lang, i) => (
                <div key={i} className="flex items-center justify-between text-xs text-gray-300 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="font-bold text-white">{lang}</span>
                  <span className="text-cyan-400 font-mono">Professional / Native</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
