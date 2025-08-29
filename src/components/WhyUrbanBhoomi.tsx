const WhyUrbanBhoomi = () => {
  const reasons = [
    {
      title: "Market Expertise",
      description: "Over 15 years of deep market knowledge and proven track record in luxury real estate transactions",
      icon: "📊"
    },
    {
      title: "Premium Network",
      description: "Exclusive access to high-value properties and a network of verified investors and developers",
      icon: "🌐"
    },
    {
      title: "Personalized Service",
      description: "Dedicated relationship managers providing 24/7 support throughout your property journey",
      icon: "🎯"
    },
    {
      title: "Technology Driven",
      description: "Advanced analytics and market insights to help you make informed investment decisions",
      icon: "💻"
    },
    {
      title: "Legal Compliance",
      description: "Complete legal due diligence and documentation support ensuring secure transactions",
      icon: "⚖️"
    },
    {
      title: "End-to-End Solutions",
      description: "From property search to final handover, we manage every aspect of your real estate needs",
      icon: "🔄"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose 
              <span className="gradient-primary bg-clip-text text-transparent"> Urban Bhoomi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our comprehensive approach to luxury real estate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover-lift group transition-spring"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-5xl mb-6 group-hover:animate-float">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
                <div className="mt-6 w-12 h-1 gradient-primary rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Experience Luxury Real Estate?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of satisfied clients who have trusted Urban Bhoomi with their most important property decisions
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-spring"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUrbanBhoomi;