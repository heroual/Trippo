import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Waves, Flame, Heart, Landmark, Gem, ArrowRight, Star, MapPin } from 'lucide-react';

const moods = [
  { id: 'relax', icon: Waves, label: 'Relax', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30' },
  { id: 'adventure', icon: Flame, label: 'Adventure', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30' },
  { id: 'romance', icon: Heart, label: 'Romance', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30' },
  { id: 'culture', icon: Landmark, label: 'Culture', color: 'from-amber-500/20 to-yellow-500/20', border: 'border-amber-500/30' },
  { id: 'luxury', icon: Gem, label: 'Luxury', color: 'from-purple-500/20 to-fuchsia-500/20', border: 'border-purple-500/30' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-trippo-black opacity-80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop" 
            alt="Agadir Sunset" 
            className="w-full h-full object-cover object-center"
          />
          {/* Sunset glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-trippo-sunset-start/20 rounded-full blur-[120px] pointer-events-none z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-trippo-gold font-medium tracking-widest uppercase text-sm mb-4 block"
              >
                Your AI Local Companion
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
                Discover Agadir Like You've <span className="sunset-gradient-text italic">Never Imagined.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed">
                Meet Youssef, your personal AI guide. He crafts emotional, story-driven itineraries tailored to your exact mood.
              </p>
            </div>

            {/* Mood Selector */}
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-white/50 font-medium">How are you feeling today?</p>
              <div className="flex flex-wrap gap-4">
                {moods.map((mood, index) => (
                  <motion.button
                    key={mood.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/generate?mood=${mood.id}`)}
                    className={`glass-panel px-6 py-4 rounded-2xl flex flex-col items-center gap-3 transition-all duration-300 hover:bg-white/10 border ${mood.border} group`}
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-br ${mood.color} group-hover:scale-110 transition-transform duration-300`}>
                      <mood.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{mood.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Link 
                to="/generate"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-trippo-black rounded-full font-medium hover:bg-trippo-gold hover:text-white transition-all duration-300 group"
              >
                Design My Agadir Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Character Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="relative h-[600px] hidden lg:flex items-center justify-center"
          >
            {/* Glow behind character */}
            <div className="absolute inset-0 bg-gradient-to-tr from-trippo-sunset-start/30 to-transparent rounded-full blur-3xl" />
            
            {/* Character Image (Placeholder for 3D model) */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <img 
                 src="https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1000&auto=format&fit=crop" 
                 alt="Youssef AI Guide" 
                 className="w-[400px] h-[550px] object-cover rounded-[40px] shadow-2xl border border-white/10"
                 style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
               />
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 rounded-full flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                 <span className="text-sm font-medium tracking-wide">Youssef is online</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-trippo-black relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Journey Begins</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
              Three simple steps to unlock the hidden soul of Agadir, guided by local intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Choose Your Mood', desc: 'Tell Youssef how you want to feel. Relaxed? Adventurous? Romantic?' },
              { step: '02', title: 'Let AI Craft Your Story', desc: 'Our AI weaves a cinematic itinerary, balancing famous spots with hidden gems.' },
              { step: '03', title: 'Experience Like a Local', desc: 'Follow the story, unlock achievements, and immerse yourself in Moroccan culture.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="text-8xl font-serif font-bold text-white/5 absolute -top-10 -left-6 z-0 group-hover:text-trippo-gold/10 transition-colors duration-500">
                  {item.step}
                </div>
                <div className="relative z-10 glass-panel p-8 rounded-3xl h-full border-t border-white/10 hover:border-trippo-gold/50 transition-colors duration-500">
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-32 bg-[#080808] relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Moments</h2>
              <p className="text-white/60 font-light">Glimpses into what awaits you.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-trippo-gold transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Surf in Taghazout', img: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop', tag: 'Adventure' },
              { title: 'Sunset at Agadir Oufella', img: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800&auto=format&fit=crop', tag: 'Romance' },
              { title: 'Paradise Valley Escape', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=800&auto=format&fit=crop', tag: 'Relax' },
              { title: 'Souk El Had Immersion', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop', tag: 'Culture' },
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-xs font-medium uppercase tracking-widest text-trippo-gold mb-2 block">{exp.tag}</span>
                  <h3 className="text-xl font-serif">{exp.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden z-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2000&auto=format&fit=crop" 
            alt="Desert" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-trippo-black via-trippo-black/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
            Ready to write your <span className="gold-gradient-text italic">Agadir story?</span>
          </h2>
          <Link 
            to="/generate"
            className="inline-flex items-center gap-3 px-10 py-5 bg-trippo-gold text-trippo-black rounded-full font-medium text-lg hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Reserve This Moment
          </Link>
        </div>
      </section>
    </div>
  );
}
