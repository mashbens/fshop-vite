
import React from 'react';

const docImages = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATH2C8aFLBlmXG4ohGlj5yTjnOA9h441s5vsLRphhgqhPKjY33N_acZQVGRYH28ZRsuTg2aB9A9IrRl-KsXxe7NG2ki86OqXB-8xwnE2SHIMzDshbuA61Zv3KH21cOc0bIrBrjUGjzpm8kng9kqWshUexBK_5WP1JboWA2xb0e35NJ4GUgMvkQjTEO4oA18MCeG7gcBqNI-YpzFuGlyEcEHOmDiRHguQ3qka16zFrw6Y5ymiJTbl1FvuIQbjtgAJC4fqeI6VyxKyL5',
    title: 'Proses Muat Gudang'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtb7iKDdwIt5jrlM2dodoNIJLuliMzffP85mC-a3jFCATQzaldb1sTTCNAcE5lnvQGw7eqI108y2--5alodlCdgy4p_F34mtT22H4srZYxxQYZvIxk6rhXotmjxHjIZylPSGWMqKJmsBd5YkU6tyGigqBYlkcWmb5LX1xn-aKpCDgGxJfuSAtiVItRv2pk1SausZ1YWixJTvZzR9L3Ucuc7W38kRNLw7E7FtTtjBUgwPzshMcn2FmUZ-QTk8HiGAGvcBdytlrlUIfj',
    title: 'Armada Pengiriman Siap Jalan'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuaU7t3g5PuV2rgqN3KBvULZfk0uEjHF6o2UJEhqLZhCJqS_Gxa1CY3YdSwEov3yVXl7SjSnXEP0J_VgM-B8NDZ8TATudWQZfsO-tKzZG16jctlpXGtqAQindH5ZEj2oFhvza8IeQRSgiWNN0t-HI17ZOuHn-EmAxq5DjaD8Jjj6eYn7PzrkhDHu3jtHgm3xWKQDF6uOuzE2SEO9hXyJkytRYPmuRyJNHLV81dxuTSF9S5hKYiM-MJu2dsF9S_Yvenhp1ELUVlTyiH',
    title: 'Distribusi ke Customer'
  }
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {docImages.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-lg border-4 border-white">
            <img className="w-full h-full object-cover" src={img.url} alt={img.title} />
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
