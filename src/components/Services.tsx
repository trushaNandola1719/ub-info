import { useState } from "react";
import { 
  Building2, 
  HandHeart, 
  TrendingUp, 
  Warehouse, 
  ShieldCheck, 
  Calculator,
  ChevronRight,
  FileText,
  ChevronDown
} from "lucide-react";
import commercialOfficeImage from "@/assets/commercial-office.jpg";
import retailSpaceImage from "@/assets/retail-space.jpg";
import warehouseImage from "@/assets/warehouse-property.jpg";
import commercialPropertyImage from "@/assets/commercial-property.jpg";
import residentialPropertyImage from "@/assets/residential-property.jpg";
import propertyValuationImage from "@/assets/property-valuation.png";
import investmentAdvisoryImage from "@/assets/advisory.webp";
import legalDocumentationImage from "@/assets/legal_doc.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Calculator,
      title: "Property Valuation",
      description: "Our certified valuation experts provide comprehensive property assessments using advanced market analysis, comparable sales data, and industry-standard methodologies. We deliver detailed valuation reports for commercial properties, residential assets, and mixed-use developments across Gujarat. Whether for investment decisions, financing requirements, tax assessments, or legal proceedings, our accurate valuations ensure you have the critical insights needed for confident property decisions.",
      image: propertyValuationImage,
      features: ["Market Value Assessment", "Rental Valuations", "Insurance Valuations", "Investment Feasibility Studies"]
    },
    {
      icon: Building2,
      title: "Corporate Leasing",
      description: "Specialized commercial leasing solutions for corporations seeking prime office spaces and business establishments. We understand the unique requirements of corporate clients and provide tailored leasing solutions that align with their business objectives and operational needs.",
      image: commercialPropertyImage,
      features: ["Office Space Solutions", "Corporate Requirements", "Lease Negotiations", "Business-Focused Locations"]
    },
    {
      icon: HandHeart,
      title: "Investment Advisory",
      description: "Navigate Gujarat's dynamic real estate market with our expert investment advisory services. Our seasoned consultants analyze market trends, identify high-potential opportunities, and develop customized investment strategies aligned with your financial goals and risk profile. From commercial office spaces and retail developments to industrial properties and mixed-use projects, we provide comprehensive due diligence, ROI analysis, and ongoing portfolio optimization.",
      image: investmentAdvisoryImage,
      features: ["Market Analysis", "ROI Optimization", "Portfolio Management", "Risk Assessment"]
    },
    {
      icon: ShieldCheck,
      title: "Pre-Lease Properties",
      description: "Secure pre-lease opportunities in upcoming commercial developments with guaranteed returns. Get early access to premium properties before they hit the general market.",
      image: commercialOfficeImage,
      features: ["Early Access", "Guaranteed Returns", "Premium Developments", "Investment Security"]
    },
    {
      icon: TrendingUp,
      title: "Industrial & Agricultural Land",
      description: "Prime industrial plots and agricultural land opportunities for investment and development. Our expertise in land acquisition ensures strategic positioning for maximum returns on investment.",
      image: residentialPropertyImage,
      features: ["Industrial Plots", "Agricultural Land", "Investment Opportunities", "Development Potential"]
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Ensure seamless, compliant property transactions with our comprehensive legal documentation services. Our experienced legal team handles all aspects of property law, from initial agreement drafting to final registration. We provide title verification, due diligence reports, contract preparation, regulatory compliance checks, and liaison with government authorities. With our meticulous attention to legal details, you can proceed with confidence.",
      image: legalDocumentationImage,
      features: ["Title Verification", "Contract Preparation", "Regulatory Compliance", "Transaction Management"]
    }
  ];

  const ServiceDetailCard = ({ service, isAccordion = false }) => (
    <div className={`glass-card p-8 rounded-lg animate-fade-in ${isAccordion ? 'mt-4' : ''}`}>
      <div className="mb-6">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <h4 className="text-2xl font-bold text-foreground mb-4">
        {service.title}
      </h4>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-spring"
      >
        Get More Information
      </button>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive commercial real estate solutions tailored to your business needs
            </p>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-16">
            {/* Service List */}
            <div className="lg:col-span-2 space-y-2">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedService(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                      selectedService === index
                        ? 'bg-foreground text-white shadow-lg'
                        : 'glass-card hover:shadow-[0_8px_30px_hsl(222.2_84%_4.9%/0.15)]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedService === index ? 'bg-primary' : 'bg-primary/10'
                      }`}>
                        <IconComponent 
                          className={`h-5 w-5 ${
                            selectedService === index ? 'text-white' : 'text-primary'
                          }`} 
                        />
                      </div>
                      <span className={`font-medium ${
                        selectedService === index ? 'text-white' : 'text-foreground'
                      }`}>
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight 
                      className={`h-4 w-4 transition-transform ${
                        selectedService === index ? 'rotate-90 text-white' : 'text-muted-foreground'
                      }`} 
                    />
                  </div>
                );
              })}
            </div>

            {/* Service Details */}
            <div className="lg:col-span-3">
              <ServiceDetailCard service={services[selectedService]} />
            </div>
          </div>

          {/* Mobile/Tablet Layout - Accordion Style */}
          <div className="lg:hidden space-y-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isActive = selectedService === index;
              
              return (
                <div key={index} className="glass-card rounded-lg overflow-hidden">
                  {/* Accordion Header */}
                  <div
                    onClick={() => setSelectedService(isActive ? -1 : index)}
                    className={`p-4 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                      isActive ? 'bg-foreground text-white' : 'hover:bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive ? 'bg-primary' : 'bg-primary/10'
                      }`}>
                        <IconComponent 
                          className={`h-5 w-5 ${
                            isActive ? 'text-white' : 'text-primary'
                          }`} 
                        />
                      </div>
                      <span className={`font-medium ${
                        isActive ? 'text-white' : 'text-foreground'
                      }`}>
                        {service.title}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isActive ? 'rotate-180 text-white' : 'text-muted-foreground'
                      }`} 
                    />
                  </div>

                  {/* Accordion Content */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="p-4 bg-background/50">
                      <div className="mb-4">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
                        />
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-spring"
                      >
                        Get More Information
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;