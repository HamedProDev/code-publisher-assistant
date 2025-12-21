import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const newsItems = [
  {
    date: "December 15, 2024",
    title: "Annual Graduation Ceremony 2024",
    excerpt: "Join us as we celebrate the achievements of our graduating class of 2024. The ceremony will be held on December 20th at the school auditorium.",
    image: heroGraduation,
    category: "Events",
  },
  {
    date: "December 10, 2024",
    title: "New Computer Lab Inauguration",
    excerpt: "Our new state-of-the-art computer lab with 50 high-performance workstations is now open for students in the Computer Application program.",
    image: heroStudents,
    category: "News",
  },
  {
    date: "November 28, 2024",
    title: "Industry Partnership with RwandAir",
    excerpt: "We're proud to announce a new partnership with RwandAir for internships and job placements for our Tourism and Hospitality students.",
    image: heroCampus,
    category: "Partnership",
  },
  {
    date: "November 15, 2024",
    title: "Skills Competition Winners",
    excerpt: "Our Culinary Arts students won first place at the National TVET Skills Competition held in Kigali.",
    image: heroGraduation,
    category: "Achievement",
  },
  {
    date: "October 30, 2024",
    title: "Open Day Announcement",
    excerpt: "Visit our campus during Open Day on November 15th. Explore facilities, meet teachers, and learn about our programs.",
    image: heroCampus,
    category: "Events",
  },
  {
    date: "October 20, 2024",
    title: "New Automotive Workshop Equipment",
    excerpt: "The Automobile Technology department has received new diagnostic equipment and training vehicles from our industry partners.",
    image: heroStudents,
    category: "News",
  },
];

const News = () => {
  return (
    <>
      <Helmet>
        <title>News & Events | Lycée de Ruhango Ikirezi TSS</title>
        <meta name="description" content="Stay updated with the latest news, events, and achievements at Lycée de Ruhango Ikirezi Technical Secondary School." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[250px] md:h-[300px]">
          <img src={heroCampus} alt="Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">News & Events</h1>
              <p className="text-lg text-background/90">Stay updated with our latest happenings</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <article key={index} className="bg-card rounded-xl overflow-hidden shadow-soft card-hover">
                  <div className="relative h-52">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold font-poppins text-foreground mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button variant="secondary" size="sm">Read More</Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default News;
