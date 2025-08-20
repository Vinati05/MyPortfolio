import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { AchievementsSection } from '@/components/achievements-section';
import { ContactSection } from '@/components/contact-section';
import { TerminalModal } from '@/components/terminal-modal';
import { Footer } from '@/components/footer';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-light-gray text-dark-charcoal font-inter">
      <Navigation onTerminalToggle={() => setIsTerminalOpen(true)} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <Footer />
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
