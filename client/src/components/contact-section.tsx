import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { ContactForm } from '@/lib/types';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vinati.vege@example.com',
      href: 'mailto:vinati.vege@example.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/vinativege',
      href: 'https://linkedin.com/in/vinativege'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/vinativege',
      href: 'https://github.com/vinativege'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-dark-blue"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-electric-blue mb-4" data-testid="contact-title">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300">
            Ready to collaborate on amazing projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in discussing new opportunities, innovative projects, and potential 
                collaborations. Whether you're looking for a backend developer, AI enthusiast, or someone 
                passionate about building impactful solutions, let's connect!
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center space-x-4 text-gray-300 hover:text-electric-blue transition-colors"
                    data-testid={`contact-${method.label.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-electric-blue" />
                    </div>
                    <div>
                      <div className="font-medium">{method.label}</div>
                      <div className="text-sm">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-navy/50 border border-electric-blue/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-dark-blue border-gray-600 text-white focus:border-electric-blue"
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-dark-blue border-gray-600 text-white focus:border-electric-blue"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-dark-blue border-gray-600 text-white focus:border-electric-blue"
                    placeholder="What's this about?"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-dark-blue border-gray-600 text-white focus:border-electric-blue resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-electric-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 transition-colors"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
