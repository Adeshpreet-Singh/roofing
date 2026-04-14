'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our team will contact you within 24 hours to schedule your free inspection.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  // Images
  const heroImg = 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80';
  const serviceImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
  ];
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', label: 'Residential Re-Roof' },
    { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', label: 'Modern Home Exterior' },
    { src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80', label: 'Exterior Renovation' },
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', label: 'Commercial Project' },
  ];

  const services = [
    { name: 'Roof Replacement', img: serviceImages[0], desc: 'Full tear-off and installation with premium architectural shingles, standing seam metal, tile, or slate. Every project includes permit handling, deck inspection, ice-and-water shield, and a final code inspection. We use only GAF-certified materials and follow manufacturer specs to the letter, protecting your warranty from day one. Our crews are full-time employees, never subcontractors, so quality stays consistent from the first nail to the last cleanup sweep.', price: 'From $8,000' },
    { name: 'Emergency Repair', img: serviceImages[1], desc: 'Active leak? Missing shingles after a storm? Our rapid-response crews arrive within 2 hours for emergency tarping and temporary patches, stopping water intrusion before it reaches your drywall, insulation, or electrical systems. We then schedule a full diagnostic within 48 hours, providing a permanent repair plan with transparent pricing. No hidden fees, no pressure upsells, just honest work backed by our satisfaction guarantee.', price: 'From $299' },
    { name: 'Storm & Insurance', img: serviceImages[2], desc: 'Colorado storms are brutal. We specialize in hail and wind damage restoration, working directly with your insurance adjuster from initial inspection through final payment. Our public-claims expertise means we document every dent, crease, and granule loss to maximize your settlement. Most homeowners pay only their deductible. We handle the paperwork so you can focus on getting your life back to normal.', price: 'Insurance' },
    { name: 'Gutters & Drainage', img: serviceImages[3], desc: 'Seamless aluminum and copper gutter systems custom-fabricated on site for a perfect fit. We install oversized downspouts, leaf guards, and underground drainage to protect your foundation, landscaping, and fascia boards. Proper water management extends roof life and prevents costly basement leaks. Ask about our gutter-and-roof bundle pricing for combined projects.', price: 'From $5/ft' },
  ];

  const testimonials = [
    { name: 'Sarah Mitchell', location: 'Highlands Ranch, CO', stars: 5, text: 'After the hailstorm last June, Skyline had our roof tarped within hours and fully replaced in under a week. They handled the entire insurance claim — we just signed the paperwork. Our new architectural shingles look incredible and the crew cleaned up every single nail.' },
    { name: 'David & Karen Chen', location: 'Aurora, CO', stars: 5, text: 'We got four quotes for our roof replacement. Skyline was not the cheapest, but their GAF certification and 25-year warranty gave us confidence. The project manager was on-site every day, and the finished product exceeded our expectations. Worth every penny.' },
    { name: 'Marcus Rodriguez', location: 'Lakewood, CO', stars: 5, text: 'As a property manager with 12 buildings, I need a roofer I can trust. Skyline has done 8 roofs for me over 3 years — always on schedule, always within budget, and their commercial team understands TPO installation inside and out. My go-to contractor.' },
  ];

  const financingOptions = [
    { title: '0% APR Plan', period: 'Up to 18 months', monthly: '$667/mo', detail: 'Based on $12,000 project', tag: 'MOST POPULAR' },
    { title: 'Low-Interest Plan', period: 'Up to 60 months', monthly: '$242/mo', detail: 'Based on $12,000 at 7.9% APR', tag: 'LOWEST PAYMENT' },
    { title: 'Insurance Bridge', period: 'No money down', monthly: '$0 upfront', detail: 'We wait for your claim to process', tag: 'ZERO RISK' },
  ];

  return (
    <div className="min-h-screen">
      {/* Skip Link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[var(--accent)] text-black px-4 py-2 rounded z-[100] font-bold">Skip to main content</a>

      {/* ========== 1. EMERGENCY BANNER ========== */}
      <div className="emergency-banner">
        &#9889; STORM DAMAGE? DON&rsquo;T WAIT &mdash; CALL NOW: <a href="tel:(555) 890-1237">(555) 890-1237</a> &mdash; 24/7 Emergency Response Available
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav className="nav-sticky">
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '1rem 1.5rem' }} className="flex justify-between items-center">
          <div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)' }}>SKYLINE ROOFING</h1>
            <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>Licensed &amp; Insured &mdash; Denver, CO &mdash; Est. 2004</p>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: '1.5rem' }}>
            <button onClick={() => scrollTo('services')} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Services</button>
            <button onClick={() => scrollTo('why')} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Why Us</button>
            <button onClick={() => scrollTo('gallery')} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Gallery</button>
            <button onClick={() => scrollTo('testimonials')} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Reviews</button>
            <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>Free Inspection</button>
          </div>
          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '1.5rem', cursor: 'pointer' }}>&#9776;</button>
        </div>
        {menuOpen && (
          <div className="md:hidden" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button onClick={() => scrollTo('services')} style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Services</button>
            <button onClick={() => scrollTo('why')} style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Why Us</button>
            <button onClick={() => scrollTo('gallery')} style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Gallery</button>
            <button onClick={() => scrollTo('testimonials')} style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Reviews</button>
            <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '0.85rem' }}>Free Inspection</button>
          </div>
        )}
      </nav>

      <main id="main">

        {/* ========== 2. HERO WITH ROOF PHOTO ========== */}
        <section className="hero-section">
          <div className="hero-bg">
            <img src={heroImg} alt="Professional residential roof with new shingles" loading="eager" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-content" style={{ maxWidth: '72rem', margin: '0 auto', padding: '4rem 1.5rem', width: '100%' }}>
            <div style={{ maxWidth: '38rem' }}>
              <span className="badge" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>GAF Master Elite Contractor &mdash; Top 2% Nationally</span>
              <h2 className="heading" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', marginBottom: '1.25rem', color: 'var(--heading)' }}>
                Your roof.<br />Done right.<br /><span style={{ color: 'var(--accent)' }}>Guaranteed.</span>
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '30rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                From emergency leak repair to full roof replacement, Skyline Roofing delivers expert craftsmanship backed by the strongest warranties in Colorado. Free inspections. Honest pricing. No subcontractors. We have completed over 3,000 roofs across the Front Range since 2004, and every project is backed by our 25-year workmanship guarantee.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => scrollTo('contact')} className="btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>Schedule Free Inspection</button>
                <button onClick={() => scrollTo('services')} className="btn-outline" style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}>View Our Services</button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="reveal section-alt" style={{ padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '20+', label: 'Years Experience' },
              { num: '3,000+', label: 'Roofs Completed' },
              { num: '4.9\u2605', label: 'Google Rating' },
              { num: '24/7', label: 'Emergency Service' },
            ].map((s, i) => (
              <div key={i}>
                <div className="heading" style={{ fontSize: '2rem', color: 'var(--accent)' }}>{s.num}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--font-body)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========== 3. SERVICES GRID WITH IMAGES ========== */}
        <section id="services" className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="services-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Professional Roofing Services</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '38rem', margin: '1rem auto 0', lineHeight: 1.8 }}>
                From minor repairs to complete replacements, our certified crews deliver quality workmanship on every project. All work includes cleanup, final inspection, and written warranty documentation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="service-card">
                  <div style={{ overflow: 'hidden' }}>
                    <img src={s.img} alt={s.name} className="service-card-img" loading="lazy" />
                  </div>
                  <div className="service-card-body">
                    <div className="flex justify-between items-start" style={{ marginBottom: '0.75rem' }}>
                      <h3 className="heading" style={{ fontSize: '1.4rem' }}>{s.name}</h3>
                      <span style={{ color: 'var(--accent)', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1rem', letterSpacing: '0.05em' }}>{s.price}</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1rem' }}>{s.desc}</p>
                    <button onClick={() => scrollTo('contact')} style={{ color: 'var(--accent)', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase', padding: 0 }}>
                      Get a Quote &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 4. WHY CHOOSE US ========== */}
        <section id="why" className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="why-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">The Skyline Difference</span>
              <h2 id="why-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Why Homeowners Trust Skyline</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '36rem', margin: '1rem auto 0', lineHeight: 1.8 }}>
                We are not the cheapest roofer in Denver. We are the one you call when you want the job done right the first time, with zero surprises and a warranty you can actually trust.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '\uD83D\uDEE1\uFE0F', title: 'Licensed & Insured', desc: 'Full liability coverage and workers\' comp. State-licensed with a spotless record. We carry $2M in general liability insurance, protecting your home and our crew on every job site.' },
                { icon: '\u2B50', title: 'GAF Master Elite', desc: 'Only the top 2% of roofers nationally earn this certification. It means factory-trained crews, priority material access, and manufacturer warranties that non-certified contractors cannot offer.' },
                { icon: '\uD83D\uDCCB', title: 'Insurance Experts', desc: 'We meet your adjuster on-site, document every detail with drone footage and thermal imaging, and fight for full coverage. Most of our storm-damage clients pay only their deductible.' },
                { icon: '\uD83E\uDDF9', title: 'Cleanup Guarantee', desc: 'Magnetic nail sweep across your entire property, full debris haul-off, and a final walkthrough with you present. We leave your yard cleaner than we found it — that is a written promise.' },
              ].map((item, i) => (
                <div key={i} className="card text-center">
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 className="heading" style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 5. FINANCING OPTIONS ========== */}
        <section id="financing" className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="financing-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge">Flexible Payment</span>
                <h2 id="financing-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem', marginBottom: '1rem' }}>Roof Now, Pay Over Time</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  A new roof is one of the largest investments you will make in your home. We believe cost should never delay a critical repair, which is why we partner with multiple lending institutions to offer flexible financing plans for every budget. Whether you need zero-interest short-term coverage or a low monthly payment stretched over several years, we have an option that works for you. Our financing specialists walk you through every choice during your free estimate so you can make a confident, informed decision without any pressure.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[
                    '0% APR financing for up to 18 months on qualifying projects',
                    'Low-interest payment plans extending up to 10 years',
                    'No money down while your insurance claim is processed',
                    'Quick approval — most decisions in under 15 minutes',
                    'We accept all major credit cards and insurance proceeds',
                  ].map((item, i) => (
                    <div key={i} className="check-item">
                      <span className="check-icon">&#10003;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollTo('contact')} className="btn-primary">Apply for Financing</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {financingOptions.map((opt, i) => (
                  <div key={i} className="finance-option">
                    <div className="flex justify-between items-center" style={{ marginBottom: '0.75rem' }}>
                      <h3 className="heading" style={{ fontSize: '1.2rem' }}>{opt.title}</h3>
                      <span className="badge" style={{ fontSize: '0.55rem', padding: '4px 10px' }}>{opt.tag}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4" style={{ fontSize: '0.85rem' }}>
                      <div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Term</div>
                        <div style={{ color: 'var(--text-secondary)' }}>{opt.period}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Payment</div>
                        <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem' }}>{opt.monthly}</div>
                      </div>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.5rem' }}>{opt.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== 6. PROJECT GALLERY ========== */}
        <section id="gallery" className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="gallery-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Our Work</span>
              <h2 id="gallery-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Recent Project Gallery</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '36rem', margin: '1rem auto 0', lineHeight: 1.8 }}>
                Every roof we install is a testament to our commitment to quality. Browse some of our recent residential and commercial projects across the Denver metro area.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img.src} alt={img.label} loading="lazy" />
                  <span className="gallery-label">{img.label}</span>
                </div>
              ))}
            </div>
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <button onClick={() => scrollTo('contact')} className="btn-outline">Start Your Project &rarr;</button>
            </div>
          </div>
        </section>

        {/* ========== 7. TESTIMONIALS ========== */}
        <section id="testimonials" className="reveal" style={{ padding: '6rem 0' }} aria-labelledby="testimonials-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Customer Stories</span>
              <h2 id="testimonials-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>What Our Clients Say</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '32rem', margin: '1rem auto 0' }}>
                Over 3,000 homeowners and property managers trust Skyline with their most important investment. Here is what a few of them have to say.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="card">
                  <div className="stars" style={{ marginBottom: '1rem' }}>{'\u2605'.repeat(t.stars)}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--heading)' }}>{t.name}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 8. FREE INSPECTION FORM ========== */}
        <section id="contact" className="reveal section-alt" style={{ padding: '6rem 0' }} aria-labelledby="contact-heading">
          <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="badge">Get Started</span>
              <h2 id="contact-heading" className="heading" style={{ fontSize: '2.25rem', marginTop: '0.75rem' }}>Schedule Your Free Inspection</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '32rem', margin: '1rem auto 0', lineHeight: 1.8 }}>
                Fill out the form below or call us directly at <a href="tel:(555) 890-1237" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>(555) 890-1237</a>. Most inspections are scheduled within 48 hours, and emergency calls are answered 24/7.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="md:col-span-2">
                <div className="card text-center" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#128222;</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Call Us Anytime</div>
                  <a href="tel:(555) 890-1237" style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>(555) 890-1237</a>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.5rem' }}>24/7 Emergency Line Available</p>
                </div>
                <div className="card text-center" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#128205;</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Visit Our Office</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>1247 Broadway, Suite 200<br />Denver, CO 80203</p>
                </div>
                <div className="card text-center" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&#128336;</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Business Hours</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Mon&ndash;Fri: 7AM&ndash;7PM<br />Sat: 8AM&ndash;4PM<br />Sun: Emergency Only</p>
                </div>
              </div>

              {/* Form */}
              <div className="card md:col-span-3" style={{ padding: '2rem' }}>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4" style={{ marginBottom: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Full Name *</label>
                      <input type="text" required placeholder="John Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Phone *</label>
                      <input type="tel" required placeholder="(555) 123-4567" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Service Needed</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
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
                    <label style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Tell Us About Your Roof</label>
                    <textarea rows={4} placeholder="Describe any issues, the age of your roof, or what you're looking for..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                    Request Free Inspection &rarr;
                  </button>
                  <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== 9. FOOTER ========== */}
      <footer className="footer-top-glow" style={{ borderTop: '1px solid var(--border)', padding: '3rem 0' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid md:grid-cols-3 gap-8" style={{ marginBottom: '2rem' }}>
            <div>
              <h3 className="heading" style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '0.75rem' }}>SKYLINE ROOFING</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.8 }}>
                Denver&rsquo;s most trusted roofing contractor since 2004. GAF Master Elite certified. Licensed, bonded, and insured. Over 3,000 roofs installed across the Front Range.
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', color: 'var(--heading)', fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Services', 'Financing', 'Gallery', 'Reviews', 'Contact'].map((link, i) => (
                  <button key={i} onClick={() => scrollTo(link === 'Reviews' ? 'testimonials' : link.toLowerCase())} style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, transition: 'color 0.3s ease' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--accent)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem', color: 'var(--heading)', fontFamily: 'var(--font-heading)' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span>&#128222; <a href="tel:(555) 890-1237" style={{ color: 'var(--accent)' }}>(555) 890-1237</a></span>
                <span>&#128205; 1247 Broadway, Denver, CO 80203</span>
                <span>&#128336; Mon&ndash;Fri 7AM&ndash;7PM, Sat 8AM&ndash;4PM</span>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} Skyline Roofing. All rights reserved. Denver, CO. Licensed &amp; Insured. ROC #2004-11847.
          </div>
        </div>
      </footer>
    </div>
  );
}
