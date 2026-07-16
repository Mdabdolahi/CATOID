import React from 'react';
import { CATOID_STORY } from '../data';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Blurred decorative ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-mesh opacity-[0.03] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300 mx-auto">
            <Sparkles className="h-3 w-3" />
            <span>THE ORIGIN STORY</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 uppercase">
            {CATOID_STORY.title}
          </h2>

          <p className="font-sans font-semibold text-lg sm:text-2xl text-purple-300/95 leading-relaxed italic max-w-3xl mx-auto">
            "{CATOID_STORY.intro}"
          </p>

          <div className="space-y-6 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto text-left sm:text-center">
            {CATOID_STORY.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
