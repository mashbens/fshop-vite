
import React from 'react';

// Reusable components defined outside the main component for performance
const ProductCard: React.FC<{
  image: string;
  category: string;
  title: string;
  price: string;
  unit: string;
  isLarge?: boolean;
}> = ({ image, category, title, price, unit, isLarge = false }) => (
  <div className="group flex flex-col gap-4">
    <div className={`relative ${isLarge ? 'aspect-[4/5] rounded-[3rem]' : 'aspect-[3/4] rounded-[2.5rem]'} overflow-hidden bg-white border border-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}>
      <img 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src={image} 
      />
      <div className="absolute inset-0 bg-dark-text/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
    </div>
    <div className={`${isLarge ? 'px-4' : 'px-2'}`}>
      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{category}</p>
      <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-dark-text mb-2`}>{title}</h3>
      <div className="flex items-center justify-between">
        <p className={`${isLarge ? 'text-xl' : 'text-lg'} font-extrabold text-secondary`}>
          {price} <span className="text-xs font-medium text-dark-text/40">/ {unit}</span>
        </p>
        {!isLarge && (
          <span className="material-symbols-outlined text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            arrow_outward
          </span>
        )}
      </div>
    </div>
  </div>
);

const Products: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-16">
        <div className="flex flex-col items-center text-center gap-8">
          <span className="bg-accent/30 text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
            Katalog Eksklusif
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-dark-text max-w-5xl">
            Pilihan Produk <span className="text-primary">Grosir Terbaik</span> Untuk Bisnis Anda
          </h1>
          <p className="text-lg md:text-xl text-dark-text/60 max-w-2xl leading-relaxed">
            Katalog kurasi kami menyajikan berbagai kebutuhan bahan baku dan camilan dengan standar kualitas tinggi untuk mitra distribusi Jabodetabek.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-24 w-full">
        {/* Snack Terlaris Section */}
        <section className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-primary/10 pb-8 gap-4">
            <div>
              <h2 className="text-4xl font-black text-dark-text tracking-tight">Snack Terlaris</h2>
              <p className="text-dark-text/50 mt-2 font-medium">Camilan favorit pelanggan dengan perputaran stok tercepat.</p>
            </div>
            <span className="text-xs font-black text-secondary uppercase tracking-[0.25em] bg-secondary/10 px-4 py-2 rounded-lg">
              4 PRODUK
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <ProductCard 
              category="Camilan Premium"
              title="Biskuit Aneka Rasa"
              price="Rp 450.000"
              unit="Karton"
              image="https://picsum.photos/seed/snack1/600/800"
            />
            <ProductCard 
              category="Homemade Series"
              title="Snack Stik Keju"
              price="Rp 325.000"
              unit="Karton"
              image="https://picsum.photos/seed/snack2/600/800"
            />
            <ProductCard 
              category="Traditional Snack"
              title="Kripik Tempe Sagu"
              price="Rp 280.000"
              unit="Karton"
              image="https://picsum.photos/seed/snack3/600/800"
            />
            <ProductCard 
              category="Sajian Lebaran"
              title="Kacang Bawang Super"
              price="Rp 510.000"
              unit="Karton"
              image="https://picsum.photos/seed/snack4/600/800"
            />
          </div>
        </section>

        {/* Kebutuhan Pokok Section */}
        <section className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-primary/10 pb-8 gap-4">
            <div>
              <h2 className="text-4xl font-black text-dark-text tracking-tight">Kebutuhan Pokok</h2>
              <p className="text-dark-text/50 mt-2 font-medium">Bahan baku dasar untuk suplai warung dan rumah makan.</p>
            </div>
            <span className="text-xs font-black text-secondary uppercase tracking-[0.25em] bg-secondary/10 px-4 py-2 rounded-lg">
              3 PRODUK
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProductCard 
              category="Minyak & Lemak"
              title="Minyak Goreng Kelapa"
              price="Rp 215.000"
              unit="Karton (12L)"
              image="https://picsum.photos/seed/pokok1/800/1000"
              isLarge
            />
            <ProductCard 
              category="Aneka Tepung"
              title="Tepung Terigu Protein"
              price="Rp 195.000"
              unit="Karton (10kg)"
              image="https://picsum.photos/seed/pokok2/800/1000"
              isLarge
            />
            <ProductCard 
              category="Gula Pasir"
              title="Gula Pasir Kristal"
              price="Rp 740.000"
              unit="Karung (50kg)"
              image="https://picsum.photos/seed/pokok3/800/1000"
              isLarge
            />
          </div>
        </section>
      </div>


      {/* Floating Action Button */}
      {/* <div className="fixed bottom-8 right-8 z-[100]">
        <a 
          href="https://wa.me/62818128088448" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white flex items-center gap-3 px-8 py-5 rounded-2xl font-black shadow-2xl shadow-green-500/40 hover:-translate-y-2 active:scale-95 transition-all duration-300 group"
        >
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">chat</span>
          <span className="hidden md:block">Hubungi Kami</span>
        </a>
    </div> */}
    </div>


  );
};

export default Products;
