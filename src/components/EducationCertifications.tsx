import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { educationList, certifications } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ACADEMIC BACKGROUND & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400">
              Verified Certifications
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Solid Computer Applications foundation (MCA & BCA) backed by industry certifications from IBM, AWS, Oracle, and HackerRank.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column - Education List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Academic Degrees
            </h3>

            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-500/40 transition-all space-y-3"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-base text-white">{edu.degree}</h4>
                      <p className="text-xs font-semibold text-cyan-300 mt-0.5">{edu.institution}</p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs">
                      {edu.grade && (
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                          {edu.grade}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-gray-300 border border-slate-700">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.highlights && (
                    <div className="pt-2 border-t border-slate-800/80 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
              <Award className="w-5 h-5 text-orange-400" />
              Industry Certifications
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md hover:border-orange-500/40 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{cert.title}</h4>
                      <p className="text-xs text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border ${cert.badgeColor}`}>
                    Verified
                  </span>
                </div>
              ))}
            </div>

            {/* Quality Commitment Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/90 border border-cyan-500/30 backdrop-blur-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                PRODUCTION CODE GUARANTEE
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Rahul commits to clean, modular code bases with full test coverage, robust error handling, low memory footprints, and responsive UI components.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
