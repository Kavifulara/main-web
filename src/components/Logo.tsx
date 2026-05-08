import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative">
        {/* Main Logo Text */}
        <span className="text-2xl font-bold tracking-wider 
                        bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                        bg-clip-text text-transparent animate-shine
                        drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
          BaKFiG
        </span>
        
        {/* Decorative underline */}
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        
        {/* Tagline */}
        <div className="bottom-5 left-0 text-xs text-gray-300 font-medium tracking-narrow">
          ELEGANCE-STYLE-FASHION
        </div>
      </div>
    </Link>
  );
} 