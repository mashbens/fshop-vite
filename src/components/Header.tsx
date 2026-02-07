
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/produk' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-primary p-2 rounded-xl flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-2xl">storefront</span>
          </div>
          <h2 className="text-dark-text text-xl lg:text-2xl font-extrabold tracking-tight">Khaira Dan Ali Store</h2>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`text-sm font-bold transition-colors ${
                location.pathname === item.path ? 'text-primary' : 'text-dark-text/80 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a 
          href="https://wa.me/62818128088448" 
          target="_blank"
          className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-secondary/20 active:scale-95 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          <span className="hidden sm:inline">Hubungi Kami</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
