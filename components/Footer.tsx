export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Lossless Home Solutions</h3>
            <p className="text-sm leading-relaxed">
              Ultra high-end audio solutions and home automation systems that seamlessly blend into your home&apos;s aesthetic.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">
              <a href="mailto:info@lossless.space" className="hover:text-white transition-colors">
                info@lossless.space
              </a>
            </p>
            <p className="text-sm">Las Vegas & Surrounding Areas</p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="text-sm space-y-1">
              <li>Home Audio Systems</li>
              <li>Home Automation</li>
              <li>Smart Home Security</li>
              <li>Custom Installation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Lossless Home Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
