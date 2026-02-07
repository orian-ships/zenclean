import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ZenClean — Specialist Medical Cleaning Manchester",
  description:
    "Learn about ZenClean — Greater Manchester's specialist cleaning company for dental practices, GP surgeries, and medical clinics. Our mission, standards, and team.",
};

const standards = [
  { name: "BICSc Trained", desc: "All staff trained to British Institute of Cleaning Science standards — the industry benchmark for professional cleaning competency." },
  { name: "HTM 01-05 Compliant", desc: "Our dental cleaning teams are specifically trained in Health Technical Memorandum 01-05 — the decontamination standard for primary care dental practices." },
  { name: "CQC Regulation 15 Ready", desc: "We understand what CQC inspectors look for under Regulation 15 (Premises and Equipment) and build our processes to generate the evidence you need." },
  { name: "NHS Colour-Coded System", desc: "We use the NHS four-colour cleaning system to prevent cross-contamination between clinical and non-clinical areas." },
  { name: "COSHH Compliant", desc: "Full compliance with Control of Substances Hazardous to Health regulations — proper storage, handling, and documentation of all cleaning chemicals." },
  { name: "DBS Checked Staff", desc: "Every member of our team undergoes enhanced DBS checks before entering any healthcare premises." },
];

const boroughs = [
  { name: "Manchester City Centre", highlight: true },
  { name: "Salford", highlight: true },
  { name: "Stockport", highlight: true },
  { name: "Trafford", highlight: true },
  { name: "Bolton", highlight: false },
  { name: "Wigan", highlight: false },
  { name: "Oldham", highlight: false },
  { name: "Tameside", highlight: false },
  { name: "Bury", highlight: false },
  { name: "Rochdale", highlight: false },
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">
              About ZenClean
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              We&apos;re Greater Manchester&apos;s specialist cleaning company for healthcare practices. Not a franchise. Not a generalist. A dedicated partner for dental, medical, and surgical clinics.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Healthcare premises have cleaning requirements that are fundamentally different from offices, shops, or warehouses. They need specialist knowledge, specialist products, and specialist processes. Yet most cleaning companies treat a dental surgery the same as a call centre.
              </p>
              <p>
                We started ZenClean because we believed healthcare practices deserved better. Better training. Better products. Better documentation. And — crucially — better transparency on pricing.
              </p>
              <p>
                Our mission is simple: <strong>to be the cleaning company that healthcare professionals actually trust</strong>. Not because of slick marketing, but because of consistent, compliant, reliable cleaning that helps you focus on what matters — your patients.
              </p>
            </div>

            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6 mt-16">Why We Specialise</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Generalist cleaning companies serve everyone and specialise in nobody. They send the same cleaner who did an office last night to clean your dental surgery this morning — with the same products, the same methods, and the same lack of understanding about infection control.
              </p>
              <p>
                We chose to focus exclusively on healthcare because the stakes are higher. CQC inspections can shut you down. Infection outbreaks can harm patients. Cross-contamination can end careers. Healthcare cleaning isn&apos;t a service line for us — it&apos;s our entire business.
              </p>
              <p>
                That focus means every pound we invest goes into healthcare-specific training, healthcare-approved products, and healthcare-compliant processes. It&apos;s the only way to do this properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Our Standards &amp; Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-bold text-teal-700 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6 text-center">Coverage Area</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            We serve healthcare practices across all ten boroughs of Greater Manchester. Our core coverage area includes Manchester city centre, Salford, Stockport, and Trafford — with full service across the wider region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {boroughs.map((b) => (
              <span key={b.name} className={`px-4 py-2 rounded-full text-sm font-medium border ${b.highlight ? "bg-teal-50 border-teal-200 text-teal-700" : "bg-white border-gray-200 text-gray-700"}`}>
                📍 {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-700 text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;d love to hear about your practice and show you what specialist cleaning looks like. Get in touch for a free, no-obligation assessment.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
