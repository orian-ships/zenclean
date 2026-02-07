import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GP Surgery & Medical Clinic Cleaning Manchester",
  description:
    "CQC compliant cleaning for GP surgeries and private medical clinics across Greater Manchester. Infection control certified, DBS-checked staff, transparent pricing.",
};

const included = [
  "Consulting and treatment room cleaning",
  "Reception and waiting area sanitisation",
  "Clinical waste area management",
  "Touch-point disinfection (door handles, light switches, arm rests)",
  "Washroom deep cleaning and restocking",
  "Kitchen and staff area cleaning",
  "Floor care with healthcare-grade disinfectants",
  "High-level dusting and air vent cleaning",
  "Colour-coded cleaning protocols (NHS standard)",
  "Documented cleaning logs for CQC evidence",
];

export default function MedicalCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">🏥 Medical Specialist</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">
              GP Surgery &amp; Medical Clinic Cleaning
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed mb-8">
              Specialist cleaning for GP practices, private clinics, and medical centres. CQC compliant, infection control certified, and tailored to healthcare environments.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
              Get a Medical Cleaning Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Cleaning That Meets CQC Standards
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  GP surgeries see dozens — sometimes hundreds — of patients daily. Each one touches door handles, sits in waiting chairs, and uses shared facilities. That footfall creates infection risks that generic cleaners simply aren&apos;t equipped to handle.
                </p>
                <p>
                  CQC inspectors look for evidence of systematic cleaning: documented schedules, appropriate products, trained staff, and audit trails. A mop and bucket from a generalist cleaning company won&apos;t cut it.
                </p>
                <p>
                  ZenClean provides GP surgeries with cleaning that generates the evidence CQC inspectors want to see. Our teams use NHS colour-coded systems, healthcare-approved disinfectants, and provide documented cleaning logs after every visit.
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
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6 text-center">Out-of-Hours Cleaning — Zero Disruption</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              We clean your surgery when your patients aren&apos;t there. Evening and early morning slots mean your premises are spotless when you open — without any disruption to appointments or staff.
            </p>
            <p>
              Our teams are key-holder trained, alarm-code vetted, and fully DBS checked. Your premises, patient data, and equipment are secure.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Pricing Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "Small Surgery", desc: "1–3 consulting rooms", price: "£200–£280/week", features: ["5x weekly cleaning", "Treatment room sanitisation", "Waiting area daily clean", "Documented cleaning logs"] },
              { size: "Medium Surgery", desc: "4–6 consulting rooms", price: "£280–£400/week", features: ["5–6x weekly cleaning", "Full infection control protocols", "Monthly deep clean included", "Audit-ready documentation", "Dedicated team"], popular: true },
              { size: "Large Practice", desc: "7+ rooms / health centre", price: "£400+/week", features: ["Daily cleaning service", "Multiple treatment areas", "Weekly compliance reports", "Quarterly deep cleans", "Account manager", "Emergency callout"] },
            ].map((tier) => (
              <div key={tier.size} className={`rounded-xl p-8 border-2 ${tier.popular ? "border-teal-700 shadow-lg relative" : "border-gray-200"}`}>
                {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{tier.size}</h3>
                <p className="text-sm text-gray-500 mb-4">{tier.desc}</p>
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
        </div>
      </section>

      <section className="bg-teal-700 text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Book a Free Surgery Assessment</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;ll visit your practice, understand your cleaning needs, and deliver a transparent quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
            Book Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
