import { useRef, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      id="contact"
      ref={sectionRef}
      className="py-20 opacity-0 transform translate-y-10 transition-all duration-1000 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-950/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Contact Me</SectionTitle>
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to new opportunities, collaborations, or just a
              friendly chat. Feel free to reach out using the form or through
              any of the contact methods below.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <a
                    href="mailto:curtischen1234@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                  >
                    curtischen1234@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href="tel:+16263210852"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
                  >
                    +1 (626) 321-0852
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-3" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <span className="text-gray-700 dark:text-gray-300">
                    Alhambra, CA, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
