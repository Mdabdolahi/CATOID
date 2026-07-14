import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform duration-300">
              {/* Outer RGB rainbow border glow */}
              <div className="absolute inset-0 bg-rainbow-gradient opacity-80 animate-spin-slow rounded-full p-[1.5px]">
                <div className="w-full h-full bg-black rounded-full" />
              </div>
              <span className="relative text-white font-display font-black text-sm tracking-wider">C</span>
            </div>
            <span className="font-display font-black text-xl tracking-widest text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-rainbow-gradient transition-all duration-300">
              CATOID
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=EfU4xWf6c6ZqPKcBxWDjDQyak4iExcBoehXaSacrpump"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Content */}
        <div className="fixed right-0 top-0 bottom-0 w-3/4 max-w-xs bg-zinc-950/95 border-l border-white/5 p-6 flex flex-col justify-between shadow-2xl">
          <div className="flex flex-col space-y-6 mt-16">
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <span className="font-display font-black text-lg tracking-widest text-white">
                CATOID MENU
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white font-sans font-semibold text-base py-2 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/5">
            <a
              href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=EfU4xWf6c6ZqPKcBxWDjDQyak4iExcBoehXaSacrpump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-rainbow-gradient text-white font-sans font-bold text-sm rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Buy CATOID <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <div className="text-center text-[10px] text-zinc-500 font-mono">
              {CONTRACT_ADDRESS.slice(0, 8)}...{CONTRACT_ADDRESS.slice(-8)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
