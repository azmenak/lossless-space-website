import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Team | Lossless Home Solutions',
  description:
    'Meet the expert team behind Lossless Home Solutions. Dedicated professionals specializing in ultra high-end audio and home automation systems in Las Vegas.',
};

export default function Team() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-block text-slate-300 hover:text-white mb-6 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Dedicated professionals passionate about creating exceptional audio and home automation
            experiences.
          </p>
        </div>
      </header>

      {/* Team Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Since 2020, Lossless Home Solutions has been at the forefront of ultra high-end
                  audio and home automation in the Las Vegas area. Our team combines decades of
                  experience in audio engineering, home automation, and custom installation.
                </p>
                <p>
                  We believe that technology should enhance your life without getting in the way.
                  That&apos;s why we focus on creating systems that are powerful yet intuitive,
                  sophisticated yet simple to use.
                </p>
                <p>
                  Our boutique approach means you work directly with experienced professionals who
                  understand both the technical complexities and the human element of creating the
                  perfect home environment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Team</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Adam Zmenak</h3>
                  <p className="text-slate-600 font-semibold mb-4">Founder & Technologist</p>
                  <p className="text-slate-600 leading-relaxed">
                    Home automation and audio expert with over 10 years of experience in home
                    electronics and 5 years in professional audio. Adam brings deep technical
                    expertise and a passion for creating systems that seamlessly blend power and
                    simplicity.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Carissa Chang</h3>
                  <p className="text-slate-600 font-semibold mb-4">
                    Home Designer & Integration Specialist
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With over 5 years of experience in design, Carissa is an expert in turning
                    functional components into seamless home experiences. She ensures every
                    installation is as beautiful as it is functional, perfectly integrated into your
                    home&apos;s aesthetic.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Pablo Chappa</h3>
                  <p className="text-slate-600 font-semibold mb-4">
                    Home & Commercial Building Expert
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With over 20 years of experience developing ultra high-end homes, Pablo brings
                    invaluable expertise in construction and project management. His deep
                    understanding of building systems ensures seamless integration of technology
                    into any property.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Anton Keen</h3>
                  <p className="text-slate-600 font-semibold mb-4">Home Automation Specialist</p>
                  <p className="text-slate-600 leading-relaxed">
                    Our newest team member, Anton is a passionate home automation expert who brings
                    fresh perspectives and cutting-edge knowledge. His enthusiasm for smart home
                    technology and dedication to client satisfaction make him an invaluable addition
                    to the team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Audio Engineering Excellence
                  </h3>
                  <p className="text-slate-600">
                    Deep expertise in high-end audio components, acoustics, and system design.
                    Working with premium brands like B&C, Purifi, and Powersoft to deliver
                    uncompromising sound quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Home Automation Mastery
                  </h3>
                  <p className="text-slate-600">
                    Extensive experience with Home Assistant, HomeKit, and custom automation
                    solutions. We prioritize reliability, privacy, and offline functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Network Infrastructure
                  </h3>
                  <p className="text-slate-600">
                    Professional-grade networking solutions using UniFi and enterprise equipment.
                    Ensuring your smart home has the robust foundation it needs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Integration</h3>
                  <p className="text-slate-600">
                    From 3D-printed custom parts to rack design and cable management, we handle
                    every detail to create seamless, beautiful installations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 md:p-12 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4 text-center">Work With Us</h2>
              <p className="text-slate-300 text-center mb-8 max-w-2xl mx-auto">
                Ready to transform your home with our expertise? We&apos;d love to hear about your
                project and discuss how we can bring your vision to life.
              </p>
              <div className="text-center">
                <Link
                  href="/#contact"
                  className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
