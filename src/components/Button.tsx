import { motion, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  const xSpring = useSpring(x, { stiffness: 280, damping: 26 });
  const ySpring = useSpring(y, { stiffness: 280, damping: 26 });
  const scaleXSpring = useSpring(scaleX, { stiffness: 280, damping: 26 });
  const scaleYSpring = useSpring(scaleY, { stiffness: 280, damping: 26 });

  const variants = {
    primary: "brand-gradient text-white shadow-2xl shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40",
    secondary: "bg-white/10 backdrop-blur-md border border-[#d4af37]/20 text-white hover:bg-white/20",
    outline: "bg-transparent border border-white/10 text-white hover:bg-white/10 hover:border-[#d4af37]/30",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold"
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const target = event.currentTarget.getBoundingClientRect();
    const xOffset = ((event.clientX - (target.left + target.width / 2)) / target.width) * 12;
    const yOffset = ((event.clientY - (target.top + target.height / 2)) / target.height) * 8;

    x.set(xOffset);
    y.set(yOffset);

    const stretch = Math.min(0.08, Math.abs(xOffset) / 220 + Math.abs(yOffset) / 180);
    scaleX.set(1 + stretch);
    scaleY.set(1 - stretch * 0.18);
  };

  const resetMagnet = () => {
    x.set(0);
    y.set(0);
    scaleX.set(1);
    scaleY.set(1);
  };

  return (
    <motion.button
      style={{ x: xSpring, y: ySpring, scaleX: scaleXSpring, scaleY: scaleYSpring, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetMagnet}
      onPointerCancel={resetMagnet}
      className={cn(
        "cursor-interactive relative inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
