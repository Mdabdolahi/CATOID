import { ArrowRight } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../data';
import catoidLogo from '../assets/images/catoid_logo_1783991087353.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#050505] bg-grid-mesh">
      {/* Background Radial Glow Nodes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center z-10">
        {/* Hero Content Grid - Centered Flex */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Logo Container with Glorious Rainbow Glow Ring */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-10 group cursor-pointer">
            {/* Ambient Spinning Outer Rainbow Gimmick */}
            <div className="absolute -inset-4 bg-rainbow-gradient opacity-45 blur-2xl group-hover:opacity-75 transition-opacity duration-700 animate-pulse-glow rounded-full" />
            
            {/* Spinning background rings */}
            <div className="absolute -inset-2 bg-rainbow-gradient rounded-full opacity-70 animate-spin-slow p-[2px]">
              <div className="w-full h-full bg-zinc-950 rounded-full" />
            </div>
            
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-60 animate-spin-reverse p-[1px]">
              <div className="w-full h-full bg-zinc-950 rounded-full" />
            </div>

            {/* Main Logo Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/15 bg-black flex items-center justify-center p-1.5 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-[1.03]">
              <img
                src={catoidLogo}
                alt="CATOID Logo"
                className="w-full h-full object-cover rounded-full filter brightness-110 select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Accent Diamond Indicators */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rotate-45 border border-white shadow-[0_0_10px_#ec4899]" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-500 rotate-45 border border-white shadow-[0_0_10px_#a855f7]" />
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-3 h-3 bg-blue-500 rotate-45 border border-white shadow-[0_0_10px_#3b82f6]" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-3 h-3 bg-orange-500 rotate-45 border border-white shadow-[0_0_10px_#f97316]" />
          </div>

          {/* Heading with color shift */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 mb-6 uppercase">
            CATOID
          </h1>

          {/* Tagline */}
          <p className="font-sans font-semibold text-lg sm:text-2xl text-gray-300 max-w-2xl mx-auto tracking-wide mb-10 leading-relaxed">
            The Full Spectrum Cat. <span className="text-zinc-500">Unbending dark matter meets glowing neon rainbow energy.</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full justify-center">
            <a
              href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=EfU4xWf6c6ZqPKcBxWDjDQyak4iExcBoehXaSacrpump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-sans font-bold text-xs uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center group"
            >
              Buy CATOID
              <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Explore Spectrum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
