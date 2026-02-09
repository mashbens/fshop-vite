
import React from 'react';

const docImages = [
  {
    url: '/assets/loading.webp',
    title: 'Proses Muat Gudang'
  },
  {
    url: '/assets/pengiriman.webp',
    title: 'Pengiriman'
  },
  {
    url: '/assets/pengiriman3.webp',
    title: 'Distribusi ke Customer'
  },
  {
    url: '/assets/pengiriman4.webp',
    title: 'Distribusi ke Customer'
  },
  {
    url: '/assets/pengiriman5.webp',
    title: 'Pengiriman'
  },
  {
    url: '/assets/pengiriman6.webp',
    title: 'Proses Muat Gudang'
  },
];

const Documentation: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="flex flex-col items-center text-center gap-4 mb-14">
        <h2 className="text-4xl font-black tracking-tight">Dokumentasi Pengiriman Kami</h2>
        <p className="text-dark-text/60 max-w-2xl font-medium leading-relaxed">
          Kepercayaan Anda adalah prioritas kami dalam mengirimkan pesanan tepat waktu ke seluruh Jabodetabek.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {docImages.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-lg border-4 border-white ">
            <img className="w-full h-full object-cover w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={img.url} alt={img.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documentation;
