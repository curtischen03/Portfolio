import { useEffect, useRef, useState } from "react";
import { Github as GitHub, Linkedin, Mail, FileText } from "lucide-react";
import profilePic from "../data/curtis_chen_pic.png";

const Hero = () => {
  const [resume, setResume] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("../data/Curtis_Chen_2025_Resume_1.pdf").then((module) => {
      setResume(module.default);
    });
  }, []);

  useEffect(() => {
    // Trigger animation on mount using requestAnimationFrame for smooth transition
    requestAnimationFrame(() => {
      if (heroRef.current) {
        heroRef.current.classList.add("animate-fade-in");
      }
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center bg-gradient-to-b from-blue-50/60 to-transparent dark:from-blue-950/20"
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
              Software and Machine Learning Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              A passionate developer with experience in web development, machine
              learning, and software engineering. Currently pursuing a Masters
              of Engineering Degree, specializing in AI, at UCLA. Working as a fullstack
              engineer at Koios Enterprises, in charge of the video streaming services.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/curtischen03"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/curtis-chen1/"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              {resume && (
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
                  aria-label="Resume"
                >
                  <FileText size={24} />
                </a>
              )}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
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
