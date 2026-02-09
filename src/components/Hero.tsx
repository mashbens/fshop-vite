
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import HeroCarousel from './HeroCarousel';

const Hero: React.FC = () => {
  // Animasi container untuk mendistribusikan stagger ke anak-anaknya
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  // Animasi untuk setiap elemen individu
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const images = [
    '/assets/hero-image.webp',
    '/assets/hero-image2.webp',
    '/assets/hero-image3.webp',
  ];

  return (
    <section className="relative overflow-hidden bg-cream min-h-[90vh] flex items-center">
      {/* Decorative Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-28 w-full ">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="flex flex-col gap-10 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-8 text-left">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="bg-primary text-white px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] shadow-lg shadow-primary/20">
                  Agen Resmi
                </span>
                <span className="text-dark-text/40 font-bold text-[11px] uppercase tracking-widest">
                  Sejak 2018
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-black leading-tight lg:leading-[1.2] tracking-tight text-dark-text"
              >
                Distributor <span className="text-primary">Snack, Bahan Baku & Parabot</span> Terpercaya
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl text-dark-text/60 max-w-[580px] leading-relaxed font-medium"
              >
                Fitshop Grosir melayani kebutuhan stok harian untuk warung, UMKM, dan reseller dengan harga kompetitif di Jabodetabek.
              </motion.p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 max-w-[500px] bg-white/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-xl shadow-dark-text/5"
            >
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center text-primary">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest mt-2">Minimal Order</p>
                <p className="font-extrabold text-dark-text text-lg leading-tight">Sesuai Paket</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary">
                  <ShoppingBag size={24} />
                </div>
                <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest mt-2">Wilayah</p>
                <p className="font-extrabold text-dark-text text-lg leading-tight">Jabodetabek</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              <motion.a 
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/6285781013830" 
                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-green-500/40 flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="material-symbols-outlined relative z-10 text-3xl">chat</span>
                <span className="relative z-10 ">Pesan Sekarang</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -8, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.98 }}
                href="/produk" 
                className="bg-white/80 backdrop-blur-sm border-2 border-primary/10 px-10 py-5 rounded-2xl font-black text-lg text-primary shadow-lg shadow-primary/5 transition-all flex items-center gap-3 group"
              >
                Lihat Katalog
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            {/* Pulsing glow behind carousel */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl animate-pulse" />
            <HeroCarousel 
              images={images}
              autoPlayInterval={6000}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
