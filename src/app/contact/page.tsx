"use client";
import { useState } from "react";
import type { Metadata } from "next";

const clinicTypes = [
  { value: "dental", label: "Dental Practice" },
  { value: "gp", label: "GP Surgery" },
  { value: "medical", label: "Private Medical Clinic" },
  { value: "surgical", label: "Surgical / Procedure Clinic" },
  { value: "other", label: "Other Healthcare" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", clinicName: "", clinicType: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const convexUrl = process.env.NEXT_PUBLIC_CONVEX_SITE_URL || "";
      const res = await fetch(`${convexUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "form" }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", clinicName: "", clinicType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Tell us about your practice and we&apos;ll get back to you within 24 hours with a transparent quote. No obligation, no pressure.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>

              {status === "sent" ? (
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
                  <span className="text-4xl mb-4 block">✅</span>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We&apos;ve received your enquiry and will respond within 24 hours. Keep an eye on your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none transition-all" placeholder="Dr Jane Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none transition-all" placeholder="jane@yourpractice.co.uk" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none transition-all" placeholder="0161 000 0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Practice / Clinic Name</label>
                      <input type="text" value={form.clinicName} onChange={(e) => setForm({ ...form, clinicName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none transition-all" placeholder="Manchester Dental Care" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Type of Practice *</label>
                    <select required value={form.clinicType} onChange={(e) => setForm({ ...form, clinicType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none transition-all bg-white">
                      <option value="">Select type…</option>
                      {clinicTypes.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-700 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your practice, current cleaning arrangements, or any specific requirements…" />
                  </div>
                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto text-lg !py-4 !px-10">
                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                  </button>
                  {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>}
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading font-bold text-gray-900 mb-4">Contact Details</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span>📞</span>
                    <span>0161 000 0000</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>✉️</span>
                    <a href="mailto:hello@zenclean.co.uk" className="text-teal-700 hover:underline">hello@zenclean.co.uk</a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>📍</span>
                    <span>Greater Manchester, UK</span>
                  </p>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
                <h3 className="font-heading font-bold text-gray-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-4 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-teal-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>We&apos;ll review your enquiry and respond within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-teal-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>We&apos;ll arrange a free site assessment at your convenience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-teal-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>You&apos;ll receive a transparent, fixed-price quote — no hidden fees</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-teal-700 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span>If you&apos;re happy, we&apos;ll schedule your first clean within a week</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-heading font-bold text-gray-900 mb-3">Service Hours</h3>
                <p className="text-sm text-gray-600 mb-2">Enquiries: Mon–Fri, 8am–6pm</p>
                <p className="text-sm text-gray-600">Cleaning services: 7 days, including evenings</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
