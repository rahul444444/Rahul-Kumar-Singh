import React, { useRef } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { personalDetails, experiences, projects, skillCategories, educationList, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f1422] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">

        {/* Modal Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">Rahul Kumar Singh - Formal Resume</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
              PDF Print View
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Container */}
        <div className="overflow-y-auto p-8 bg-[#0d111d] text-gray-200 font-sans space-y-8" ref={resumeRef}>

          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left space-y-3">
            <h1 className="text-3xl font-black text-white uppercase tracking-tight">
              {personalDetails.name}
            </h1>
            <p className="text-sm font-bold text-cyan-400 font-mono">
              {personalDetails.role} | Mobile Application Developer | Full Stack Developer
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-400 font-mono pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalDetails.location}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalDetails.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalDetails.email}
              </span>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-cyan-300 hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub: TechRizex
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold border-b border-slate-800 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {personalDetails.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold border-b border-slate-800 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat, i) => (
                <div key={i} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <span className="font-bold text-cyan-300 font-mono">{cat.title}:</span>
                  <p className="text-gray-300 mt-1">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold border-b border-slate-800 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {experiences.map((exp, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold text-sm text-white">{exp.role}</h3>
                    <p className="text-xs font-semibold text-cyan-300">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-400">{exp.duration} ({exp.period})</span>
                </div>

                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 pl-1">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                {exp.liveAppsDelivered && (
                  <div className="pt-2">
                    <span className="text-[11px] font-mono font-bold text-orange-400">Live Delivered Apps:</span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                      {exp.liveAppsDelivered.map((app, aIdx) => (
                        <div key={aIdx} className="bg-slate-950 p-2 rounded border border-slate-800 text-[10px]">
                          <div className="font-bold text-white">{app.name}</div>
                          <div className="text-gray-400 line-clamp-1">{app.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold border-b border-slate-800 pb-1">
              FEATURED PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.slice(6, 10).map((proj, i) => (
                <div key={i} className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs">
                  <h4 className="font-bold text-white">{proj.title}</h4>
                  <p className="text-gray-400 mt-1">{proj.shortDesc}</p>
                  <div className="text-[10px] font-mono text-cyan-300 mt-2">
                    Tech: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold border-b border-slate-800 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="space-y-2 text-xs">
                {educationList.map((edu, i) => (
                  <div key={i}>
                    <div className="font-bold text-white">{edu.degree}</div>
                    <div className="text-gray-400">{edu.institution} ({edu.period})</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold border-b border-slate-800 pb-1 mb-2">
                CERTIFICATIONS
              </h2>
              <ul className="text-xs text-gray-300 space-y-1 list-disc list-inside">
                {certifications.map((c, i) => (
                  <li key={i}><strong className="text-white">{c.title}</strong> - {c.issuer}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
