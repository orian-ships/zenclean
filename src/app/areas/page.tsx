import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve — Healthcare Cleaning Across Greater Manchester | ZenClean",
  description:
    "ZenClean provides specialist medical and dental cleaning services across Greater Manchester — Bolton, Stockport, Bury, Manchester city centre, and surrounding areas.",
  keywords: [
    "healthcare cleaning Greater Manchester",
    "medical cleaning Manchester",
    "dental cleaning Manchester areas",
    "CQC cleaning Bolton Stockport Bury",
  ],
};

const areas = [
  {
    name: "Manchester City Centre",
    description:
      "Private clinics, dental surgeries, and specialist practices across the city centre, Deansgate, Spinningfields, and the Northern Quarter.",
    blogSlug: "healthcare-cleaning-services-greater-manchester",
  },
  {
    name: "Bolton",
    description:
      "Medical centres, GP surgeries, dental practices, and healthcare clinics across Bolton, Farnworth, Horwich, and Westhoughton.",
    blogSlug: "medical-cleaning-services-bolton",
  },
  {
    name: "Stockport",
    description:
      "Dental surgeries and medical practices in Stockport town centre, Bramhall, Cheadle, Heaton Moor, Hazel Grove, and Marple.",
    blogSlug: "dental-cleaning-services-stockport",
  },
  {
    name: "Bury",
    description:
      "Healthcare premises across Bury, Prestwich, Whitefield, Radcliffe, Ramsbottom, and Tottington.",
    blogSlug: "medical-dental-cleaning-services-bury",
  },
  {
    name: "Salford & Eccles",
    description:
      "GP surgeries, walk-in centres, and dental practices across Salford, Eccles, Swinton, and Worsley.",
    blogSlug: null,
  },
  {
    name: "Oldham",
    description:
      "Medical and dental cleaning for practices in Oldham, Royton, Shaw, Failsworth, and Uppermill.",
    blogSlug: null,
  },
  {
    name: "Rochdale",
    description:
      "Healthcare cleaning services for Rochdale, Middleton, Heywood, and Littleborough practices.",
    blogSlug: null,
  },
  {
    name: "Tameside",
    description:
      "Specialist cleaning for clinics and surgeries in Ashton-under-Lyne, Stalybridge, Hyde, Denton, and Droylsden.",
    blogSlug: null,
  },
  {
    name: "Trafford",
    description:
      "Medical and dental cleaning across Altrincham, Sale, Stretford, Urmston, and Trafford Park clinics.",
    blogSlug: null,
  },
  {
    name: "Wigan",
    description:
      "Healthcare premises in Wigan, Leigh, Atherton, Standish, and Hindley.",
    blogSlug: null,
  },
];

export default function Areas() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-4">
            Areas We Serve
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Specialist medical and dental cleaning across every borough of
            Greater Manchester. CQC-compliant, locally based, always reliable.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {areas.map((area) => (
              <div
                key={area.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <h2 className="font-heading text-xl font-bold text-gray-900 mb-2">
                  {area.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="text-teal-700 font-semibold text-sm hover:underline"
                  >
                    Get a quote →
                  </Link>
                  {area.blogSlug && (
                    <Link
                      href={`/blog/${area.blogSlug}`}
                      className="text-gray-500 text-sm hover:text-teal-700 transition-colors"
                    >
                      Read more
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 rounded-2xl p-8 sm:p-12 text-center border border-teal-100">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Area?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              We cover the entire Greater Manchester region and are expanding
              into surrounding areas. Get in touch — if we can reach you, we can
              clean for you.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
