
import React from 'react';
import { motion } from 'framer-motion';

const CTABanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      {/* Background Decor - Sangat halus untuk menyatu dengan bg-cream */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square bg-gradient-to-tr from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Maskot Kiri - Pekerja Masker */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block w-[280px] xl:w-[320px] relative"
        >
          <motion.img 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="/assets/2.png" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/2.webp";
            }}
            alt="Mascot Masked" 
            className="w-full drop-shadow-[0_35px_35px_rgba(226,114,91,0.2)] rounded-3xl"
          />
        </motion.div>

        {/* Konten Tengah - Sangat Minimalis */}
        <div className="flex-1 flex flex-col items-center text-center gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-1xl lg:text-5xl font-black text-dark-text leading-tight tracking-tighter">
              Siap Kembangkan <br />
              <span className="text-primary italic">Bisnis Anda?</span>
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full opacity-30" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/6285781013830" 
              className="bg-[#25D366] text-white px-12 py-6 rounded-2xl font-black text-xl shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] flex items-center gap-4 group"
            >
              <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">chat</span>
              Pesan Sekarang
            </motion.a>
            
            <motion.button 
              whileHover={{ y: -5, backgroundColor: "white" }}
              className="bg-white/50 backdrop-blur-sm border-2 border-dark-text/5 text-dark-text px-12 py-6 rounded-2xl font-black text-xl shadow-lg transition-all"
            >
              Katalog
            </motion.button>
          </motion.div>
        </div>

        {/* Maskot Kanan - Pekerja Tersenyum */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block w-[280px] xl:w-[320px] relative"
        >
          <motion.img 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            src="/assets/1.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/1.png";
            }}
            alt="Mascot Smiling" 
            className="w-full drop-shadow-[0_35px_35px_rgba(143,151,121,0.2)] rounded-3xl"
          />
        </motion.div>

        {/* Mobile View: Tampilkan satu maskot saja di atas agar tidak sesak */}
        <div className="lg:hidden w-full flex justify-center mb-6">
           <motion.img 
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             src="/assets/1.png" 
             onError={(e) => {
                (e.target as HTMLImageElement).src = "/assets/1.png";
             }}
             className="w-48 rounded-2xl shadow-2xl rotate-3" 
             alt="Mascot Mobile" 
           />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
