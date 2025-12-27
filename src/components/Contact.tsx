import { Phone, Mail, MapPin, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Kontakt</h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Zainteresovani ste? Kontaktirajte nas za više informacija
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Pošaljite upit</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Ime i prezime</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Vaše ime"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="vas@email.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+381 60 123 4567"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">Poruka</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Vaša poruka..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Pošaljite poruku
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Kontakt informacije</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Phone size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Telefon</h4>
                  <p className="text-slate-600">+381 638025795</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Mail size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">OVDEIDEEMAIL@GMAIL.COM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <MapPin size={24} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Lokacija</h4>
                  <p className="text-slate-600">Raška, Srbija</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded">
              <p className="text-sm text-emerald-800">
                <strong>Pravna napomena:</strong> Materijal je informativnog karaktera i ne predstavlja zvaničnu ponudu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
