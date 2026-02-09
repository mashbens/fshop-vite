
import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
      <div className="bg-dark-text rounded-[3.5rem] p-10 lg:p-12 text-center relative overflow-hidden shadow-2xl">
        {/* Decor Orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-5">
          <h2 className="text-3xl lg:text-5xl font-black text-white max-w-[900px] leading-tight">
            Siap Kembangkan Bisnis Anda Bersama Kami?
          </h2>
          <p className="text-white/70 font-medium text-xl max-w-[650px] leading-relaxed">
            Penuhi stok toko Anda dengan mudah. Khusus pengiriman wilayah Jabodetabek dengan sistem grosir.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <a 
              href="https://wa.me/6285781013830" 
              className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-xl shadow-green-500/20 flex items-center gap-3"
            >
              <span className="material-symbols-outlined">chat</span>
              Pesan via WhatsApp
            </a>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              Lihat Katalog PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
