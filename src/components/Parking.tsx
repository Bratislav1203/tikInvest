import { Car, ParkingSquare, Check } from 'lucide-react';

export default function Parking() {
  return (
    <section id="parking" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Parking i garaža</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-12">
          <div>
            <div className="bg-slate-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Objekat raspolaže sa:</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Car size={32} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">12 garažnih mesta</h4>
                    <p className="text-slate-600">U suterenu objekta</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <ParkingSquare size={32} className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">12 spoljašnjih parking mesta</h4>
                    <p className="text-slate-600">U dvorištu objekta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded">
              <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                <Check size={24} />
                <span>Jedno parking mesto po stanu</span>
              </div>
              <p className="text-emerald-700 text-sm">
                Za svaki stan predviđeno je jedno parking mesto
              </p>
            </div>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/public/stanovi/parking.jpeg"
                alt="Parking layout"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm mb-2 opacity-90">Osnova suterena</p>
                <p className="text-xl font-bold">Garaže i parking mesta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
