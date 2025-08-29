const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "CEO, TechCorp Solutions",
      content: "Urban Bhoomi helped us find the perfect corporate headquarters. Their professionalism and market expertise made the entire process seamless. Highly recommended!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Priya Patel",
      position: "Real Estate Investor",
      content: "The investment advisory team at Urban Bhoomi provided invaluable insights that helped me build a profitable property portfolio. Their market knowledge is exceptional.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Amit Gupta",
      position: "Business Owner",
      content: "From initial consultation to final handover, Urban Bhoomi delivered beyond expectations. They made buying our dream home a truly enjoyable experience.",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Sneha Reddy",
      position: "Startup Founder",
      content: "The team's dedication and attention to detail is remarkable. They found us the perfect office space within our budget and timeline. Outstanding service!",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Vikram Singh",
      position: "Property Developer",
      content: "Urban Bhoomi's legal and documentation support made our commercial property acquisition completely hassle-free. True professionals in every sense.",
      rating: 5,
      image: "👨‍🏭"
    },
    {
      name: "Meera Joshi",
      position: "Healthcare Executive",
      content: "Their personalized approach and market insights helped us secure an excellent residential property. The entire team was supportive throughout the process.",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover why hundreds of clients trust Urban Bhoomi with their most important property decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover-lift group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">⭐</span>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                <div className="w-12 h-1 gradient-primary rounded-full group-hover:w-full transition-smooth"></div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Satisfied Clients
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the Urban Bhoomi difference and become part of our success story
              </p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="w-px bg-border mx-4"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="w-px bg-border mx-4"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;