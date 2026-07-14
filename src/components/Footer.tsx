import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <div className="absolute inset-0 bg-rainbow-gradient opacity-80 animate-spin-slow rounded-full p-[1.5px]" />
                <span className="relative text-white font-display font-black text-xs">C</span>
              </div>
              <span className="font-display font-black text-lg tracking-widest text-white">
                CATOID
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-sm leading-relaxed">
              Unbending dark matter meets supreme light dispersion. The final spectrum of digital expression.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-4 text-left md:text-right">
            <h4 className="font-display font-bold text-xs uppercase text-zinc-400 tracking-wider">NAVIGATE</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-zinc-500 hover:text-white transition-colors">
                  About the Legend
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <p className="font-sans text-[10px] text-zinc-600 leading-relaxed uppercase font-bold tracking-wide">
              Meme Coin Disclosures
            </p>
            <p className="font-sans text-[10px] text-zinc-600 leading-relaxed">
              Disclaimer: CATOID is a fictional digital asset created for community experiments, artistic expression, and meme-culture entertainment. It holds zero intrinsic financial value, guarantees zero utility, and has no formal team of asset managers. Standard digital assets carry extreme velocity and volatility risk on Solana; transact at your own risk.
            </p>
            <p className="font-sans text-[10px] text-zinc-500">
              © {new Date().getFullYear()} CATOID. All spectrums reserved.
            </p>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-center p-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all shadow-lg shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
