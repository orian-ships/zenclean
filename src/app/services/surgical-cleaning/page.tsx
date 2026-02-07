import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surgical & Procedure Clinic Cleaning Manchester",
  description:
    "Theatre-grade cleaning for surgical clinics, cosmetic surgery centres, and procedure rooms across Greater Manchester. CQC compliant, infection control certified.",
};

const included = [
  "Operating theatre / procedure room deep cleaning",
  "Recovery area sanitisation",
  "Pre- and post-operative cleaning protocols",
  "Terminal cleaning after surgical procedures",
  "Instrument storage area cleaning",
  "Clinical waste management and disposal zones",
  "HEPA-grade air vent cleaning",
  "Sterile corridor and changing area cleaning",
  "Touch-point decontamination",
  "Full audit trail and compliance documentation",
];

export default function SurgicalCleaning() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">⚕️ Surgical Specialist</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">
              Surgical &amp; Procedure Clinic Cleaning
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed mb-8">
              Theatre-grade cleaning for cosmetic surgery centres, day-case facilities, and procedure clinics. The highest standards of infection control, every time.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
              Get a Surgical Cleaning Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Theatre-Grade Standards for Every Procedure Room
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Surgical environments demand the most rigorous cleaning standards in healthcare. Whether you operate a cosmetic surgery centre in Deansgate, an aesthetics clinic in Didsbury, or a day-case facility in Stockport — the requirements are non-negotiable.
                </p>
                <p>
                  Terminal cleaning between procedures, validated disinfection protocols, air quality management — these aren&apos;t optional extras. They&apos;re the baseline. And they require cleaners who understand surgical infection control, not office cleaners with a mop.
                </p>
                <p>
                  ZenClean&apos;s surgical cleaning teams are trained in operating theatre protocols, understand sterile workflows, and use hospital-grade disinfectants validated for surgical environments. We provide complete documentation for CQC compliance.
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
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Types of Clinics We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cosmetic Surgery Centres", desc: "Facelifts, rhinoplasty, liposuction — full theatre cleaning between procedures" },
              { name: "Aesthetics Clinics", desc: "Botox, fillers, laser treatments — clinical-grade but proportionate cleaning" },
              { name: "Day-Case Surgical Units", desc: "Endoscopy, minor surgery — rapid turnaround cleaning protocols" },
              { name: "Fertility Clinics", desc: "IVF labs, procedure rooms — ultra-clean environments" },
              { name: "Dermatology Clinics", desc: "Biopsy rooms, treatment areas — specialist surface care" },
              { name: "Eye Surgery / Laser Clinics", desc: "Cleanroom-adjacent standards for ophthalmic procedures" },
            ].map((clinic) => (
              <div key={clinic.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-heading font-bold text-gray-900 mb-2">{clinic.name}</h3>
                <p className="text-sm text-gray-600">{clinic.desc}</p>
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
              { size: "Small Clinic", desc: "1 procedure room", price: "£300–£400/week", features: ["5x weekly cleaning", "Terminal clean after procedures", "Clinical waste management", "Documented logs"] },
              { size: "Medium Clinic", desc: "2–3 procedure rooms", price: "£400–£550/week", features: ["Daily cleaning service", "Multiple room rotations", "Air quality management", "Monthly deep clean", "Compliance reports"], popular: true },
              { size: "Large Facility", desc: "4+ rooms / multi-theatre", price: "£550+/week", features: ["Twice-daily cleaning", "Dedicated surgical cleaning team", "Real-time cleaning verification", "Weekly audit reports", "Account manager", "24/7 emergency response"] },
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
          <h2 className="font-heading text-3xl font-bold mb-4">Book a Free Clinic Assessment</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;ll assess your surgical environment, understand your procedures, and deliver a bespoke cleaning plan with transparent pricing.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
            Book Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
