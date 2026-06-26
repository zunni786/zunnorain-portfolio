import { motion } from 'motion/react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Liquid Blob */}
      <motion.div 
        animate={{
          x: [0, 90, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[8%] w-[640px] h-[640px] bg-[#d4af37]/18 blur-[120px] rounded-full"
      />
      
      {/* Secondary Liquid Blob */}
      <motion.div 
        animate={{
          x: [0, -130, 0],
          y: [0, 90, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[6%] w-[720px] h-[720px] bg-[#f5d376]/18 blur-[140px] rounded-full"
      />

      {/* Accent Liquid Blob */}
      <motion.div 
        animate={{
          x: [0, 40, 0],
          y: [0, -90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[25%] left-[42%] w-[520px] h-[520px] bg-[#f8e7a4]/15 blur-[110px] rounded-full"
      />

      {/* Subtle Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
      
      <div className="absolute inset-0 bg-bg-deep/20 backdrop-blur-[1px]" />
    </div>
  );
}
