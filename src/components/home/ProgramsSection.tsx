import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap } from "lucide-react";
import programConstruction from "@/assets/program-construction.jpg";
import programCulinary from "@/assets/program-culinary.jpg";
import programComputing from "@/assets/program-computing.jpg";
import programAutomobile from "@/assets/program-automobile.jpg";
import programTailoring from "@/assets/program-tailoring.jpg";
import programTourism from "@/assets/program-tourism.jpg";

const programs = [
  {
    image: programConstruction,
    title: "Masonry & Construction",
    description: "Learn architectural drawing, masonry, carpentry, plumbing, and electrical installation for residential and commercial buildings.",
    duration: "3 Years",
    level: "Level 3-5",
  },
  {
    image: programCulinary,
    title: "Culinary Arts",
    description: "Master culinary skills, food preparation, restaurant service, hospitality management, and food safety standards.",
    duration: "2 Years",
    level: "Level 3-5",
  },
  {
    image: programComputing,
    title: "Computer Application",
    description: "Develop skills in computer hardware, networking, software installation, troubleshooting, and basic programming.",
    duration: "3 Years",
    level: "Level 3-5",
  },
  {
    image: programAutomobile,
    title: "Automobile Technology",
    description: "Train in vehicle maintenance, engine repair, electrical systems, diagnostics, and automotive electronics.",
    duration: "3 Years",
    level: "Level 3-5",
  },
  {
    image: programTailoring,
    title: "Tailoring & Fashion",
    description: "Master garment construction, pattern making, textile technology, fashion illustration, and entrepreneurship.",
    duration: "2 Years",
    level: "Level 3-5",
  },
  {
    image: programTourism,
    title: "Tourism & Hospitality",
    description: "Learn hotel operations, front office management, tour guiding, and hospitality service excellence.",
    duration: "2 Years",
    level: "Level 3-5",
  },
];

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>Our Technical Programs</h2>
          <p>We offer a wide range of technical and vocational programs designed to meet industry demands.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft card-hover group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 font-poppins">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {program.description}
                </p>
                <div className="flex justify-between text-sm text-primary font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4" />
                    {program.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programs">
            <Button size="lg">View All Programs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
