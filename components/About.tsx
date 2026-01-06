export default function About() {
  const features = [
    {
      title: 'Immersive Audio Experiences',
      description:
        'Custom-built speakers using the latest B&C drivers, Purifi woofers, and Powersoft transducers and amplifiers. Complete with lighting and tactile feedback like bass shaker floors.',
    },
    {
      title: 'Professional Power, Consumer Ease',
      description:
        'Systems with the power of professional commercial installations while maintaining the ease of use of a consumer product.',
    },
    {
      title: 'Reliable Home Automation',
      description:
        'Powerful automation systems that prioritize 100% reliability and complete offline control.',
    },
    {
      title: 'Privacy-First AI Assistants',
      description:
        'AI home assistant systems that prioritize privacy and security, fully open source and self-hosted.',
    },
    {
      title: 'Full Service',
      description: 'From design to installation, we handle every aspect of your project.',
    },
    {
      title: 'Personalized Service',
      description:
        'As a small business, we focus on personalized service tailored to your unique needs.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Lossless
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We blend cutting-edge technology with seamless design to create experiences that enhance
            your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
