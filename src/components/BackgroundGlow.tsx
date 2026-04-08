import { motion } from 'motion/react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Liquid Blob */}
      <motion.div 
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full"
      />
      
      {/* Secondary Liquid Blob */}
      <motion.div 
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[5%] w-[700px] h-[700px] bg-brand-secondary/20 blur-[140px] rounded-full"
      />

      {/* Accent Liquid Blob */}
      <motion.div 
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-brand-accent/15 blur-[110px] rounded-full"
      />

      {/* Subtle Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0)_0%,rgba(2,6,23,0.8)_100%)]" />
      
      <div className="absolute inset-0 bg-bg-deep/20 backdrop-blur-[1px]" />
    </div>
  );
}
