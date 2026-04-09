'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-400 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* EMERGENCY BANNER */}
      <div className="bg-red-400 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency Service Available — Call Now</div>
      <nav className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-current/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-2xl font-black uppercase">Peak Roofing</h1><p className="text-xs text-stone-400 uppercase tracking-wider">Est. 2007</p></div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-sm font-bold text-stone-400 hover:text-red-400 uppercase">Services</button>
            <button onClick={() => scrollTo('book')} className="bg-red-400 text-white px-6 py-2 font-bold uppercase">Free Inspection</button>
          </div>
        </div>
      </nav>
      <main id="main" role="main">
        {/* HERO with inline booking form */}
        <section className="pt-4">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6 whitespace-pre-line">Covered
for life.</h2>
              <p className="text-xl text-stone-400 mb-8">Expert roofing installation, repair, and inspection. Licensed, insured, and backed by industry-leading warranties.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-red-400">Licensed</div><div className="text-sm text-stone-400 mt-1">& insured</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-red-400">25yr</div><div className="text-sm text-stone-400 mt-1">Warranties</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-red-400">10K+</div><div className="text-sm text-stone-400 mt-1">Roofs done</div></div>
              </div>
            </div>
            <div>
              <form id="book" className="bg-stone-900 rounded-xl p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold mb-4">Free Inspection</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold mb-1">Name</label><input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                  <div><label className="block text-sm font-bold mb-1">Phone</label><input type="tel" placeholder="(555) 000-0000" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                </div>
                <div><label className="block text-sm font-bold mb-1">Service</label>
                  <select className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent">
                    <option>Select service</option>                    <option>Roof Replacement</option>
                    <option>Roof Repair</option>
                    <option>Inspection</option>
                    <option>Gutters</option>
                    <option>Commercial</option>
                    <option>Storm Damage</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold mb-1">Describe the issue</label><textarea rows={3} placeholder="What's going on?" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent resize-none" /></div>
                <button type="submit" className="w-full bg-red-400 text-white py-4 rounded-lg font-black uppercase text-lg">Free Inspection</button>
              </form>
            </div>
          </div>
        </section>
        {/* SERVICES with pricing */}
        <section id="services" className="py-24 bg-stone-900" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services & Pricing</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stone-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏠</div>
              <div><h3 className="font-bold text-lg">Roof Replacement</h3><p className="text-sm text-stone-400">Asphalt, metal, tile, flat.</p></div>
            </div>
            <div className="bg-stone-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🔧</div>
              <div><h3 className="font-bold text-lg">Roof Repair</h3><p className="text-sm text-stone-400">Leak repair, storm damage.</p></div>
            </div>
            <div className="bg-stone-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🔍</div>
              <div><h3 className="font-bold text-lg">Inspection</h3><p className="text-sm text-stone-400">Comprehensive roof assessment.</p></div>
            </div>
            <div className="bg-stone-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🌧️</div>
              <div><h3 className="font-bold text-lg">Gutters</h3><p className="text-sm text-stone-400">Installation and cleaning.</p></div>
            </div>
            <div className="bg-stone-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏢</div>
              <div><h3 className="font-bold text-lg">Commercial</h3><p className="text-sm text-stone-400">Flat and low-slope roofing.</p></div>
            </div>
            <div className="bg-stone-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">⛈️</div>
              <div><h3 className="font-bold text-lg">Storm Damage</h3><p className="text-sm text-stone-400">Insurance claim assistance.</p></div>
            </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="py-24" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="team-heading" className="text-4xl font-black uppercase">Our Crew</h2></div>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-stone-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-400/20 flex items-center justify-center text-2xl font-bold text-red-400">TH</div>
              <h3 className="font-bold">Tom Henderson</h3><p className="text-sm text-red-400">Owner</p><p className="text-sm text-stone-400 mt-1">Licensed 20yr</p></div>
            <div className="bg-stone-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-400/20 flex items-center justify-center text-2xl font-bold text-red-400">CM</div>
              <h3 className="font-bold">Carlos Mendez</h3><p className="text-sm text-red-400">Production Mgr</p><p className="text-sm text-stone-400 mt-1">HAAG certified</p></div>
            <div className="bg-stone-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-400/20 flex items-center justify-center text-2xl font-bold text-red-400">SW</div>
              <h3 className="font-bold">Sarah Walsh</h3><p className="text-sm text-red-400">Project Coordinator</p><p className="text-sm text-stone-400 mt-1">Insurance specialist</p></div>
            <div className="bg-stone-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-400/20 flex items-center justify-center text-2xl font-bold text-red-400">JK</div>
              <h3 className="font-bold">James Kim</h3><p className="text-sm text-red-400">Commercial Lead</p><p className="text-sm text-stone-400 mt-1">Flat roof expert</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-24 bg-stone-900" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-black uppercase">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Free inspection?<span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">Yes, full inspection and estimate free.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Insurance?<span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">We work directly with your insurance company.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Warranty?<span className="ml-4 text-stone-400 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">25-year workmanship warranty on all new roofs.</p></details></div>
          </div>
        </section>
        {/* CONTACT INFO */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-stone-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📞</div><div className="font-bold text-lg mb-1">Call Us</div><a href="tel:(555) 890-1237" className="text-red-400">(555) 890-1237</a></div>
            <div className="bg-stone-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📍</div><div className="font-bold text-lg mb-1">Visit Us</div><p className="text-stone-400">Serving Metro Denver, CO</p></div>
            <div className="bg-stone-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">⏰</div><div className="font-bold text-lg mb-1">Hours</div><p className="text-stone-400">Mon–Sat 7 AM – 6 PM</p></div>
          </div>
        </section>
      </main>
      <footer className="bg-stone-900 py-8 text-center text-sm text-stone-400">&copy; 2026 Peak Roofing</footer>
    </div>
  );
}
