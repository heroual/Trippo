import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Waves, Flame, Heart, Landmark, Gem, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

const moods = [
  { id: 'relax', icon: Waves, label: 'Relax', desc: 'Ocean breeze and slow mornings' },
  { id: 'adventure', icon: Flame, label: 'Adventure', desc: 'Surfing, hiking, and adrenaline' },
  { id: 'romance', icon: Heart, label: 'Romance', desc: 'Sunsets, fine dining, and intimacy' },
  { id: 'culture', icon: Landmark, label: 'Culture', desc: 'Souks, history, and local life' },
  { id: 'luxury', icon: Gem, label: 'Luxury', desc: 'Premium experiences and comfort' },
];

const durations = [
  { id: 'weekend', label: 'A Quick Escape', desc: '2-3 Days' },
  { id: 'week', label: 'The Full Story', desc: '5-7 Days' },
  { id: 'nomad', label: 'Living Local', desc: '10+ Days' },
];

const budgets = [
  { id: 'modest', label: 'Modest', desc: 'Authentic street food & local transport' },
  { id: 'balanced', label: 'Balanced', desc: 'Comfortable stays & curated dining' },
  { id: 'premium', label: 'Premium', desc: 'Luxury resorts & private tours' },
];

export default function TripGenerator() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    mood: searchParams.get('mood') || '',
    duration: '',
    budget: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleGenerate();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate('/');
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation time
    setTimeout(() => {
      navigate('/itinerary');
    }, 4000);
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-trippo-black">
        {/* Cinematic sand particle animation (CSS simulation) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-[pulse_4s_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-trippo-sunset-start/20 rounded-full blur-[100px] animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center text-center max-w-md px-6"
        >
          <div className="w-24 h-24 rounded-full border-t-2 border-r-2 border-trippo-gold animate-spin mb-8" />
          <h2 className="text-3xl font-serif mb-4">Crafting Your Story</h2>
          <p className="text-white/60 font-light text-lg italic">
            "Give me a moment... I'm designing something unforgettable based on your {selections.mood} mood."
          </p>
          <p className="mt-8 text-sm uppercase tracking-widest text-trippo-gold font-medium">
            — Youssef
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-trippo-sunset-start/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-16">
          <button onClick={handleBack} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-medium">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${step >= i ? 'w-12 bg-trippo-gold' : 'w-4 bg-white/20'}`} 
              />
            ))}
          </div>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: 3D Character Context */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 glass-panel p-6 rounded-3xl text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=400&auto=format&fit=crop" 
                  alt="Youssef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl mb-2">Youssef</h3>
              <p className="text-sm text-white/60 font-light italic">
                {step === 1 && "How do you want to feel in Agadir?"}
                {step === 2 && "How long will you stay with us?"}
                {step === 3 && "What level of comfort do you prefer?"}
              </p>
            </div>
          </div>

          {/* Right: Form Content */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">Set the Mood</h1>
                    <p className="text-white/60 text-lg font-light">Choose the vibe that resonates with your soul today.</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {moods.map((mood) => (
                      <button
                        key={mood.id}
                        onClick={() => setSelections({ ...selections, mood: mood.id })}
                        className={`glass-panel p-6 rounded-2xl text-left transition-all duration-300 border ${selections.mood === mood.id ? 'border-trippo-gold bg-white/10' : 'border-white/10 hover:border-white/30'}`}
                      >
                        <mood.icon className={`w-8 h-8 mb-4 ${selections.mood === mood.id ? 'text-trippo-gold' : 'text-white/50'}`} />
                        <h3 className="text-xl font-serif mb-2">{mood.label}</h3>
                        <p className="text-sm text-white/50 font-light">{mood.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">Time is Yours</h1>
                    <p className="text-white/60 text-lg font-light">How many sunsets will you witness in Agadir?</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {durations.map((duration) => (
                      <button
                        key={duration.id}
                        onClick={() => setSelections({ ...selections, duration: duration.id })}
                        className={`glass-panel p-6 rounded-2xl flex justify-between items-center transition-all duration-300 border ${selections.duration === duration.id ? 'border-trippo-gold bg-white/10' : 'border-white/10 hover:border-white/30'}`}
                      >
                        <div className="text-left">
                          <h3 className="text-xl font-serif mb-1">{duration.label}</h3>
                          <p className="text-sm text-white/50 font-light">{duration.desc}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selections.duration === duration.id ? 'border-trippo-gold' : 'border-white/30'}`}>
                          {selections.duration === duration.id && <div className="w-3 h-3 bg-trippo-gold rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">Define Your Comfort</h1>
                    <p className="text-white/60 text-lg font-light">How would you like to experience the city?</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {budgets.map((budget) => (
                      <button
                        key={budget.id}
                        onClick={() => setSelections({ ...selections, budget: budget.id })}
                        className={`glass-panel p-6 rounded-2xl flex justify-between items-center transition-all duration-300 border ${selections.budget === budget.id ? 'border-trippo-gold bg-white/10' : 'border-white/10 hover:border-white/30'}`}
                      >
                        <div className="text-left">
                          <h3 className="text-xl font-serif mb-1">{budget.label}</h3>
                          <p className="text-sm text-white/50 font-light">{budget.desc}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selections.budget === budget.id ? 'border-trippo-gold' : 'border-white/30'}`}>
                          {selections.budget === budget.id && <div className="w-3 h-3 bg-trippo-gold rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Next Button */}
            <div className="mt-12 flex justify-end">
              <button
                onClick={handleNext}
                disabled={(step === 1 && !selections.mood) || (step === 2 && !selections.duration) || (step === 3 && !selections.budget)}
                className="flex items-center gap-3 px-8 py-4 bg-white text-trippo-black rounded-full font-medium hover:bg-trippo-gold hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {step === 3 ? 'Generate Story' : 'Continue'}
                {step === 3 ? <Loader2 className="w-5 h-5 hidden group-disabled:block animate-spin" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
