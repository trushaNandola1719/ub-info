const Vision = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Vision & Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming the real estate landscape with innovative solutions and unparalleled service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-right">
              <div className="glass-card p-8 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier real estate firm that revolutionizes property investment 
                  through cutting-edge technology, exceptional service, and unwavering 
                  commitment to client success. We envision a future where every property 
                  transaction is seamless, transparent, and value-driven.
                </p>
              </div>

              <div className="glass-card p-8 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide comprehensive real estate solutions that exceed client expectations 
                  while maintaining the highest standards of integrity, professionalism, and 
                  innovation. We are committed to building lasting relationships and creating 
                  value for all stakeholders in the real estate ecosystem.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              {[
                { icon: "🏢", title: "Premium Properties", desc: "Curated portfolio of luxury assets" },
                { icon: "🤝", title: "Trust & Integrity", desc: "Built on transparent relationships" },
                { icon: "💡", title: "Innovation", desc: "Leveraging latest market insights" },
                { icon: "🎯", title: "Results Driven", desc: "Focused on client success" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 text-center hover-lift group"
                >
                  <div className="text-4xl mb-4 group-hover:animate-float">{item.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;