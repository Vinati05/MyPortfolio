import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Database, Brain } from 'lucide-react';
import { SiPython, SiJavascript } from 'react-icons/si';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate about technology, driven to learn, and focused on creating impact.";

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, typingSpeed);
      }
    };

    const startTyping = setTimeout(typeText, 1000);
    return () => clearTimeout(startTyping);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted-gray"
      data-testid="hero-section"
    >
      {/* Floating Elements */}
      <div className="floating-element top-20 left-10 text-6xl animate-float">
        <SiPython className="text-royal-blue" />
      </div>
      <div 
        className="floating-element top-40 right-20 text-5xl animate-float"
        style={{ animationDelay: '-2s' }}
      >
        <SiJavascript className="text-muted-teal" />
      </div>
      <div 
        className="floating-element bottom-40 left-1/4 text-4xl animate-float"
        style={{ animationDelay: '-4s' }}
      >
        <Database className="text-royal-blue" />
      </div>
      <div 
        className="floating-element top-1/3 right-1/3 text-3xl animate-float"
        style={{ animationDelay: '-1s' }}
      >
        <Brain className="text-muted-teal" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-royal-blue animate-glow" data-testid="hero-title">
            Vinati Vege
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto min-h-[2em]">
            <span 
              className="terminal-text"
              data-testid="hero-tagline"
            >
              {typedText}
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-royal-blue hover:bg-blue-800 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-white"
              data-testid="button-explore-work"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => window.open('https://github.com/vinativege', '_blank')}
              variant="outline"
              className="border-2 border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white px-8 py-4 rounded-lg font-semibold transition-all bg-transparent"
              data-testid="button-view-github"
            >
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
