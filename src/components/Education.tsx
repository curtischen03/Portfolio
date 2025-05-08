import { useRef, useEffect } from 'react';
import { educationData } from '../data/resumeData';
import SectionTitle from './SectionTitle';
import { BookOpen, Calendar } from 'lucide-react';

const Education = () => {
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
      id="education" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-700/30 opacity-0 transform translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">UCLA</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center justify-center sm:justify-start text-blue-600 dark:text-blue-400">
                      <Calendar size={16} className="mr-1" />
                      <span>{edu.graduationDate}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1 text-center sm:text-left">
                    {edu.institution}, {edu.location}
                  </h4>
                  
                  <div className="mt-2 text-gray-600 dark:text-gray-400 text-center sm:text-left">
                    <span className="font-medium">GPA:</span> {edu.gpa}
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="font-medium text-gray-900 dark:text-white flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      Relevant Coursework:
                    </h5>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {edu.courses.map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education