import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between glass-panel border-x-0 border-t-0"
    >
      <Link to="/" className="flex items-center gap-2 group">
        <Compass className="w-6 h-6 text-trippo-gold group-hover:rotate-45 transition-transform duration-500" />
        <span className="font-serif text-xl font-medium tracking-wide">Trippo</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-white/70">
        <Link to="/story" className="hover:text-white transition-colors">Agadir Story</Link>
        <Link to="/sunset" className="hover:text-white transition-colors">Sunset Intelligence</Link>
        <Link to="/" className="hover:text-white transition-colors">Experiences</Link>
        <Link to="/" className="hover:text-white transition-colors">Journal</Link>
      </div>
      
      <Link 
        to="/generate" 
        className="px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium uppercase tracking-wider"
      >
        Design Story
      </Link>
    </motion.nav>
  );
}
