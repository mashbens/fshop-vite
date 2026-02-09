
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import CTABanner from '../components/CTABanner';
import Documentation from '../components/Documentation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-dark-text selection:bg-primary/20">

      <main>
        <Hero />
        <Features />
        <CTABanner />
        <Categories />
        <Documentation />
      </main>
    </div>
  );
};

export default Home;
