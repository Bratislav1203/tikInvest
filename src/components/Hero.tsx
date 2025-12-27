import { Building2, ArrowUpDown, Car, Package } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <img
          src="hero.jpeg"
          alt="Building"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8">
          <img
            src="logo.png"
            alt="Tik Invest"
            className="logo h-40 w-auto mx-auto mb-6 drop-shadow-lg"
          />
        </div>

        <h2 className="title-font text-3xl md:text-5xl font-light mb-4">
          SAVREMENI STAMBENI OBJEKAT U RAŠKI
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-lg">
          <div className="flex items-center gap-2">
            <Building2 size={24} className="text-emerald-400" />
            <span>P+3</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowUpDown size={24} className="text-emerald-400" />
            <span>Lift</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={24} className="text-emerald-400" />
            <span>Garaža</span>
          </div>
          <div className="flex items-center gap-2">
            <Package size={24} className="text-emerald-400" />
            <span>Parking</span>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Zakažite razgledanje
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
