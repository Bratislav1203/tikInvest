import { Car, ParkingSquare, Check, ShieldCheck } from 'lucide-react';

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
            Bezbednost vašeg vozila je naš prioritet. Obezbeđen parking prostor za svaki stan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-surface p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Car size={120} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-primary mb-8 relative z-10">Kapaciteti objekta</h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Car size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">12 Garažnih mesta</h4>
                    <p className="text-slate-500 text-sm">Smeštena u suterenu objekta, zaštićena od vremenskih uslova.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <ParkingSquare size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">12 Spoljašnjih mesta</h4>
                    <p className="text-slate-500 text-sm">Privatni parking u dvorištu objekta.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-full flex-shrink-0">
                <ShieldCheck size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-1">Zagarantovano mesto</h4>
                <p className="text-slate-600 text-sm">
                  Uz svaki stan dolazi <span className="font-semibold text-accent-dark">jedno parking mesto</span>. Bez brige o parkiranju nakon napornog dana.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group perspective">
            <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src="stanovi/parking.jpeg"
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
