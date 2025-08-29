import React from 'react'
import { useEffect, useRef } from "react";
import { 
  Building2, 
  HandHeart, 
  TrendingUp, 
  Warehouse, 
  ShieldCheck, 
  Calculator,
  ChevronRight 
} from "lucide-react";

const WhyUs = () => {
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

    const additionalServices = [
        {
        icon: ShieldCheck,
        title: "Trusted Corporate Partnerships",
        description: "Strong track record with Private & PSU Banks, NBFCs, and premium brands."
        },
        {
        icon: Calculator,
        title: "Assured Rental Income",
        description: "Exclusive pre-leased properties designed to generate steady, guaranteed returns."
        },
        {
        icon: TrendingUp,
        title: "Investor-Centric Approach",
        description: "Tailored opportunities that maximize ROI and long-term wealth creation."
        },
        {
        icon: Building2,
        title: "Premium & Ultra-Luxury Assets",
        description: "Curated portfolio of high-value properties combining prestige with profitability."
        },
    ];

  return (
    <section ref={sectionRef} id="whyus" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main About Us Content */}
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Urban Bhoomi
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don’t just deal in real estate — we create opportunities that deliver value for every stakeholder. Whether you are a brand seeking premium corporate space, an investor looking for pre-leased assets, or a property owner wanting reliable leasing solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 text-center hover-lift group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs