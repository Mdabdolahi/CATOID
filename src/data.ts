import { FeatureCard, RoadmapStep, TokenomicsMetric, SocialLink } from './types';

export const CONTRACT_ADDRESS = 'CATo1d9RGBn6qYV5D1ScK8FpG9uLmPZ9r7sXyZa99pX';

export const HERO_TAGLINES = [
  'The Full Spectrum Cat.',
  'Unbending Dark Matter Meets Neon RGB.',
  'The Glossiest Meme in the Decentralized Multiverse.'
];

export const CATOID_STORY = {
  title: 'The Catoid Prophecy',
  intro: 'In the deep void of space-time, a standard black cat slipped into a particle accelerator that was processing pure, compressed meme-energy. The result? CATOID.',
  paragraphs: [
    'A being of absolute physical density—dark, sleek, and minimalist—fused with a hyper-dimensional, diamond-studded ring that perpetually refracts a full-spectrum RGB rainbow gradient. This ring doesn\'t just glow; it vibrates at the frequency of infinite bullish energy.',
    'CATOID is more than a meme token. It is a symbol of digital resilience. It represents the perfect equilibrium between the silent elegance of the feline void and the loud, vibrant, chaotic fun of internet culture. We are the laser-eyed purveyors of the full spectrum.',
    'No taxes, no contracts of complex deception. Just pure, unadulterated, light-speed velocity. Own the void. Radiate the rainbow.'
  ]
};

export const FEATURES_DATA: FeatureCard[] = [
  {
    id: 'community',
    title: 'The Spectrum Alliance',
    value: '100% Organic',
    description: 'No paid bots, no artificial pumping. Driven entirely by a cult-like community of digital artists, meme enthusiasts, and full-spectrum believers.',
    iconName: 'Users',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'tokenomics',
    title: 'Zero Friction Economics',
    value: '0% Tax',
    description: 'No buy taxes, no sell taxes, no transfer taxes. Fluid movement across the ledger, exactly as the high-dimensional cat intended.',
    iconName: 'Coins',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'liquidity',
    title: 'Impenetrable Security',
    value: 'LP Burned',
    description: '100% of the initial liquidity pool tokens are vaporized into the void. Contract fully renounced. Unruggable, unbothered, absolute.',
    iconName: 'Flame',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'holders',
    title: 'Decentralized Core',
    value: '420.69T Supply',
    description: 'A tribute to the ancient laws of internet culture. Transparent supply distribution with fair launcher mechanics for maximum decentralization.',
    iconName: 'Shield',
    color: 'from-green-400 to-emerald-500'
  }
];

export const TOKENOMICS_METRICS: TokenomicsMetric[] = [
  {
    label: 'Public Presale / Liquidity',
    percentage: 60,
    value: '252.41 Trillion',
    color: '#3b82f6', // blue
    glowColor: 'shadow-blue-500/20'
  },
  {
    label: 'Laser-Glow Staking Rewards',
    percentage: 15,
    value: '63.10 Trillion',
    color: '#a855f7', // purple
    glowColor: 'shadow-purple-500/20'
  },
  {
    label: 'Community Airdrops & Memes',
    percentage: 10,
    value: '42.07 Trillion',
    color: '#ec4899', // pink
    glowColor: 'shadow-pink-500/20'
  },
  {
    label: 'CEX Listing & Market Making',
    percentage: 10,
    value: '42.07 Trillion',
    color: '#f97316', // orange
    glowColor: 'shadow-orange-500/20'
  },
  {
    label: 'Core Devs & RGB R&D',
    percentage: 5,
    value: '21.03 Trillion',
    color: '#22c55e', // green
    glowColor: 'shadow-green-500/20'
  }
];

export const ROADMAP_DATA: RoadmapStep[] = [
  {
    phase: 'Phase I',
    title: 'The Singularity Sparks',
    date: 'Q3 2026',
    description: [
      'Birth of the CATOID logo and RGB visual parameters.',
      'Deployment of the smart contract with locked & burned liquidity.',
      'Social infrastructure setup (Twitter/X, Telegram, Discord).',
      'The Spectrum Presale: fair launch for true believers.'
    ],
    status: 'completed'
  },
  {
    phase: 'Phase II',
    title: 'The Great Refraction',
    date: 'Q4 2026',
    description: [
      'CoinGecko and CoinMarketCap speed-run listings.',
      'Community meme-war tournaments with custom RGB prizes.',
      'First major exchange listing (CEX Phase 1).',
      'Targeting 10,000+ active full-spectrum holders.'
    ],
    status: 'current'
  },
  {
    phase: 'Phase III',
    title: 'Neon Domination',
    date: 'Q1 2027',
    description: [
      'Launch of the CATOID RGB Generator (web tool to overlay the rainbow ring on any avatar).',
      'High-profile influencer collaborations and digital billboard takeovers.',
      'Tier 1 Exchange integrations.',
      'Release of CATOID 3D digital collectible figurines.'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase IV',
    title: 'Interdimensional Purr',
    date: 'Q2 2027',
    description: [
      'Staking interface: Lock CATOID to earn "GLOW" energy tokens.',
      'CATOID DAO governance: Holders determine the next meme campaigns.',
      'The Grand RGB Gathering: Exclusive global digital rave for holders.',
      'Establishment of the CATOID Foundation for animal welfare & laser physics.'
    ],
    status: 'upcoming'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/catoid_coin',
    iconName: 'Twitter',
    color: 'hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/catoid_portal',
    iconName: 'MessageCircle',
    color: 'hover:text-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/catoid',
    iconName: 'Discord', // customized rendering since Discord is not standard lucide-react sometimes, or we can use custom SVG/lucide icon
    color: 'hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(129,140,248,0.5)]'
  }
];

export const FAQS = [
  {
    question: 'How do I buy CATOID?',
    answer: 'Install Phantom or any Solana-compatible wallet, deposit SOL, head over to Raydium or Jupiter, paste our contract address, and swap SOL for CATOID. Remember to double check the contract address!'
  },
  {
    question: 'Why Solana?',
    answer: 'Because light moves fast, and so should CATOID. Solana offers near-zero gas fees and rapid confirmations, allowing the RGB energy to disperse unimpeded.'
  },
  {
    question: 'What is the black cat face and the ring?',
    answer: 'The black cat is CATOID—sleek, stealthy, and representing the void. The rainbow ring is a diamond-studded, high-energy particle ring that shines in glorious RGB colors. It represents the spectrum of possibilities.'
  }
];
