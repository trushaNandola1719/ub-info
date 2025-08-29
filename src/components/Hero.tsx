import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.85), rgba(51, 65, 85, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-glow/20 rounded-full animate-float delay-1000 blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/15 rounded-full animate-float delay-2000 blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Redefining 
            <span className="block gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              Pre-Leased Real Estate
            </span>
          </h1>
          
          <p className="text-l md:text-l text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            From corporate leasing to pre-leased property sales, we deliver premium commercial and ultra-luxury assets — built for assured rental income, long-term value, and brand growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right">
            {/* <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              Contact Us Today
            </Button> */}
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 min-w-[200px] text-foreground hover:text-white border-white/30 hover:bg-white/20"
            >
              Partner With Us
            </Button>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="absolute top-[20rem] left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Premium Commercial Focus", 
                comment: "We specialize in high-end commercial properties with unparalleled market expertise and client dedication." 
              },
              { 
                title: "Trusted Partners", 
                comment: "Our success stems from building lasting relationships and delivering transparent, professional service." 
              },
              { 
                title: "Market Leaders", 
                comment: "Leading Gujarat's commercial real estate market with innovative solutions and strategic insights." 
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="glass-hero p-6 rounded-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-lg font-semibold text-white mb-3">{item.title}</div>
                <div className="text-white/90 text-sm leading-relaxed">{item.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;