export default function GovernmentContractSite() {
  return (
    <div className="bg-[#0D1B2A] text-[#F0ECE3] min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Design & Develop Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-xl font-semibold tracking-wide uppercase">Design & Develop</h1>
            <h2 className="text-sm tracking-wider text-[#C3C3C3] uppercase">Apparel Group</h2>
          </div>
        </div>
        <div className="text-sm text-[#C3C3C3] font-medium">Precision and Performance at Scale</div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20 px-6" style={{ backgroundImage: "url('/american-flag-overlay.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F0ECE3] mb-6">Built to Outfit Government with Strength and Precision</h1>
          <p className="text-lg text-[#D1D0CE] max-w-3xl mx-auto">
            Specializing in uniforms, tactical gear, screen printing, and embroidery for city, state, and federal agencies.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-l-4 border-[#C0C0C0] pl-4">Core Government Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#1B263B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Uniform Manufacturing</h3>
            <p className="text-sm text-[#C3C3C3]">
              Contract-grade garments produced for tactical units, public safety, and federal operations.
            </p>
          </div>
          <div className="bg-[#1B263B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Embroidery & Branding</h3>
            <p className="text-sm text-[#C3C3C3]">
              Precision embroidery including law enforcement insignia, federal emblems, and compliant labeling.
            </p>
          </div>
          <div className="bg-[#1B263B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Contract Fulfillment</h3>
            <p className="text-sm text-[#C3C3C3]">
              Fast, scalable delivery of high-volume orders across local, state, and federal contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#1C1C1C] py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider">Registered & Verified</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#C3C3C3]">
          <div>SAM Registered</div>
          <div>UEI: H2R6A2N7YP48</div>
          <div>DUNS Legacy Verified</div>
          <div>NAICS: 315990, 323113</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Fulfill Your Mission</h2>
        <p className="text-[#D1D0CE] mb-8">
          Contact us for agency procurement, proposal requests, or contract performance inquiries.
        </p>
        <a href="mailto:info@danddapparelgroup.com" className="bg-[#C0C0C0] text-black font-bold py-3 px-6 rounded-full hover:bg-white transition">
          info@danddapparelgroup.com
        </a>
      </section>

      <footer className="bg-[#0D1B2A] py-6 text-center text-sm text-[#777] border-t border-[#1F2A3C]">
        &copy; {new Date().getFullYear()} Design & Develop Apparel Group LLC. All Rights Reserved.
      </footer>
    </div>
  );
}
