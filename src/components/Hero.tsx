import { useEffect, useRef } from "react";
import { Github as GitHub, Linkedin, Mail, FileText } from "lucide-react";
import profilePic from "../data/curtis_chen_pic.png";
import resume from "../data/Curtis_Chen_2025_Resume_1.pdf";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center opacity-0 transform translate-y-10 transition-all duration-1000"
      style={{ paddingTop: "64px" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Curtis Chen
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-300">
              Computer Science Student & Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              A passionate developer studying at UCLA with experience in web
              development, machine learning, and software engineering. Currently
              seeking new opportunities to apply my skills and continue growing
              as a developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/curtischen03"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/curtis-chen1/"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:curtischen1234@gmail.com"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Resume"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
