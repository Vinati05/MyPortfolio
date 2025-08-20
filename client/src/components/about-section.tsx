import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  const skills = [
    { name: 'Python', color: 'royal-blue' },
    { name: 'JavaScript', color: 'muted-teal' },
    { name: 'Django', color: 'royal-blue' },
    { name: 'Machine Learning', color: 'muted-teal' },
    { name: 'PostgreSQL', color: 'royal-blue' },
    { name: 'React', color: 'muted-teal' },
    { name: 'Docker', color: 'royal-blue' },
    { name: 'AI/ML', color: 'muted-teal' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 ombre-bg"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-deep-navy" data-testid="about-title">
              About Me
            </h2>
            <div className="text-lg text-light-gray-text space-y-4" data-testid="about-description">
              <p>
                I'm a Computer Science and Engineering student at VNRVJIET (Batch 2027) with a CGPA of 9.01, 
                passionate about backend systems and AI-native development.
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to build solutions that make a real impact. 
                From developing AI chatbots to creating immersive VR experiences, I thrive on challenges that 
                push the boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you'll find me hosting TEDx events, participating in competitive programming 
                contests, or exploring the latest developments in machine learning and artificial intelligence.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Professional workspace image placeholder */}
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl flex items-center justify-center border border-medium-gray">
                <div className="text-center text-deep-navy">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-sm opacity-75">Professional Developer Workspace</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-deep-navy/10 rounded-xl"></div>
            </div>
            
            {/* Skills Cloud */}
            <div className="bg-dark-card p-6 rounded-xl border border-medium-gray shadow-lg" data-testid="skills-section">
              <h3 className="text-xl font-semibold mb-4 text-deep-navy">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`skill-card px-4 py-2 rounded-full text-sm border transition-all cursor-pointer ${
                      skill.color === 'royal-blue' 
                        ? 'bg-deep-navy/10 border-deep-navy/30 hover:bg-muted-gold/20 text-deep-navy hover:text-muted-gold' 
                        : 'bg-muted-gold/10 border-muted-gold/30 hover:bg-deep-navy/20 text-muted-gold hover:text-deep-navy'
                    }`}
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\//, '-')}`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
