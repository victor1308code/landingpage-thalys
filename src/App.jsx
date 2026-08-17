import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Artigos from './components/Artigos';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Artigos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
