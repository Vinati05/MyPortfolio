import { X, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="modal show"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-testid="project-modal"
    >
      <div className="modal-content">
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
            onClick={onClose}
            data-testid="button-close-modal"
          >
            <X />
          </button>
          
          <div className="w-full h-64 bg-gradient-to-br from-dark-blue to-navy rounded-t-xl flex items-center justify-center border-b border-electric-blue/20">
            <div className="text-center text-electric-blue">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-sm opacity-75">{project.title}</p>
            </div>
          </div>
          
          <div className="p-8">
            <h3 className="text-3xl font-bold text-electric-blue mb-4" data-testid="modal-title">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6" data-testid="modal-description">
              {project.details.fullDescription}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                <div className="space-y-2">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={tech}
                      className={`block w-fit px-3 py-1 rounded ${
                        index % 2 === 0 
                          ? 'bg-electric-blue/20 text-electric-blue' 
                          : 'bg-accent-green/20 text-accent-green'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                <ul className="space-y-1 text-gray-300">
                  {project.details.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {project.details.challenges && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenges</h4>
                <p className="text-gray-300">{project.details.challenges}</p>
              </div>
            )}

            {project.details.impact && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                <p className="text-gray-300">{project.details.impact}</p>
              </div>
            )}
            
            <div className="flex space-x-4">
              {project.details.githubUrl && (
                <Button
                  asChild
                  className="bg-electric-blue hover:bg-blue-600 transition-colors"
                  data-testid="button-view-code"
                >
                  <a href={project.details.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
              
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
