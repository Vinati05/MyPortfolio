import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Database, Brain } from 'lucide-react';
import { SiPython, SiJavascript } from 'react-icons/si';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [isTyped, setIsTyped] = useState(false);
  const fullText = "Passionate about technology, driven to learn, and focused on creating impact.";
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
  const typingSpeed = 120;
    let typingTimeout: NodeJS.Timeout;
    let startTyping: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else {
        setIsTyped(true);
      }
    };

    startTyping = setTimeout(typeText, 1000);
    return () => {
      clearTimeout(startTyping);
      clearTimeout(typingTimeout);
    };
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden navy-gradient-bg"
      data-testid="hero-section"
    >
      {/* Floating Elements */}
      <div className="floating-element top-20 left-10 text-6xl animate-float">
        <SiPython className="text-electric-teal" />
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
        <Database className="text-electric-teal" />
      </div>
      <div 
        className="floating-element top-1/3 right-1/3 text-3xl animate-float"
        style={{ animationDelay: '-1s' }}
      >
        <Brain className="text-muted-teal" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-crisp-white animate-glow" data-testid="hero-title">
            Vinati Vege
          </h1>
          

          <div className="text-base md:text-lg text-soft-cream-text max-w-4xl mx-auto min-h-[2em] flex justify-center items-center">
            <span 
              className="terminal-text text-center w-full"
              style={{ display: 'inline-block' }}
              data-testid="hero-tagline"
            >
              {isTyped ? fullText : typedText}
            </span>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all bg-transparent shadow-vibrant-lg"
              data-testid="button-explore-work"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => window.open('https://github.com/Vinati05', '_blank')}
              variant="outline"
              className="border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-crisp-white px-8 py-4 rounded-lg font-semibold transition-all bg-transparent shadow-vibrant-lg"
              data-testid="button-view-github"
            >
              View GitHub
            </Button>
            <Button
              onClick={() => window.open('https://linkedin.com/in/vinati-vege', '_blank')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all bg-transparent shadow-vibrant-lg"
              data-testid="button-view-linkedin"
            >
              View LinkedIn
            </Button>
            <Button
              onClick={() => window.open('mailto:vinativege@gmail.com', '_blank')}
              variant="outline"
              className="border-2 border-coral-accent text-coral-accent hover:bg-coral-accent hover:text-white px-8 py-4 rounded-lg font-semibold transition-all bg-transparent shadow-vibrant-lg"
              data-testid="button-send-mail"
            >
              Mail
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/7075211905', '_blank')}
              variant="outline"
              className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all bg-transparent shadow-vibrant-lg"
              data-testid="button-whatsapp"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
