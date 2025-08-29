const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 ">
            {/* Company Info */}
            {/* <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">UB</span>
                </div>
                <span className="text-2xl font-bold">Urban Bhoomi</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                Redefining luxury real estate with innovative solutions, 
                exceptional service, and unmatched market expertise. 
                Your dream property awaits.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth cursor-pointer">
                  <span>📘</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth cursor-pointer">
                  <span>📸</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth cursor-pointer">
                  <span>🐦</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-smooth cursor-pointer">
                  <span>💼</span>
                </div>
              </div>
            </div> */}

            {/* Quick Links */}
            {/* <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Properties", href: "#services" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Team", href: "#team" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white/80 hover:text-white transition-smooth"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Services */}
            {/* <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Residential Properties",
                  "Commercial Spaces",
                  "Rental & Leasing",
                  "Investment Advisory",
                  "Property Valuation",
                  "Legal Documentation"
                ].map((service, index) => (
                  <li key={index} className="text-white/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Contact Info Bar */}
          <div className="border-t border-white/20 pt-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div className="text-left">
                  <div className="text-white/60 text-sm">Call Us</div>
                  <div className="text-white">+91 99090 60128</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✉️</span>
                </div>
                <div className="text-left">
                  <div className="text-white/60 text-sm">Email Us</div>
                  <div className="text-white">care@urbanbhoomi.com</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div className="text-left">
                  <div className="text-white/60 text-sm">Based At</div>
                  <div className="text-white">Rajkot, Gujarat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © {currentYear} Urban Bhoomi. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {/* <button className="text-white/60 hover:text-white transition-smooth">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white transition-smooth">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-white transition-smooth">
                Cookie Policy
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;