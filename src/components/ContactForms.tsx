import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Home, Building, Handshake } from "lucide-react";
import emailjs from 'emailjs-com';

const ContactForms = () => {
  const [activeForm, setActiveForm] = useState<'buying' | 'selling' | 'commercial' | 'small'>('small');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICEID, // Replace with your EmailJS service ID
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATEID, // Replace with your EmailJS template ID
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLICKEY // Replace with your EmailJS public key
  };

  const forms = [
    {
      id: 'buying' as const,
      title: 'Buying/Renting Inquiry',
      icon: Home,
      description: 'Looking for your dream property? Let us help you find it.',
    },
    {
      id: 'selling' as const,
      title: 'Sell Your Property',
      icon: Building,
      description: 'Ready to sell? Get the best value for your property.',
    },
    {
      id: 'commercial' as const,
      title: 'Commercial Leasing',
      icon: Handshake,
      description: 'Explore premium commercial spaces for your business.',
    },
  ];

  const handleSubmit = async(formType: string, e: React.FormEvent) => {
     e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to object
    const formObject: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Add form type to the data
    formObject.form_type = formType;
    formObject.submission_date = new Date().toLocaleString();

    // try {
    //   // Send email using EmailJS
    //   await emailjs.send(
    //     EMAILJS_CONFIG.SERVICE_ID,
    //     EMAILJS_CONFIG.TEMPLATE_ID,
    //     formObject,
    //     EMAILJS_CONFIG.PUBLIC_KEY
    //   );

    //   setSubmitStatus('success');
    //   form.reset(); // Reset form after successful submission
      
    //   // Reset status after 5 seconds
    //   setTimeout(() => {
    //     setSubmitStatus('idle');
    //   }, 5000);

    // } catch (error) {
    //   console.error('Email sending failed:', error);
    //   setSubmitStatus('error');
      
    //   // Reset status after 5 seconds
    //   setTimeout(() => {
    //     setSubmitStatus('idle');
    //   }, 5000);
    // } finally {
    //   setIsSubmitting(false);
    // }
     try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    });

    if (!response.ok) throw new Error("Failed to send email");

    setSubmitStatus("success");
    form.reset();

    setTimeout(() => setSubmitStatus("idle"), 5000);
  } catch (error) {
    console.error("Email sending failed:", error);
    setSubmitStatus("error");
    setTimeout(() => setSubmitStatus("idle"), 5000);
  } finally {
    setIsSubmitting(false);
  }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let’s Build Opportunities Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the service that best matches your requirements and get personalized assistance
            </p>
          </div>

          {/* Form Selection Tabs */}
          {/* <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            {forms.map((form) => {
              const IconComponent = form.icon;
              return (
                <button
                  key={form.id}
                  onClick={() => setActiveForm(form.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 ${
                    activeForm === form.id
                      ? 'bg-primary text-white shadow-luxury'
                      : 'bg-background border-border hover:border-primary/50'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">{form.title}</div>
                    <div className={`text-sm ${
                      activeForm === form.id ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {form.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div> */}

          {/* Active Form */}
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <Card className="p-8 glass-card">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  ✅ Your inquiry has been submitted successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  ❌ Failed to submit inquiry. Please try again or contact us directly.
                </div>
              )}
              {activeForm === 'small' && (
                <form onSubmit={(e) => handleSubmit('small', e)} className="space-y-6">
                  {/* <h3 className="text-2xl font-bold text-foreground mb-6">Property Buying/Renting Inquiry</h3> */}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input name="full_name" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input name="phone_number" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <Input type="email" name="email_address" placeholder="Enter your email address" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">I am a...</label>
                      <select name="user_type" className="w-full p-3 border border-border rounded-md bg-background">
                        <option disabled={true} hidden={true}>Select who you are </option>
                        <option>Brand / Corporate (looking for space)</option>
                        <option>Investor (looking for pre-leased / commercial properties)</option>
                        <option>Buyer (looking for luxury / ultra-luxury flats)</option>
                        <option>Property Owner (want to lease my property)</option>
                        <option>Seller (want to sell my property)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                      <select name="budget_range" className="w-full p-3 border border-border rounded-md bg-background">
                        <option disabled={true} hidden={true}>Select your budget </option>
                        {/* <option>Under ₹50 Lakhs</option> */}
                        <option>₹50L - ₹1 Crore</option>
                        <option>₹1 - ₹2 Crores</option>
                        <option>₹2 - ₹5 Crores</option>
                        <option>Above ₹5 Crores</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Location</label>
                    <Input name="preferred_location" placeholder="Enter preferred location/area" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Requirements</label>
                    <Textarea name="additional_requirements" placeholder="Tell us about your specific requirements..." rows={4} />
                  </div>

                  <Button variant="luxury" size="lg" type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              )}
              {activeForm === 'buying' && (
                <form onSubmit={(e) => handleSubmit('buying', e)} className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Property Buying/Renting Inquiry</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Property Type</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option>Residential Apartment</option>
                        <option>Villa/House</option>
                        <option>Commercial Office</option>
                        <option>Retail Space</option>
                        <option>Warehouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option>Under ₹50 Lakhs</option>
                        <option>₹50L - ₹1 Crore</option>
                        <option>₹1 - ₹2 Crores</option>
                        <option>₹2 - ₹5 Crores</option>
                        <option>Above ₹5 Crores</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Location</label>
                    <Input placeholder="Enter preferred location/area" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Requirements</label>
                    <Textarea placeholder="Tell us about your specific requirements..." rows={4} />
                  </div>

                  <Button variant="luxury" size="lg" type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              )}

              {activeForm === 'selling' && (
                <form onSubmit={(e) => handleSubmit('selling', e)} className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Sell Your Property</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <Input type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Property Type *</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background" required>
                        <option value="">Select property type</option>
                        <option>Residential Apartment</option>
                        <option>Villa/House</option>
                        <option>Commercial Office</option>
                        <option>Retail Space</option>
                        <option>Industrial Land</option>
                        <option>Agricultural Land</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Expected Price</label>
                      <Input placeholder="Enter expected selling price" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Property Address *</label>
                    <Textarea placeholder="Enter complete property address..." rows={3} required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Property Size</label>
                      <Input placeholder="e.g., 1200 sq ft, 2 BHK" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Property Age</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option>Under 5 years</option>
                        <option>5-10 years</option>
                        <option>10-20 years</option>
                        <option>Over 20 years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional Details</label>
                    <Textarea placeholder="Share any additional information about your property..." rows={4} />
                  </div>

                  <Button variant="luxury" size="lg" type="submit" className="w-full">
                    Get Property Valuation
                  </Button>
                </form>
              )}

              {activeForm === 'commercial' && (
                <form onSubmit={(e) => handleSubmit('commercial', e)} className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Commercial Leasing Inquiry</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                      <Input placeholder="Enter your company name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Contact Person *</label>
                      <Input placeholder="Enter contact person name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input placeholder="Enter phone number" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input type="email" placeholder="Enter email address" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Business Type *</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background" required>
                        <option value="">Select business type</option>
                        <option>IT/Software</option>
                        <option>Manufacturing</option>
                        <option>Retail/E-commerce</option>
                        <option>Healthcare</option>
                        <option>Education</option>
                        <option>Financial Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Space Type Required</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option>Corporate Office</option>
                        <option>Retail Showroom</option>
                        <option>Warehouse/Logistics</option>
                        <option>Industrial Space</option>
                        <option>Co-working Space</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Required Space (sq ft)</label>
                      <Input placeholder="Enter required area" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Preferred Location</label>
                      <Input placeholder="Enter preferred location" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Budget (Monthly Rent)</label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option>Under ₹1 Lakh</option>
                        <option>₹1-5 Lakhs</option>
                        <option>₹5-10 Lakhs</option>
                        <option>₹10-25 Lakhs</option>
                        <option>Above ₹25 Lakhs</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Required By</label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Specific Requirements</label>
                    <Textarea placeholder="Tell us about parking, amenities, floor preference, etc..." rows={4} />
                  </div>

                  <Button variant="luxury" size="lg" type="submit" className="w-full">
                    Request Commercial Space
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact Information */}
            {/* <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Visit Our Office</h4>
                      <p className="text-muted-foreground">123 Business District, Ahmedabad, Gujarat 380001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Call Us</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-muted-foreground">+91 98765 43211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email Us</h4>
                      <p className="text-muted-foreground">info@urbanbhoomi.com</p>
                      <p className="text-muted-foreground">commercial@urbanbhoomi.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Urban Bhoomi?</h3>
                <div className="space-y-3">
                  {[
                    "15+ years of market expertise",
                    "Specialized in commercial properties",
                    "Transparent and honest dealings",
                    "End-to-end service support",
                    "Strong network across Gujarat"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;