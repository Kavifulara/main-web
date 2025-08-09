import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative">
        {/* Main Logo Text */}
        <span className="text-2xl font-bold text-gray-800 tracking-wider group-hover:text-gray-600 transition-colors">
          BAKFiG
        </span>
        
        {/* Decorative underline */}
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        
        {/* Tagline */}
        <div className="bottom-5 left-0 text-xs text-gray-500 font-medium tracking-narrow">
          ELEGANCE-STYLE-FASHION
        </div>
      </div>
    </Link>
  );
} 