import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyline Roofing | Licensed Roofing Contractors | Free Inspection",
  description:
    "Skyline Roofing — expert roof inspection, repair, replacement, gutter systems, and siding. Licensed, insured, GAF Master Elite certified. 50-year warranty. Call [PHONE] for a free inspection.",
  keywords: [
    "roofing contractor",
    "roof repair",
    "roof replacement",
    "roof inspection",
    "gutter installation",
    "siding",
    "storm damage repair",
    "emergency roofing",
    "free roof inspection",
  ],
  openGraph: {
    title: "Skyline Roofing | Licensed Roofing Contractors",
    description:
      "Expert roofing services backed by 50-year warranties. Free inspections, financing available. Call [PHONE].",
    url: "[WEBSITE]",
    siteName: "Skyline Roofing",
    images: [
      {
        url: "/images/photo-1632759145351-1d592919f522.jpg",
        width: 1200,
        height: 630,
        alt: "Skyline Roofing — professional roof installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Roofing | Licensed Roofing Contractors",
    description:
      "Expert roofing services — inspection, repair, replacement. 50-year warranty. Free inspections.",
    images: [
      "/images/photo-1632759145351-1d592919f522.jpg",
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {/* Skip link */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        {/* Emergency storm damage banner */}
        <div className="emergency-banner" role="alert">
          ⚠ STORM DAMAGE? Call our 24/7 emergency line:{" "}
          <a href="tel:[PHONE]">[PHONE]</a>
        </div>

        {children}

        {/* Scroll-reveal observer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        `,
          }}
        />
      </body>
    </html>
  );
}