
import React from 'react';
import { 
  Eye, 
  Flag, 
  CheckCircle2, 
  Tag, 
  ClipboardCheck, 
  Truck, 
  Package, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';

const TentangKami: React.FC = () => {
  return (
    <div className="w-full">
      {/* --- Section 1: Sejarah & Dedikasi --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-primary text-xs font-bold uppercase tracking-wider">
              Sejarah & Dedikasi
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-dark leading-tight">
              Tentang <span className="text-primary font-black">Fitshop <br className="hidden lg:block"/> Grosir</span>
            </h1>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Berawal dari visi untuk mempermudah akses stok bagi UMKM dan toko kelontong, 
                FSHOP Grosir telah berkembang menjadi agen distribusi terpercaya di wilayah Jabodetabek. 
                Kami mengkhususkan diri dalam penyediaan bahan baku makanan, minyak goreng, tepung terigu, parabot,
                hingga aneka snack rumahan berkualitas tinggi.
              </p>
              <p>
                Dengan komitmen hanya melayani pembelian grosir, kami memastikan setiap mitra mendapatkan 
                harga tangan pertama yang kompetitif demi mendukung pertumbuhan bisnis lokal di Jakarta, 
                Bogor, Depok, Tangerang, dan Bekasi.
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/fshop/800/600" 
                alt="Tentang FSHOP" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-2xl shadow-xl flex flex-col">
              <span className="text-4xl font-bold">5+</span>
              <span className="text-xs font-medium tracking-widest uppercase opacity-80">Tahun Pengalaman</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Visi & Misi --- */}
      <section className="bg-cream/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Visi */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
              <div className="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Visi Kami</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Menjadi mitra utama dan distributor grosir nomor satu di Jabodetabek yang dikenal karena integritas, 
                kualitas produk, dan kontribusi nyata dalam memberdayakan pengusaha kecil dan menengah di industri retail pangan.
              </p>
            </div>
            
            {/* Misi */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                <Flag size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Misi Kami</h3>
              <ul className="space-y-4">
                {[
                  "Menyediakan produk berkualitas dengan rantai pasok yang efisien bagi mitra bisnis.",
                  "Memberikan layanan pengiriman yang cepat dan andal ke seluruh area Jabodetabek.",
                  "Membangun hubungan jangka panjang yang saling menguntungkan dengan para pemilik toko dan warung."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="text-secondary shrink-0" size={24} />
                    <span className="text-gray-600 leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Kenapa Memilih Kami? --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-dark mb-4">Kenapa Memilih Kami?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            Keunggulan layanan yang membuat FSHOP Grosir berbeda dari distributor lainnya.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Tag size={28} className="text-primary" />}
              title="Harga Kompetitif"
              desc="Harga grosir tangan pertama untuk margin keuntungan usaha yang maksimal."
            />
            <FeatureCard 
              icon={<ClipboardCheck size={28} className="text-secondary" />}
              title="Stok Ready"
              desc="Ketersediaan barang yang konsisten untuk menjaga kelancaran operasional toko Anda."
            />
            <FeatureCard 
              icon={<Truck size={28} className="text-primary" />}
              title="Pengiriman Cepat"
              desc="Armada khusus yang siap mengirimkan pesanan ke wilayah Jabodetabek tepat waktu."
            />
            <FeatureCard 
              icon={<Package size={28} className="text-secondary" />}
              title="Produk Lengkap"
              desc="Mulai dari sembako hingga snack kekinian, semua tersedia dalam satu atap."
            />
          </div>
        </div>
      </section>

      {/* --- Section 4: Full-width Warehouse Image --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="w-full h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-lg border-8 border-white">
          <img 
            src="https://picsum.photos/seed/warehouse/1200/600" 
            alt="FitSHOP Warehouse" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- Section 5: Call to Action (CTA) --- */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#3D2B1F] rounded-[3.5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight max-w-4xl">
              Jadilah Mitra Kami Sekarang
            </h2>
            <p className="text-white/70 text-lg lg:text-xl max-w-2xl mb-12 font-medium">
              Butuh informasi lebih lanjut mengenai kerjasama grosir? Tim kami 
              siap melayani Anda dengan sepenuh hati.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://wa.me/6285781013830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] transition-all px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20"
              >
                <MessageCircle size={24} fill="white" />
                Hubungi via WhatsApp
              </a>
              <button className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 transition-all px-10 py-5 rounded-2xl font-bold text-lg">
                Lihat Produk Kami
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="bg-cream/40 p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-dark mb-3">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
};

export default TentangKami;
