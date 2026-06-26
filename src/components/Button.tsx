import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ButtonHTMLAttributes, ReactNode, useState } from 'react';

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
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

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
    const x = ((event.clientX - (target.left + target.width / 2)) / target.width) * 10;
    const y = ((event.clientY - (target.top + target.height / 2)) / target.height) * 8;
    setMagnet({ x, y });
  };

  const resetMagnet = () => setMagnet({ x: 0, y: 0 });

  return (
    <motion.button
      animate={{ x: magnet.x, y: magnet.y }}
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
