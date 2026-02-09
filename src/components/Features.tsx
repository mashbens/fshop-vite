
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const featureData = [
  {
    icon: 'payments',
    title: 'Harga Grosir Kompetitif',
    desc: 'Harga tangan pertama untuk maksimalkan profit usaha Anda secara signifikan.',
    color: 'from-orange-400 to-primary',
    bgLight: 'bg-primary/5'
  },
  {
    icon: 'inventory_2',
    title: 'Stok Selalu Ready',
    desc: 'Ketersediaan barang terjamin untuk kebutuhan toko rutin tanpa hambatan.',
    color: 'from-secondary to-green-600',
    bgLight: 'bg-secondary/5'
  },
  {
    icon: 'local_shipping',
    title: 'Pengiriman Cepat',
    desc: 'Layanan antar khusus wilayah Jabodetabek dengan armada internal kami.',
    color: 'from-primary to-accent',
    bgLight: 'bg-accent/5'
  },
  {
    icon: 'category',
    title: 'Produk Lengkap',
    desc: 'Dari sembako hingga snack rumahan dalam satu distributor terpadu.',
    color: 'from-dark-text to-gray-600',
    bgLight: 'bg-dark-text/5'
  }
];

const FeatureCard = ({ f, idx }: { f: typeof featureData[0], idx: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-full"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="h-full flex flex-col gap-8 p-10 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-shadow duration-500"
      >
        {/* Animated Icon Container */}
        <div 
          style={{ transform: "translateZ(30px)" }}
          className={`w-20 h-20 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-10`} />
          <span className={`material-symbols-outlined text-4xl bg-gradient-to-br ${f.color} bg-clip-text text-transparent font-black`}>
            {f.icon}
          </span>
          
          {/* Shine effect */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            className="absolute top-0 left-0 w-1/2 h-full bg-white/40 skew-x-12 blur-md"
          />
        </div>

        <div style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-2xl font-black mb-4 text-dark-text tracking-tight group-hover:text-primary transition-colors">{f.title}</h3>
          <p className="text-dark-text/60 text-base leading-relaxed font-medium">
            {f.desc}
          </p>
        </div>

        {/* Decorative elements inside card */}
        <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${f.color} opacity-40`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-20 overflow-hidden bg-transparent">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            x: [0, 50, -30, 0], 
            y: [0, 30, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 20, 0], 
            y: [0, 60, -20, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24 flex flex-col items-center gap-6"
        >
          <span className="bg-dark-text text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-dark-text text-center lg:leading-[1.2]">
            Kualitas Terbaik, <br /> <span className="text-primary italic">Harga Bersahabat.</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary/20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 perspective-2000">
          {featureData.map((f, idx) => (
            <FeatureCard key={idx} f={f} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
