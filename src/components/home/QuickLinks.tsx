import { Link } from "react-router-dom";
import { GraduationCap, Calendar, LineChart, BookOpen, Users, Image } from "lucide-react";

const quickLinks = [
  { icon: GraduationCap, title: "Student Portal", href: "#" },
  { icon: Calendar, title: "Timetable", href: "#" },
  { icon: LineChart, title: "Exam Results", href: "#" },
  { icon: BookOpen, title: "Digital Library", href: "#" },
  { icon: Users, title: "Teacher Portal", href: "#" },
  { icon: Image, title: "Photo Gallery", href: "#" },
];

const QuickLinks = () => {
  return (
    <section className="bg-muted py-8">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="bg-card rounded-xl p-5 text-center shadow-soft hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <link.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                {link.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
