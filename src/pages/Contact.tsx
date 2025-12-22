import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import heroCampus from "@/assets/hero-campus.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will respond shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Address", details: ["Lycée de Ruhango Ikirezi TSS", "Ruhango District, Southern Province", "Rwanda"] },
    { icon: Phone, title: "Phone", details: ["+250 788 466 634", "+250 788 123 456"] },
    { icon: Mail, title: "Email", details: ["info@lyceeruhango.rw", "admissions@lyceeruhango.rw"] },
    { icon: Clock, title: "Office Hours", details: ["Monday - Friday: 7:30 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM"] },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Lycée de Ruhango Ikirezi TSS</title>
        <meta name="description" content="Get in touch with Lycée de Ruhango Ikirezi TSS. Contact us for admissions inquiries, campus visits, or general information." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[250px] md:h-[300px]">
          <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Contact Us</h1>
              <p className="text-lg text-background/90">We'd love to hear from you</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold font-poppins text-primary mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 rounded-2xl shadow-soft">
                  <h2 className="text-2xl font-bold font-poppins text-primary mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input 
                          id="name" 
                          value={formData.name} 
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Your Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[150px]" 
                        required 
                      />
                    </div>
                    <Button type="submit" size="lg" className="gap-2">
                      <Send className="w-4 h-4" /> <a href="mailto:hamedhussein001@gmail.com">Send Message</a>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-20">
          <div className="container">
            <div className="bg-muted rounded-2xl overflow-hidden h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold font-poppins text-foreground mb-2">Visit Our Campus</h3>
                <p className="text-muted-foreground">Ruhango District, Southern Province, Rwanda</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
