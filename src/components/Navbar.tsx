import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION, BRAND } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-bg-deep/40 backdrop-blur-xl border-white/10 py-4" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-y-0">
          <span className="text-2xl font-display font-bold text-white tracking-tighter">
            ZUNNORAIN AHMAD
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === item.path ? "text-white" : "text-slate-400"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm">
              Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-deep border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-xl font-medium transition-colors",
                    location.pathname === item.path ? "text-brand-primary" : "text-slate-400"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button className="w-full">Book Strategy Call</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
