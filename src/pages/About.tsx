import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { GraduationCap, Target, Eye, Award, Users, BookOpen, CheckCircle } from "lucide-react";
import aboutSchool from "@/assets/about-school.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const About = () => {
  const values = [
    { icon: Award, title: "Excellence", description: "Striving for the highest standards in technical education" },
    { icon: Users, title: "Integrity", description: "Acting with honesty and transparency in all we do" },
    { icon: BookOpen, title: "Innovation", description: "Embracing new technologies and teaching methods" },
    { icon: GraduationCap, title: "Empowerment", description: "Building confidence and skills for success" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Lycée de Ruhango Ikirezi TSS</title>
        <meta name="description" content="Learn about Lycée de Ruhango Ikirezi Technical Secondary School's mission, vision, and commitment to quality technical education in Rwanda." />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="relative h-[300px] md:h-[400px]">
          <img src={heroCampus} alt="School Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About Us</h1>
              <p className="text-lg md:text-xl text-background/90">Discover our story and commitment to excellence</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src={aboutSchool} alt="School Building" className="rounded-2xl shadow-elevated w-full" />
              </div>
              <div>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-primary">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide quality technical and vocational education that equips students with practical skills, knowledge, and values necessary for personal development and contribution to Rwanda's socio-economic transformation.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-secondary">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a center of excellence in technical education, producing skilled professionals who drive innovation and development in Rwanda and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="section-title">
              <h2>Our Core Values</h2>
              <p>The principles that guide our institution and shape our students</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-8 rounded-xl shadow-soft text-center card-hover">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="py-20">
          <div className="container">
            <div className="section-title">
              <h2>Why Choose Us</h2>
              <p>What makes Lycée de Ruhango Ikirezi TSS the right choice for your technical education</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Accredited TVET programs aligned with Rwanda's national qualification framework",
                "Modern workshops and laboratories with industry-standard equipment",
                "Experienced and qualified teaching staff with industry expertise",
                "Strong partnerships with local and international employers",
                "High employment and higher education placement rates",
                "Supportive learning environment with student services",
              ].map((fact, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
