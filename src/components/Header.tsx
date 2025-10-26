import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import ubLogoImage from '@/assets/ub.png'
import ubWithBGLogoImage from '@/assets/ub-bg.png'
import ubTextImage from '@/assets/UB-text.jpeg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-smooth ",
        isScrolled 
          ? "glass-card shadow-lg backdrop-blur-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="ub-logo">

            <img src={isScrolled? ubLogoImage:ubWithBGLogoImage} alt="" width={'200px'} height={70} className={"ub-logo"} style={isScrolled?{}:{borderRadius:'8px'}} />
            </div>
            {/* <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">UB</span>
            </div>
            <span className="text-2xl font-bold text-primary">Urban Bhoomi</span>*/}
          </div> 
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              Services
            </button>
            {/* <button 
              onClick={() => scrollToSection('testimonials')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              Testimonials
            </button> */}
            <button 
              onClick={() => scrollToSection('whyus')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={cn(
                  "hover:text-primary transition-smooth",
                  isScrolled 
                    ? "text-foreground" 
                    : "text-white"
                )}
            >
              Contact
            </button>
          </nav>

          <Button 
            variant="luxury" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;