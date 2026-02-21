import { useGlobalSnap } from '@/hooks/useGlobalSnap';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  HeroSection,
  AboutSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  PhilosophySection,
  ContactSection,
} from '@/sections';

export default function App() {
  useGlobalSnap();

  return (
    <div className="relative bg-[#0A0A0F]">
      <div className="noise-overlay" />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <PhilosophySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
