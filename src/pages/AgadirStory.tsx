import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  Navigation, 
  Info, 
  Star, 
  ArrowRight, 
  Coffee, 
  Sunset, 
  ShoppingBag,
  Camera
} from 'lucide-react';

const timeline = [
  {
    day: "DAY 1",
    subtitle: "Ocean & Sunset",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop",
    events: [
      { 
        time: "09:30", 
        title: "Beach Walk", 
        location: "Agadir Beach", 
        duration: "2h", 
        tip: "Walk towards the south for quieter stretches of sand.",
        crowd: "Low",
        bestTime: "Early Morning"
      },
      { 
        time: "12:30", 
        title: "Seafood Lunch", 
        location: "Marina Agadir", 
        duration: "1.5h", 
        tip: "Try the grilled sardines, a local specialty.",
        crowd: "Medium",
        bestTime: "Lunchtime"
      },
      { 
        time: "17:45", 
        title: "Sunset View", 
        location: "Agadir Oufella", 
        duration: "1h", 
        tip: "Go 30 minutes before sunset for the golden light.",
        crowd: "High",
        bestTime: "Dusk"
      }
    ],
    route: [
      { from: "Beach", to: "Marina", time: "10 min walk" },
      { from: "Marina", to: "Oufella", time: "15 min taxi" }
    ]
  }
];

const artisans = [
  {
    title: "Moroccan Spices",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop",
    desc: "A symphony of scents: saffron, cumin, and ras el hanout."
  },
  {
    title: "Handmade Leather",
    image: "https://images.unsplash.com/photo-1590739225287-bd2ba5198fad?q=80&w=800&auto=format&fit=crop",
    desc: "Supple textures crafted by generations of masters."
  },
  {
    title: "Ceramic Art",
    image: "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=800&auto=format&fit=crop",
    desc: "Intricate patterns reflecting the soul of the Maghreb."
  },
  {
    title: "Argan Gold",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
    desc: "The liquid gold of Morocco, harvested from the Souss valley."
  }
];

