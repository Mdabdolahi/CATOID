import { useState } from 'react';
import { FAQS } from '../data';
import { Twitter, MessageCircle, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function Community() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

  return (
    <section id="community" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Join Community CTAs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/25 text-xs font-mono text-pink-300">
                <Sparkles className="h-3 w-3" />
                <span>ORBIT CORRIDORS</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 uppercase">
                Enter the Orbit
              </h2>
              <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
                We are building the most hyper-energetic visual ecosystem on Solana. No silence, no gatekeepers. Pick your portal, grab your glow keys, and join the full spectrum feline fleet.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Twitter Card */}
              <a
                href="https://x.com/CATOIDsol"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 group hover:border-sky-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500/10 group-hover:text-sky-400 transition-colors">
                  <Twitter className="h-6 w-6 text-zinc-300 group-hover:text-sky-400 transition-colors" />
                </div>
                <div className="font-display font-bold text-sm text-white">Twitter / X</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">@CATOIDsol</div>
              </a>

              {/* Telegram Card */}
              <a
                href="https://telegram.me/CATOIDsol"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 group hover:border-blue-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  <MessageCircle className="h-6 w-6 text-zinc-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="font-display font-bold text-sm text-white">Telegram</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Join Portal</div>
              </a>
            </div>
          </div>

          {/* Right Side: FAQ Section Accordion */}
          <div id="faq" className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-300">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>FREQUENT QUESTIONS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black italic tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 uppercase">
                Cosmic Inquiries
              </h3>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;

                return (
                  <div
                    key={idx}
                    className="glow-card rounded-xl border border-white/5 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-64 border-t border-white/5 p-5 bg-black/40' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
