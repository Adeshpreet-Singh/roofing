'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 const el = document.getElementById(id);
 if (el) {
 el.scrollIntoView({ behavior: 'smooth' });
 el.focus();
 }
 setMenuOpen(false);
 };

 const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);
 formData.append('access_key', '[WEB3FORMS_KEY]');

 try {
 const res = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 const data = await res.json();
 if (data.success) {
 setFormStatus('sent');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 const navItems = ['Services', 'Gallery', 'About', 'Reviews', 'Contact'];

 const services = [
 {
 title: 'Roof Inspection',
 desc: 'Comprehensive assessment using drone technology and thermal imaging to detect hidden damage before it becomes costly.',
 price: 'Free',
 icon: '',
 img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
 },
 {
 title: 'Roof Repair',
 desc: 'Leak repair, shingle replacement, flashing fixes, and storm damage restoration. Same-day service available.',
 price: 'From $299',
 icon: '',
 img: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80',
 },
 {
 title: 'Full Replacement',
 desc: 'Complete tear-off and installation with premium materials. 50-year warranty on all new roofs.',
 price: 'From $8,999',
 icon: '',
 img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
 },
 {
 title: 'Gutter Systems',
 desc: 'Seamless gutter installation, cleaning, and leaf guard systems to protect your foundation.',
 price: 'From $599',
 icon: '',
 img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
 },
 {
 title: 'Siding Installation',
 desc: 'Vinyl, fiber cement, and wood siding installation and repair. Boost curb appeal and energy efficiency.',
 price: 'From $3,499',
 icon: '',
 img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
 },
 {
 title: 'Emergency Tarp',
 desc: '24/7 emergency response for storm damage. Temporary protection within 2 hours of your call.',
 price: 'From $399',
 icon: '',
 img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
 },
 ];

 const gallery = [
 { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', label: 'Residential Re-Roof', alt: 'Completed residential roof replacement' },
 { src: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80', label: 'Commercial Flat Roof', alt: 'Commercial flat roof installation' },
 { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80', label: 'Storm Damage Repair', alt: 'Storm damage roof repair' },
 { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', label: 'Siding & Gutters', alt: 'New siding and gutter installation' },
 { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', label: 'Gutter System', alt: 'Seamless gutter system installation' },
 { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', label: 'Tile Roof Restoration', alt: 'Tile roof restoration project' },
 ];

 const testimonials = [
 {
 name: 'Thomas Baker',
 role: 'Homeowner',
 text: 'Skyline replaced our 25-year-old roof in just 2 days. The crew was clean, professional, and the final result exceeded expectations. Our home value increased immediately.',
 rating: 5,
 },
 {
 name: 'Patricia Nguyen',
 role: 'Property Developer',
 text: 'We use Skyline for all our development projects. Their pricing is competitive, their work is impeccable, and they always finish on schedule. Highly recommend.',
 rating: 5,
 },
 {
 name: 'Michael Torres',
 role: 'Restaurant Owner',
 text: 'Had a major leak during a storm at 2 AM. Skyline had a crew there within 90 minutes with emergency tarps. They saved our kitchen and dining area from major damage.',
 rating: 5,
 },
 ];

 const financingOptions = [
 { months: '12', rate: '0%', payment: '$0 down', desc: 'Same-as-cash financing with no interest for 12 months.' },
 { months: '60', rate: '4.99%', payment: 'Low monthly', desc: 'Extended financing at a low fixed rate for larger projects.' },
 { months: '84', rate: '6.99%', payment: 'Affordable', desc: 'Maximum flexibility with affordable monthly payments.' },
 ];

 const serviceArea = [
 'Downtown Metro', 'Westside Heights', 'Northgate', 'Lakewood',
 'Riverside', 'Sunnyvale', 'Oak Park', 'Pine Hills',
 'Eastborough', 'Fairview', 'Brookdale', 'Cedar Creek',
 ];

 return (
 <div className="min-h-screen">
 {/* ===== NAV ===== */}
 <header>
 <nav role="navigation" aria-label="Main navigation" className="nav-sticky">
 <div className="nav-inner">
 <div className="flex items-center gap-3">
 <div className="nav-logo" aria-hidden="true"></div>
 <div>
 <h1 className="nav-brand">Skyline</h1>
 <p className="nav-sub">ROOFING</p>
 </div>
 </div>

 <div className="nav-links">
 {navItems.map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 aria-label={`Navigate to ${item} section`}
 className="nav-link"
 >
 {item}
 </button>
 ))}
 <a href="tel:+91 98765 43210" className="btn-primary nav-cta">
 Free Inspection
 </a>
 </div>

 <button
 aria-label={menuOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={menuOpen}
 className="nav-mobile-toggle"
 onClick={() => setMenuOpen(!menuOpen)}
 >
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
 )}
 </svg>
 </button>
 </div>

 {menuOpen && (
 <div className="nav-mobile-menu">
 {navItems.map((item) => (
 <button
 key={item}
 onClick={() => scrollToSection(item.toLowerCase())}
 className="nav-mobile-link"
 >
 {item}
 </button>
 ))}
 <a href="tel:+91 98765 43210" className="btn-primary w-full text-center">
 Free Inspection
 </a>
 </div>
 )}
 </nav>
 </header>

 <main id="main-content" role="main">
 {/* ===== HERO ===== */}
 <section aria-labelledby="hero-heading" className="hero-section">
 <div className="hero-bg-pattern" aria-hidden="true">
 <div className="hero-glow hero-glow-1" />
 <div className="hero-glow hero-glow-2" />
 </div>
 <div className="hero-inner">
 <div className="hero-text">
 <p className="badge reveal">LICENSED ROOFING CONTRACTORS</p>
 <h2 id="hero-heading" className="hero-title reveal stagger-1">
 Protecting What<br />
 <span className="gradient-text">Matters Most.</span>
 </h2>
 <p className="hero-desc reveal stagger-2">
 Expert roofing services backed by 50-year warranties. From inspections to complete
 replacements, we&apos;ve got you covered — rain or shine.
 </p>
 <div className="hero-ctas reveal stagger-3">
 <a href="tel:+91 98765 43210" className="btn-primary btn-lg">
 Free Inspection
 </a>
 <a href="tel:+91 98765 43210" className="btn-outline btn-lg">
 Emergency: 24/7
 </a>
 </div>
 <div className="hero-stats reveal stagger-3">
 <div className="hero-stat">
 <div className="hero-stat-num">8K+</div>
 <div className="hero-stat-label">Roofs Installed</div>
 </div>
 <div className="hero-stat">
 <div className="hero-stat-num">50-Year</div>
 <div className="hero-stat-label">Warranty</div>
 </div>
 <div className="hero-stat">
 <div className="hero-stat-num">24/7</div>
 <div className="hero-stat-label">Emergency</div>
 </div>
 </div>
 </div>
 <div className="hero-image reveal-scale">
 <div className="hero-img-card">
 <img
 src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80"
 alt="Professional roofing work on a residential home"
 />
 </div>
 </div>
 </div>
 </section>

 {/* ===== STORM DAMAGE CTA ===== */}
 <section className="storm-cta reveal" aria-label="Storm damage emergency call to action">
 <div className="storm-cta-inner">
 <div className="storm-cta-icon" aria-hidden="true"></div>
 <div className="storm-cta-text">
 <h2 className="storm-cta-title">Storm Damage?</h2>
 <p className="storm-cta-desc">
 Don&apos;t wait — water damage spreads fast. Our emergency crew responds within 2 hours, day or night.
 </p>
 </div>
 <a href="tel:+91 98765 43210" className="btn-primary btn-lg storm-cta-btn">
 Call Now: +91 98765 43210
 </a>
 </div>
 </section>

 {/* ===== SERVICES ===== */}
 <section id="services" aria-labelledby="services-heading" className="section">
 <div className="section-inner">
 <div className="section-header">
 <p className="badge reveal">WHAT WE DO</p>
 <h2 id="services-heading" className="section-title reveal">Roofing Services</h2>
 <p className="section-desc reveal">
 Complete roofing solutions for residential and commercial properties. Quality materials, expert installation, lasting results.
 </p>
 </div>
 <div className="services-grid stagger-children">
 {services.map((s, i) => (
 <article key={i} className="service-card">
 <div className="service-card-img-wrap">
 <img src={s.img} alt={s.title} className="service-card-img" />
 </div>
 <div className="service-card-body">
 <div className="service-card-icon" aria-hidden="true">{s.icon}</div>
 <h3 className="service-card-title">{s.title}</h3>
 <p className="service-card-desc">{s.desc}</p>
 <div className="service-card-price">{s.price}</div>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* ===== BEFORE/AFTER GALLERY ===== */}
 <section id="gallery" aria-labelledby="gallery-heading" className="section section-alt">
 <div className="section-inner">
 <div className="section-header">
 <p className="badge reveal">OUR WORK</p>
 <h2 id="gallery-heading" className="section-title reveal">Project Gallery</h2>
 <p className="section-desc reveal">
 See the difference expert craftsmanship makes. Every project backed by our satisfaction guarantee.
 </p>
 </div>
 <div className="gallery-grid stagger-children">
 {gallery.map((item, i) => (
 <div key={i} className="gallery-item">
 <img src={item.src} alt={item.alt} />
 <span className="gallery-label">{item.label}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== ABOUT / WHY SKYLINE ===== */}
 <section id="about" aria-labelledby="about-heading" className="section">
 <div className="section-inner">
 <div className="about-grid">
 <div className="about-img-wrap reveal-left">
 <img
 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
 alt="Skyline Roofing team at work on a residential project"
 />
 </div>
 <div className="about-content">
 <p className="badge reveal">WHY SKYLINE</p>
 <h2 id="about-heading" className="section-title reveal">8,000+ Roofs & Counting</h2>
 <p className="section-desc reveal">
 Skyline Roofing has been the trusted name in roofing since 2005. Our GAF Master Elite
 certification places us in the top 2% of roofers nationwide. Every project comes with
 comprehensive warranties and our satisfaction guarantee.
 </p>
 <div className="checklist reveal">
 {[
 'Licensed & Insured',
 'GAF Master Elite Certified',
 '50-Year Warranty Available',
 'Free Inspections',
 'Financing Available',
 'Drone & Thermal Inspections',
 ].map((item, i) => (
 <div key={i} className="check-item">
 <span className="check-icon" aria-hidden="true"></span>
 <span>{item}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ===== FINANCING ===== */}
 <section aria-labelledby="financing-heading" className="section section-alt">
 <div className="section-inner">
 <div className="section-header">
 <p className="badge reveal">FLEXIBLE PAYMENTS</p>
 <h2 id="financing-heading" className="section-title reveal">Financing Options</h2>
 <p className="section-desc reveal">
 Don&apos;t let budget delay critical roof repairs. We offer flexible financing with approved credit.
 </p>
 </div>
 <div className="finance-grid stagger-children">
 {financingOptions.map((opt, i) => (
 <div key={i} className="finance-option">
 <div className="finance-rate">{opt.rate}</div>
 <div className="finance-term">{opt.months} Months</div>
 <div className="finance-payment">{opt.payment}</div>
 <p className="finance-desc">{opt.desc}</p>
 </div>
 ))}
 </div>
 <div className="section-cta reveal">
 <a href="tel:+91 98765 43210" className="btn-outline">
 Ask About Financing
 </a>
 </div>
 </div>
 </section>

 {/* ===== REVIEWS ===== */}
 <section id="reviews" aria-labelledby="reviews-heading" className="section">
 <div className="section-inner">
 <div className="section-header">
 <p className="badge reveal">TESTIMONIALS</p>
 <h2 id="reviews-heading" className="section-title reveal">What Our Clients Say</h2>
 </div>
 <div className="reviews-grid stagger-children">
 {testimonials.map((t, i) => (
 <article key={i} className="review-card">
 <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
 {[...Array(t.rating)].map((_, j) => (
 <span key={j} aria-hidden="true"></span>
 ))}
 </div>
 <p className="review-text">&ldquo;{t.text}&rdquo;</p>
 <div className="review-author">
 <p className="review-name">{t.name}</p>
 <p className="review-role">{t.role}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* ===== SERVICE AREA ===== */}
 <section aria-labelledby="area-heading" className="section section-alt">
 <div className="section-inner">
 <div className="section-header">
 <p className="badge reveal">WHERE WE WORK</p>
 <h2 id="area-heading" className="section-title reveal">Service Area</h2>
 <p className="section-desc reveal">
 Proudly serving the greater metro area and surrounding communities within a 50-mile radius.
 </p>
 </div>
 <div className="area-content">
 <div className="area-map reveal-left">
 <iframe
 title="Skyline Roofing service area map"
 src="[WEBSITE]/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
 width="100%"
 height="350"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 />
 </div>
 <div className="area-list reveal">
 <h3 className="area-list-title">Communities We Serve</h3>
 <div className="area-tags">
 {serviceArea.map((area, i) => (
 <span key={i} className="area-tag">{area}</span>
 ))}
 </div>
 <p className="area-note">
 Don&apos;t see your area? <a href="tel:+91 98765 43210">Call us</a> — we likely serve your neighborhood.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* ===== CONTACT ===== */}
 <section id="contact" aria-labelledby="contact-heading" className="section">
 <div className="section-inner">
 <div className="section-header">
 <p className="badge reveal">GET PROTECTED</p>
 <h2 id="contact-heading" className="section-title reveal">Schedule Your Free Inspection</h2>
 <p className="section-desc reveal">
 Our certified inspectors will assess your roof condition and provide a detailed report
 with recommendations at absolutely no cost.
 </p>
 </div>
 <div className="contact-grid">
 <div className="contact-info reveal-left">
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">24/7 Emergency Line</p>
 <a href="tel:+91 98765 43210" className="contact-value">+91 98765 43210</a>
 </div>
 </div>
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">Email Us</p>
 <a href="mailto:contact@example.com" className="contact-value">contact@example.com</a>
 </div>
 </div>
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">Office Location</p>
 <p className="contact-value">123 Skyline Dr, Suite 100<br />Metro City, ST 10001</p>
 </div>
 </div>
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">Business Hours</p>
 <p className="contact-value">
 Mon–Fri: 7:00 AM – 7:00 PM<br />
 Sat: 8:00 AM – 4:00 PM<br />
 Sun: Emergency Only
 </p>
 </div>
 </div>

 {/* Social links */}
 <div className="social-links">
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">FB</a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">IG</a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="social-link">X</a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">LI</a>
 <a href="https://wa.me/+91 98765 43210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link">WA</a>
 </div>
 </div>

 <div className="contact-form-wrap reveal">
 <form onSubmit={handleFormSubmit} noValidate className="contact-form">
 <input type="hidden" name="subject" value="New Roof Inspection Request — Skyline Roofing" />
 <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />

 <div className="form-field">
 <label htmlFor="name">Your Name</label>
 <input id="name" name="name" type="text" required placeholder="John Smith" />
 </div>
 <div className="form-field">
 <label htmlFor="email">Email</label>
 <input id="email" name="email" type="email" required placeholder="john@example.com" />
 </div>
 <div className="form-field">
 <label htmlFor="phone">Phone</label>
 <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
 </div>
 <div className="form-field">
 <label htmlFor="service-type">Service Needed</label>
 <select id="service-type" name="service" required>
 <option value="">Select a service</option>
 <option value="inspection">Roof Inspection</option>
 <option value="repair">Roof Repair</option>
 <option value="replacement">Full Replacement</option>
 <option value="gutters">Gutter Systems</option>
 <option value="siding">Siding</option>
 <option value="emergency">Emergency Service</option>
 </select>
 </div>
 <div className="form-field">
 <label htmlFor="details">Describe Your Roof Issue</label>
 <textarea id="details" name="message" rows={4} placeholder="Tell us about your roofing needs..." />
 </div>
 <button
 type="submit"
 className="btn-primary btn-lg w-full"
 disabled={formStatus === 'sending'}
 >
 {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? ' Sent! We\'ll call you soon.' : 'Schedule Free Inspection'}
 </button>
 {formStatus === 'error' && (
 <p className="form-error">Something went wrong. Please call us at +91 98765 43210.</p>
 )}
 </form>
 </div>
 </div>
 </div>
 </section>

 {/* ===== FINAL CTA ===== */}
 <section className="final-cta reveal" aria-label="Ready to get started call to action">
 <div className="final-cta-inner">
 <h2 className="final-cta-title">Ready to Protect Your Home?</h2>
 <p className="final-cta-desc">
 Get a free, no-obligation roof inspection from our certified experts today.
 </p>
 <div className="final-cta-buttons">
 <a href="tel:+91 98765 43210" className="btn-primary btn-lg">
 Call +91 98765 43210
 </a>
 <a href="mailto:contact@example.com" className="btn-outline btn-lg">
 Email Us
 </a>
 </div>
 </div>
 </section>
 </main>

 {/* ===== FOOTER ===== */}
 <footer role="contentinfo" className="footer">
 <div className="footer-inner">
 <div className="footer-top">
 <div className="footer-brand">
 <div className="footer-logo" aria-hidden="true"></div>
 <span className="footer-name">Skyline Roofing</span>
 </div>
 <div className="footer-links">
 <a href="tel:+91 98765 43210" className="footer-link">+91 98765 43210</a>
 <a href="mailto:contact@example.com" className="footer-link">contact@example.com</a>
 <a href="https://wa.me/+91 98765 43210" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
 </div>
 <div className="footer-social">
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">FB</a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">IG</a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="social-link">X</a>
 <a href="[WEBSITE]" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">LI</a>
 </div>
 </div>
 <div className="footer-certs">
 Licensed & Insured | GAF Master Elite | NRCA Member
 </div>
 <div className="footer-bottom">
 <p>&copy; 2025 Skyline Roofing. All rights reserved. Contractor License #RC-2005-3341</p>
<div className="text-center py-3 text-xs opacity-50 hover:opacity-80 transition-opacity"><span>Designed by </span><a href="https://adeshpreet.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Adeshpreet Singh</a></div>
 </div>
 </div>
 </footer>
 </div>
 );
}
