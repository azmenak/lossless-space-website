export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Since 2020, we've been providing expert consulting and installation services for
              ultra high-end audio and home automation systems throughout the Las Vegas area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Personalized Service</h3>
              <p className="text-slate-300 leading-relaxed">
                As a boutique firm, we provide truly personalized service tailored to each client's
                unique needs and vision. We're not just installers—we're partners in creating your
                perfect home environment.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">Rapid Response</h3>
              <p className="text-slate-300 leading-relaxed">
                We understand that your time is valuable. Our team provides onsite support
                generally within 24 hours, ensuring your systems stay running smoothly with
                minimal disruption.
              </p>
            </div>
          </div>

          <div className="bg-slate-700/30 p-8 md:p-12 rounded-xl backdrop-blur border border-slate-600">
            <h3 className="text-2xl font-bold mb-4 text-center">Privacy First</h3>
            <p className="text-slate-300 leading-relaxed text-center mb-6">
              We and our clients greatly value privacy and discretion. Our installations are
              designed with security and privacy as top priorities, using self-hosted, open-source
              solutions whenever possible.
            </p>
            <div className="text-center">
              <p className="text-slate-400 mb-4">
                Interested in seeing examples of our work?
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                Contact Us for Portfolio Examples
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
