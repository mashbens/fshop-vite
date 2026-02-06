
import React from 'react';

const categories = [
  {
    title: 'Snack & Biskuit',
    desc: 'Aneka camilan rumahan & biskuit kalengan',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Q0s_LQAeufRLknASg6XT4sw0BSiyrQb8xJYMUfBCy_3ibYVse8vkweFPg0ssWUNmZs9CMN5tSM8v0_76MXw6ruf1ZKD3NWDj-jV2ky2-4BUt0s_D8jE4Zddc9m6JJNAci22OxAa7fbLti8a_AG7jlAJurBFNjtNAWZtjl5FWA_UUshl_qHyw6-vrTF1x2wl1BPCaA5MrlPSTuI1OquBKGzeJDsAcnz17ksh2SkokVTsmn5fvsgcCQibiCozfWG8wsh8RdUEAEpZT'
  },
  {
    title: 'Bahan Baku',
    desc: 'Minyak goreng, tepung terigu & gula pasir',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ2xUKENAg4JTxMHhUD27daYIZCg55zfSTda4ZyIR23oPkSaam7n9zJz0q-ip0e_pM0fPr0GKY_kFUcsi1QE8yNFqHQ-2WPqsHZjegexuLOIohI9prkGFXnhKVFNNjy_XCzEHZhNh8gcIHC909xkIf4j3ApUun-A_HqZul8d3M8LNBRTkXBqMsK9yG7DYAJNBC-AQZ8feijQI-TStxKT1KrYBbdu-hnUhkt_EiQD5S2ziK0W6yYjsZrbe1hdzPQEHfll4yQgY967lY'
  },
  {
    title: 'Kebutuhan Toko',
    desc: 'Stok lengkap untuk warung & kelontong',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUcbrl5xILg9fFz-qV3g5xtvY7OIS1upB0Z0zZCs-N8OnCdjGpNPglZ3DJDgtXd96STc-DJvML8e7SO_4C0dpvr1qJLxDI8aUfwvqycF9ACWWSXYVkpMR_XxDQjzEGYOUs6M0Y-iYP6oDcNDdvCowpccV3pa-zqMbSBaJfHaUzPsMTmBkhvh3BZ1rQlgda4cd-Aewdl1OgC1i3g9ARIn1MvW-nF2e4ItbpaWHreBS1xVEH9n_LXa0lpfFVTLRdTAzia89JkMkX5Wfl'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-black tracking-tight">Kategori Produk</h2>
          <p className="text-dark-text/60 max-w-md font-medium">Temukan berbagai kebutuhan bahan baku dan snack berkualitas dengan harga grosir terbaik.</p>
        </div>
        <a href="#" className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-4 transition-all">
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
