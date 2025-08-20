import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { TerminalCommand } from '@/lib/types';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalCommand[]>([
    { command: '', output: 'Welcome to Vinati\'s Portfolio Terminal v1.0' },
    { command: '', output: 'Type \'help\' for available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => string> = {
    help: () => `Available commands:
    about       - View information about Vinati
    projects    - List all projects
    skills      - Show technical skills
    experience  - Display work experience
    github      - Open GitHub profile
    resume      - Download resume
    clear       - Clear terminal
    exit        - Close terminal`,
    
    about: () => `Vinati Vege - Backend Engineer & AI Enthusiast
    Student at VNRVJIET (Batch 2027) | CGPA: 9.01
    Passionate about backend systems and AI-native development`,
    
    projects: () => `Featured Projects:
    1. AI Chatbot - Intelligent conversational AI
    2. Age & Gender Detection - Computer vision system
    3. VR Experience - Immersive virtual reality game
    4. E-commerce CMS - Full-stack retail platform
    5. HarmonyHub - AI-powered music streaming`,
    
    skills: () => `Technical Skills:
    Languages: Python, JavaScript, C#
    Frameworks: Django, React, Node.js
    Databases: PostgreSQL, MongoDB
    Tools: Docker, Git, Unity
    Specialties: AI/ML, Backend Development, VR`,
    
    experience: () => `Work Experience:
    Software Development Intern @ Partha Developers (2024)
    - Full-stack web development
    - Backend API implementation
    - Scalable solution deployment`,
    
    github: () => `Opening GitHub profile...
    https://github.com/vinativege`,
    
    resume: () => `Resume download initiated...
    [This would trigger a resume download in a real implementation]`,
    
    clear: () => 'CLEAR',
    exit: () => 'EXIT'
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    
    if (!command) return;

    const newHistory = [...history, { command: input, output: '' }];

    if (commands[command]) {
      const result = commands[command]();
      if (result === 'CLEAR') {
        setHistory([
          { command: '', output: 'Welcome to Vinati\'s Portfolio Terminal v1.0' },
          { command: '', output: 'Type \'help\' for available commands.' }
        ]);
        setInput('');
        return;
      } else if (result === 'EXIT') {
        onClose();
        return;
      } else {
        newHistory.push({ command: '', output: result });
        // Handle special commands
        if (command === 'github') {
          setTimeout(() => {
            window.open('https://github.com/vinativege', '_blank');
          }, 1000);
        }
      }
    } else {
      newHistory.push({ 
        command: '', 
        output: `Command not found: ${command}. Type 'help' for available commands.`,
        type: 'error'
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal show"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-testid="terminal-modal"
    >
      <div className="modal-content terminal">
        <div className="bg-dark-charcoal px-4 py-2 rounded-t-lg flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-emerald-green">vinati@portfolio:~</span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
            data-testid="button-close-terminal"
          >
            <X />
          </button>
        </div>
        
        <div 
          ref={outputRef}
          className="p-6 h-96 overflow-y-auto"
        >
          <div className="text-emerald-green text-sm space-y-2 font-mono">
            {history.map((item, index) => (
              <div key={index}>
                {item.command && (
                  <div className="flex">
                    <span className="text-royal-blue">vinati@portfolio:~$ </span>
                    <span className="ml-2">{item.command}</span>
                  </div>
                )}
                {item.output && (
                  <div className={`whitespace-pre-line ml-4 ${
                    item.type === 'error' ? 'text-red-400' : 'text-gray-300'
                  }`}>
                    {item.output}
                  </div>
                )}
              </div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex">
              <span className="text-royal-blue">vinati@portfolio:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none flex-1 text-emerald-green ml-2"
                data-testid="input-terminal"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
