import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ThemeProvider } from "./contexts/ThemeContext";

const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY > 10;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-screen" />}>
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <ScrollToTop />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
