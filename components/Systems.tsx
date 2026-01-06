export default function Systems() {
  const categories = [
    {
      category: 'Audio Systems',
      systems: ['Roon', 'Spotify', 'Apple Music', 'Audio over IP'],
    },
    {
      category: 'Home Automation',
      systems: ['Home Assistant', 'HomeKit', 'Custom locally hosted voice controls'],
    },
    {
      category: 'Lighting & Control',
      systems: ['Lutron', 'Philips Hue', 'Innovelli', 'Zigbee'],
    },
    {
      category: 'Climate Control',
      systems: ['Ecobee', 'Sensibo'],
    },
    {
      category: 'Window Treatment',
      systems: ['Motorized window treatments', 'Electrochromatic window treatment'],
    },
    {
      category: 'Video Systems',
      systems: ['Hidden video walls', 'LG Electronics'],
    },
    {
      category: 'Networking',
      systems: ['UniFi'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Systems We Work With
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We integrate with industry-leading platforms and technologies to deliver the best
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-slate-300">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.systems.map((system, sIndex) => (
                  <li key={sIndex} className="text-slate-700 flex items-start">
                    <span className="text-slate-400 mr-2">•</span>
                    <span>{system}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
