import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Handshake } from "lucide-react";
import aboutSchool from "@/assets/about-school.jpg";

const features = [
  {
    icon: GraduationCap,
    title: "Skilled Teachers",
    description: "Qualified and experienced instructors",
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "State-of-the-art workshops and labs",
  },
  {
    icon: Handshake,
    title: "Industry Partners",
    description: "Strong connections with employers",
  },
];

const WelcomeSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>Welcome to Lycée de Ruhango Ikirezi TSS</h2>
          <p>
            A leading technical secondary school in Rwanda providing quality education and practical skills for the 21st century workforce.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-elevated animate-fade-in">
            <img
              src={aboutSchool}
              alt="Lycée de Ruhango Campus"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-poppins">
              Our Mission & Vision
            </h3>
            <p className="text-muted-foreground mb-4">
              Lycée de Ruhango Ikirezi Technical Secondary School is committed to providing quality technical education that equips students with practical skills, knowledge, and values necessary for personal development and contribution to Rwanda's socio-economic transformation.
            </p>
            <p className="text-muted-foreground mb-8">
              We envision becoming a center of excellence in technical education, producing skilled professionals who drive innovation and development in Rwanda and beyond.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
