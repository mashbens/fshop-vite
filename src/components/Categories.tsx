
import React from 'react';

const categories = [
  {
    title: 'Snack & Biskuit',
    desc: 'Aneka camilan rumahan & biskuit kalengan',
    img: 'src/assets/hero-image.png'
  },
  {
    title: 'Bahan Baku',
    desc: 'Minyak goreng, tepung terigu & gula pasir',
    img: 'src/assets/hero-image2.png'
  },
  {
    title: 'Parabot',
    desc: 'Peralatan dapur & peralatan rumah tangga',
    img: 'src/assets/hero-image3.png'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-black tracking-tight">Kategori Produk</h2>
          <p className="text-dark-text/60 max-w-md font-medium">Temukan berbagai kebutuhan bahan baku, parabot, dan snack berkualitas dengan harga grosir terbaik.</p>
        </div>
        <a href="/produk" className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-4 transition-all">
          Lihat Katalog Lengkap
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] cursor-pointer shadow-lg">
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src={cat.img} 
              alt={cat.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/90 via-dark-text/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-white text-3xl font-bold">{cat.title}</h3>
              <p className="text-white/80 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {cat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
