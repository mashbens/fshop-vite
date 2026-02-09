
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

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
          <h2 className="text-dark-text text-xl lg:text-2xl font-extrabold tracking-tight">Fitshop Grosir</h2>
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

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/6285781013830"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex bg-secondary text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-secondary/20 active:scale-95 items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span className="hidden sm:inline">Hubungi Kami</span>
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-primary/10 active:scale-95"
          >
            <svg className="w-6 h-6 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div className={`md:hidden transition-max-height duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`py-3 px-2 rounded-lg font-bold transition-colors ${
                location.pathname === item.path ? 'text-primary bg-primary/5' : 'text-dark-text/90 hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="https://wa.me/6285781013830"
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-secondary text-white px-4 py-2 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
