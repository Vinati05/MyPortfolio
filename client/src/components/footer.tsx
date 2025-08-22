import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-off-white border-t border-gray-200 py-8" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0" data-testid="footer-copyright">
            © Vinati Vege. 
          </div>
          <div className="flex space-x-6">
            <a 
              href="mailto:vinati.vege@gmail.com" 
              className="text-gray-600 hover:text-emerald-green transition-colors"
              data-testid="footer-email"
            >
              <Mail className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
