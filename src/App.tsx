
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import CTABanner from './components/CTABanner';
import Documentation from './components/Documentation';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-dark-text selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <CTABanner />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};

export default App;
