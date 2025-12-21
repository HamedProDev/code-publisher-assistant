import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import heroStudents from "@/assets/hero-students.jpg";
import heroGraduation from "@/assets/hero-graduation.jpg";

const slides = [
  {
    image: heroCampus,
    title: "Excellence in Technical Education",
    description: "Preparing students for successful careers in technology, construction, hospitality and more",
    cta: { text: "Explore Programs", link: "/programs", variant: "hero" as const },
  },
  {
    image: heroStudents,
    title: "Hands-On Learning Experience",
    description: "State-of-the-art facilities and industry-standard equipment for practical training",
    cta: { text: "Apply Now", link: "/admissions", variant: "heroSecondary" as const },
  },
  {
    image: heroGraduation,
    title: "Building Rwanda's Future",
    description: "90% of our graduates secure employment or continue to higher education",
    cta: { text: "Learn More", link: "/about", variant: "heroAccent" as const },
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden rounded-xl mx-4 md:mx-8 shadow-elevated">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`text-center max-w-3xl px-6 transition-all duration-700 ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-foreground/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-background mb-4 font-poppins">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-background/90 mb-8">
                  {slide.description}
                </p>
                <Link to={slide.cta.link}>
                  <Button variant={slide.cta.variant} size="lg">
                    {slide.cta.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/30 backdrop-blur-sm text-background flex items-center justify-center hover:bg-foreground/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground/30 backdrop-blur-sm text-background flex items-center justify-center hover:bg-foreground/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-secondary w-8" : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
