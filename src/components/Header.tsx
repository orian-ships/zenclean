"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Services", href: "/services/dental-cleaning", children: [
    { label: "Dental Cleaning", href: "/services/dental-cleaning" },
    { label: "Medical Cleaning", href: "/services/medical-cleaning" },
    { label: "Surgical Cleaning", href: "/services/surgical-cleaning" },
  ]},
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">Z</span>
            </div>
            <span className="font-heading font-bold text-xl text-gray-900">
              Zen<span className="text-teal-700">Clean</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="text-gray-600 hover:text-teal-700 font-medium text-sm transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-colors">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="text-gray-600 hover:text-teal-700 font-medium text-sm transition-colors">
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-sm !py-2.5 !px-5">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-3 text-gray-700 font-medium">
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-600 hover:text-teal-700">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-gray-700 font-medium hover:text-teal-700">
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full text-center mt-4">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
