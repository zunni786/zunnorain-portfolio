import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xSpring = useSpring(x, { stiffness: 300, damping: 28 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 28 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
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
  }, [x, y]);

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: xSpring, y: ySpring }}
      animate={{
        scale: active ? 1.35 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
    >
      <div className="cursor-ring" />
      <div className="cursor-dot" />
    </motion.div>
  );
}
