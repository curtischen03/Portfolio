import { useState, useRef, useEffect } from 'react';
import { projectsData } from '../data/resumeData';
import SectionTitle from './SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-700/30 opacity-0 transform translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 overflow-hidden border border-gray-200 dark:border-gray-600 h-full"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="h-48 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white px-4 py-2 rounded-md backdrop-blur-sm bg-black/30">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> 
                      Demo
                    </a>
                  )}
                  
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={16} className="mr-1" /> 
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects