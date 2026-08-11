import React, { useState } from 'react';
import { Layers, Smartphone, Server, Database, Radio, MapPin, CreditCard, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'presentation' | 'domain' | 'backend' | 'services'>('presentation');

  const layers = [
    {
      id: 'presentation',
      title: 'Mobile Presentation Layer',
      subtitle: 'Flutter (GetX / Bloc / Provider)',
      icon: Smartphone,
      color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
      description: 'Clean UI views separated strictly from logic using reactive state managers, custom animations, and responsive screen adapters.',
      highlights: [
        'GetX Reactive Controllers & Dependency Injection',
        'Event-Driven Bloc / Cubit state streams',
        'Custom Material 3 UI design system & dark themes',
        'Localized multi-language & responsive layouts'
      ]
    },
    {
      id: 'domain',
      title: 'Domain & Data Layer',
      subtitle: 'Clean Architecture Pattern',
      icon: Layers,
      color: 'border-sky-500/50 bg-sky-500/10 text-sky-300',
      description: 'Abstract repository interfaces, use cases, models, and data mappers keeping business logic completely framework-agnostic.',
      highlights: [
        'Isolated Use Cases (e.g. AcceptRideUseCase, SubmitCollectionUseCase)',
        'Local SQLite & Encrypted SharedPreferences caching',
        'Offline-first synchronization adapters',
        'Strict entity serialization & exception handlers'
      ]
    },
    {
      id: 'backend',
      title: 'Backend REST API Engine',
      subtitle: 'Laravel (PHP) & Middleware',
      icon: Server,
      color: 'border-orange-500/50 bg-orange-500/10 text-orange-300',
      description: 'High-speed RESTful API endpoints written in Laravel, with JWT/Sanctum authentication, request validation, and database ORM optimization.',
      highlights: [
        'Laravel Sanctum / JWT bearer token authentication',
        'Eloquent ORM with optimized eager loading (N+1 protection)',
        'Async Queue Jobs for heavy PDF invoices & email triggers',
        'Admin Panel CRUD backends & role-based permissions'
      ]
    },
    {
      id: 'services',
      title: 'Real-Time & Integration Hub',
      subtitle: 'WebSockets, FCM, Maps & Razorpay',
      icon: Radio,
      color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
      description: 'Bi-directional live communication, background location tracking, payment webhooks, and targeted cloud notifications.',
      highlights: [
        'WebSocket & Socket.IO for sub-100ms live driver/courier tracking',
        'Google Maps Geofencing, Polyline calculation & Places API',
        'Razorpay Order creation & HMAC signature verification webhooks',
        'Firebase FCM topic broadcasting & data payload deep linking'
      ]
    }
  ];

  return (
    <section id="architecture" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL STACK SYSTEM DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Clean Architecture &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-orange-400">
              Data Pipeline
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Rahul designs scalable software architectures adhering strictly to Clean Architecture principles in Flutter and SOLID design patterns in Laravel backends.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Diagram Pipeline Steps */}
          <div className="lg:col-span-5 space-y-3">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === layer.id;

              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id as any)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-950/40 text-white scale-[1.02]'
                      : 'bg-slate-950/60 border-slate-800/80 text-gray-400 hover:bg-slate-900/50 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${layer.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400">STEP {idx + 1}</div>
                        <h3 className="font-bold text-sm text-white">{layer.title}</h3>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Selected Layer Inspection Box */}
          <div className="lg:col-span-7">
            {layers.map((layer) => {
              if (layer.id !== activeLayer) return null;
              const Icon = layer.icon;

              return (
                <div
                  key={layer.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6"
                >
                  <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${layer.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase">{layer.subtitle}</span>
                      <h3 className="font-bold text-xl text-white mt-0.5">{layer.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    {layer.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono tracking-wider text-orange-400 uppercase">
                      Architecture Implementation Highlights
                    </h4>

                    <div className="grid grid-cols-1 gap-2.5">
                      {layer.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-800/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
