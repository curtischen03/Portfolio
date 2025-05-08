import { Github as GitHub, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Curtis Chen</h2>
            <p className="text-gray-400 mt-2">
              Computer Science Student & Software Engineer
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/curtischen03"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/curtis-chen1/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:curtischen1234@gmail.com"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://curtischen03.github.io/personal-website"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Website"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="text-center text-gray-500 text-sm">
          &copy; {currentYear} Curtis Chen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;