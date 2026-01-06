export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Lossless Home Solutions
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Ultra High-End Audio & Home Automation Systems
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            We specialize in ultra high-end audio solutions that seamlessly blend into your home's aesthetic.
            Creating truly immersive experiences with custom-built speakers using B&C drivers, Purifi woofers,
            and Powersoft amplifiers and transducers that disappear into the background of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              Our Services
            </a>
          </div>
          <div className="mt-12 pt-12 border-t border-slate-700">
            <p className="text-slate-400 text-sm uppercase tracking-wide mb-2">Service Area</p>
            <p className="text-white text-lg">Las Vegas & Surrounding Areas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
