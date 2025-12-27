import { Euro, Check, Building2, FileText, Landmark, Scale } from 'lucide-react';

export default function Pricing() {
  const features = [
    { icon: Building2, text: 'Kupovina direktno od investitora' },
    { icon: FileText, text: 'Uredna dokumentacija' },
    { icon: Landmark, text: 'Plaćanje isključivo preko računa' },
    { icon: Scale, text: 'Notarska obrada' }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Cene i uslovi kupovine</h2>
        <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto">
          Transparentni uslovi i jednostavan proces kupovine
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-12 mb-8 text-center shadow-2xl">
            <Euro size={48} className="mx-auto mb-4" />
            <div className="text-6xl font-bold mb-2">Od 1.250 €</div>
            <div className="text-2xl opacity-90">po m²</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-slate-800 p-6 rounded-lg">
                <div className="p-3 bg-emerald-500 rounded-lg">
                  <feature.icon size={24} />
                </div>
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Check size={24} className="text-emerald-400 flex-shrink-0 mt-1" />
              <p className="text-lg">
                <strong>Garaža uz veće stanove</strong> – dodatna pogodnost za vlasnike većih stanova
              </p>
            </div>
            <div className="border-t border-slate-700 pt-4 mt-4">
              <p className="text-sm text-slate-400 italic">
                * Prodaja nakon pribavljanja građevinske dozvole
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
