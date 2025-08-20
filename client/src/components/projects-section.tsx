import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Eye, ChevronsRight, ShoppingCart, Music, Plus, ArrowRight } from 'lucide-react';
import { ProjectModal } from '@/components/project-modal';
import type { Project } from '@/lib/types';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI with natural language processing capabilities',
      icon: 'bot',
      tech: ['Python', 'NLP', 'TensorFlow'],
      details: {
        fullDescription: 'An advanced conversational AI system built with natural language processing capabilities. Features intent recognition, context awareness, and seamless integration with multiple platforms.',
        features: [
          'Natural language understanding',
          'Context-aware responses', 
          'Multi-platform integration',
          'Real-time learning'
        ],
        challenges: 'Implementing context awareness across conversation threads while maintaining response accuracy.',
        impact: 'Reduced customer service response time by 60% and improved user satisfaction scores.',
        githubUrl: 'https://github.com/vinativege/ai-chatbot',
        liveUrl: 'https://chatbot-demo.vinativege.com',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3'
      }
    },
    {
      id: 'age-gender',
      title: 'Age & Gender Detection',
      description: 'Computer vision system for real-time demographic analysis',
      icon: 'eye',
      tech: ['OpenCV', 'Deep Learning', 'Python'],
      details: {
        fullDescription: 'A computer vision system that performs real-time age and gender detection using advanced deep learning models and OpenCV for image processing.',
        features: [
          'Real-time face detection',
          'Age estimation with 85% accuracy',
          'Gender classification',
          'Batch processing capabilities'
        ],
        challenges: 'Achieving consistent accuracy across different lighting conditions and face angles.',
        impact: 'Deployed in retail analytics to improve targeted marketing effectiveness.',
        githubUrl: 'https://github.com/vinativege/age-gender-detection',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
      }
    },
    {
      id: 'vr-game',
      title: 'VR Experience',
      description: 'Immersive virtual reality gaming experience with advanced physics',
      icon: 'vr',
      tech: ['Unity', 'C#', 'VR'],
      details: {
        fullDescription: 'An immersive virtual reality game featuring realistic physics, interactive environments, and engaging gameplay mechanics designed for multiple VR platforms.',
        features: [
          'Realistic physics simulation',
          'Interactive 3D environments',
          'Multi-platform VR support',
          'Haptic feedback integration'
        ],
        challenges: 'Optimizing performance for smooth VR experience while maintaining visual quality.',
        impact: 'Featured in university VR showcase and received positive feedback from 200+ testers.',
        githubUrl: 'https://github.com/vinativege/vr-experience',
        image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3'
      }
    },
    {
      id: 'ecommerce-cms',
      title: 'E-commerce CMS',
      description: 'Full-stack content management system for online retail',
      icon: 'shopping',
      tech: ['Django', 'React', 'PostgreSQL'],
      details: {
        fullDescription: 'A comprehensive e-commerce content management system built with Django backend and React frontend, featuring inventory management, order processing, and analytics dashboard.',
        features: [
          'Product catalog management',
          'Order processing system',
          'Analytics dashboard',
          'Multi-vendor support'
        ],
        challenges: 'Implementing real-time inventory updates across multiple vendors and handling high traffic loads.',
        impact: 'Successfully manages 1000+ products and processes 500+ orders daily.',
        githubUrl: 'https://github.com/vinativege/ecommerce-cms',
        liveUrl: 'https://cms-demo.vinativege.com',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3'
      }
    },
    {
      id: 'harmony-hub',
      title: 'HarmonyHub',
      description: 'Music streaming platform with AI-powered recommendations',
      icon: 'music',
      tech: ['Node.js', 'ML', 'MongoDB'],
      details: {
        fullDescription: 'A music streaming platform featuring AI-powered song recommendations, playlist creation, and social features for music discovery and sharing.',
        features: [
          'AI-powered recommendations',
          'Social playlist sharing',
          'Advanced search filters',
          'Real-time streaming'
        ],
        challenges: 'Building a scalable recommendation engine that learns from user behavior patterns.',
        impact: 'Achieved 95% user satisfaction rate with recommendation accuracy.',
        githubUrl: 'https://github.com/vinativege/harmony-hub',
        liveUrl: 'https://harmonyhub.vinativege.com',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3'
      }
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      bot: Bot,
      eye: Eye,
      vr: ChevronsRight,
      shopping: ShoppingCart,
      music: Music
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Bot;
    return <IconComponent className="text-royal-blue text-2xl" />;
  };

  return (
    <>
      <section 
        id="projects" 
        className="py-20 bg-light-card"
        data-testid="projects-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-royal-blue mb-4" data-testid="projects-title">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              A showcase of innovation, creativity, and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="project-card p-6 rounded-xl cursor-pointer bg-white border border-gray-300 hover:shadow-xl hover:border-royal-blue/30 transition-all"
                onClick={() => setSelectedProject(project)}
                data-testid={`project-card-${project.id}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-charcoal-text">
                      {project.title}
                    </h3>
                    {getIcon(project.icon)}
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-royal-blue/10 border-royal-blue/30 text-royal-blue text-xs px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-royal-blue text-sm">
                    <span>View Details</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Additional Project Placeholder */}
            <Card className="project-card p-6 rounded-xl border-2 border-dashed border-electric-blue/30 flex items-center justify-center bg-transparent">
              <CardContent className="p-0 text-center text-gray-400">
                <Plus className="text-4xl mb-4 mx-auto" />
                <p>More projects coming soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
