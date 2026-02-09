
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-2 rounded-xl">
                <span className="material-symbols-outlined text-white text-xl">storefront</span>
              </div>
              <h2 className="text-dark-text text-2xl font-extrabold tracking-tight">Fitshop Grosir</h2>
            </div>
            <p className="text-dark-text/60 mb-10 max-w-sm leading-relaxed">
              Distributor terpercaya untuk bahan baku makanan dan snack, bahan baku & parabot di Jabodetabek. Melayani kebutuhan grosir UMKM dan toko kelontong dengan harga terbaik.
            </p>
            <div className="flex flex-col gap-4 text-sm font-bold text-dark-text/70">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <a 
                  href="https://maps.app.goo.gl/QQKA1K1xvq8FNAZVA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Jl. Raya Kalisuren, Kalisuren, Kec. Tajur Halang, Kabupaten Bogor, Jawa Barat 16320
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                Lokasi Pengiriman : Jabodetabek
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">shopping_bag</span>
                Minimal Order: Sesuai Paket Grosir
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8">Kategori</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium text-dark-text/60">
              {['Bahan Baku', 'Parabot', 'Minyak Goreng', 'Snack Rumahan', 'Biskuit Kaleng'].map((i) => (
                <li key={i}><a href="#" className="hover:text-primary transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8">Informasi</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium text-dark-text/60">
              {['Tentang Kami', 'Syarat & Ketentuan', 'Cara Order', 'FAQ'].map((i) => (
                <li key={i}><a href="#" className="hover:text-primary transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8">Kontak</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium text-dark-text/60">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">call</span> +62 857 8101 3830</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">mail</span> fitshop@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-dark-text/40 font-bold uppercase tracking-[0.2em]">
            © 2024 FitSHOP Grosir. Seluruh Hak Cipta Dilindungi.
          </p>
          {/* <div className="flex items-center gap-8">
            <img className="h-5 opacity-40 grayscale hover:grayscale-0 transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7VDqBLzFy5d5k-n9gUdpSTz74IGshf7vqqsT9u_VFMVqOmANdJt2C36ymW9Lo6zglHFZBGwhG27MUX8YSqpjB7Wb7f4QZsXbkH4WQtY1ecXn1VBYL71W0AYEsPMiQ_gJCo7ctYDOzNhlmS1o0yC8DkOjutkGgaGPY0sE9D6fH0BOwhwTG2_0D6IlHH_A1IXw1TOjLKBhibc5M84WP6IlIbeHChd8Bob-84ElGiptmOM_idRN5UFbDGXPbYB8vuJZzGL4pvf5m5GDD" alt="Visa" />
            <img className="h-5 opacity-40 grayscale hover:grayscale-0 transition-all cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTl38LNwHVrXMBH3DfrfQ2hjEiyCIsbHCKKe1OaSuSIA6u2Cd-Y_lqpMA5jU86xpstcSK0hTg2huYs-M2zSunUdPQbNeedk-V5NZa_xLbAlljezNFQkzHImQ3H_u70G_c5SzTWPK21HgafdUV72IXm_WG_yqYy77tlcbPF32syIRQNEVVzxGIJTa8spqrCDnKxYuL6XrgKFnKAR1vk8uPmbc4jBWsKuPJP0-a7uMDUsmmZenJkdf0IX7AQ5lufnxVZ5d8UgR2co_a" alt="Mastercard" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
