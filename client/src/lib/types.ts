export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
  details: {
    fullDescription: string;
    features: string[];
    challenges?: string;
    impact?: string;
    githubUrl?: string;
    liveUrl?: string;
    image: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: string;
  color: 'electric-blue' | 'accent-green';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  type: 'work' | 'education';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TerminalCommand {
  command: string;
  output: string;
  type?: 'success' | 'error';
}
