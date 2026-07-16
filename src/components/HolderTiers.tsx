import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

import streetCatImg from '../assets/images/street_cat_ears_1784168309030.jpg';
import alphaCatImg from '../assets/images/alpha_cat_ears_1784168322654.jpg';
import sigmaCatImg from '../assets/images/sigma_cat_ears_1784168333581.jpg';
import gigacatImg from '../assets/images/gigacat_ears_1784168343983.jpg';
import emperorCatImg from '../assets/images/emperor_cat_ears_1784168353521.jpg';

interface Tier {
  id: number;
  tierNumber: string;
  name: string;
  amount: string;
  accentColor: string;
  glowClass: string;
}

const TIERS_DATA: Tier[] = [
  {
    id: 1,
    tierNumber: "Tier I",
    name: "Street Cat",
    amount: "500,000 CATOID",
    accentColor: "#d97706", // Bronze / Amber
    glowClass: "glow-tier-1",
  },
  {
    id: 2,
    tierNumber: "Tier II",
    name: "Alpha Cat",
    amount: "5,000,000 CATOID",
    accentColor: "#94a3b8", // Silver / Slate
    glowClass: "glow-tier-2",
  },
  {
    id: 3,
    tierNumber: "Tier III",
    name: "Sigma Cat",
    amount: "50,000,000 CATOID",
    accentColor: "#fbbf24", // Gold
    glowClass: "glow-tier-3",
  },
  {
    id: 4,
    tierNumber: "Tier IV",
    name: "GigaCat",
    amount: "500,000,000 CATOID",
    accentColor: "#22d3ee", // Diamond Cyan
    glowClass: "glow-tier-4",
  },
  {
    id: 5,
    tierNumber: "Tier V",
    name: "CATOID Emperor",
    amount: "5,000,000,000 CATOID",
    accentColor: "#f43f5e", // Emperor Red/Gold
    glowClass: "glow-tier-5",
  }
];

