import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Pricing for Medical & Dental Cleaning",
  description:
    "No hidden fees. See our transparent pricing for dental practice, GP surgery, and surgical clinic cleaning across Greater Manchester. Custom quote in 24 hours.",
};

const tiers = [
  {
    category: "Dental Practice",
    icon: "🦷",
    href: "/services/dental-cleaning",
    plans: [
      { name: "Small", desc: "1–2 chairs", price: "£150–£200", features: ["5x weekly cleaning", "Surgery wipe-down", "Weekly decon room clean", "Cleaning logs"] },
      { name: "Medium", desc: "3–4 chairs", price: "£200–£300", popular: true, features: ["5–6x weekly", "Full surgery cleaning", "2x decon room deep clean", "Monthly audit reports", "Priority support"] },
      { name: "Large", desc: "5+ chairs", price: "£300+", features: ["6–7x weekly", "Multi-surgery rotation", "Daily decon service", "Weekly reports", "Account manager", "Emergency callout"] },
    ],
  },
  {
    category: "GP Surgery",
    icon: "🏥",
    href: "/services/medical-cleaning",
    plans: [
      { name: "Small", desc: "1–3 rooms", price: "£200–£280", features: ["5x weekly", "Treatment room sanitisation", "Waiting area clean", "Documented logs"] },
      { name: "Medium", desc: "4–6 rooms", price: "£280–£400", popular: true, features: ["5–6x weekly", "Full infection control", "Monthly deep clean", "Audit documentation", "Dedicated team"] },
      { name: "Large", desc: "7+ rooms", price: "£400+", features: ["Daily service", "Multiple areas", "Weekly compliance reports", "Quarterly deep cleans", "Account manager"] },
    ],
  },
  {
    category: "Surgical / Medical Clinic",
    icon: "⚕️",
    href: "/services/surgical-cleaning",
    plans: [
      { name: "Small", desc: "1 procedure room", price: "£300–£400", features: ["5x weekly", "Terminal cleaning", "Clinical waste mgmt", "Documented logs"] },
      { name: "Medium", desc: "2–3 rooms", price: "£400–£550", popular: true, features: ["Daily service", "Multi-room rotation", "Air quality mgmt", "Monthly deep clean", "Compliance reports"] },
      { name: "Large", desc: "4+ rooms", price: "£550+", features: ["Twice-daily cleaning", "Dedicated team", "Real-time verification", "Weekly audits", "24/7 emergency"] },
    ],
  },
];

const addOns = [
  { name: "One-Off Deep Clean", price: "From £350", desc: "Full premises deep clean — ideal before CQC inspections" },
  { name: "CQC Preparation Clean", price: "From £300", desc: "Targeted cleaning and documentation review before inspection" },
  { name: "Emergency / Outbreak Clean", price: "From £500", desc: "Rapid response decontamination for spills or outbreaks" },
  { name: "Fogging / ULV Disinfection", price: "From £150", desc: "Whole-room antimicrobial fogging for maximum coverage" },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">
            Transparent Pricing. No Hidden Fees.
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-4">
            We believe healthcare practices deserve honest pricing. Here&apos;s what specialist clinical cleaning actually costs — no mysterious &ldquo;call for a quote&rdquo; games.
          </p>
          <p className="text-teal-200 text-sm">Custom quote delivered within 24 hours after a free site assessment.</p>
        </div>
      </section>

      {tiers.map((tier) => (
        <section key={tier.category} className="section-padding border-b border-gray-100 last:border-0">
          <div className="container-narrow">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-3xl">{tier.icon}</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900">{tier.category}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {tier.plans.map((plan) => (
                <div key={`${tier.category}-${plan.name}`} className={`rounded-xl p-8 border-2 ${plan.popular ? "border-teal-700 shadow-lg relative" : "border-gray-200"}`}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</span>}
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                  <p className="font-heading text-3xl font-extrabold text-teal-700 mb-1">{plan.price}</p>
                  <p className="text-xs text-gray-500 mb-6">per week</p>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-accent font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={plan.popular ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}>
                    Get Exact Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-10 text-center">Add-On Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white rounded-xl p-6 border border-gray-200 flex justify-between items-start">
                <div>
                  <h3 className="font-heading font-bold text-gray-900 mb-1">{addon.name}</h3>
                  <p className="text-sm text-gray-600">{addon.desc}</p>
                </div>
                <span className="font-heading font-bold text-teal-700 whitespace-nowrap ml-4">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">How Our Pricing Works</h2>
          <div className="text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              The prices above are guide ranges based on typical practices we serve. Your exact quote depends on your specific premises — size, layout, number of rooms, cleaning frequency, and any specialist requirements.
            </p>
            <p>
              <strong>Here&apos;s our process:</strong> We visit your premises for a free assessment (usually 30 minutes). We walk through every area, understand your requirements, and then deliver a fixed-price monthly quote within 24 hours. No surprises. No escalation clauses. Just honest pricing.
            </p>
            <p>
              Every quote includes all cleaning products, equipment, PPE, staff training, insurance, documentation, and account management. The price you see is the price you pay.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-700 text-white section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Get Your Exact Quote in 24 Hours</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free site assessment and we&apos;ll deliver a transparent, fixed-price quote — no obligation, no pressure.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-teal-800 font-heading font-bold rounded-lg hover:bg-teal-50 transition-all shadow-lg text-lg">
            Book Free Assessment →
          </Link>
        </div>
      </section>
    </>
  );
}