export default function AgadirStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-[#0B0B0E] text-white selection:bg-trippo-gold/30">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2070&auto=format&fit=crop" 
            alt="Agadir Beach Sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0B0B0E]" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-trippo-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 block"
          >
            Crafted by AI. Inspired by locals.
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-6xl md:text-8xl font-serif mb-10 leading-tight"
          >
            Your Agadir Story <br/><span className="italic sunset-gradient-text">Begins Here.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Link 
              to="/generate"
              className="inline-flex items-center gap-4 px-10 py-5 bg-white text-trippo-black rounded-full font-medium text-lg hover:bg-trippo-gold hover:text-white transition-all duration-500 group"
            >
              Start My Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* 2. DAY-BY-DAY VISUAL TIMELINE */}
      {timeline.map((day, dIdx) => (
        <section key={dIdx} className="relative py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-trippo-gold font-serif text-4xl">{day.day}</span>
              <div className="h-[1px] flex-grow bg-white/10" />
              <span className="text-white/50 uppercase tracking-widest text-sm">{day.subtitle}</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12">
              {/* Visual Story Card */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-7 relative group rounded-[40px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[800px]"
              >
                <img 
                  src={day.image} 
                  alt={day.subtitle} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-12 w-full">
                  <h2 className="text-5xl font-serif mb-8">{day.subtitle}</h2>
                  
                  {/* Schedule Overlay */}
                  <div className="space-y-6">
                    {day.events.map((event, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-6 group/item">
                        <span className="text-trippo-gold font-mono text-sm pt-1">{event.time}</span>
                        <div>
                          <h4 className="text-xl font-serif group-hover/item:text-trippo-gold transition-colors">{event.title}</h4>
                          <p className="text-white/50 text-sm">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Details & Routes */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
                {/* Route Visualization */}
                <div className="glass-panel p-8 rounded-[32px] border-white/5">
                  <h3 className="text-sm uppercase tracking-widest text-white/50 mb-8 flex items-center gap-2">
                    <Navigation className="w-4 h-4" /> Route & Timing
                  </h3>
                  <div className="space-y-8">
                    {day.route.map((r, rIdx) => (
                      <div key={rIdx} className="relative pl-8">
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-trippo-gold to-transparent" />
                        <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-trippo-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                        <div className="flex justify-between items-center">
                          <span className="text-white/80 font-medium">{r.from} to {r.to}</span>
                          <span className="text-xs text-trippo-gold bg-trippo-gold/10 px-3 py-1 rounded-full">{r.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Details Panel */}
                <div className="space-y-8">
                  {day.events.map((event, eIdx) => (
                    <motion.div 
                      key={eIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: eIdx * 0.2 }}
                      className="glass-panel p-6 rounded-3xl border-white/5 hover:border-trippo-gold/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-serif">{event.title}</h4>
                        <span className="text-[10px] uppercase tracking-widest text-trippo-gold border border-trippo-gold/30 px-2 py-1 rounded">
                          {event.crowd} Crowd
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6 text-xs text-white/50">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" /> {event.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Sunset className="w-3 h-3" /> {event.bestTime}
                        </div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl flex gap-3">
                        <Info className="w-4 h-4 text-trippo-gold shrink-0 mt-0.5" />
                        <p className="text-xs italic text-white/70 leading-relaxed">
                          <span className="text-trippo-gold not-italic font-bold mr-1">Youssef:</span>
                          "{event.tip}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. SOUK & ARTISANAT SECTION */}
      <section className="py-32 bg-[#08080A] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              Souk El Had
            </motion.h2>
            <p className="text-trippo-gold italic text-xl font-light">
              “Where colors speak and craftsmanship tells stories.”
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {artisans.map((art, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] rounded-[32px] overflow-hidden"
              >
                <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-serif mb-2">{art.title}</h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {art.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Souk Tips */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Best Hours", value: "09:00 - 12:00", icon: Clock },
              { label: "Duration", value: "2 - 3 Hours", icon: Camera },
              { label: "Local Wisdom", value: "Cash is king. Bargaining is a dance.", icon: Star },
            ].map((tip, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 text-center">
                <tip.icon className="w-6 h-6 text-trippo-gold mx-auto mb-4" />
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">{tip.label}</h4>
                <p className="text-lg font-serif">{tip.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ROUTES & TIMING VISUALIZATION (Interactive Mini-Map Style) */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-12 rounded-[48px] border-white/5 relative overflow-hidden">
            {/* Background Map Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-serif mb-12 text-center">The Rhythm of the Day</h2>
              
              <div className="relative h-64 flex items-center justify-between px-12">
                {/* Connecting Line */}
                <div className="absolute left-24 right-24 h-[1px] bg-gradient-to-r from-trippo-gold/20 via-trippo-gold to-trippo-gold/20" />
                
                {[
                  { name: "Beach", time: "09:30", icon: Sunset },
                  { name: "Marina", time: "12:30", icon: Coffee },
                  { name: "Oufella", time: "17:45", icon: Camera },
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.3, type: "spring" }}
                    className="relative flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-trippo-black border border-trippo-gold flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      <point.icon className="w-6 h-6 text-trippo-gold" />
                    </div>
                    <div className="absolute top-20 text-center w-32">
                      <h4 className="font-serif text-lg">{point.name}</h4>
                      <p className="text-xs text-trippo-gold font-mono">{point.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-32 grid md:grid-cols-2 gap-12 text-center">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Total Daily Duration</h4>
                  <p className="text-2xl font-serif">~ 9 Hours</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-2">Travel Time</h4>
                  <p className="text-2xl font-serif">25 Min Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop" 
            alt="Agadir Marina Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mb-12"
          >
            Ready to Live <br/><span className="italic gold-gradient-text">This Story?</span>
          </motion.h2>
          <Link 
            to="/generate"
            className="inline-flex items-center gap-4 px-12 py-6 bg-trippo-gold text-trippo-black rounded-full font-medium text-xl hover:bg-white transition-all duration-500 hover:scale-105"
          >
            Book This Experience
          </Link>
        </div>
      </section>

      {/* Footer Micro-details */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
          Trippo &copy; 2026 — Agadir, Morocco
        </p>
      </footer>
    </div>
  );
}
