import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShoppingBag } from 'lucide-react';
import HeroCarousel from './HeroCarousel';

const Hero: React.FC = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const images = [
    '/assets/hero-image.webp',
    '/assets/hero-image2.webp',
    '/assets/hero-image3.webp',
  ];

  return (
    <section className="relative overflow-hidden bg-cream min-h-[90vh] flex items-center">
      {/* background blur */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-15 items-center">

          {/* ================= LEFT / TEXT ================= */}
          <motion.div
            className="flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="bg-primary text-white px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em]">
                Agen Resmi
              </span>
              <span className="text-dark-text/40 font-bold text-[11px] uppercase tracking-widest">
                Sejak 2018
              </span>
            </motion.div>

            {/* title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-dark-text"
            >
              Distributor{' '}
              <span className="text-primary">
                Snack, Bahan Baku & Parabot
              </span>{' '}
              Terpercaya
            </motion.h1>

            {/* desc */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-2xl text-dark-text/60 max-w-[580px]"
            >
              Fitshop Grosir melayani kebutuhan stok harian untuk warung, UMKM,
              dan reseller dengan harga kompetitif di Jabodetabek.
            </motion.p>

            {/* info box */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 max-w-[500px] bg-white/40 backdrop-blur-xl p-3 rounded-[2rem] border border-white shadow-xl"
            >
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-primary/15 rounded-xl flex items-center justify-center text-primary">
                  <CheckCircle2 size={22} />
                </div>
                <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest">
                  Minimal Order
                </p>
                <p className="font-extrabold text-dark-text text-lg">
                  Sesuai Paket
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center text-secondary">
                  <ShoppingBag size={22} />
                </div>
                <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest">
                  Wilayah
                </p>
                <p className="font-extrabold text-dark-text text-lg">
                  Jabodetabek
                </p>
              </div>
            </motion.div>

            {/* CTA DESKTOP */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex gap-6"
            >
              <a
                href="https://wa.me/6285781013830"
                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 shadow-xl"
              >
                Pesan Sekarang
              </a>

              <a
                href="/produk"
                className="bg-white border-2 border-primary/20 px-10 py-5 rounded-2xl font-black text-lg text-primary flex items-center gap-2"
              >
                Lihat Katalog
                <ArrowRight size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT / IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* square mobile */}
            <div className="relative w-full aspect-square lg:aspect-[5/5] overflow-hidden rounded-[3.5rem]">
              <HeroCarousel images={images} autoPlayInterval={6000} />
            </div>

            {/* CTA MOBILE */}
            <div className="mt-8 flex flex-col gap-4 lg:hidden">
              <a
                href="https://wa.me/6285781013830"
                className="bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl"
              >
                Pesan Sekarang
              </a>

              <a
                href="/produk"
                className="bg-white border-2 border-primary/20 py-5 rounded-2xl font-black text-lg text-primary flex items-center justify-center gap-2"
              >
                Lihat Katalog →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
