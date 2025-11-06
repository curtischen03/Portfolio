import { useRef, useEffect, useState } from "react";
import { projectsData } from "../data/resumeData";
import SectionTitle from "./SectionTitle";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    requestAnimationFrame(() => {
      if (sectionRef.current) {
        sectionRef.current.classList.add("animate-fade-in");
      }
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-700/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 overflow-hidden border border-gray-200 dark:border-gray-600 h-full hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden bg-gray-200 dark:bg-gray-600">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded[project.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setImageLoaded((prev) => ({ ...prev, [project.id]: true }))}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white px-4 py-2 rounded-md backdrop-blur-sm bg-black/30">
                    {project.title}
                  </h3>
                </div>
                {!imageLoaded[project.id] && (
                  <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse" />
                )}
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
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded"
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
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 rounded"
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
};

export default Projects;
