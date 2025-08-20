import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  const skills = [
    { name: 'Python', color: 'electric-blue' },
    { name: 'JavaScript', color: 'accent-green' },
    { name: 'Django', color: 'electric-blue' },
    { name: 'Machine Learning', color: 'accent-green' },
    { name: 'PostgreSQL', color: 'electric-blue' },
    { name: 'React', color: 'accent-green' },
    { name: 'Docker', color: 'electric-blue' },
    { name: 'AI/ML', color: 'accent-green' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-dark-blue"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-electric-blue" data-testid="about-title">
              About Me
            </h2>
            <div className="text-lg text-gray-300 space-y-4" data-testid="about-description">
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
              <div className="w-full h-64 bg-gradient-to-br from-dark-blue to-navy rounded-xl shadow-2xl flex items-center justify-center border border-electric-blue/20">
                <div className="text-center text-electric-blue">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-sm opacity-75">Professional Developer Workspace</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-electric-blue/20 rounded-xl"></div>
            </div>
            
            {/* Skills Cloud */}
            <div className="bg-navy/50 p-6 rounded-xl" data-testid="skills-section">
              <h3 className="text-xl font-semibold mb-4 text-electric-blue">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className={`skill-card px-4 py-2 rounded-full text-sm border transition-all cursor-pointer ${
                      skill.color === 'electric-blue' 
                        ? 'bg-electric-blue/20 border-electric-blue/30 hover:bg-electric-blue/30' 
                        : 'bg-accent-green/20 border-accent-green/30 hover:bg-accent-green/30'
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
