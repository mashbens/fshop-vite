
import React from 'react';
import { Phone, Mail, Truck, MessageCircle } from 'lucide-react';

const ContactItem: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  subtext: string;
  bgColor: string;
  iconColor: string;
}> = ({ icon, label, value, subtext, bgColor, iconColor }) => (
  <div className="flex items-start gap-6 group">
    <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center ${iconColor} flex-shrink-0 transition-transform group-hover:scale-110 duration-300`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-dark-text/40 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-xl font-extrabold text-dark-text">{value}</p>
      <p className="text-sm text-dark-text/60 mt-0.5">{subtext}</p>
    </div>
  </div>
);

const FAQCard: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
    <h4 className="text-lg font-bold text-dark-text mb-3">{question}</h4>
    <p className="text-dark-text/60 leading-relaxed text-sm">{answer}</p>
  </div>
);

const Kontak: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-16 text-center">
        <span className="bg-accent/30 text-primary px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-6">
          Hubungi Kami
        </span>
        <h1 className="text-4xl lg:text-6xl font-black leading-tight text-dark-text max-w-3xl mx-auto">
          Kami Siap Membantu <br /> <span className="text-primary">Kebutuhan Grosir</span> Anda
        </h1>
        <p className="text-lg text-dark-text/70 mt-6 max-w-2xl mx-auto leading-relaxed">
          Punya pertanyaan mengenai stok barang atau area pengiriman? Tim kami siap melayani pesanan grosir untuk wilayah Jabodetabek.
        </p>
      </section>

      {/* Main Info Cards */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Left Column: Contact Info */}
          <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-sm border border-primary/5">
            <h3 className="text-2xl font-black mb-10 text-dark-text tracking-tight">Informasi Kontak</h3>
            <div className="space-y-10">
              <ContactItem 
                icon={<Phone size={28} />}
                label="WhatsApp"
                value="+62 857 8101 3830"
                subtext="Chat aktif: 08.00 - 17.00 WIB"
                bgColor="bg-accent/20"
                iconColor="text-primary"
              />
              <ContactItem 
                icon={<Mail size={28} />}
                label="Email Resmi"
                value="info@fshopgrosir.com"
                subtext="Kami akan membalas dalam 1x24 jam"
                bgColor="bg-secondary/20"
                iconColor="text-secondary"
              />
              <ContactItem 
                icon={<Truck size={28} />}
                label="Area Pengiriman"
                value="Jabodetabek"
                subtext="Jakarta, Bogor, Depok, Tangerang, Bekasi"
                bgColor="bg-primary/10"
                iconColor="text-primary"
              />
            </div>
          </div>

          {/* Right Column: WhatsApp CTA */}
          <div className="bg-secondary/10 rounded-3xl p-10 lg:p-14 border border-secondary/20 flex flex-col items-center text-center justify-center">
            <div className="bg-white p-5 rounded-3xl shadow-sm mb-10 group transition-transform hover:scale-105 duration-300">
              <img 
                alt="QR Code Placeholder" 
                className="w-48 h-48 object-cover rounded-xl grayscale opacity-30" 
                src="https://picsum.photos/400/400?grayscale"
              />
            </div>
            <h3 className="text-3xl font-black text-dark-text mb-4">Pesan Langsung via WhatsApp</h3>
            <p className="text-dark-text/60 mb-10 max-w-xs leading-relaxed">
              Cara tercepat untuk cek stok dan melakukan pemesanan grosir harian.
            </p>
            <a 
              href="https://wa.me/6285781013830" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-6 rounded-3xl font-black text-lg shadow-xl shadow-green-500/30 transition-all hover:scale-[1.03] hover:shadow-green-500/40 active:scale-95 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Chat Admin Sekarang
            </a>
            <div className="mt-8 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">
                Admin sedang Online
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-dark-text mb-4">Pertanyaan Umum (FAQ)</h2>
          <p className="text-dark-text/60 max-w-2xl mx-auto font-medium">Beberapa hal yang sering ditanyakan oleh pelanggan kami.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FAQCard 
            question="Berapa minimal order?"
            answer="Minimal order mengikuti paket grosir yang telah kami tentukan. Untuk bahan baku tertentu seperti minyak goreng, tersedia dalam satuan karton atau jerigen besar."
          />
          <FAQCard 
            question="Bisa kirim ke mana saja?"
            answer="Fokus utama layanan kami adalah wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) menggunakan armada pengiriman sendiri."
          />
          <FAQCard 
            question="Bagaimana sistem pembayarannya?"
            answer="Pembayaran dapat dilakukan melalui transfer bank atau sesuai dengan kesepakatan kerjasama untuk pelanggan rutin kami."
          />
          <FAQCard 
            question="Apakah bisa beli eceran?"
            answer="Mohon maaf, FSHOP & Grosir hanya melayani pembelian sistem grosir untuk distributor, agen, warung, dan UMKM."
          />
        </div>
      </section>

      {/* Decorative spacer for bottom */}
      <div className="h-20"></div>
    </div>
  );
};

export default Kontak;
