import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  id?: string;
  title?: string;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  className,
  titleClassName,
  contentClassName,
  children,
  centered = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <h2 
            className={cn(
              'text-3xl md:text-4xl font-bold mb-8 md:mb-12',
              centered && 'text-center',
              titleClassName
            )}
          >
            {title}
          </h2>
        )}
        <div className={cn(centered && 'text-center', contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;