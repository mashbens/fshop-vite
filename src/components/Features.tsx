
import React from 'react';

const featureData = [
  {
    icon: 'payments',
    title: 'Harga Grosir Kompetitif',
    desc: 'Harga tangan pertama untuk maksimalkan profit usaha Anda.',
    color: 'bg-accent/20 text-primary'
  },
  {
    icon: 'inventory_2',
    title: 'Stok Selalu Ready',
    desc: 'Ketersediaan barang terjamin untuk kebutuhan toko rutin.',
    color: 'bg-secondary/20 text-secondary'
  },
  {
    icon: 'local_shipping',
    title: 'Pengiriman Cepat (Jabodetabek)',
    desc: 'Layanan antar khusus wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi.',
    color: 'bg-primary/10 text-primary'
  },
  {
    icon: 'category',
    title: 'Produk Lengkap',
    desc: 'Dari sembako hingga snack rumahan dalam satu distributor.',
    color: 'bg-accent/30 text-primary'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 border-y border-primary/5 bg-white/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((f, idx) => (
            <div key={idx} className="flex flex-col gap-6 p-8 bg-white rounded-3xl shadow-sm border border-accent/10 transition-transform hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${f.color}`}>
                <span className="material-symbols-outlined text-3xl">{f.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-dark-text/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
