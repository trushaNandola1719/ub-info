import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  const founder = {
    name: "Samir Dhinoja (Gaurav)",
    position: "Founder",
    bio: "A visionary leader with deep expertise in luxury and commercial real estate, Specializing in strategic investments, pre-leased assets, and large-scale developments. With strong relationships across Banks, Institutions and leading premium brands, he has positioned Urban Bhoomi Properties as one of Gujarat’s — especially Rajkot’s — most trusted commercial real estate consulting firms. Trusted by investors, builders, and leading brands alike.",
    // image: "👨‍💼",
    specialties: ["Commercial Real Estate", "Investment Strategy", "Market Analysis", "Business Development"]
  };
  const ceo = {
    name: "Nidhi Shah",
    position: "CEO",
    bio: "With a sharp eye for market trends and strong relationships with premium brands and institutions, the CEO ensures seamless leasing solutions and long-term collaborations. Leading corporate leasing and tendering operations, she drives the firm’s growth while maintaining a client-first approach that guarantees stability and profitability.",
    // image: "👨‍💼",
    specialties: ["Commercial Real Estate", "Investment Strategy", "Market Analysis", "Business Development"]
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by expertise and backed by an amazing team of professionals
            </p>
          </div>

          <div className="mb-16">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Founder Card */}
    <div className="relative bg-white/10 backdrop-blur-lg shadow-lg p-6 border border-white/20 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
        <p className="text-primary font-semibold text-lg mb-3">{founder.position}</p>
        <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
      </div>
    </div>

    {/* CEO Card */}
    <div className="relative bg-white/10 backdrop-blur-lg shadow-lg p-6 border border-white/20 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h3 className="text-2xl font-bold text-foreground mb-1">{ceo.name}</h3>
        <p className="text-primary font-semibold text-lg mb-3">{ceo.position}</p>
        <p className="text-muted-foreground leading-relaxed">{ceo.bio}</p>
      </div>
    </div>
  </div>
</div>

          {/* Team Statement */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Amazing Team</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Behind every success story is our dedicated and growing team of leasing specialists, investment advisors, and client service managers. With expertise in market research, precision execution, and relationship-building, they ensure that every client — whether a brand, investor, or property owner — receives personalized guidance and results-driven solutions.
              </p>
            </div>
          </div>

          {/* Company Values */}
          {/* <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                description: "Leading Gujarat's commercial real estate transformation",
                icon: "🎯"
              },
              {
                title: "Expertise", 
                description: "Specialized knowledge across all property segments",
                icon: "💎"
              },
              {
                title: "Excellence",
                description: "Committed to exceeding client expectations",
                icon: "🏆"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Team;