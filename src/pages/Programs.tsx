import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Clock, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import programConstruction from "@/assets/program-construction.jpg";
import programCulinary from "@/assets/program-culinary.jpg";
import programComputing from "@/assets/program-computing.jpg";
import programAutomobile from "@/assets/program-automobile.jpg";
import programTailoring from "@/assets/program-tailoring.jpg";
import programTourism from "@/assets/program-tourism.jpg";
import heroStudents from "@/assets/hero-students.jpg";

const programs = [
  {
    id: "masonry",
    image: programConstruction,
    title: "Masonry & Construction",
    description: "Learn architectural drawing, masonry, carpentry, plumbing, and electrical installation for residential and commercial buildings.",
    duration: "3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Mason", "Site Supervisor", "Construction Manager", "Building Inspector"],
  },
  {
    id: "culinary",
    image: programCulinary,
    title: "Culinary Arts",
    description: "Master culinary skills, food preparation, restaurant service, hospitality management, and food safety standards.",
    duration: "2-3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Chef", "Pastry Chef", "Restaurant Manager", "Catering Manager"],
  },
  {
    id: "computing",
    image: programComputing,
    title: "Computer Application",
    description: "Develop skills in computer hardware, networking, software installation, troubleshooting, and basic programming.",
    duration: "3 Years",
    levels: "Level 3, 4, 5",
    careers: ["IT Technician", "Network Admin", "Help Desk Support", "System Administrator"],
  },
  {
    id: "automobile",
    image: programAutomobile,
    title: "Automobile Technology",
    description: "Train in vehicle maintenance, engine repair, electrical systems, diagnostics, and automotive electronics.",
    duration: "3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Auto Mechanic", "Diagnostic Technician", "Service Manager", "Workshop Owner"],
  },
  {
    id: "tailoring",
    image: programTailoring,
    title: "Tailoring & Fashion Design",
    description: "Master garment construction, pattern making, textile technology, fashion illustration, and entrepreneurship.",
    duration: "2-3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Fashion Designer", "Tailor", "Pattern Maker", "Boutique Owner"],
  },
  {
    id: "tourism",
    image: programTourism,
    title: "Tourism & Hospitality",
    description: "Learn hotel operations, front office management, tour guiding, and hospitality service excellence.",
    duration: "2-3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Hotel Receptionist", "Tour Guide", "Event Coordinator", "Travel Agent"],
  },
  {
    id: "accounting",
    image: heroStudents,
    title: "Accounting",
    description: "Develop skills in financial management, bookkeeping, taxation, and business accounting principles.",
    duration: "3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Accountant", "Bookkeeper", "Financial Analyst", "Auditor"],
  },
  {
    id: "food-beverage",
    image: programCulinary,
    title: "Food & Beverage Services",
    description: "Learn restaurant operations, bar service, menu planning, and customer service excellence.",
    duration: "2-3 Years",
    levels: "Level 3, 4, 5",
    careers: ["Restaurant Server", "Bar Manager", "Sommelier", "F&B Manager"],
  },
];

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs | Lycée de Ruhango Ikirezi TSS</title>
        <meta name="description" content="Explore our TVET programs including Masonry, Culinary Arts, Computer Application, Automobile Technology, Tailoring, Tourism, and Accounting." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[300px] md:h-[350px]">
          <img src={heroStudents} alt="Students in Lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Our Programs</h1>
              <p className="text-lg md:text-xl text-background/90">Discover your path to a successful career</p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container">
            <div className="section-title">
              <h2>TVET Certificate Programs</h2>
              <p>We offer nationally accredited technical and vocational programs at Levels 3, 4, and 5</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <div key={program.id} className="bg-card rounded-xl overflow-hidden shadow-soft card-hover flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-primary font-poppins mb-2">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                    <div className="flex gap-4 mb-4 text-sm">
                      <span className="flex items-center gap-1 text-primary">
                        <Clock className="w-4 h-4" /> {program.duration}
                      </span>
                      <span className="flex items-center gap-1 text-primary">
                        <GraduationCap className="w-4 h-4" /> {program.levels}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground mb-2">Career Opportunities:</p>
                      <div className="flex flex-wrap gap-1">
                        {program.careers.map((career, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{career}</span>
                        ))}
                      </div>
                    </div>
                    <Link to="/admissions">
                      <Button variant="outline" size="sm" className="group">
                        Apply Now
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Programs;
