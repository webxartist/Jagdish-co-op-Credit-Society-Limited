"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-28 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Jagdish Co-op Credit Society Limited <br />
              <span className="text-[#7E22CE]">(मर्या.) मुंबई</span>
            </h1>

            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
              आपल्या सदस्यांसाठी विश्वासार्ह आणि पारदर्शक आर्थिक सेवा. Personal
              Loan, Business Loan, Gold Loan, Home Loan तसेच सुरक्षित Fixed
              Deposit आणि Recurring Deposit योजना उपलब्ध.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/Services"
                className="bg-[#7E22CE] hover:bg-purple-800 text-white px-6 py-3 rounded-md font-medium transition shadow-md"
              >
                View Services
              </Link>

              <Link
                href="/Contact"
                className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-md font-medium transition"
              >
                Contact Us
              </Link>
            </div>

            {/* TRUST TAGS */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="bg-white shadow px-4 py-2 rounded-full">
                ✔ Registered Co-op Society
              </span>
              <span className="bg-white shadow px-4 py-2 rounded-full">
                ✔ Safe & Secure Investment
              </span>
              <span className="bg-white shadow px-4 py-2 rounded-full">
                ✔ Mumbai Based संस्था
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="bg-purple-100 rounded-2xl p-6 shadow-lg">
              <img
                src="/f1.png"
                alt="Jagdish Co-op Credit Society Financial Services"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl px-5 py-4 hidden sm:block">
              <p className="text-sm text-gray-600">Serving Members With</p>
              <p className="text-xl font-bold text-[#7E22CE]">
                Trust & Transparency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
