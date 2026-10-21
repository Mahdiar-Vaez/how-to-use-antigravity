import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { HeroIntro } from './components/HeroIntro';
import { PrerequisitesSection } from './components/PrerequisitesSection';
import { AntigravityDownloadHeader } from './components/AntigravityDownloadHeader';
import { StepGmailRegion } from './components/StepGmailRegion';
import { StepVpnNumberland } from './components/StepVpnNumberland';
import { VpnProtocolSection } from './components/VpnProtocolSection';
import { PatchScriptCommands } from './components/PatchScriptCommands';
import { ExecutionStepsGallery } from './components/ExecutionStepsGallery';
import { CleanerOptionsGuide } from './components/CleanerOptionsGuide';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { Footer } from './components/Footer';

export default function App() {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [progress, setProgress] = useState(30);
  const [activeSection, setActiveSection] = useState('prerequisites');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'prerequisites',
        'download-antigravity',
        'step-gmail',
        'step-numberland',
        'step-vpn',
        'patch-commands',
        'execution-steps',
        'cleaner-guide',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex antialiased selection:bg-cyan-100 selection:text-cyan-900">
      {/* Sidebar on Right (RTL) */}
      <Sidebar
        activeSection={activeSection}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        progress={progress}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:mr-64 min-w-0 flex flex-col">
        <main className="flex-1 px-4 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full">
          {/* Hero Intro */}
          <HeroIntro />

          {/* 1. Prerequisites & Safe Locations (Germany, US, Netherlands, Turkey) */}
          <PrerequisitesSection />

          {/* 2. Official Download Link for Antigravity (Placed after Prerequisites with VPN alert) */}
          <AntigravityDownloadHeader />

          {/* 3. Checking Region in Google Payments & Realistic Iran behavior */}
          <StepGmailRegion />

          {/* 4. Numberland, Phone verification, QR code with Mobile VPN recommendation */}
          <StepVpnNumberland />

          {/* 5. Windscribe IKEv2 configuration & VPN requirement */}
          <VpnProtocolSection />

          {/* 6. Execution Patch Commands (Placed right where the user executes the patch) */}
          <PatchScriptCommands />

          {/* 7. Real 4-Step Execution Gallery (Vertical Stack - No Clicking Required) */}
          <ExecutionStepsGallery />

          {/* 8. Strategic Guidance: Re-running patch on 403, Options 1, 4 and 5 */}
          <CleanerOptionsGuide />
        </main>

        {/* Footer with Author Credit */}
        <Footer />
      </div>

      {/* Interactive Checklist Modal */}
      <InteractiveChecklist
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        onProgressChange={setProgress}
      />
    </div>
  );
}
