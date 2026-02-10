import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Medical & Dental Cleaning | Greater Manchester | ZenClean",
  description:
    "CQC compliant specialist cleaning for dental practices, GP surgeries, and medical clinics across Greater Manchester. Transparent pricing, HTM 01-05 certified.",
};

const services = [
  {
    title: "Dental Practice Cleaning",
    desc: "HTM 01-05 compliant cleaning for dental surgeries. Decontamination rooms, treatment areas, and patient spaces — cleaned to the highest clinical standards.",
    href: "/services/dental-cleaning",
    icon: "🦷",
  },
  {
    title: "GP & Medical Cleaning",
    desc: "Specialist cleaning for GP surgeries and private medical clinics. Infection control protocols that meet CQC and NHS standards.",
    href: "/services/medical-cleaning",
    icon: "🏥",
  },
  {
    title: "Surgical Clinic Cleaning",
    desc: "Theatre-grade cleaning for surgical and procedure clinics. From cosmetic surgery centres to day-case facilities across Greater Manchester.",
    href: "/services/surgical-cleaning",
    icon: "⚕️",
  },
];

const trustBadges = [
  { label: "CQC Compliant", icon: "✓" },
  { label: "HTM 01-05 Certified", icon: "✓" },
  { label: "DBS Checked Staff", icon: "✓" },
  { label: "NHS Standards", icon: "✓" },
  { label: "BICSc Trained", icon: "✓" },
  { label: "Fully Insured (£5M+)", icon: "✓" },
];

const whyUs = [
  {
    title: "Specialist Focus",
    desc: "We only clean healthcare premises. No offices, no retail — just medical, dental, and surgical facilities. That focus means higher standards.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees. No mysterious quotes. We publish our pricing because we believe in honesty — something rare in this industry.",
  },
  {
    title: "Compliance Guaranteed",
    desc: "CQC-ready documentation, audit trails, and trained staff. We don't just clean — we help you pass inspections with confidence.",
  },
  {
    title: "Local Manchester Team",
    desc: "We're not a faceless franchise. We're a Greater Manchester business serving Greater Manchester clinics — with the responsiveness that demands.",
  },
];

const testimonials = [
  {
    quote: "Switching to ZenClean was the best decision we made for our practice. The team understands dental compliance inside out — our last CQC inspection was spotless.",
    name: "Dr Sarah Mitchell",
    role: "Principal Dentist, Didsbury Dental Care",
  },
  {
    quote: "They actually know what HTM 01-05 means. That alone sets them apart from every other cleaning company we've tried. Brilliant service.",
    name: "James Hartley",
    role: "Practice Manager, Salford Medical Centre",
  },
  {
    quote: "Transparent pricing, reliable staff, and they genuinely care about infection control. Our patients notice the difference.",
    name: "Dr Priya Sharma",
    role: "Clinical Director, Stockport Aesthetics Clinic",
  },
];

const boroughs = [
  "Manchester City Centre", "Salford", "Stockport", "Bolton", "Wigan",
  "Oldham", "Tameside", "Trafford", "Bury", "Rochdale",
  "Didsbury", "Chorlton", "Altrincham", "Sale", "Cheadle",
  "Bramhall", "Prestwich", "Whitefield", "Eccles", "Swinton",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Serving 400+ healthcare practices across Greater Manchester
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Specialist Clinical Cleaning for Manchester&apos;s Healthcare Practices
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed mb-8 max-w-2xl">
              CQC compliant, HTM 01-05 certified cleaning for dental surgeries, GP practices, and medical clinics. Transparent pricing. No hidden fees. Just impeccable clinical standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
                Get Your Free Quote
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-heading font-semibold rounded-lg hover:bg-white/10 transition-all text-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 justify-center">
                <span className="w-5 h-5 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold">{badge.icon}</span>
                <span className="text-sm font-medium text-gray-700">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Specialist Cleaning for Every Clinical Environment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus exclusively on healthcare premises — because clinical environments demand clinical expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link href={svc.href} key={svc.title} className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-teal-200 hover:shadow-lg transition-all duration-300">
                <span className="text-4xl mb-4 block">{svc.icon}</span>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{svc.desc}</p>
                <span className="text-teal-700 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ZenClean */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Manchester&apos;s Clinics Choose ZenClean
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
            Trusted by Healthcare Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-teal-50/50 border border-teal-100 rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-heading font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage area */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Covering All of Greater Manchester
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From Manchester city centre to every borough — we&apos;re the local specialist cleaning partner for healthcare practices across the region.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {boroughs.map((b) => (
              <span key={b} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                📍 {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions from practice managers and clinic owners across Greater Manchester.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What makes healthcare cleaning different from regular commercial cleaning?",
                a: "Healthcare cleaning requires hospital-grade disinfectants with specific BS EN certifications, colour-coded equipment following NHS protocols, documented cleaning schedules, trained staff with IPC qualifications, and compliance with CQC standards. A standard office cleaner simply isn't equipped for clinical environments.",
              },
              {
                q: "Are your staff DBS checked?",
                a: "Yes — every member of our cleaning team holds an enhanced DBS check. This is non-negotiable for anyone working in healthcare premises where patient data and medications are present.",
              },
              {
                q: "How quickly can you start a new contract?",
                a: "Typically within 5-7 working days of signing. We conduct a site visit first to understand your premises, then assign a dedicated team and build a cleaning schedule tailored to your practice hours.",
              },
              {
                q: "Do you provide the cleaning documentation CQC inspectors ask for?",
                a: "Yes — as standard, not as an add-on. You'll receive daily signed cleaning logs, monthly audit reports, staff training certificates, COSHH data sheets, and risk assessments. Everything an inspector expects to see.",
              },
              {
                q: "Can you clean outside normal practice hours?",
                a: "Absolutely. Most of our clients prefer early morning or evening cleaning so there's zero disruption to patient appointments. We also offer between-session turnarounds for busy practices.",
              },
              {
                q: "Do you lock us into long contracts?",
                a: "No. We operate on monthly rolling agreements. We believe the quality of our work should keep you with us — not a contract clause. You can cancel with 30 days' notice at any time.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white border border-gray-200 rounded-xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-semibold text-gray-900 hover:text-teal-700 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-teal-600 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Ready for a Cleaner, Compliant Practice?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a custom quote in 24 hours. No obligation, no pressure — just transparent pricing from Manchester&apos;s specialist medical cleaning company.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
            Get Your Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
