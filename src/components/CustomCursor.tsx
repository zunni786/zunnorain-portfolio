import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    const handleHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = !!target.closest('button, a, input, textarea, select, label, [role="button"], .cursor-interactive');
      setActive(isInteractive);
    };

    const handleMouseOut = () => setActive(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverState);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverState);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: position.x - 18,
        y: position.y - 18,
        scale: active ? 1.35 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 24 }}
    >
      <div className="cursor-ring" />
      <div className="cursor-dot" />
    </motion.div>
  );
}
