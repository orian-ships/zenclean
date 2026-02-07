import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Practice Cleaning Services Manchester",
  description:
    "HTM 01-05 compliant dental surgery cleaning across Greater Manchester. Decontamination rooms, surgeries, waiting areas — specialist dental cleaners you can trust.",
};

const included = [
  "Surgery and treatment room deep cleaning",
  "Decontamination room cleaning (HTM 01-05 compliant)",
  "Waiting room and reception sanitisation",
  "Clinical waste area management",
  "Touch-point disinfection protocols",
  "Floor cleaning with healthcare-grade products",
  "Washroom and staff area cleaning",
  "Equipment surface decontamination",
  "Air vent and high-level dusting",
  "Colour-coded cleaning system (NHS standard)",
];

const standards = [
  { name: "HTM 01-05", desc: "Decontamination in primary care dental practices" },
  { name: "CQC Regulation 15", desc: "Premises and equipment standards" },
  { name: "NHS NSOHC 2021", desc: "National Standards of Healthcare Cleanliness" },
  { name: "BICSc Standards", desc: "British Institute of Cleaning Science protocols" },
  { name: "COSHH Compliant", desc: "Control of Substances Hazardous to Health" },
];

export default function DentalCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">🦷 Dental Specialist</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">
              Dental Practice Cleaning Services
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed mb-8">
              Manchester&apos;s only cleaning company built specifically for dental practices. HTM 01-05 compliant, CQC-ready, and trusted by dentists across Greater Manchester.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
              Get a Dental Cleaning Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Why Dental Practices Need Specialist Cleaners
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dental surgeries aren&apos;t offices. They&apos;re clinical environments where aerosol-generating procedures create unique contamination risks. Where decontamination rooms must maintain strict clean/dirty workflows. Where a failed CQC inspection can shut you down.
                </p>
                <p>
                  Generic cleaning companies don&apos;t understand HTM 01-05. They don&apos;t know the difference between your clean zone and dirty zone. They use the wrong products on your dental chair upholstery and wonder why it&apos;s deteriorating.
                </p>
                <p>
                  ZenClean was built for dental practices. Our cleaners are trained in dental-specific infection control protocols, use products approved for clinical environments, and provide the documentation you need for CQC inspections.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">
            Compliance Standards We Meet
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-bold text-teal-700 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Pricing Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "Small Practice", chairs: "1–2 chairs", price: "£150–£200/week", features: ["5x weekly cleaning", "Daily surgery wipe-down", "Weekly decontamination room deep clean", "Documented cleaning logs"] },
              { size: "Medium Practice", chairs: "3–4 chairs", price: "£200–£300/week", features: ["5–6x weekly cleaning", "Full surgery cleaning daily", "Twice-weekly decontamination deep clean", "Monthly audit reports", "Priority support line"], popular: true },
              { size: "Large Practice", chairs: "5+ chairs", price: "£300+/week", features: ["6–7x weekly cleaning", "Multiple surgery rotations", "Daily decontamination room service", "Weekly compliance reports", "Dedicated account manager", "Emergency callout included"] },
            ].map((tier) => (
              <div key={tier.size} className={`rounded-xl p-8 border-2 ${tier.popular ? "border-teal-700 shadow-lg relative" : "border-gray-200"}`}>
                {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{tier.size}</h3>
                <p className="text-sm text-gray-500 mb-4">{tier.chairs}</p>
                <p className="font-heading text-3xl font-extrabold text-teal-700 mb-6">{tier.price}</p>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-accent font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={tier.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}>
                  Get Exact Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            All prices are guide ranges. Your exact quote depends on practice size, layout, and requirements. We&apos;ll visit for a free assessment.
          </p>
        </div>
      </section>

      <section className="bg-teal-700 text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Book a Free Dental Practice Walkthrough</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;ll visit your practice, assess your cleaning needs, and provide a transparent quote within 24 hours. No obligation.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
            Book Free Walkthrough →
          </Link>
        </div>
      </section>
    </>
  );
}
