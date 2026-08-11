import React, { useState } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStack3D } from './components/TechStack3D';
import { ArchitectureSection } from './components/ArchitectureSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { PhoneSimulatorModal } from './components/PhoneSimulatorModal';
import { ResumeModal } from './components/ResumeModal';
import { HireModal } from './components/HireModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [phoneSimulatorOpen, setPhoneSimulatorOpen] = useState(false);
  const [activeSimulatorProjectId, setActiveSimulatorProjectId] = useState('helply-customer');

  const handleOpenPhoneSimulator = (projectId?: string) => {
    if (projectId) {
      setActiveSimulatorProjectId(projectId);
    }
    setPhoneSimulatorOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-gray-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* 3D WebGL Background Canvas */}
      <ThreeCanvas interactive={true} />

      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenHireModal={() => setHireModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onOpenHireModal={() => setHireModalOpen(true)}
          onLaunch3DSimulator={() => handleOpenPhoneSimulator('helply-customer')}
        />

        <ExperienceTimeline />

        <ProjectsShowcase
          onOpenPhoneSimulator={handleOpenPhoneSimulator}
        />

        <TechStack3D />

        <ArchitectureSection />

        <EducationCertifications />

        <ContactSection
          onOpenResume={() => setResumeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <PhoneSimulatorModal
        isOpen={phoneSimulatorOpen}
        onClose={() => setPhoneSimulatorOpen(false)}
        initialProjectId={activeSimulatorProjectId}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </div>
  );
}
