'use client';
import { useState, useEffect, useRef } from 'react';

export default function RoofingPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeMaterial, setActiveMaterial] = useState('asphalt');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', roof_age: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const materials: Record<string, { name: string; lifespan: string; cost: string; desc: string; features: string[]; img: string }> = {
    asphalt: { name: 'Architectural Shingles', lifespan: '25-30 years', cost: '$3.50-$5.50/sq ft', desc: 'The most popular residential roofing choice, architectural shingles offer excellent durability, wind resistance up to 130 mph, and a wide range of colors and styles to complement any home. Available in Class A fire-rated options.', features: ['Wind resistant to 130 mph', 'Class A fire rated', 'Algae resistant', 'Lifetime warranty available'], img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop' },
    metal: { name: 'Standing Seam Metal', lifespan: '40-70 years', cost: '$8-$14/sq ft', desc: 'Premium metal roofing delivers unmatched longevity, energy efficiency, and weather resistance. Available in steel, aluminum, and copper with concealed fastener systems for a sleek, modern look that increases property value.', features: ['50+ year lifespan', 'Energy efficient', '100% recyclable', 'Snow shedding'], img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop' },
    tile: { name: 'Clay & Concrete Tile', lifespan: '50-100 years', cost: '$10-$20/sq ft', desc: 'Timeless elegance meets extreme durability with clay and concrete tile roofing. These premium materials resist fire, rot, and insect damage while providing superior thermal insulation and a distinctive aesthetic that enhances curb appeal.', features: ['Century-long lifespan', 'Fire resistant', 'Low maintenance', 'Superior insulation'], img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop' },
    slate: { name: 'Natural Slate', lifespan: '75-200 years', cost: '$15-$30/sq ft', desc: 'The ultimate in roofing luxury, natural slate is quarried from the earth and installed by our master craftsmen. Each piece is unique, creating a one-of-a-kind roof that can last for generations with minimal maintenance.', features: ['Indestructible', 'Naturally beautiful', 'Eco-friendly', 'Adds property value'], img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=400&fit=crop' },
  };

  return (
    <>
      {/* ====== EMERGENCY BANNER ====== */}
      {bannerVisible && (
        <div className="emergency-banner">
          Storm Damage? Leaking Roof? Call <a href="tel:18005557890">(800) 555-7890</a> — 24/7 Emergency Tarping & Repair
          <button onClick={() => setBannerVisible(false)} style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '1.2rem', fontFamily: 'var(--font-body)' }}>×</button>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      )}

      {/* ====== NAVIGATION ====== */}
      <nav className="nav-sticky">
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1 }}>Skyline Roofing
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Premium Roof Solutions
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {['Services', 'Materials', 'Financing', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <button key={item} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}>{item}</button>
            ))}
            <button className="project-btn-primary" style={{ padding: '10px 24px' }}>Free Estimate</button>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </nav>

      {/* ====== HERO WITH BG IMAGE ====== */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&h=900&fit=crop" alt="Beautiful roof" />
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        <div className="hero-overlay" />
        <div className="hero-content" style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="badge">GAF Master Elite Contractor</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '4.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 0.95, color: 'var(--heading)', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              ROOFS BUILT TO <span className="gradient-text">LAST</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '480px' }}>
              Skyline Roofing is the regions premier roofing contractor, specializing in residential and commercial roof installations, replacements, and repairs. Our GAF Master Elite certification places us in the top 2% of roofing contractors nationwide, giving our customers access to extended warranties and the highest quality materials.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '480px' }}>
              Whether you need a simple leak repair or a complete tear-off and re-roof, our experienced crews deliver flawless workmanship backed by industry-leading warranties up to 50 years. We handle everything from insurance claims assistance to final cleanup, making the roofing process stress-free for homeowners.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="project-btn-primary">Get Free Estimate</button>
              <button className="project-btn-outline">Storm Damage Help</button>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '3rem' }}>
              {[
                { val: '25+', label: 'Years Experience' },
                { val: '5K+', label: 'Roofs Installed' },
                { val: 'A+', label: 'BBB Rating' },
                { val: '50yr', label: 'Max Warranty' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'rgba(14,14,14,0.7)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)', borderRadius: '6px', padding: '1rem 0.75rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>{s.val}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>{s.label}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section id="services" style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Our Services</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem' }}>Complete Roofing Solutions</h2>
            <p style={{ marginTop: '1rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>From minor repairs to complete tear-offs, Skyline Roofing handles every project with meticulous attention to detail, premium materials, and the craftsmanship that comes from over two decades of experience.</p>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { icon: '🏠', name: 'Roof Replacement', desc: 'Complete tear-off and re-roofing with premium materials. We remove old roofing, inspect decking, install ice and water shield, and apply your chosen roofing system with manufacturer-certified installation techniques.', price: 'From $8,500', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop' },
              { icon: '🔧', name: 'Roof Repair', desc: 'Expert leak detection and repair for damaged shingles, flashing, valleys, and penetrations. We fix storm damage, wind damage, and age-related deterioration to extend your roofs life and prevent interior damage.', price: 'From $299', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=350&fit=crop' },
              { icon: '🔍', name: 'Roof Inspection', desc: 'Comprehensive roof assessments using drone technology and thermal imaging. We identify hidden damage, estimate remaining lifespan, and provide detailed reports for insurance claims and real estate transactions.', price: 'From $199', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=350&fit=crop' },
              { icon: '🌧️', name: 'Storm Damage', desc: 'Emergency tarping, temporary repairs, and full restoration after hail, wind, and storm damage. We work directly with your insurance company to maximize your claim and restore your roof quickly.', price: 'Insurance Covered', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=350&fit=crop' },
              { icon: '🏢', name: 'Commercial Roofing', desc: 'Flat roof systems including TPO, EPDM, and modified bitumen for commercial properties. Maintenance programs, leak repairs, and complete re-roofing for offices, warehouses, and retail centers.', price: 'Custom Quote', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=350&fit=crop' },
              { icon: '🪟', name: 'Gutters & Flashing', desc: 'Seamless gutter installation, gutter guards, and custom flashing work. Proper water management protects your foundation, landscaping, and prevents ice dams and water infiltration.', price: 'From $8/ft', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop' },
            ].map((service) => (
              <div key={service.name} className="service-card">
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={service.img} alt={service.name} className="service-card-img" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%)', pointerEvents: 'none' }} />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '1.5rem', background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(8px)', padding: '6px 10px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{service.icon}</span>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <div className="service-card-body">
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>{service.name}</h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{service.desc}</p>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>{service.price}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                  <button style={{ background: 'none', border: 'none', color: 'var(--accent)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.12em', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Learn More →</button>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== MATERIALS SECTION ====== */}
      <section id="materials" className="section-alt" style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Roofing Materials</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem' }}>Choose Your Perfect Roof</h2>
            <p style={{ marginTop: '1rem', maxWidth: '42rem', margin: '1rem auto', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>We offer a comprehensive selection of premium roofing materials to match every style, budget, and performance requirement. Click each option to learn more.</p>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>

          {/* Material Selector */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {Object.entries(materials).map(([key, mat]) => (
              <button key={key} onClick={() => setActiveMaterial(key)} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 1.5rem', border: activeMaterial === key ? '2px solid var(--accent)' : '1px solid var(--border)', borderRadius: '4px', cursor: 'pointer', background: activeMaterial === key ? 'rgba(255,149,0,0.1)' : 'transparent', color: activeMaterial === key ? 'var(--accent)' : 'var(--text-secondary)', transition: 'all 0.3s ease' }}>{mat.name}</button>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>

          {/* Active Material Detail */}
          <div className="reveal-scale" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src={materials[activeMaterial].img} alt={materials[activeMaterial].name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginBottom: '1rem' }}>{materials[activeMaterial].name}</h3>
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>Lifespan
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>{materials[activeMaterial].lifespan}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>Cost Range
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>{materials[activeMaterial].cost}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{materials[activeMaterial].desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {materials[activeMaterial].features.map((f) => (
                  <div key={f} className="check-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span className="check-icon" style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span> {f}
                  
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                ))}
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <button className="project-btn-primary">Get Quote for {materials[activeMaterial].name}</button>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">How It Works</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem' }}>Our Roofing Process</h2>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Free Inspection', desc: 'We inspect your roof using drones and thermal imaging to assess its condition and identify all issues.' },
              { step: '02', title: 'Detailed Proposal', desc: 'You receive a comprehensive written proposal with material options, pricing, timeline, and warranty details.' },
              { step: '03', title: 'Material Selection', desc: 'Choose your roofing material, color, and style with guidance from our experienced consultants.' },
              { step: '04', title: 'Expert Installation', desc: 'Our certified crews complete the installation with precision, maintaining a clean worksite daily.' },
              { step: '05', title: 'Final Inspection', desc: 'We conduct a thorough quality inspection, clean up completely, and register your manufacturer warranty.' },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,149,0,0.08)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent)' }}>{item.step}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, textTransform: 'none', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== FINANCING ====== */}
      <section id="financing" className="section-alt" style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Financing Options</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem' }}>Affordable Roof Financing</h2>
            <p style={{ marginTop: '1rem', maxWidth: '42rem', margin: '1rem auto', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>A new roof is a major investment. We offer flexible financing options to make quality roofing accessible to every homeowner, with fast approvals and competitive rates.</p>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { title: '0% Interest', period: '12 months', desc: 'No interest if paid in full within 12 months. Perfect for homeowners who want to spread payments without added cost.', tag: 'Most Popular' },
              { title: 'Low Monthly', period: '60 months', desc: 'Fixed monthly payments as low as $149/mo for 60 months at 6.99% APR. Get your new roof now and pay over time.', tag: 'Lowest Payment' },
              { title: 'Same-As-Cash', period: '6 months', desc: 'No payments and no interest for 6 months. Ideal for homeowners expecting insurance reimbursement or bonus income.', tag: 'No Payments' },
              { title: 'Insurance Help', period: 'Full Coverage', desc: 'We work directly with your insurance company to maximize your storm damage claim, often covering your full deductible.', tag: 'Storm Damage' },
            ].map((option) => (
              <div key={option.title} className="card hover-lift" style={{ position: 'relative', padding: '2rem', borderRadius: '6px' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-heading)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', background: 'rgba(255,149,0,0.1)', border: '1px solid rgba(255,149,0,0.3)', padding: '3px 10px', borderRadius: '2px' }}>{option.tag}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginBottom: '0.25rem' }}>{option.title}</h3>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem' }}>{option.period}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>{option.desc}</p>
                <button className="project-btn-outline" style={{ width: '100%', fontSize: '0.8rem' }}>Apply Now</button>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== GALLERY ====== */}
      <section id="gallery" style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Project Gallery</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem' }}>Recent Roof Installations</h2>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop', label: 'Architectural Shingles' },
              { img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop', label: 'Metal Standing Seam' },
              { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop', label: 'Tile Roof Install' },
              { img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop', label: 'Commercial Flat Roof' },
              { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', label: 'Office Complex' },
              { img: 'https://images.unsplash.com/photo-1631545806609-d2e4c3befed5?w=400&h=300&fit=crop', label: 'Storm Restoration' },
              { img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop', label: 'Slate Roof' },
              { img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop', label: 'Gutter System' },
            ].map((item) => (
              <div key={item.label} className="gallery-item">
                <img src={item.img} alt={item.label} />
                <span className="gallery-label">{item.label}</span>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== REVIEWS ====== */}
      <section id="reviews" className="section-alt" style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div className="section-header reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge">Testimonials</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem' }}>Homeowner Reviews</h2>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { name: 'Karen P.', text: 'Skyline replaced our entire roof after hail damage and handled the insurance process seamlessly. The crew was professional, fast, and left our property spotless. The new architectural shingles look incredible and we have already received compliments from neighbors.', loc: 'Morristown, NJ' },
              { name: 'Steve B.', text: 'We chose standing seam metal and it was the best home improvement decision we ever made. Skyline installed it in 3 days and the quality is outstanding. Our energy bills dropped noticeably and the curb appeal went through the roof. Pun intended!', loc: 'Princeton, NJ' },
              { name: 'Angela M.', text: 'After getting 5 quotes, Skyline was not the cheapest but they were by far the most professional and thorough. They found issues the other contractors missed and their warranty was significantly better. Worth every penny for the peace of mind.', loc: 'Westfield, NJ' },
            ].map((r) => (
              <div key={r.name} className="card hover-lift" style={{ padding: '2rem' }}>
                <div className="stars" style={{ marginBottom: '1rem' }}>★★★★★
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>{r.text}</p>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{r.name}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.loc}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            ))}
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== CONTACT / BOOKING ====== */}
      <section id="contact" style={{ padding: '80px 1.5rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div className="reveal-left">
            <span className="badge">Get Started</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 700, textTransform: 'none', letterSpacing: '0.04em', marginTop: '1rem', lineHeight: 1.05 }}>Request Your Free Estimate</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: '1.5rem 0 2rem' }}>
              Ready for a roof that protects your home and enhances its value? Fill out the form and our team will schedule your free, no-obligation roof inspection within 24 hours. We provide detailed written proposals with multiple material and financing options.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '📞', label: 'Phone', value: '(800) 555-7890' },
                { icon: '✉️', label: 'Email', value: 'info@skylineroofing.com' },
                { icon: '🕐', label: 'Hours', value: 'Mon-Fri 7am-6pm, Sat 8am-2pm' },
                { icon: '🚨', label: 'Emergency', value: '24/7 Storm Response' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>{item.label}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item.value}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                  
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '6px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.75rem' }}>Certifications
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['GAF Master Elite', 'CertainTeed SELECT', 'OSHA Certified', 'EPA Lead-Safe'].map((cert) => (
                  <span key={cert} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)', background: 'rgba(255,149,0,0.06)', border: '1px solid var(--border)', padding: '4px 12px', borderRadius: '3px' }}>{cert}</span>
                ))}
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div className="reveal-scale">
            <div className="card hover-lift" style={{ padding: '2rem', borderRadius: '6px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'none', marginBottom: '1.5rem' }}>Free Roof Estimate</h3>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Estimate Requested!</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We will contact you within 24 hours to schedule your free inspection.</p>
                
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                  <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    <option value="">Select Service</option>
                    <option>Roof Replacement</option>
                    <option>Roof Repair</option>
                    <option>Storm Damage</option>
                    <option>Roof Inspection</option>
                    <option>Commercial Roofing</option>
                    <option>Gutters & Flashing</option>
                  </select>
                  <select value={formData.roof_age} onChange={(e) => setFormData({ ...formData, roof_age: e.target.value })}>
                    <option value="">Current Roof Age</option>
                    <option>Under 10 years</option>
                    <option>10-20 years</option>
                    <option>20-30 years</option>
                    <option>Over 30 years</option>
                    <option>Unknown</option>
                  </select>
                  <textarea placeholder="Describe your roofing needs..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ resize: 'vertical' }} />
                  <button type="submit" className="project-btn-primary" style={{ width: '100%' }}>Request Free Estimate</button>
                </form>
              )}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>Skyline Roofing
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>GAF Master Elite certified roofing contractor delivering premium roof installations, repairs, and replacements. Protecting homes since 1999.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>License #RC-5829371</p>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--accent)' }}>Services</h4>
              {['Roof Replacement', 'Roof Repair', 'Storm Damage', 'Inspections', 'Commercial', 'Gutters'].map((s) => (
                <div key={s} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', cursor: 'pointer' }}>{s}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--accent)' }}>Materials</h4>
              {['Architectural Shingles', 'Standing Seam Metal', 'Clay & Concrete Tile', 'Natural Slate', 'Flat Roof Systems', 'Solar Shingles'].map((s) => (
                <div key={s} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', cursor: 'pointer' }}>{s}
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              ))}
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--accent)' }}>Contact</h4>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 2 }}>
                <div>(800) 555-7890
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <div>info@skylineroofing.com
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
                <div>321 Summit Ridge<br />Morristown, NJ 07960
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
              
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
            
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © 2026 Skyline Roofing. All rights reserved. | Privacy Policy | Terms of Service
          
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
        
      <section className="section reveal">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>How long does it take to build a website?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Most projects take 2-4 weeks from start to finish, depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>Do you offer ongoing maintenance?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Yes! We offer monthly maintenance packages that include updates, security monitoring, and 24/7 support.</p>
            </details>
            <details className="card" style={{ padding: '1.5rem' }}>
              <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>What's included in your pricing?</summary>
              <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our pricing includes design, development, content integration, SEO optimization, and 30 days of post-launch support.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
      </footer>
    </>
  );
}
