
import React from 'react';
import HeroCarousel from './HeroCarousel';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-10 order-2 lg:order-1">
          <div className="flex flex-col gap-6 text-left">
            <span className="bg-accent/30 text-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              Distributor Jabodetabek
            </span>
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight">
              Distributor <span className="text-primary">Snack, Bahan Baku & Parabot Terpercaya</span> untuk Usaha Anda
            </h1>
            <p className="text-lg text-dark-text/70 max-w-[580px] leading-relaxed">
              FitSHOP Grosir adalah agen distribusi bahan baku makanan, Parabot, snack rumahan, dan berbagai kebutuhan toko kelontong. Kami melayani pembelian dalam jumlah grosir dengan harga kompetitif.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 max-w-[500px] border-l-4 border-accent pl-6">
            <div>
              <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest">Minimal Order</p>
              <p className="font-bold">Sesuai paket grosir</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest">Area Pengiriman</p>
              <p className="font-bold">Jabodetabek</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a 
              href="https://wa.me/6285781013830" 
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="material-symbols-outlined">chat</span>
              Pesan via WhatsApp
            </a>
            <a 
              href="/produk" 
              className="bg-white border-2 border-primary/10 px-8 py-4 rounded-2xl font-bold text-base text-primary hover:bg-accent/10 transition-all"
            >
              Jelajahi Produk
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <HeroCarousel 
            images={[
              '/assets/hero-image.png',
              '/assets/hero-image2.png',
              '/assets/hero-image3.png',
            ]}
            autoPlayInterval={5000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