// High fidelity SVGs for Medal Icons (Bronze 3, Silver 2, Gold 1, Diamond, Crown)
const MedalIcon = ({ id }: { id: number }) => {
  switch (id) {
    case 1:
      // Bronze Medal 3
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_10px_rgba(180,83,9,0.3)]">
          <defs>
            <linearGradient id="bronze-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="bronze-inner" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#bronze-grad)" stroke="#b45309" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="url(#bronze-inner)" stroke="#78350f" strokeWidth="1" />
          {/* Laurel Wreath */}
          <path d="M 28 50 C 28 65, 40 72, 50 72 C 60 72, 72 65, 72 50" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M 28 50 L 25 45 M 32 58 L 28 55 M 40 67 L 37 62 M 60 67 L 63 62 M 68 58 L 72 55 M 72 50 L 75 45" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          {/* BRONZE Text */}
          <text x="50" y="51" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.5">BRONZE</text>
        </svg>
      );
    case 2:
      // Silver Medal 2
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_10px_rgba(148,163,184,0.3)]">
          <defs>
            <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="silver-inner" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#silver-grad)" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="url(#silver-inner)" stroke="#475569" strokeWidth="1" />
          {/* Laurel Wreath */}
          <path d="M 28 50 C 28 65, 40 72, 50 72 C 60 72, 72 65, 72 50" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M 28 50 L 25 45 M 32 58 L 28 55 M 40 67 L 37 62 M 60 67 L 63 62 M 68 58 L 72 55 M 72 50 L 75 45" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
          {/* SILVER Text */}
          <text x="50" y="51" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="11" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.5">SILVER</text>
        </svg>
      );
    case 3:
      // Gold Medal 1
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_12px_rgba(234,179,8,0.4)]">
          <defs>
            <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
            <linearGradient id="gold-inner" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fef9c3" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#gold-grad)" stroke="#eab308" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="url(#gold-inner)" stroke="#a16207" strokeWidth="1" />
          {/* Laurel Wreath */}
          <path d="M 28 50 C 28 65, 40 72, 50 72 C 60 72, 72 65, 72 50" fill="none" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M 28 50 L 25 45 M 32 58 L 28 55 M 40 67 L 37 62 M 60 67 L 63 62 M 68 58 L 72 55 M 72 50 L 75 45" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" />
          {/* GOLD Text */}
          <text x="50" y="51" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="12" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.8">GOLD</text>
        </svg>
      );
    case 4:
      // High-End 3D Diamond
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_6px_15px_rgba(6,182,212,0.4)]">
          <defs>
            <linearGradient id="diamond-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#22d3ee" />
              <stop offset="70%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#083344" />
            </linearGradient>
          </defs>
          {/* 3D facets of Diamond */}
          <g transform="translate(10, 15) scale(0.8)">
            {/* Top middle face */}
            <polygon points="50,10 30,30 70,30" fill="#e0f7fa" opacity="0.9" />
            {/* Top left face */}
            <polygon points="10,30 30,30 50,10" fill="#22d3ee" opacity="0.8" />
            {/* Top right face */}
            <polygon points="90,30 70,30 50,10" fill="#0891b2" opacity="0.85" />
            {/* Bottom middle face */}
            <polygon points="30,30 70,30 50,90" fill="url(#diamond-shimmer)" />
            {/* Bottom left face */}
            <polygon points="10,30 30,30 50,90" fill="#0e7490" opacity="0.9" />
            {/* Bottom right face */}
            <polygon points="90,30 70,30 50,90" fill="#164e63" opacity="0.9" />
            
            {/* Highlight lines */}
            <polyline points="50,10 50,90" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <polyline points="30,30 50,90" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            <polyline points="70,30 50,90" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
          </g>
        </svg>
      );
    case 5:
      // Crown Icon (Imperial Crown)
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_8px_18px_rgba(234,179,8,0.5)]">
          <defs>
            <linearGradient id="crown-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#fbbf24" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="gem-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>
          </defs>
          <g transform="translate(5, 10) scale(0.9)">
            {/* Crown Base */}
            <path d="M 15 75 L 85 75 L 80 85 L 20 85 Z" fill="url(#crown-gold)" stroke="#d97706" strokeWidth="1" />
            <rect x="25" y="78" width="50" height="4" fill="#78350f" rx="2" />
            {/* Tiny crown gems */}
            <circle cx="32" cy="80" r="2" fill="#3b82f6" />
            <circle cx="42" cy="80" r="2" fill="#ef4444" />
            <circle cx="50" cy="80" r="2.5" fill="#ffffff" />
            <circle cx="58" cy="80" r="2" fill="#ef4444" />
            <circle cx="68" cy="80" r="2" fill="#3b82f6" />
            
            {/* Spikes / Peaks */}
            <path d="M 15 75 L 20 40 L 35 60 L 50 30 L 65 60 L 80 40 L 85 75 Z" fill="url(#crown-gold)" stroke="#9a3412" strokeWidth="1" />
            
            {/* Jewels on peaks */}
            <circle cx="20" cy="40" r="4.5" fill="url(#gem-red)" className="animate-pulse" />
            <circle cx="50" cy="30" r="5.5" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]" />
            <circle cx="80" cy="40" r="4.5" fill="url(#gem-red)" className="animate-pulse" />
            <circle cx="35" cy="60" r="3" fill="#06b6d4" />
            <circle cx="65" cy="60" r="3" fill="#06b6d4" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

