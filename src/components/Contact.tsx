import { Phone, Mail, MapPin, Send } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Hvala na interesovanju! Kontaktiraćemo vas uskoro.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Kontaktirajte Nas
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
              Stojimo vam na raspolaganju za sva pitanja. Zakažite sastanak ili zatražite više informacija.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <RevealOnScroll direction="right">
              <h3 className="font-heading text-2xl font-bold text-primary mb-8">Pošaljite upit</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-slate-700 text-sm font-bold mb-2 uppercase tracking-wider">Ime i prezime</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    placeholder="Vaše ime"
                  />
                </div>

                <div className="group">
                  <label className="block text-slate-700 text-sm font-bold mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    placeholder="vas@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-slate-700 text-sm font-bold mb-2 uppercase tracking-wider">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    placeholder="+381 60 123 4567"
                  />
                </div>

                <div className="group">
                  <label className="block text-slate-700 text-sm font-bold mb-2 uppercase tracking-wider">Poruka</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none"
                    placeholder="Vaša poruka..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send size={20} />
                  Pošaljite poruku
                </button>
              </form>
            </RevealOnScroll>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <RevealOnScroll direction="left" delay={200}>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Telefon', value: '+381 63 802 5795', link: 'tel:+381638025795' },
                  { icon: Mail, title: 'Email', value: 'tikinvest@gmail.com', link: 'mailto:tikinvest@gmail.com' }, // Updated email placeholder
                  { icon: MapPin, title: 'Lokacija', value: 'Raška, Srbija', link: '#location' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                    <div className="p-4 bg-surface rounded-xl group-hover:bg-secondary/10 transition-colors">
                      <item.icon size={28} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-slate-400 text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                      <a href={item.link} className="text-lg md:text-xl font-bold text-primary hover:text-secondary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/10 border border-secondary/20 p-8 rounded-2xl mt-4">
                <p className="text-sm text-primary/80 leading-relaxed text-center">
                  <strong>Pravna napomena:</strong> Svi prikazi i informacije na sajtu su informativnog karaktera. Investitor zadržava pravo izmene detalja u cilju unapređenja projekta.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
