import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img
                src="logo.png"
                alt="Tik Invest"
                className="h-20 w-auto"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-400 mb-2">Savremeni stambeni objekat - Raška</p>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Tik Invest. Sva prava zadržana.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-500">
            Materijal je informativnog karaktera i ne predstavlja zvaničnu ponudu.
          </p>
        </div>
      </div>
    </footer>
  );
}
