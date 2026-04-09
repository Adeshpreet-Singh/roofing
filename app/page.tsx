'use client';
import { useState } from 'react';

export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <div className="bg-red-600 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">Free Roof Inspection — Call (555) 890-1237</div>
      <nav className="fixed top-8 left-0 right-0 z-50 bg-[#0c0a09]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-black uppercase text-red-500">Peak Roofing</h1><p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">Licensed & Insured — Denver</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-stone-400 hover:text-red-500">Services</button>
            <button onClick={() => scrollTo('contact')} className="bg-red-600 text-white px-5 py-2.5 text-sm font-bold rounded-full hover:bg-red-500">Free Inspection</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-16">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
            <p className="text-red-500 text-sm tracking-[0.3em] uppercase mb-4">Licensed & Insured — Est. 2007</p>
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] mb-6">Covered<br />for <span className="text-red-500">life.</span></h2>
            <p className="text-xl text-stone-400 max-w-xl mx-auto mb-10">Expert roofing installation, repair, and inspection. Industry-leading warranties backed by certified crews.</p>
            <div className="flex justify-center gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-red-600 text-white px-8 py-4 text-lg font-bold rounded-full hover:bg-red-500">Free Inspection</button>
              <button onClick={() => scrollTo('services')} className="border-2 border-stone-600 text-stone-300 px-8 py-4 text-lg rounded-full hover:border-red-500">Our Work</button>
            </div>
          </div>
        </section>

        <section className="py-8 border-y border-stone-800">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
            <div><div className="text-3xl font-black text-red-500">25yr</div><div className="text-xs text-stone-500 uppercase">Warranties</div></div>
            <div><div className="text-3xl font-black text-red-500">10K+</div><div className="text-xs text-stone-500 uppercase">Roofs Done</div></div>
            <div><div className="text-3xl font-black text-red-500">Licensed</div><div className="text-xs text-stone-500 uppercase">& Insured</div></div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Roof Replacement', desc: 'Asphalt, metal, tile, and flat roofing.', icon: '🏠', price: 'From $8,000' },
                { name: 'Roof Repair', desc: 'Leak repair, storm damage, and patches.', icon: '🔧', price: 'From $299' },
                { name: 'Inspection', desc: 'Comprehensive roof assessment and report.', icon: '🔍', price: 'Free' },
                { name: 'Gutters', desc: 'Installation, cleaning, and guards.', icon: '🌧️', price: 'From $5/ft' },
                { name: 'Commercial', desc: 'Flat and low-slope commercial roofing.', icon: '🏢', price: 'Custom quote' },
                { name: 'Storm Damage', desc: 'Insurance claim assistance and repair.', icon: '⛈️', price: 'Insurance' },
              ].map((s, i) => (
                <div key={i} className="border border-stone-800 rounded-lg p-8 hover:border-red-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-2">{s.name}</h3>
                  <p className="text-stone-400 text-sm mb-3">{s.desc}</p>
                  <div className="text-red-500 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-8"><div className="text-3xl mb-3">📞</div><div className="font-bold">Call Us</div><a href="tel:(555) 890-1237" className="text-red-500 text-xl font-black hover:underline">(555) 890-1237</a></div>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-8"><div className="text-3xl mb-3">📍</div><div className="font-bold">Service Area</div><p className="text-stone-400">Metro Denver, CO</p></div>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-8"><div className="text-3xl mb-3">✅</div><div className="font-bold">Warranty</div><p className="text-stone-400">25-year workmanship<br />warranty on all new roofs</p></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-stone-600 text-sm">© {new Date().getFullYear()} Peak Roofing. Denver, CO. Licensed & Insured.</div></footer>
    </div>
  );
}
