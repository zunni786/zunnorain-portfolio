import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  key?: any;
}

export default function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      whileHover={hover ? { y: -6, scale: 1.01, rotateX: 0.4, rotateY: 0.4 } : undefined}
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300",
        hover && "hover:border-white/20 hover:shadow-brand-primary/10 hover:shadow-2xl",
        className
      )}
      style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}
