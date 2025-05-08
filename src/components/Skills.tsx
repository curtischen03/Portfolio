import { useRef, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import { skillsData, skillCategories } from '../data/resumeData';

const Skills = () => {
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
      id="skills" 
      ref={sectionRef}
      className="py-20 opacity-0 transform translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills</SectionTitle>
        
        <div className="mt-12 space-y-16">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skillsData
                  .filter(skill => skill.category === category.id)
                  .map(skill => (
                    <div 
                      key={skill.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 p-4 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-3">
                        <div className={`text-2xl ${skill.iconColor}`}>{skill.icon}</div>
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;