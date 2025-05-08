import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white inline-block relative">
        {children}
        <span className="block h-1 w-24 mt-2 mx-auto bg-blue-600 dark:bg-blue-400 rounded"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;