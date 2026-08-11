import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Copy, Check, Sparkles, MessageSquare, ExternalLink, Smartphone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full Stack Flutter & Laravel Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    // Trigger confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });

    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fire confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);

    // Form open mailto backup
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get In Touch &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400">
              Hire Rahul
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Available for full-time mobile development roles, backend engineering contracts, or custom Flutter & Laravel app consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column - Direct Contact Information */}
          <div className="lg:col-span-5 space-y-4">

            {/* Direct Phone Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${personalDetails.phone}`}
                      className="font-bold text-white hover:text-cyan-300 text-sm sm:text-base transition-colors"
                    >
                      {personalDetails.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalDetails.phone, 'phone')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">EMAIL ADDRESS</div>
                    <a
                      href={`mailto:${personalDetails.email}`}
                      className="font-bold text-white hover:text-cyan-300 text-sm sm:text-base transition-colors truncate max-w-[200px] sm:max-w-none block"
                    >
                      {personalDetails.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalDetails.email, 'email')}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-orange-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & GitHub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-gray-400">LOCATION</div>
                    <div className="text-xs font-bold text-white">{personalDetails.location}</div>
                  </div>
                </div>
              </div>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 backdrop-blur-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-gray-300 group-hover:text-white shrink-0" />
                    <div>
                      <div className="text-[10px] font-mono text-gray-400">GITHUB REPOS</div>
                      <div className="text-xs font-bold text-white">TechRizex</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </a>

            </div>

            {/* Resume Download CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-slate-900/90 border border-cyan-500/30 backdrop-blur-md space-y-3">
              <h4 className="font-bold text-white text-sm">Need a PDF Copy of Rahul's Resume?</h4>
              <p className="text-xs text-gray-300">
                View or print the formatted resume directly with complete technical breakdown.
              </p>
              <button
                onClick={onOpenResume}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                Open Formatted Resume
              </button>
            </div>

          </div>

          {/* Right Column - Direct Message Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">

            <div className="border-b border-slate-800 pb-4">
              <h3 className="font-bold text-xl text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Send Direct Message
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Fill out the form below to launch an instant message inquiry directly to Rahul's inbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">Message Prepared Successfully!</h4>
                <p className="text-xs text-gray-300">
                  Your email client has been launched with the details. Rahul will respond shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-cyan-300 border border-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Message / Project Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your Flutter mobile app or Laravel backend requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  Send Inquiry Now
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
