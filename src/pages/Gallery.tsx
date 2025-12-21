import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import gallery images
import gallerySports from "@/assets/gallery-sports.jpg";
import galleryComputerLab from "@/assets/gallery-computer-lab.jpg";
import galleryGraduation from "@/assets/gallery-graduation.jpg";
import galleryLibrary from "@/assets/gallery-library.jpg";
import galleryWorkshop from "@/assets/gallery-workshop.jpg";
import galleryCultural from "@/assets/gallery-cultural.jpg";
import galleryCampus from "@/assets/gallery-campus.jpg";
import galleryDebate from "@/assets/gallery-debate.jpg";
import galleryScienceLab from "@/assets/gallery-science-lab.jpg";

type Category = "all" | "events" | "facilities" | "activities";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  description: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: gallerySports,
    title: "Annual Sports Day",
    description: "Students competing in track and field events during our annual sports day celebration.",
    category: "events",
  },
  {
    id: 2,
    src: galleryComputerLab,
    title: "Computer Laboratory",
    description: "Our modern computer lab equipped with the latest technology for IT training.",
    category: "facilities",
  },
  {
    id: 3,
    src: galleryGraduation,
    title: "Graduation Ceremony 2024",
    description: "Celebrating the achievements of our graduating class with pride and joy.",
    category: "events",
  },
  {
    id: 4,
    src: galleryLibrary,
    title: "School Library",
    description: "A quiet space for students to study and explore a wide collection of books.",
    category: "facilities",
  },
  {
    id: 5,
    src: galleryWorkshop,
    title: "Technical Workshop",
    description: "Hands-on training in our well-equipped mechanical workshop.",
    category: "facilities",
  },
  {
    id: 6,
    src: galleryCultural,
    title: "Cultural Festival",
    description: "Students performing traditional Rwandan dances during our cultural day.",
    category: "events",
  },
  {
    id: 7,
    src: galleryCampus,
    title: "Campus Overview",
    description: "Aerial view of our beautiful school campus with modern facilities.",
    category: "facilities",
  },
  {
    id: 8,
    src: galleryDebate,
    title: "Debate Competition",
    description: "Students showcasing their public speaking skills at the inter-school debate.",
    category: "activities",
  },
  {
    id: 9,
    src: galleryScienceLab,
    title: "Science Laboratory",
    description: "Students conducting experiments in our well-equipped science laboratory.",
    category: "facilities",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "events", label: "Events" },
  { value: "facilities", label: "Facilities" },
  { value: "activities", label: "Student Activities" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      <Helmet>
        <title>Photo Gallery | Lycée de Ruhango</title>
        <meta
          name="description"
          content="Explore our photo gallery showcasing school events, modern facilities, and student activities at Lycée de Ruhango Ikirezi TSS."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 font-poppins">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Discover the vibrant life at Lycée de Ruhango through our collection of photos
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-card border-b border-border sticky top-[120px] z-40">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div
                    className="group relative overflow-hidden rounded-xl cursor-pointer shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold text-card font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-sm text-card/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 text-xs font-medium bg-secondary/90 text-secondary-foreground rounded-full capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground font-poppins mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary font-poppins">
                {galleryItems.filter((i) => i.category === "events").length}+
              </div>
              <p className="text-muted-foreground mt-1">School Events</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary font-poppins">
                {galleryItems.filter((i) => i.category === "facilities").length}+
              </div>
              <p className="text-muted-foreground mt-1">Facilities</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary font-poppins">
                {galleryItems.filter((i) => i.category === "activities").length}+
              </div>
              <p className="text-muted-foreground mt-1">Student Activities</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary font-poppins">
                {galleryItems.length}+
              </div>
              <p className="text-muted-foreground mt-1">Total Photos</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
