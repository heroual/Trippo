import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Coffee, Sunset, Compass, Award, Share2, Bookmark, ChevronDown } from 'lucide-react';

const itinerary = [
  {
    day: 1,
    title: "Arrival & The Ocean's Welcome",
    story: "Your journey begins as the warm Atlantic breeze greets you. Settle into your riad, then head to the Marina for a slow evening walk. The salt in the air and the distant sound of waves set the tone for the days ahead.",
    spots: [
      { time: '14:00', name: 'Check-in at Riad Villa Blanche', icon: Compass, type: 'Stay' },
      { time: '17:30', name: 'Agadir Marina Promenade', icon: MapPin, type: 'Explore' },
      { time: '19:00', name: 'Dinner at Pure Passion', icon: Coffee, type: 'Dine' },
    ],
    budget: '€120'
  },
  {
    day: 2,
    title: "Echoes of the Past & Golden Sands",
    story: "Morning light hits the Kasbah ruins. We'll explore the history of Agadir Oufella before descending into the vibrant chaos of Souk El Had. In the afternoon, let the rhythm of Taghazout's surf culture wash over you.",
    spots: [
      { time: '09:00', name: 'Agadir Oufella Ruins', icon: MapPin, type: 'History' },
      { time: '11:30', name: 'Souk El Had (Gate 6)', icon: Compass, type: 'Culture' },
      { time: '15:00', name: 'Taghazout Beach Surf & Chill', icon: Sunset, type: 'Relax' },
    ],
    budget: '€85'
  },
  {
    day: 3,
    title: "Into the Valley of Paradise",
    story: "Leave the coast behind for the hidden emerald pools of Paradise Valley. The winding roads through the Atlas foothills reveal a different side of Morocco—quiet, ancient, and breathtaking.",
    spots: [
      { time: '08:30', name: 'Drive to Atlas Foothills', icon: Compass, type: 'Journey' },
      { time: '10:00', name: 'Paradise Valley Hike', icon: MapPin, type: 'Nature' },
      { time: '14:00', name: 'Traditional Tagine Lunch', icon: Coffee, type: 'Dine' },
    ],
    budget: '€60'
  }
];

export default function Itinerary() {
  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Hero Header */}
      <div className="relative h-[50vh] flex items-end pb-12 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2000&auto=format&fit=crop" 
            alt="Agadir" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-trippo-black via-trippo-black/60 to-transparent" />
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-trippo-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              Your Curated Story
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              The Golden Coast <br/><span className="italic text-white/70">Escape</span>
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium tracking-wide">
              <span className="glass-panel px-4 py-2 rounded-full border border-white/20">3 Days</span>
              <span className="glass-panel px-4 py-2 rounded-full border border-white/20">Relaxation Focus</span>
              <span className="glass-panel px-4 py-2 rounded-full border border-white/20">Balanced Budget</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl mt-12 grid lg:grid-cols-12 gap-12">
        {/* Main Itinerary Timeline */}
        <div className="lg:col-span-8 space-y-16">
          {itinerary.map((day, index) => (
            <motion.div 
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[27px] top-16 bottom-[-64px] w-[1px] bg-white/10" />
              
              <div className="md:flex gap-8">
                {/* Day Marker */}
                <div className="hidden md:flex flex-col items-center shrink-0 w-14">
                  <div className="w-14 h-14 rounded-full bg-trippo-black border border-trippo-gold flex items-center justify-center text-trippo-gold font-serif text-xl z-10">
                    {day.day}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="md:hidden text-trippo-gold font-serif text-xl mb-2">Day {day.day}</div>
                  <h2 className="text-3xl font-serif mb-4">{day.title}</h2>
                  <p className="text-white/70 font-light leading-relaxed mb-8 text-lg">
                    {day.story}
                  </p>

                  {/* Spots */}
                  <div className="space-y-4">
                    {day.spots.map((spot, i) => (
                      <div key={i} className="glass-panel p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors border border-white/5">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <spot.icon className="w-5 h-5 text-trippo-gold" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-white/90">{spot.name}</h4>
                          <div className="flex items-center gap-3 text-xs text-white/50 mt-1">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {spot.time}</span>
                            <span className="uppercase tracking-wider">{spot.type}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center text-sm border-t border-white/10 pt-4">
                    <span className="text-white/50">Estimated Daily Budget</span>
                    <span className="font-medium text-trippo-gold">{day.budget}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="pt-8 flex justify-center">
             <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-sm font-medium">
               Make it More Adventurous <ChevronDown className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Actions */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 sticky top-24">
            <h3 className="font-serif text-xl mb-6">Keep Your Story</h3>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-white text-trippo-black rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-trippo-gold hover:text-white transition-colors">
                <Bookmark className="w-5 h-5" /> Save Itinerary
              </button>
              <button className="w-full py-3 px-4 bg-transparent border border-white/20 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <Share2 className="w-5 h-5" /> Share with Companion
              </button>
            </div>

            <hr className="border-white/10 my-8" />

            {/* Gamification */}
            <div>
              <h3 className="font-serif text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-trippo-gold" /> Badges to Unlock
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center shrink-0">
                    <Sunset className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Sunset Hunter</h4>
                    <p className="text-xs text-white/60">Visit Agadir Oufella at dusk</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Hidden Gem Explorer</h4>
                    <p className="text-xs text-white/60">Find the secret pool in Paradise Valley</p>
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
