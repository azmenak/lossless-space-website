export default function Services() {
  const services = [
    {
      title: 'Home Re-wiring',
      description:
        'Both electrical and low voltage infrastructure for comprehensive smart home integration.',
    },
    {
      title: 'Enterprise Networking',
      description:
        'Professional networking solutions for properties of any size, from single homes to large estates.',
    },
    {
      title: 'AI-Powered Security',
      description: 'Home security systems with AI-powered video analysis and automation triggers.',
    },
    {
      title: 'Advanced Presence Detection',
      description:
        'mmWave radar-based presence detection and automation triggers for seamless experiences.',
    },
    {
      title: 'Smart Automation',
      description:
        'Simple and advanced home automation systems to save energy and improve comfort.',
    },
    {
      title: 'Ongoing Support',
      description: 'Maintenance and support for all systems to ensure peak performance.',
    },
    {
      title: 'Acoustic Treatment',
      description:
        'Professional acoustic treatment and sound insulation for optimal audio quality.',
    },
    {
      title: 'Custom 3D Parts',
      description: 'Design and printing of custom 3D parts tailored to your home.',
    },
    {
      title: 'Equipment Design',
      description: 'Professional equipment rack design and cable management solutions.',
    },
    {
      title: 'Retrofits & New Construction',
      description: 'Expert installation for both existing homes and new construction projects.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions for every aspect of your high-end audio and home automation
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
