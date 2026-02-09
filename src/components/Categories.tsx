
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Snack & Biskuit',
    desc: 'Aneka camilan rumahan & biskuit kalengan berkualitas tinggi.',
    img: '/assets/hero-image.webp',
    color: 'bg-primary/10'
  },
  {
    title: 'Bahan Baku',
    desc: 'Minyak goreng, tepung terigu & gula pasir stok selalu baru.',
    img: '/assets/hero-image2.webp',
    color: 'bg-secondary/10'
  },
  {
    title: 'Parabot',
    desc: 'Peralatan dapur & rumah tangga awet untuk kebutuhan UMKM.',
    img: '/assets/hero-image3.webp',
    color: 'bg-accent/10'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <span className="text-primary font-black text-xs uppercase tracking-[0.4em]">Katalog Kami</span>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-dark-text">Kategori Produk</h2>
          <p className="text-dark-text/60 max-w-md font-medium text-lg">Temukan berbagai kebutuhan bahan baku, parabot, dan snack berkualitas dengan harga grosir terbaik.</p>
        </motion.div>
        
        <motion.a 
          whileHover={{ x: 10 }}
          href="/produk" 
          className="group flex items-center gap-3 text-dark-text font-black text-lg"
        >
          Lihat Katalog Lengkap
          <div className="w-12 h-12 rounded-full bg-white border border-dark-text/5 flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            whileHover={{ y: -15 }}
            className="group relative overflow-hidden rounded-[3rem] aspect-[4/5] cursor-pointer shadow-xl shadow-dark-text/5"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              src={cat.img} 
              alt={cat.title} 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/95 via-dark-text/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <motion.div 
                initial={false}
                className="overflow-hidden"
              >
                <h3 className="text-white text-3xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-white/70 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                  {cat.desc}
                </p>
              </motion.div>
              
              <div className="mt-8 flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                <span>Eksplorasi Produk</span>
                <div className="w-8 h-[1px] bg-white/20" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
