import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap } from 'lucide-react';
import type { Experience } from '@/lib/types';

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 'partha-dev',
      title: 'Software Development Intern',
      company: 'Partha Developers',
      period: '2024',
      description: 'Developed full-stack web applications, implemented backend APIs, and deployed scalable solutions using modern development practices.',
      responsibilities: [
        'Developed full-stack web applications using Django and React',
        'Implemented RESTful APIs for client-server communication',
        'Deployed applications using Docker and cloud platforms',
        'Collaborated with senior developers on code reviews and best practices'
      ],
      tech: ['Backend Development', 'API Design', 'Deployment'],
      type: 'work'
    },
    {
      id: 'vnrvjiet',
      title: 'B.Tech Computer Science & Engineering',
      company: 'VNRVJIET',
      period: '2023 - 2027',
      description: 'Currently pursuing with a CGPA of 9.01. Focus on algorithms, data structures, machine learning, and software engineering principles.',
      responsibilities: [
        'Maintained consistent academic excellence with CGPA 9.01',
        'Specialized in algorithms, data structures, and software engineering',
        'Active participation in competitive programming and hackathons',
        'Research work in machine learning and artificial intelligence'
      ],
      tech: ['CGPA: 9.01', 'Batch 2027'],
      type: 'education'
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 bg-light-offwhite"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-blue mb-4" data-testid="experience-title">
            Experience
          </h2>
          <p className="text-xl text-dark-charcoal">
            Professional journey and learning milestones
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-blue/30"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center mb-16">
              {index % 2 === 0 ? (
                <>
                  <div className="flex-1 pr-8 text-right">
                    <Card className="bg-white border border-gray-200 shadow-lg" data-testid={`experience-card-${exp.id}`}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                          {exp.title}
                        </h3>
                        <h4 className={`font-medium mb-2 ${exp.type === 'work' ? 'text-royal-blue' : 'text-emerald-green'}`}>
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {exp.description}
                        </p>
                        <div className="flex justify-end space-x-2">
                          {exp.tech.map((tech) => (
                            <Badge
                              key={tech}
                              className={`px-3 py-1 rounded-full text-xs ${
                                exp.type === 'work' 
                                  ? 'bg-royal-blue/10 text-royal-blue border-royal-blue/30' 
                                  : 'bg-emerald-green/10 text-emerald-green border-emerald-green/30'
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    exp.type === 'work' ? 'bg-royal-blue' : 'bg-emerald-green'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="text-white w-6 h-6" />
                    ) : (
                      <GraduationCap className="text-white w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1 pl-8">
                    <div className={`text-lg font-semibold ${exp.type === 'work' ? 'text-royal-blue' : 'text-emerald-green'}`}>
                      {exp.period}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 pr-8 text-right">
                    <div className={`text-lg font-semibold ${exp.type === 'work' ? 'text-royal-blue' : 'text-emerald-green'}`}>
                      {exp.period}
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    exp.type === 'work' ? 'bg-royal-blue' : 'bg-emerald-green'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="text-white w-6 h-6" />
                    ) : (
                      <GraduationCap className="text-white w-6 h-6" />
                    )}
                  </div>
                  <div className="flex-1 pl-8">
                    <Card className="bg-white border border-gray-200 shadow-lg" data-testid={`experience-card-${exp.id}`}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                          {exp.title}
                        </h3>
                        <h4 className={`font-medium mb-2 ${exp.type === 'work' ? 'text-royal-blue' : 'text-emerald-green'}`}>
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {exp.description}
                        </p>
                        <div className="flex space-x-2">
                          {exp.tech.map((tech) => (
                            <Badge
                              key={tech}
                              className={`px-3 py-1 rounded-full text-xs ${
                                exp.type === 'work' 
                                  ? 'bg-royal-blue/10 text-royal-blue border-royal-blue/30' 
                                  : 'bg-emerald-green/10 text-emerald-green border-emerald-green/30'
                              }`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
