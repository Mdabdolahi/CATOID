import { useState } from 'react';
import { CATOID_STORY } from '../data';
import { Sliders, Flame, Sparkles } from 'lucide-react';

export default function About() {
  const [glowIntensity, setGlowIntensity] = useState(50);

  const getGlowLabel = (val: number) => {
    if (val === 0) return { label: 'STEALTH CAT (SLEEPING)', desc: 'Zero signature void mode. Unobservable.', color: 'text-zinc-500' };
    if (val < 30) return { label: 'COZY PURR (ECO-MODE)', desc: 'Subtle low-frequency spectrum oscillations.', color: 'text-blue-400' };
    if (val < 65) return { label: 'RGB IGNITION (ACTIVE)', desc: 'Standard spectrum emission, normal bullish state.', color: 'text-purple-400' };
    if (val < 90) return { label: 'HYPERSPACE REFRACTION (BULLISH)', desc: 'Diamond ring discharging high particle density.', color: 'text-pink-400' };
    return { label: 'MAXIMUM CATOID (MAX LASER GLOW)', desc: 'QUANTUM SINGULARITY INITIATED. SEND IT.', color: 'gradient-text-rainbow font-black' };
  };

  const status = getGlowLabel(glowIntensity);

  // Calculate rotating animation speed based on intensity (higher is faster/more intense)
  const getSpinStyle = () => {
    if (glowIntensity === 0) return { animationPlayState: 'paused', opacity: 0.1 };
    const duration = Math.max(1, 20 - (glowIntensity / 5.5)); // duration decreases as intensity increases
    return {
      animation: `spin ${duration}s linear infinite`,
      opacity: Math.max(0.2, glowIntensity / 100)
    };
  };

  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Blurred decorative ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-purple-700/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-pink-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Legend & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
              <Sparkles className="h-3 w-3" />
              <span>THE ORIGIN STORY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 uppercase">
              {CATOID_STORY.title}
            </h2>

            <p className="font-sans font-semibold text-lg sm:text-xl text-purple-300/95 leading-relaxed italic">
              "{CATOID_STORY.intro}"
            </p>

            <div className="space-y-4 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
              {CATOID_STORY.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Glow Regulator Console */}
          <div className="lg:col-span-5">
            <div className="glow-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-grid-mesh opacity-10 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <Sliders className="h-5 w-5 text-zinc-400" />
                    <span className="font-display font-bold text-sm text-white tracking-wider uppercase">RGB Core Regulator</span>
                  </div>
                  <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-zinc-500 border border-white/5">
                    SYS_V2.4_SOL
                  </div>
                </div>

                {/* Simulated Particle Accelerator Ring */}
                <div className="flex items-center justify-center py-6">
                  <div className="relative w-44 h-44 rounded-full flex items-center justify-center bg-black border border-white/5 shadow-inner">
                    {/* Glowing background behind ring */}
                    <div
                      className="absolute inset-2 rounded-full blur-xl transition-all duration-300 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to right, #a855f7, #3b82f6, #22c55e, #f97316, #ec4899)',
                        opacity: glowIntensity / 110,
                        transform: `scale(${1 + glowIntensity / 250})`
                      }}
                    />

                    {/* Vector ring rotating according to glowIntensity speed */}
                    <div
                      className="absolute inset-1.5 rounded-full p-[2.5px] bg-rainbow-gradient"
                      style={getSpinStyle()}
                    >
                      <div className="w-full h-full bg-black rounded-full" />
                    </div>

                    {/* Core black cat logo graphic placeholder */}
                    <div className="relative z-10 text-center flex flex-col items-center">
                      <span className="text-4xl filter saturate-150 animate-pulse">🐈‍⬛</span>
                      <span className="block text-[8px] font-mono text-zinc-500 tracking-widest mt-1">CATOID CORE</span>
                    </div>

                    {/* Miniature orbital diamonds */}
                    {glowIntensity > 0 && (
                      <div
                        className="absolute w-2 h-2 rounded-full bg-white border border-black shadow-[0_0_8px_#ffffff] transition-all duration-300"
                        style={{
                          transform: `rotate(${glowIntensity * 3.6}deg) translateY(-84px)`
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Intensity Slider Control */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                    <span>LASER EMISSION</span>
                    <span className="text-white font-bold">{glowIntensity}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={glowIntensity}
                    onChange={(e) => setGlowIntensity(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-600">
                    <span>0% (STEALTH)</span>
                    <span>50% (STABLE)</span>
                    <span>100% (MAX)</span>
                  </div>
                </div>

                {/* Dynamic Status Output Box */}
                <div className="bg-black/60 border border-white/5 rounded-xl p-4 space-y-1.5 min-h-[92px] transition-all duration-300">
                  <div className="flex items-center space-x-1.5">
                    <Flame className={`h-4 w-4 shrink-0 ${glowIntensity > 65 ? 'text-orange-500 animate-pulse' : 'text-zinc-500'}`} />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">OUTPUT READOUT</span>
                  </div>
                  <div className={`font-display font-black text-xs tracking-wider uppercase ${status.color}`}>
                    {status.label}
                  </div>
                  <p className="font-sans text-xs text-zinc-400">
                    {status.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
