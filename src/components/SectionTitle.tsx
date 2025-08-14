import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
        {children}
        <span className="block h-1 w-24 mt-2 mx-auto rounded bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
