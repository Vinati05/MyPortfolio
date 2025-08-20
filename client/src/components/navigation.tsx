import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onTerminalToggle: () => void;
}

export function Navigation({ onTerminalToggle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-card/95 backdrop-blur-md border-b border-medium-gray shadow-lg' : ''
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-xl font-bold text-deep-navy cursor-pointer"
            onClick={() => scrollToSection('hero')}
            data-testid="logo"
          >
            VV
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-muted-gold transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-muted-gold transition-colors"
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-muted-gold transition-colors"
              data-testid="nav-experience"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="hover:text-muted-gold transition-colors"
              data-testid="nav-achievements"
            >
              Achievements
            </button>
          </div>
          
          <Button
            onClick={onTerminalToggle}
            className="bg-muted-gold hover:bg-yellow-600 transition-colors text-soft-dark-gray shadow-lg"
            data-testid="button-terminal"
          >
            <Terminal className="w-4 h-4 mr-2" />
            Terminal
          </Button>
        </div>
      </div>
    </nav>
  );
}
