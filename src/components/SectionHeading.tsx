import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center', 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16 space-y-4",
      align === 'center' ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-brand-primary"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient"
      >
        {title}
      </motion.h2>
    </div>
  );
}
