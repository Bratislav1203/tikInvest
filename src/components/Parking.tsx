import { Car } from 'lucide-react';

export default function Parking() {
  return (
    <section id="parking" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Parking i Garaža
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bezbednost vašeg vozila je naš prioritet.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-surface p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Car size={120} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-primary mb-8 relative z-10">Kapaciteti objekta</h3>

              <div className="grid gap-4">
                {/* VIP Spot Card - Premium Design */}
                <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border border-amber-200 shadow-sm group hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-200/20 to-transparent rounded-bl-full -mr-4 -mt-4"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-amber-100/50 rounded-xl border border-amber-100">
                        <Car size={28} className="text-amber-600" />
                      </div>
                      <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-200 uppercase tracking-wide whitespace-nowrap">
                        4 mesta
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-slate-800 text-lg mb-3">VIP Garažna mesta</h4>

                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-1 rounded-md border border-amber-100 whitespace-nowrap">Zasebne jedinice</span>
                      <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-1 rounded-md border border-amber-100 whitespace-nowrap">Ozidano</span>
                      <span className="text-xs font-medium text-amber-800 bg-amber-50 px-2 py-1 rounded-md border border-amber-100 whitespace-nowrap">Rolo vrata</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Standard Spots Card */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-secondary/10 rounded-lg">
                        <div className="w-5 h-5 rounded-full border-2 border-secondary"></div>
                      </div>
                      <span className="bg-slate-50 text-slate-600 text-xs font-bold px-2 py-1 rounded-full border border-slate-100 whitespace-nowrap">
                        13 mesta
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-slate-700 text-base mb-1">Standardna garažna</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Unutra</p>
                  </div>

                  {/* Exterior Spots Card */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 bg-slate-100 rounded-lg">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-400"></div>
                      </div>
                      <span className="bg-slate-50 text-slate-600 text-xs font-bold px-2 py-1 rounded-full border border-slate-100 whitespace-nowrap">
                        11 mesta
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-slate-700 text-base mb-1">Spoljašnja parking</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Napolju</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Removed "Zagarantovano mesto" as per user request (21 spots for 28 apartments) */}
          </div>

          <div className="relative group perspective">
            <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src="stanovi/garaza.png"
                alt="Parking layout"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded-full">Suteren</span>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-2">Garažna etaža</h3>
                <p className="text-slate-300 text-sm opacity-90">Direktan pristup liftom od garaže do vašeg stana.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
