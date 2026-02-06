
import React from 'react';

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
              Distributor Bahan Baku & <span className="text-primary">Snack Terpercaya</span> untuk Usaha Anda
            </h1>
            <p className="text-lg text-dark-text/70 max-w-[580px] leading-relaxed">
              FitSHOP Snack & Grosir adalah agen distribusi bahan baku makanan, minyak goreng, tepung terigu, snack rumahan, dan berbagai kebutuhan toko kelontong. Kami melayani pembelian dalam jumlah grosir dengan harga kompetitif.
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
              href="https://wa.me/62818128088448" 
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="material-symbols-outlined">chat</span>
              Pesan via WhatsApp
            </a>
            <button className="bg-white border-2 border-primary/10 px-8 py-4 rounded-2xl font-bold text-base text-primary hover:bg-accent/10 transition-all">
              Daftar Harga
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative w-full aspect-square lg:aspect-[4/4.5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqKShEPP77u5Zwq6HuBzwij4RGAEC9cxYU7l6_2NKsMj6kFBy2D1ZzqpWUARxOdH5RCUzAEVfSEjaf9ugvHOVMOCE0i7SPIUoXaz7uennvo-TdwZ8UL9omO6jJs3tWUrocDeGwQa20flIFJ2obkjDYq-xw_ELrzOMHMT8ffkLexPiQoyZEklEsXssovMQQ36XZRFcFaYzuJk2k8F_UJmIOrHH7sY6gYD41KZwkzqpAqwhHNhv1A50iLkKq19V3blHjw7G1gyHXBv7L" 
              alt="Produk grosir bahan baku" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl flex items-center justify-between">
              <div>
                <p className="text-dark-text/60 text-[10px] font-bold uppercase tracking-widest">Stok Ready</p>
                <h3 className="text-dark-text text-lg font-bold">Bahan Baku & Snack</h3>
              </div>
              <span className="bg-secondary text-white px-4 py-2 rounded-lg font-bold text-xs shadow-sm">Grosir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
