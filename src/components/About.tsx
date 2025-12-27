import { Building2, ArrowUpDown, Car, Package } from 'lucide-react';

export default function About() {
  const features = [
    { icon: Building2, label: '24 stana', description: 'Različite strukture' },
    { icon: ArrowUpDown, label: 'Lift', description: 'Na svim spratovima' },
    { icon: Car, label: 'Garaža', description: '12 garažnih mesta' },
    { icon: Package, label: 'Podrumi', description: 'Uz svaki stan' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">O projektu</h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Novi stambeni objekat u Raški, u investiciji kompanije Tik Invest, projektovan je
              prema savremenim standardima stanovanja, sa posebnim akcentom na funkcionalnost,
              kvalitet gradnje i dugoročnu vrednost.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Objekat se sastoji od ukupno <strong>24 stana</strong> različitih struktura, sa liftom
              koji povezuje sve etaže, garažnim mestima u suterenu, kao i parkingom na otvorenom.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <feature.icon size={40} className="mx-auto mb-3 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 mb-1">{feature.label}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg opacity-20 blur-xl"></div>
            <img
              src="oProjektu.jpeg"
              alt="Building perspective"
              className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
