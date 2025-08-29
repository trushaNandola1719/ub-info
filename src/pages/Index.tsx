import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import ContactForms from "@/components/ContactForms";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      {/* <Testimonials /> */}
      <WhyUs />
      <Team />
      <ContactForms />
      <Footer />
    </div>
  );
};

export default Index;