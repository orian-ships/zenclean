import Link from "next/link";

const boroughs = [
  "Manchester", "Salford", "Stockport", "Bolton", "Wigan",
  "Oldham", "Tameside", "Trafford", "Bury", "Rochdale",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">Z</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Zen<span className="text-teal-400">Clean</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Specialist clinical cleaning for dental practices, GP surgeries, and medical clinics across Greater Manchester.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>📞 0161 000 0000</p>
              <p>✉️ hello@zenclean.co.uk</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/dental-cleaning" className="hover:text-teal-400 transition-colors">Dental Practice Cleaning</Link></li>
              <li><Link href="/services/medical-cleaning" className="hover:text-teal-400 transition-colors">GP & Medical Cleaning</Link></li>
              <li><Link href="/services/surgical-cleaning" className="hover:text-teal-400 transition-colors">Surgical Clinic Cleaning</Link></li>
              <li><Link href="/pricing" className="hover:text-teal-400 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Coverage Area</h3>
            <div className="flex flex-wrap gap-2">
              {boroughs.map((b) => (
                <span key={b} className="text-xs bg-gray-800 px-2.5 py-1 rounded-full text-gray-400">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ZenClean. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CQC Compliant</span>
            <span>HTM 01-05 Certified</span>
            <span>BICSc Trained</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
