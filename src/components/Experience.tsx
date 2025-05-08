import { useState, useRef, useEffect } from 'react';
import { experienceData } from '../data/resumeData';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
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

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 opacity-0 transform translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Professional Experience</SectionTitle>
        
        <div className="mt-12 space-y-8">
          {experienceData.map((job) => {
            const isExpanded = expandedId === job.id;
            
            return (
              <div 
                key={job.id}
                className="border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div 
                  className="flex justify-between items-start p-6 cursor-pointer bg-white dark:bg-gray-700"
                  onClick={() => toggleExpand(job.id)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1">
                      {job.company}, {job.location}
                    </h4>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 ml-4">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                <div 
                  className={`bg-gray-50 dark:bg-gray-700/50 px-6 overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience