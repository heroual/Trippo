import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Sunset, 
  Wind, 
  Cloud, 
  MapPin, 
  Navigation, 
  Users, 
  Camera, 
  Zap, 
  ChevronRight,
  Sparkles,
  Clock,
  Star
} from 'lucide-react';

const locations = [
  {
    id: 'oufella',
    name: 'Agadir Oufella',
    rating: 4.9,
    crowd: 'High',
    wind: 'Moderate',
    intensity: 'Maximum',
    image: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=800&auto=format&fit=crop',
    tip: 'The Kasbah view will be magical tonight. The sky is clear.'
  },
  {
    id: 'marina',
    name: 'Marina Agadir',
    rating: 4.7,
    crowd: 'Medium',
    wind: 'Low',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop',
    tip: 'Perfect for a sunset dinner by the yachts.'
  },
  {
    id: 'beach',
    name: 'Beach Promenade',
    rating: 4.5,
    crowd: 'Very High',
    wind: 'High',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=800&auto=format&fit=crop',
    tip: 'Expect some wind, but the reflection on the water is worth it.'
  }
];

export default function SunsetIntelligence() {
  const [isVip, setIsVip] = useState(false);
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mock data for the feature
  const sunsetTime = "18:42";
  const travelTime = 17; // minutes
  const weatherScore = 94;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Background Sunset Glow */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-trippo-sunset-start/10 rounded-full blur-[180px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-trippo-sunset-end/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-trippo-gold/10 border border-trippo-gold/20">
                <Sunset className="w-5 h-5 text-trippo-gold" />
              </div>
              <span className="text-trippo-gold font-medium tracking-[0.2em] uppercase text-xs">Live Sunset Intelligence™</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Agadir Turns <br/><span className="italic sunset-gradient-text">Gold Soon.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass-panel p-6 rounded-3xl border-white/5 flex items-center gap-8"
          >
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Sunset</p>
              <p className="text-2xl font-serif text-trippo-gold">{sunsetTime}</p>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Weather Score</p>
              <p className="text-2xl font-serif">{weatherScore}%</p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: AI Interaction & Main Alert */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Intelligence Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[40px] overflow-hidden aspect-[16/9] md:aspect-auto md:h-[450px]"
            >
              <img 
                src={activeLocation.image} 
                alt={activeLocation.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-3xl md:text-5xl font-serif mb-6">You have 38 minutes <br/>to reach the magic.</h2>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3 border-white/10">
                      <Navigation className="w-4 h-4 text-trippo-gold" />
                      <span className="text-sm font-medium">{travelTime} min drive</span>
                    </div>
                    <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-3 border-white/10">
                      <Clock className="w-4 h-4 text-trippo-gold" />
                      <span className="text-sm font-medium">Leave by 18:05</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* AI Youssef Interaction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-panel p-8 rounded-[32px] border-white/5 flex items-start gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="w-5 h-5 text-trippo-gold/30" />
              </div>
              
              <div className="w-20 h-20 rounded-full border-2 border-trippo-gold/30 p-1 shrink-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=200&auto=format&fit=crop" 
                  alt="Youssef" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-trippo-gold rounded-full flex items-center justify-center border-2 border-[#0B0B0E]">
                  <Zap className="w-3 h-3 text-trippo-black" />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-trippo-gold font-bold">Youssef's Insight</p>
                <p className="text-xl font-serif italic leading-relaxed text-white/90">
                  "{activeLocation.tip}"
                </p>
                <button className="flex items-center gap-2 text-sm text-trippo-gold hover:text-white transition-colors group">
                  Guide Me Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Location Selection & Premium */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">Recommended Viewpoints</h3>
              <div className="space-y-4">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`w-full glass-panel p-5 rounded-3xl border transition-all duration-500 text-left flex items-center gap-4 ${activeLocation.id === loc.id ? 'border-trippo-gold bg-white/5' : 'border-white/5 hover:border-white/20'}`}
                  >
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                      <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-serif text-lg">{loc.name}</h4>
                        <div className="flex items-center gap-1 text-trippo-gold">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="text-xs font-bold">{loc.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/40">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {loc.crowd}</span>
                        <span className="flex items-center gap-1"><Wind className="w-3 h-3" /> {loc.wind}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Section */}
            <div className="glass-panel p-8 rounded-[40px] border-trippo-gold/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-trippo-gold/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-trippo-gold" />
                    <h3 className="font-serif text-xl">Golden Hour Map</h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest bg-trippo-gold text-trippo-black px-2 py-1 rounded font-bold">VIP</span>
                </div>
                
                <p className="text-sm text-white/60 font-light leading-relaxed mb-8">
                  Unlock real-time heatmaps of lighting zones, crowd estimations, and photo quality predictions.
                </p>

                <div className="relative h-40 rounded-2xl overflow-hidden mb-8 bg-white/5 border border-white/10">
                  {/* Mock Heatmap */}
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                  <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-trippo-sunset-start/40 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-trippo-sunset-end/30 rounded-full blur-2xl animate-pulse" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    {!isVip && (
                      <button 
                        onClick={() => setIsVip(true)}
                        className="px-6 py-3 bg-white text-trippo-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-trippo-gold hover:text-white transition-all"
                      >
                        Unlock VIP Access
                      </button>
                    )}
                    {isVip && (
                      <div className="text-center">
                        <Camera className="w-8 h-8 text-trippo-gold mx-auto mb-2" />
                        <p className="text-xs font-bold uppercase tracking-widest">Map Active</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Photo Quality</p>
                    <p className="text-lg font-serif text-trippo-gold">Ultra</p>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Wind Comfort</p>
                    <p className="text-lg font-serif">Perfect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
