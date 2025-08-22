import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  className?: string;
}

export default function ProjectModal({ isOpen, onClose, project, className }: ProjectModalProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fade-out animation on close
  const [visible, setVisible] = React.useState(isOpen);
  React.useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else if (visible) {
      // Wait for fade-out before removing from DOM
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);
  if (!visible) return null;

  return (
    <div 
      className={`modal show fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-testid="project-modal"
    >
      <div
        ref={modalRef}
        className="modal-content bg-white text-dark-gray rounded-xl shadow-2xl transition-transform duration-300 max-w-2xl w-full mx-4 my-8 sm:my-16 relative animate-modal-fade-in max-h-[90vh] overflow-y-auto pb-12"
        style={{
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(40px)',
        }}
      >
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-dark-charcoal text-2xl z-10"
            onClick={onClose}
            data-testid="button-close-modal"
          >
            <X />
          </button>
          
          <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-xl flex items-center justify-center border-b border-gray-200">
            <div className="text-center text-royal-blue">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-sm opacity-75">{project.title}</p>
            </div>
          </div>
          
          <div className="p-8 text-dark-gray">
            <h3 className="text-3xl font-bold text-dark-gray mb-4" data-testid="modal-title">
              {project.title}
            </h3>
        <p className="text-dark-gray-text mb-6" data-testid="modal-description">
              {project.details.fullDescription}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
          <h4 className="text-lg font-semibold text-dark-gray-text mb-2">Tech Stack</h4>
                <div className="space-y-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="block w-fit px-3 py-1 rounded bg-transparent text-dark-gray font-semibold border border-dark-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
          <h4 className="text-lg font-semibold text-dark-gray-text mb-2">Key Features</h4>
          <ul className="space-y-1 text-dark-gray-text">
                  {project.details.features.map((feature) => (
                    <li key={feature} className="text-dark-gray">• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {project.details.challenges && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-gray mb-2">Challenges</h4>
                <p className="text-dark-gray">{project.details.challenges}</p>
              </div>
            )}

            {project.details.impact && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-dark-gray mb-2">Impact</h4>
                <p className="text-dark-gray">{project.details.impact}</p>
              </div>
            )}
            
            <div className="flex space-x-4">

              
              {project.details.liveUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all"
                  data-testid="button-live-demo"
                >
                  <a href={project.details.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
