'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const services = [
    { name: 'Roof Replacement', desc: 'Complete tear-off and new roof installation using premium materials. We handle everything from permits to final inspection, ensuring your new roof meets all local building codes and manufacturer specifications.', icon: '🏠', price: 'From $8,000' },
    { name: 'Roof Repair', desc: 'Fast, reliable repairs for leaks, missing shingles, flashing failures, and structural damage. Our technicians diagnose the root cause and provide lasting solutions, not just temporary patches.', icon: '🔧', price: 'From $299' },
    { name: 'Storm Damage', desc: 'Emergency tarping, full damage assessment, and complete restoration after hail, wind, or fallen trees. We work directly with your insurance adjuster to maximize your claim and minimize your stress.', icon: '⛈️', price: 'Insurance' },
    { name: 'Gutter Installation', desc: 'Seamless aluminum and copper gutter systems, downspouts, leaf guards, and drainage solutions. Properly sized and pitched to protect your foundation, landscaping, and fascia boards.', icon: '🌧️', price: 'From $5/ft' },
    { name: 'Insulation & Ventilation', desc: 'Blown-in attic insulation, ridge vents, soffit ventilation, and radiant barriers. Improve energy efficiency by up to 30% and extend your roof lifespan by preventing moisture buildup and ice dams.', icon: '🌡️', price: 'From $1,500' },
    { name: 'Commercial Roofing', desc: 'TPO, EPDM, modified bitumen, and built-up roofing for warehouses, retail centers, and office buildings. Minimal disruption to your operations with scheduled installation windows.', icon: '🏢', price: 'Custom Quote' },
    { name: 'Roof Inspection', desc: 'Comprehensive 47-point inspection with drone-assisted aerial imaging, thermal leak detection, and a detailed written report. Ideal for real estate transactions, insurance claims, or annual maintenance.', icon: '🔍', price: 'Free' },
  ];

  const materials = [
    { name: 'Asphalt Shingles', lifespan: '20–30 years', cost: '$$$', pros: 'Most affordable, wide color selection, easy to repair, Class A fire rating', cons: 'Shorter lifespan, vulnerable to high winds, less eco-friendly', best: 'Budget-conscious homeowners, most residential projects' },
    { name: 'Metal Roofing', lifespan: '40–70 years', cost: '$$$$', pros: 'Extremely durable, energy efficient, recyclable, reflects solar heat', cons: 'Higher upfront cost, can dent from hail, requires specialized install', best: 'Long-term investment, hail-prone areas, modern aesthetics' },
    { name: 'Clay/Concrete Tile', lifespan: '50–100 years', cost: '$$$$$', pros: 'Exceptional longevity, fireproof, distinctive look, low maintenance', cons: 'Very heavy (may need structural reinforcement), fragile if walked on', best: 'Mediterranean/Spanish style homes, hot climates' },
    { name: 'Slate', lifespan: '75–150 years', cost: '$$$$$+', pros: 'Natural beauty, longest lifespan of any material, adds home value', cons: 'Most expensive, extremely heavy, requires master craftsman to install', best: 'Historic homes, luxury properties, lifetime investment' },
  ];

  const testimonials = [
    { name: 'Sarah Mitchell', location: 'Highlands Ranch, CO', text: 'After the hailstorm last June, Skyline had our roof tarped within hours and fully replaced in under a week. They handled the entire insurance claim — we just signed the paperwork. Our new architectural shingles look incredible and the crew cleaned up every single nail.', rating: 5 },
    { name: 'David & Karen Chen', location: 'Aurora, CO', text: 'We got four quotes for our roof replacement. Skyline was not the cheapest, but their GAF certification and 25-year warranty gave us confidence. The project manager was on-site every day, and the finished product exceeded our expectations. Worth every penny.', rating: 5 },
    { name: 'Marcus Rodriguez', location: 'Lakewood, CO', text: 'As a property manager with 12 buildings, I need a roofer I can trust. Skyline has done 8 roofs for me over 3 years — always on schedule, always within budget, and their commercial team understands TPO installation inside and out. My go-to contractor.', rating: 5 },
  ];

  const faqs = [
    { q: 'How long does a typical roof last?', a: 'Roof lifespan depends on the material. Standard asphalt shingles last 20–30 years, architectural shingles 25–40 years, metal roofing 40–70 years, and slate can exceed 100 years. Colorado\'s intense UV exposure, hail, and temperature swings can shorten these timelines, which is why we recommend annual inspections to catch issues early and maximize your roof\'s service life.' },
    { q: 'What are the signs my roof needs repair or replacement?', a: 'Watch for missing, cracked, or curling shingles; granules collecting in gutters; daylight visible through the attic; water stains on ceilings or walls; sagging roof lines; and moss or algae growth. If your roof is over 20 years old or you\'ve experienced recent storm damage, schedule a free inspection — many problems are invisible from the ground.' },
    { q: 'Will my insurance cover roof replacement?', a: 'Most homeowner policies cover sudden, accidental damage from storms, hail, wind, and fallen trees. They typically do not cover normal wear and tear or lack of maintenance. Our team has extensive experience working with all major insurance carriers. We document damage thoroughly, meet with your adjuster on-site, and help ensure you receive the full coverage you\'re entitled to under your policy.' },
    { q: 'How long does a roof installation take?', a: 'A standard residential roof replacement takes 1–3 days depending on size, complexity, and weather. Tear-off and deck inspection happen on day one, underlayment and shingle installation on day two, with flashing, cleanup, and final inspection completing the project. Commercial and specialty material projects may take longer. We always protect your landscaping and keep the site safe throughout.' },
    { q: 'What warranty do you offer?', a: 'Every Skyline roof comes with a 25-year workmanship warranty covering installation defects. As a GAF Master Elite contractor, we also offer manufacturer warranties up to 50 years on materials, including the GAF Golden Pledge warranty that covers both product defects and labor — one of the strongest in the industry. Warranty details are provided in writing before any work begins.' },
    { q: 'Do you offer financing?', a: 'Yes. We partner with several lending institutions to offer 0% APR financing for up to 18 months on qualifying projects, as well as low-interest payment plans extending up to 10 years. We also accept insurance proceeds with no money down while your claim is processed. Our team will walk you through all available options during your free estimate.' },
  ];

  const serviceAreas = [
    'Denver', 'Aurora', 'Lakewood', 'Arvada', 'Westminster', 'Thornton',
    'Centennial', 'Highlands Ranch', 'Littleton', 'Broomfield', 'Commerce City',
    'Parker', 'Castle Rock', 'Englewood', 'Wheat Ridge', 'Golden',
  ];

  return (
    <div className="min-h-screen">
      {/* Skip Link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-white px-4 py-2 rounded z-[100] font-bold">Skip to main content</a>

      {/* 1. Emergency Banner */}
      <div className="bg-[#dc2626] text-white py-3 text-center text-sm font-bold tracking-wide">
        ⚡ STORM DAMAGE? DON'T WAIT — CALL NOW: <a href="tel:(555) 890-1237" className="underline ml-1">(555) 890-1237</a> — 24/7 Emergency Response Available
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]" style={{ boxShadow: 'var(--shadow)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '1rem 1.5rem' }} className="flex justify-between items-center">
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.05em', color: 'var(--accent)' }}>SKYLINE ROOFING</h1>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--body)', textTransform: 'uppercase' }}>Licensed & Insured — Denver, CO — Est. 2004</p>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: '1.5rem' }}>
            <button onClick={() => scrollTo('services')} style={{ fontSize: '0.875rem', color: 'var(--body)' }} className="hover:text-[var(--accent)]">Services</button>
            <button onClick={() => scrollTo('materials')} style={{ fontSize: '0.875rem', color: 'var(--body)' }} className="hover:text-[var(--accent)]">Materials</button>
            <button onClick={() => scrollTo('testimonials')} style={{ fontSize: '0.875rem', color: 'var(--body)' }} className="hover:text-[var(--accent)]">Reviews</button>
            <button onClick={() => scrollTo('faq')} style={{ fontSize: '0.875rem', color: 'var(--body)' }} className="hover:text-[var(--accent)]">FAQ</button>
            <button onClick={() => scrollTo('contact')} className="btn">Free Inspection</button>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* 2. Hero Section */}
        <section className="hero">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '4rem 1.5rem' }} className="text-center md:text-left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>GAF Master Elite Contractor — Top 2% Nationally</span>
                <h2 className="heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem' }}>
                  Your roof.<br />Done right.<br /><span style={{ color: 'var(--accent)' }}>Guaranteed.</span>
                </h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--body)', maxWidth: '32rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                  From emergency leak repair to full roof replacement, Skyline Roofing delivers expert craftsmanship backed by the strongest warranties in Colorado. Free inspections. Honest pricing. No subcontractors.
                </p>
                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                  <button onClick={() => scrollTo('contact')} className="btn" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>Schedule Free Inspection</button>
                  <button onClick={() => scrollTo('services')} className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>View Our Services</button>
                </div>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🏠</div>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Free Roof Inspection</p>
                <p style={{ color: 'var(--body)', fontSize: '0.9rem', marginBottom: '1rem' }}>47-point assessment with drone imaging and thermal leak detection. No obligation.</p>
                <button onClick={() => scrollTo('contact')} className="btn" style={{ width: '100%' }}>Get Started Today →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="reveal section-alt" style={{ padding: '2.5rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="heading" style={{ fontSize: '2rem', color: 'var(--accent)' }}>20+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years Experience</div>
            </div>
            <div>
              <div className="heading" style={{ fontSize: '2rem', color: 'var(--accent)' }}>3,000+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Roofs Completed</div>
            </div>
            <div>
              <div className="heading" style={{ fontSize: '2rem', color: 'var(--accent)' }}>4.9★</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Google Rating</div>
            </div>
            <div>
              <div className="heading" style={{ fontSize: '2rem', color: 'var(--accent)' }}>24/7</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Emergency Service</div>
            </div>
          </div>
        </section>

        {/* 3. Services Section */}
        <section id="services" className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="services-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Professional Roofing Services</h2>
              <p style={{ color: 'var(--body)', maxWidth: '40rem', margin: '1rem auto 0', lineHeight: 1.7 }}>
                From minor repairs to complete replacements, our certified crews deliver quality workmanship on every project. All work includes cleanup, inspection, and warranty documentation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                  <h3 className="heading" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{s.name}</h3>
                  <p style={{ color: 'var(--body)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{s.price}</span>
                    <button onClick={() => scrollTo('contact')} style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>Learn More →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Materials Comparison */}
        <section id="materials" className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="materials-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Materials Guide</span>
              <h2 id="materials-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Choose the Right Roofing Material</h2>
              <p style={{ color: 'var(--body)', maxWidth: '40rem', margin: '1rem auto 0', lineHeight: 1.7 }}>
                Every home is different. We install all major roofing systems and help you choose the best option for your budget, style, and Colorado's unique climate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((m, i) => (
                <div key={i} className="card">
                  <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                    <h3 className="heading" style={{ fontSize: '1.25rem' }}>{m.name}</h3>
                    <span className="badge">{m.cost}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem', marginBottom: '1rem' }}>
                    <div><strong style={{ color: 'var(--accent)' }}>Lifespan:</strong> {m.lifespan}</div>
                    <div><strong style={{ color: 'var(--accent)' }}>Best For:</strong> {m.best}</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>
                    <p style={{ color: '#16a34a', marginBottom: '0.25rem' }}>✓ {m.pros}</p>
                    <p style={{ color: '#dc2626' }}>✗ {m.cons}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us */}
        <section className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="why-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">The Skyline Difference</span>
              <h2 id="why-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Why Homeowners Trust Skyline</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🛡️', title: 'Licensed & Insured', desc: 'Full liability coverage and workers\' comp. State-licensed with a clean record — verify our credentials anytime.' },
                { icon: '⭐', title: 'GAF Master Elite', desc: 'Only the top 2% of roofers earn this certification. It means factory-trained crews and access to the best manufacturer warranties.' },
                { icon: '📋', title: 'Insurance Claim Help', desc: 'We meet your adjuster on-site, document every detail, and fight for full coverage. Most clients pay only their deductible.' },
                { icon: '🧹', title: 'Cleanup Guarantee', desc: 'Magnetic nail sweep, full debris haul-off, and a final walkthrough. We leave your property cleaner than we found it — guaranteed.' },
              ].map((item, i) => (
                <div key={i} className="card text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 className="heading" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--body)', fontSize: '0.85rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Financing Options */}
        <section className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="financing-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge">Flexible Payment</span>
                <h2 id="financing-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem', marginBottom: '1rem' }}>Roof Now, Pay Over Time</h2>
                <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  A new roof is a significant investment. We offer multiple financing options to fit your budget, including 0% APR plans and low monthly payments. Don't let cost delay critical repairs — a leaking roof only gets more expensive.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    '0% APR financing for up to 18 months',
                    'Low-interest plans extending up to 10 years',
                    'No money down while insurance claim is processed',
                    'Quick approval — most decisions in under 15 minutes',
                    'We accept all major credit cards',
                  ].map((item, i) => (
                    <li key={i} style={{ padding: '0.5rem 0', fontSize: '0.9rem', color: 'var(--body)' }}>✓ {item}</li>
                  ))}
                </ul>
                <button onClick={() => scrollTo('contact')} className="btn" style={{ marginTop: '1.5rem' }}>Apply for Financing</button>
              </div>
              <div className="card text-center">
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💰</div>
                <h3 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quick Pre-Qualification</h3>
                <p style={{ color: 'var(--body)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>No hard credit pull. See your options in minutes.</p>
                <div style={{ background: 'var(--alt-bg)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'left' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Example: $12,000 Roof</label>
                    <div style={{ fontSize: '0.85rem', color: 'var(--body)' }}>18 months at 0% APR = $667/mo</div>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Example: $12,000 Roof</label>
                    <div style={{ fontSize: '0.85rem', color: 'var(--body)' }}>60 months at 7.9% APR = $242/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section id="testimonials" className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="testimonials-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Customer Stories</span>
              <h2 id="testimonials-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>What Our Clients Say</h2>
              <p style={{ color: 'var(--body)', maxWidth: '32rem', margin: '1rem auto 0' }}>Over 3,000 homeowners trust Skyline with their most important investment.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <div style={{ color: '#facc15', fontSize: '1.1rem', marginBottom: '1rem' }}>{'★'.repeat(t.rating)}</div>
                  <p style={{ color: 'var(--body)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.text}"</p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: 'var(--body)', fontSize: '0.8rem' }}>{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="faq-heading">
          <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Questions & Answers</span>
              <h2 id="faq-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Frequently Asked Questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', textAlign: 'left', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem', color: 'var(--heading)' }}
                  >
                    {faq.q}
                    <span style={{ fontSize: '1.5rem', color: 'var(--accent)', flexShrink: false, marginLeft: '1rem' }}>{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--body)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Service Areas */}
        <section className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="areas-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Coverage Area</span>
              <h2 id="areas-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Proudly Serving the Front Range</h2>
              <p style={{ color: 'var(--body)', maxWidth: '32rem', margin: '1rem auto 0' }}>
                From downtown Denver to Castle Rock, our crews are in your neighborhood every week. Free travel within 50 miles of our headquarters.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {serviceAreas.map((area, i) => (
                <span key={i} className="badge" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contact Form + Phone */}
        <section id="contact" className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="contact-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Get In Touch</span>
              <h2 id="contact-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Schedule Your Free Inspection</h2>
              <p style={{ color: 'var(--body)', maxWidth: '32rem', margin: '1rem auto 0' }}>
                Fill out the form below or call us directly. Most inspections are scheduled within 48 hours.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="md:col-span-2">
                <div className="card text-center">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📞</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Call Us Anytime</div>
                  <a href="tel:(555) 890-1237" style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 900 }}>(555) 890-1237</a>
                  <p style={{ color: 'var(--body)', fontSize: '0.8rem', marginTop: '0.5rem' }}>24/7 Emergency Line Available</p>
                </div>
                <div className="card text-center">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📍</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Visit Our Office</div>
                  <p style={{ color: 'var(--body)', fontSize: '0.9rem' }}>1247 Broadway, Suite 200<br />Denver, CO 80203</p>
                </div>
                <div className="card text-center">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🕐</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Business Hours</div>
                  <p style={{ color: 'var(--body)', fontSize: '0.9rem' }}>Mon–Fri: 7AM–7PM<br />Sat: 8AM–4PM<br />Sun: Emergency Only</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card md:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4" style={{ marginBottom: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input type="text" required placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Phone *</label>
                      <input type="tel" required placeholder="(555) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%' }} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Service Needed</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={{ width: '100%' }}>
                      <option value="">Select a service...</option>
                      <option>Free Roof Inspection</option>
                      <option>Roof Replacement</option>
                      <option>Roof Repair</option>
                      <option>Storm Damage</option>
                      <option>Gutter Installation</option>
                      <option>Commercial Roofing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>Tell Us About Your Roof</label>
                    <textarea rows={4} placeholder="Describe any issues, the age of your roof, or what you're looking for..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                    Request Free Inspection →
                  </button>
                  <p style={{ textAlign: 'center', color: 'var(--body)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid md:grid-cols-3 gap-8" style={{ marginBottom: '2rem' }}>
            <div>
              <h3 className="heading" style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>SKYLINE ROOFING</h3>
              <p style={{ color: 'var(--body)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                Denver's most trusted roofing contractor since 2004. GAF Master Elite certified. Licensed, bonded, and insured.
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <button onClick={() => scrollTo('services')} style={{ color: 'var(--body)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Services</button>
                <button onClick={() => scrollTo('materials')} style={{ color: 'var(--body)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Materials Guide</button>
                <button onClick={() => scrollTo('testimonials')} style={{ color: 'var(--body)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Reviews</button>
                <button onClick={() => scrollTo('faq')} style={{ color: 'var(--body)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>FAQ</button>
                <button onClick={() => scrollTo('contact')} style={{ color: 'var(--body)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Contact</button>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--body)' }}>
                <span>📞 <a href="tel:(555) 890-1237" style={{ color: 'var(--accent)' }}>(555) 890-1237</a></span>
                <span>📍 1247 Broadway, Denver, CO 80203</span>
                <span>🕐 Mon–Fri 7AM–7PM, Sat 8AM–4PM</span>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--body)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Skyline Roofing. All rights reserved. Denver, CO. Licensed & Insured. ROC #2004-11847.
          </div>
        </div>
      </footer>
    </div>
  );
}
