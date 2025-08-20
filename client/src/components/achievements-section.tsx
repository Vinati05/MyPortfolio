import { Card, CardContent } from '@/components/ui/card';
import { Trophy, FileText, Mic, Users, MessageSquare, Medal } from 'lucide-react';
import type { Achievement } from '@/lib/types';

export function AchievementsSection() {
  const achievements: Achievement[] = [
    {
      id: 'turing-hut',
      title: 'Top 50 Finalist',
      organization: 'Turing Hut Contest',
      description: 'Achieved top 50 ranking in competitive programming contest among thousands of participants',
      icon: 'trophy',
      color: 'electric-blue'
    },
    {
      id: 'icdh-research',
      title: 'Research Publication',
      organization: 'ICDH Conference',
      description: 'Published research paper on innovative computing solutions at international conference',
      icon: 'file',
      color: 'accent-green'
    },
    {
      id: 'tedx-host',
      title: 'TEDx Host',
      organization: 'Event Management',
      description: 'Successfully hosted and coordinated TEDx events, managing speakers and audience engagement',
      icon: 'mic',
      color: 'electric-blue'
    },
    {
      id: 'cultural-leadership',
      title: 'Cultural Leadership',
      organization: 'Event Coordination',
      description: 'Led and organized multiple cultural events, demonstrating leadership and team management skills',
      icon: 'users',
      color: 'accent-green'
    },
    {
      id: 'toastmasters',
      title: 'Toastmasters',
      organization: 'Public Speaking',
      description: 'Active member developing communication and leadership skills through structured speaking programs',
      icon: 'message',
      color: 'electric-blue'
    },
    {
      id: 'academic-excellence',
      title: 'Academic Excellence',
      organization: 'CGPA 9.01',
      description: 'Consistent high academic performance demonstrating dedication and strong foundational knowledge',
      icon: 'medal',
      color: 'accent-green'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons = {
      trophy: Trophy,
      file: FileText,
      mic: Mic,
      users: Users,
      message: MessageSquare,
      medal: Medal
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Trophy;
    return IconComponent;
  };

  return (
    <section 
      id="achievements" 
      className="py-20 bg-navy"
      data-testid="achievements-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-electric-blue mb-4" data-testid="achievements-title">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-300">
            Highlights of academic and professional accomplishments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <Card
                key={achievement.id}
                className={`bg-dark-blue p-6 rounded-xl border text-center transition-all hover:scale-105 ${
                  achievement.color === 'electric-blue' 
                    ? 'border-electric-blue/20 hover:border-electric-blue/50' 
                    : 'border-accent-green/20 hover:border-accent-green/50'
                }`}
                data-testid={`achievement-card-${achievement.id}`}
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    achievement.color === 'electric-blue' 
                      ? 'bg-electric-blue/20' 
                      : 'bg-accent-green/20'
                  }`}>
                    <IconComponent className={`text-2xl ${
                      achievement.color === 'electric-blue' 
                        ? 'text-electric-blue' 
                        : 'text-accent-green'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className={`font-medium mb-2 ${
                    achievement.color === 'electric-blue' 
                      ? 'text-electric-blue' 
                      : 'text-accent-green'
                  }`}>
                    {achievement.organization}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
