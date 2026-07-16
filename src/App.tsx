import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HolderTiers from './components/HolderTiers';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);

  // Tracks cursor for modern premium glow follow-effect on desktop
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div className="relative min-h-screen bg-black text-gray-100 font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden antialiased">
      
      {/* Desktop Custom Cursor Glow Tracker */}
      {!isMobile && (
        <div
          className="pointer-events-none fixed z-50 w-[300px] h-[300px] rounded-full bg-rainbow-gradient opacity-10 blur-[80px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* Glow lines at the absolute top */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-rainbow-gradient z-50 shadow-[0_2px_15px_rgba(168,85,247,0.5)]" />

      {/* Main Assembly */}
      <Header />
      <main>
        <Hero />
        <About />
        <HolderTiers />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
