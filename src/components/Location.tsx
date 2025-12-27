import { MapPin, Wifi, ShoppingBag } from 'lucide-react';

export default function Location() {
  const advantages = [
    {
      icon: MapPin,
      title: 'Mirna zona',
      description: 'Porodično okruženje, bez gradske buke'
    },
    {
      icon: Wifi,
      title: 'Dobra povezanost',
      description: 'Brz i jednostavan pristup glavnim saobraćajnicama'
    },
    {
      icon: ShoppingBag,
      title: 'Blizina sadržaja',
      description: 'Prodavnice i osnovne usluge u neposrednoj blizini'
    }
  ];

  return (
      <section id="location" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Lokacija
          </h2>

          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Objekat je zamišljen kao mirna porodična zgrada, idealna za udoban
            svakodnevni život. Nalazi se na mirnoj lokaciji u Raški, u naselju
            Mislopolje, koje pruža dobar balans između privatnosti i dostupnosti
            svakodnevnih sadržaja.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Prednosti lokacije
              </h3>

              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="p-3 bg-emerald-100 rounded-lg">
                        <advantage.icon size={24} className="text-emerald-600" />
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">
                          {advantage.title}
                        </h4>
                        <p className="text-slate-600">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-[450px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2990.8938793056295!2d20.617013999999998!3d43.294844000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDE3JzQxLjQiTiAyMMKwMzcnMDEuMyJF!5e1!3m2!1ssr!2srs!4v1766874297417!5m2!1ssr!2srs"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokacija objekta – Mislopolje, Raška"
                />

                {/* suptilan overlay da se uklopi sa dizajnom */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
}
