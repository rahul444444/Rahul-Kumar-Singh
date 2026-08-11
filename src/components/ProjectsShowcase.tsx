import React, { useState } from 'react';
import { Smartphone, ExternalLink, Play, Search, Filter, ShieldCheck, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsShowcaseProps {
  onOpenPhoneSimulator: (projectId: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenPhoneSimulator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects (10+)' },
    { id: 'marketplace', label: 'Marketplaces (The Helply)' },
    { id: 'fintech', label: 'Fintech (PaisaWasul)' },
    { id: 'logistics', label: 'Logistics (Driver24×7)' },
    { id: 'social', label: 'Social (FitAmigo)' },
    { id: 'edtech', label: 'Jobs & EdTech' }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>FEATURED PRODUCTION PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Commercial Apps &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400">
              Live Systems
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Explore Rahul's 15+ delivered commercial applications, featuring live service marketplaces, fintech collection portals, ride-booking apps, and social platforms.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-950/60 text-gray-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Flutter, Laravel, Maps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between backdrop-blur-xl overflow-hidden hover:-translate-y-1"
            >
              {/* Top Accent Gradient overlay */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.screenshotsColor}`}></div>

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-950 border border-slate-800 text-cyan-400">
                    {project.appType}
                  </span>

                  {project.isLiveApp ? (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Google Play Live
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-gray-400 border border-slate-700">
                      Full System
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-300/90 mt-2 line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Key Features bullet points */}
                <div className="mt-4 space-y-1.5">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-gray-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenPhoneSimulator(project.id)}
                  className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                >
                  <Play className="w-3.5 h-3.5 fill-cyan-400/20 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                  3D Simulator Test
                </button>

                {project.isLiveApp && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-emerald-500/20 hover:border-emerald-500/40 border border-slate-700 text-gray-300 hover:text-emerald-300 transition-all"
                    title="View on Google Play"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