// Extremely precise, modular 3D collectible mascots representing ultra-luxury, high-end Pixar/Hot Toys masterpieces!
const CatPortraitSVG = ({
  tierId,
  hovered,
  tiltX,
  tiltY
}: {
  tierId: number;
  hovered: boolean;
  tiltX: number;
  tiltY: number;
}) => {
  const getMascotImage = () => {
    switch (tierId) {
      case 1:
        return streetCatImg;
      case 2:
        return alphaCatImg;
      case 3:
        return sigmaCatImg;
      case 4:
        return gigacatImg;
      case 5:
        return emperorCatImg;
      default:
        return streetCatImg;
    }
  };

  const getBorderColor = () => {
    switch (tierId) {
      case 1:
        return 'from-amber-600/50 via-zinc-800 to-amber-900/60';
      case 2:
        return 'from-slate-400/50 via-zinc-800 to-slate-600/60';
      case 3:
        return 'from-yellow-400/60 via-zinc-800 to-yellow-600/80';
      case 4:
        return 'from-cyan-400/70 via-zinc-800 to-blue-600/80';
      case 5:
        return 'from-rose-500/85 via-yellow-400/70 to-rose-700/85';
      default:
        return 'from-zinc-700 to-zinc-900';
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Dynamic Colored Background Aura Radial Glow */}
      <div
        className="absolute inset-[-25px] rounded-full blur-2xl opacity-45 transition-all duration-700 ease-out z-0 pointer-events-none"
        style={{
          background:
            tierId === 1 ? 'radial-gradient(circle, rgba(217,119,6,0.35) 0%, transparent 70%)' :
            tierId === 2 ? 'radial-gradient(circle, rgba(148,163,184,0.4) 0%, transparent 70%)' :
            tierId === 3 ? 'radial-gradient(circle, rgba(251,191,36,0.45) 0%, transparent 70%)' :
            tierId === 4 ? 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)' :
            'radial-gradient(circle, rgba(244,63,94,0.55) 0%, rgba(251,191,36,0.25) 50%, transparent 75%)',
        }}
      />

      {/* 3D Circular Frame with double premium metallic ring border */}
      <div 
        className={`w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] rounded-full p-[4px] bg-gradient-to-b ${getBorderColor()} shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative z-10 overflow-hidden group`}
        style={{
          transform: `translate3d(${tiltX * 5}px, ${tiltY * 5}px, 0) scale(${hovered ? 1.05 : 1})`,
          transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s ease'
        }}
      >
        <div className="w-full h-full rounded-full bg-[#050507] overflow-hidden relative flex items-center justify-center">
          {/* Real High-End 3D Render Image */}
          <img
            src={getMascotImage()}
            alt={`3D ${tierId === 1 ? 'Street Cat' : tierId === 2 ? 'Alpha Cat' : tierId === 3 ? 'Sigma Cat' : tierId === 4 ? 'GigaCat' : 'CATOID Emperor'} Mascot`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-108"
            style={{
              filter: hovered ? 'brightness(1.08) contrast(1.02)' : 'brightness(1)'
            }}
          />

          {/* Luxury Lens Glare Overlay (Curved glass reflex) */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/12 opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/8 to-transparent h-1/2 opacity-30 rounded-t-full" />
        </div>
      </div>
    </div>
  );
};

// Interactive luxury holder tier glass card matching the picture exactly!
const HolderTierCard = ({ tier }: { tier: Tier; key?: React.Key }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalizing coords to range -0.5 to 0.5
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Smooth interactive 3D parallax angles
    const rotateX = -normY * 9; 
    const rotateY = normX * 9;  

    setTilt({ x: rotateY, y: rotateX });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Luxury reflective edge lighting & surrounding glow colors
  const getGlowStyles = () => {
    if (!hovered) return {};

    switch (tier.id) {
      case 1:
        return {
          boxShadow: '0 25px 60px rgba(255,255,255,0.06), 0 0 40px rgba(255,255,255,0.04)',
          borderColor: 'rgba(255, 255, 255, 0.25)',
        };
      case 2:
        return {
          boxShadow: '0 25px 60px rgba(59,130,246,0.18), 0 0 50px rgba(59,130,246,0.1)',
          borderColor: 'rgba(59, 130, 246, 0.4)',
        };
      case 3:
        return {
          boxShadow: '0 30px 70px rgba(234,179,8,0.22), 0 0 50px rgba(234,179,8,0.12)',
          borderColor: 'rgba(234, 179, 8, 0.45)',
        };
      case 4:
        return {
          boxShadow: '0 35px 80px rgba(6,182,212,0.25), 0 0 70px rgba(168,85,247,0.15)',
          borderColor: 'rgba(6, 182, 212, 0.55)',
          backgroundImage: 'linear-gradient(rgba(10, 10, 12, 0.96), rgba(10, 10, 12, 0.96)), linear-gradient(135deg, #06b6d4, #a855f7, #3b82f6)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        };
      case 5:
        return {
          boxShadow: '0 40px 90px rgba(244,63,94,0.35), 0 0 70px rgba(251,191,36,0.25)',
          borderColor: 'rgba(244, 63, 94, 0.7)',
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full border border-white/5 rounded-2xl bg-[#0a0a0c]/85 backdrop-blur-xl transition-all duration-500 ease-out flex flex-col sm:flex-row items-center justify-between overflow-hidden p-6 sm:p-8 cursor-pointer ${tier.glowClass}`}
      style={{
        transform: hovered
          ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.03, 1.03, 1.03)`
          : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        willChange: 'transform, box-shadow, border-color',
        ...getGlowStyles()
      }}
    >
      {/* 1. Real-time Glare Overlay */}
      {hovered && (
        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle 260px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2), transparent 75%)`,
          }}
        />
      )}

      {/* 2. Light Eruption (Fountain of multi-layered sparkles, fast shooting sparks, and drifting ambient dust) */}
      {hovered && (() => {
        const rankLevel = tier.id; // 1 to 5
        
        // Dynamic counts that scale up drastically with rank level - increased for denser/richer effects!
        const fastCount = rankLevel === 1 ? 12 : rankLevel === 2 ? 24 : rankLevel === 3 ? 45 : rankLevel === 4 ? 75 : 120;
        const standardCount = rankLevel === 1 ? 20 : rankLevel === 2 ? 35 : rankLevel === 3 ? 65 : rankLevel === 4 ? 100 : 150;
        const driftCount = rankLevel === 1 ? 12 : rankLevel === 2 ? 24 : rankLevel === 3 ? 45 : rankLevel === 4 ? 75 : 120;
        
        const shockwaveCount = rankLevel <= 2 ? 1 : rankLevel === 3 ? 2 : rankLevel === 4 ? 3 : 4;

        return (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-2xl">
            {/* Layer A: Fast Shooting Energetic Sparks */}
            {Array.from({ length: fastCount }).map((_, i) => {
              const leftPos = 5 + (i * 90) / (fastCount - 1 || 1) + (Math.sin(i * 3.4) * 5);
              const topPos = -15 - (i % 5) * 4; // Start above the top edge
              const driftVal = `${(Math.sin(i * 1.7) * 70 * (1 + rankLevel * 0.4)).toFixed(0)}px`;
              const scaleVal = (0.3 + (i % 3) * 0.22) * (0.8 + rankLevel * 0.18);
              const animDelay = `${(i * (1.6 / fastCount)).toFixed(2)}s`;
              const size = rankLevel >= 4 ? '4px' : '3px';
              const fallVal = `${280 + (i % 4) * 35 + rankLevel * 12}px`;
              
              // 3D Parallax offset based on mouse position relative to center (glare.x - 50)
              const factor = 0.12 + (i % 5) * 0.1;
              const mouseTranslateX = (glare.x - 50) * factor;
              const mouseTranslateY = (glare.y - 50) * factor;

              return (
                <div
                  key={`fast-wrap-${i}`}
                  className="absolute transition-transform duration-200 ease-out"
                  style={{
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    transform: `translate3d(${mouseTranslateX}px, ${mouseTranslateY}px, 0px)`,
                  }}
                >
                  <div
                    className="rounded-full erupt-spark-fast"
                    style={{
                      width: size,
                      height: size,
                      backgroundColor: tier.accentColor,
                      boxShadow: `0 0 ${12 + rankLevel * 7}px ${2 + rankLevel * 0.8}px ${tier.accentColor}, 0 0 ${4 + rankLevel * 2}px 1px #ffffff`,
                      animationDelay: animDelay,
                      ['--spark-drift' as any]: driftVal,
                      ['--spark-scale' as any]: scaleVal,
                      ['--spark-y-start' as any]: '0px',
                      ['--spark-y-end' as any]: fallVal,
                    }}
                  />
                </div>
              );
            })}

            {/* Layer B: Medium Speed Standard Sparkles */}
            {Array.from({ length: standardCount }).map((_, i) => {
              const leftPos = 4 + (i * 92) / (standardCount - 1 || 1) + (Math.sin(i * 2.1) * 3);
              const topPos = -10 - (i % 6) * 3; // Start near the top edge
              const driftVal = `${(Math.sin(i * 1.3) * 45 * (1 + rankLevel * 0.35)).toFixed(0)}px`;
              const scaleVal = (0.35 + (i % 4) * 0.18) * (0.8 + rankLevel * 0.16);
              const animDelay = `${(i * (2.8 / standardCount)).toFixed(2)}s`;
              const animDuration = `${(0.65 + (i % 3) * 0.25 - (rankLevel * 0.05)) * 4}s`;
              const fallVal = `${240 + (i % 3) * 25 + rankLevel * 10}px`;

              // 3D Parallax offset based on mouse position relative to center (glare.x - 50)
              const factor = 0.08 + (i % 4) * 0.08;
              const mouseTranslateX = (glare.x - 50) * factor;
              const mouseTranslateY = (glare.y - 50) * factor;

              return (
                <div
                  key={`spark-wrap-${i}`}
                  className="absolute transition-transform duration-200 ease-out"
                  style={{
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    transform: `translate3d(${mouseTranslateX}px, ${mouseTranslateY}px, 0px)`,
                  }}
                >
                  <div
                    className="rounded-full erupt-spark"
                    style={{
                      width: '3px',
                      height: '3px',
                      backgroundColor: tier.accentColor,
                      boxShadow: `0 0 ${10 + rankLevel * 5}px ${1.5 + rankLevel * 0.6}px ${tier.accentColor}`,
                      animationDelay: animDelay,
                      animationDuration: animDuration,
                      ['--spark-drift' as any]: driftVal,
                      ['--spark-scale' as any]: scaleVal,
                      ['--spark-y-start' as any]: '0px',
                      ['--spark-y-end' as any]: fallVal,
                    }}
                  />
                </div>
              );
            })}

            {/* Layer C: Slow Drifting Ambient Starry Dust */}
            {Array.from({ length: driftCount }).map((_, i) => {
              const leftPos = 8 + (i * 84) / (driftCount - 1 || 1) + (Math.cos(i * 1.9) * 4);
              const topPos = -5 - (i % 8) * 2; // Start just above/at the top edge
              const driftVal = `${(Math.cos(i * 2.4) * 30 * (1 + rankLevel * 0.25)).toFixed(0)}px`;
              const scaleVal = (0.2 + (i % 5) * 0.15) * (0.9 + rankLevel * 0.12);
              const animDelay = `${(i * (4.8 / driftCount)).toFixed(2)}s`;
              const animDuration = `${(1.1 + (i % 3) * 0.3) * 4}s`;
              const fallVal = `${200 + (i % 3) * 20 + rankLevel * 8}px`;

              // 3D Parallax offset based on mouse position relative to center (glare.x - 50)
              const factor = 0.05 + (i % 5) * 0.06;
              const mouseTranslateX = (glare.x - 50) * factor;
              const mouseTranslateY = (glare.y - 50) * factor;

              return (
                <div
                  key={`drift-wrap-${i}`}
                  className="absolute transition-transform duration-200 ease-out"
                  style={{
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    transform: `translate3d(${mouseTranslateX}px, ${mouseTranslateY}px, 0px)`,
                  }}
                >
                  <div
                    className="rounded-full erupt-spark-drift"
                    style={{
                      width: '2px',
                      height: '2px',
                      backgroundColor: tier.accentColor,
                      boxShadow: `0 0 ${8 + rankLevel * 4}px ${1 + rankLevel * 0.4}px ${tier.accentColor}`,
                      animationDelay: animDelay,
                      animationDuration: animDuration,
                      ['--spark-drift' as any]: driftVal,
                      ['--spark-scale' as any]: scaleVal,
                      ['--spark-y-start' as any]: '0px',
                      ['--spark-y-end' as any]: fallVal,
                    }}
                  />
                </div>
              );
            })}

            {/* Layer D: Magical Glowing Ambient Orbs */}
            {Array.from({ length: shockwaveCount * 6 }).map((_, i) => {
              const leftPos = 10 + (i * 80) / (shockwaveCount * 6 - 1 || 1) + (Math.sin(i * 2.8) * 6);
              const topPos = -20 - (i % 5) * 5; // Start high up
              const driftVal = `${(Math.sin(i * 2.1) * 50 * (1 + rankLevel * 0.3)).toFixed(0)}px`;
              const scaleVal = (0.6 + (i % 3) * 0.4) * (1.0 + rankLevel * 0.15);
              const animDelay = `${(i * 0.32).toFixed(2)}s`;
              const animDuration = `${(1.4 + (i % 3) * 0.4) * 4}s`;
              const size = rankLevel >= 4 ? '6px' : '4px';
              const fallVal = `${220 + (i % 3) * 30 + rankLevel * 8}px`;

              // 3D Parallax offset based on mouse position relative to center (glare.x - 50)
              const factor = 0.15 + (i % 4) * 0.08;
              const mouseTranslateX = (glare.x - 50) * factor;
              const mouseTranslateY = (glare.y - 50) * factor;

              return (
                <div
                  key={`orb-wrap-${i}`}
                  className="absolute transition-transform duration-200 ease-out"
                  style={{
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                    transform: `translate3d(${mouseTranslateX}px, ${mouseTranslateY}px, 0px)`,
                  }}
                >
                  <div
                    className="rounded-full erupt-spark-drift"
                    style={{
                      width: size,
                      height: size,
                      backgroundColor: tier.accentColor,
                      boxShadow: `0 0 ${15 + rankLevel * 6}px ${2 + rankLevel * 0.5}px ${tier.accentColor}, 0 0 ${6 + rankLevel * 2}px 1px #ffffff`,
                      animationDelay: animDelay,
                      animationDuration: animDuration,
                      ['--spark-drift' as any]: driftVal,
                      ['--spark-scale' as any]: scaleVal,
                      ['--spark-y-start' as any]: '0px',
                      ['--spark-y-end' as any]: fallVal,
                      opacity: 0.8,
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })()}

      {/* Left side: Medal badge and Tier description text */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 relative z-10 w-full sm:w-auto">
        <div className="flex-shrink-0 transition-transform duration-500" style={{ transform: hovered ? 'translateZ(35px) scale(1.05)' : 'translateZ(0) scale(1)' }}>
          <MedalIcon id={tier.id} />
        </div>

        <div className="text-center sm:text-left select-none" style={{ transform: 'translateZ(25px)' }}>
          <span className="text-xs font-mono tracking-widest font-bold uppercase mb-1 block" style={{ color: tier.accentColor }}>
            {tier.tierNumber}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
            {tier.name}
          </h3>
          <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider block">
            {tier.amount}
          </span>
        </div>
      </div>

      {/* Right side: Portrait Avatar Circular Ring with gold halo */}
      <div 
        className="flex-shrink-0 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] mt-8 sm:mt-0 relative overflow-visible flex items-center justify-center z-10"
        style={{
          transform: hovered ? 'translateY(-8px) translateZ(50px)' : 'translateY(0) translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
      >
        <CatPortraitSVG
          tierId={tier.id}
          hovered={hovered}
          tiltX={tilt.x}
          tiltY={tilt.y}
        />
      </div>
    </div>
  );
};

export default function HolderTiers() {
  return (
    <section id="tiers" className="relative py-28 bg-[#050505] overflow-hidden">
      {/* Volumetric Dark Luxury lighting overlays */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-950/15 via-amber-950/5 to-transparent rounded-full blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-grid-mesh opacity-[0.05] pointer-events-none z-0" />

      {/* Main Luxury Container - matches reference layout exactly with thin gold borders */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Outer Premium Glass Frame with Gold glowing strokes */}
        <div className="relative border border-amber-500/15 rounded-[24px] bg-[#08080a]/65 backdrop-blur-3xl px-4 py-12 sm:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Diamond light flares on golden top and bottom borders */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-500 rotate-45 border border-white/60 shadow-[0_0_15px_#f59e0b] z-20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-amber-500 rotate-45 border border-white/60 shadow-[0_0_15px_#f59e0b] z-20" />
          
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />

          {/* Golden Header flaked with diamond lines */}
          <div className="text-center mb-16 select-none relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.25em] text-zinc-100 uppercase mb-3">
              CATOID Holder Tiers
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mt-4" />
          </div>

          {/* The list of stacking luxury cards */}
          <div className="space-y-6 sm:space-y-8">
            {TIERS_DATA.map((tier) => (
              <HolderTierCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>

        {/* Small security detail watermark underneath */}
        <div className="mt-12 text-center select-none">
          <p className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase">
            ✦ HIGH PRECISION CRYPTO VAULT LED LIGHTING ACTIVE ✦
          </p>
        </div>
      </div>
    </section>
  );
}
