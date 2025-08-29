import { useEffect, useRef } from "react";
import commercialOfficeImage from "@/assets/commercial-office.jpg";
import residentialComplexImage from "@/assets/residential-complex.jpg";
import retailSpaceImage from "@/assets/retail-space.jpg";

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main About Us Content */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Commercial Real Estate Expertise Unmatched in Gujarat
            </h2>
          </div>

          {/* Article Content with Property Images */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6 animate-on-scroll">
              <p className="text-base text-muted-foreground leading-relaxed">
                At Urban Bhoomi Properties, we go beyond transactions — we create partnerships that add long-term value. Based in Rajkot with deep expertise across Gujarat's commercial landscape, we specialize in corporate leasing and pre-leased property sales, working closely with Private & PSU Banks, NBFCs, premium brands, and investors to deliver spaces that meet both business and financial goals.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                We offer Grade-A commercial properties and ultra-luxury assets that combine exclusivity, stability, and profitability. For investors, our portfolio includes pre-leased opportunities with assured rental income and strong returns. For corporates and brands, we provide premium spaces designed for growth, efficiency, and prestige.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                What sets us apart is our transparent, client-first approach. Every opportunity we bring is carefully curated to ensure reliability and profitability, making us a trusted partner for brands, investors, and property owners seeking the best in real estate.
              </p>

              {/* <p className="text-base text-muted-foreground leading-relaxed">
                We treat everyone individually, offering bespoke advice, which builds long-
                term relationships and helps them make better property decisions.
              </p> */}
            </div>

            <div className="grid grid-cols-3 gap-3 animate-on-scroll">
              <div className="space-y-3">
                <img 
                  src={commercialOfficeImage} 
                  alt="Commercial Office Property"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-32 w-full object-cover"
                />
                <img 
                  src={retailSpaceImage} 
                  alt="Retail Space Property"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-48 w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <img 
                  src={residentialComplexImage} 
                  alt="Residential Complex"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-56 w-full object-cover"
                />
              </div>
              <div className="mt-3 space-y-3">
                <img 
                  src={commercialOfficeImage} 
                  alt="Commercial Property"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-40 w-full object-cover"
                />
                <img 
                  src={retailSpaceImage} 
                  alt="Property Investment"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-36 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Vision and Mission Cards - Asymmetric Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-on-scroll card-asymmetric-1">
              <div className="glass-card p-8 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Gujarat's most trusted and innovative commercial real estate partner, setting new standards of excellence in property consulting. We envision transforming how businesses and investors approach real estate by combining deep market intelligence with forward-thinking strategies that drive sustainable growth and success.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll card-asymmetric-2 md:mt-12">
              <div className="glass-card p-8 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">M</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower clients with strategic real estate decisions through unparalleled local expertise, comprehensive consulting services, and personalized solutions. We are dedicated to delivering exceptional value across Gujarat's commercial property landscape while fostering long-term partnerships built on trust, integrity, and proven results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;