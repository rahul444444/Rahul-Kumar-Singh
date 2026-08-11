import React, { useState } from 'react';
import { X, Phone, Mail, Check, Send, Sparkles, Smartphone, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose }) => {
  const [roleType, setRoleType] = useState<'fulltime' | 'contract' | 'freelance'>('fulltime');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-500 flex items-center justify-center text-slate-950 font-black">
              RK
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Hire Rahul Kumar Singh</h3>
              <p className="text-xs text-cyan-400 font-mono">Mobile & Full Stack Developer</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg text-white">Inquiry Sent!</h4>
            <p className="text-xs text-gray-300">
              Rahul will contact you directly via phone / email within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold text-xs"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Engagement Type Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-gray-400">Engagement Type</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'fulltime', label: 'Full-Time Role' },
                  { id: 'contract', label: 'Contract / Project' },
                  { id: 'freelance', label: 'Consulting' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setRoleType(type.id as any)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      roleType === type.id
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                        : 'bg-slate-950 text-gray-400 border-slate-800'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-gray-400">Company / Recruiter Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ontech HR / Client"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-gray-400">Contact Email / Phone</label>
              <input
                type="text"
                required
                placeholder="e.g. hr@company.com or +91 9876543210"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 active:scale-98 transition-all cursor-pointer"
            >
              Submit Direct Hiring Offer
            </button>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-gray-400">
              <span>Direct Phone: {personalDetails.phone}</span>
              <a
                href={`mailto:${personalDetails.email}`}
                className="text-cyan-400 hover:underline"
              >
                Direct Email
              </a>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
