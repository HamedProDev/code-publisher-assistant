import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 863, suffix: "+", label: "Students Enrolled" },
  { value: 20, suffix: "+", label: "TVET Programs" },
  { value: 90, suffix: "%", label: "Employment Rate" },
  { value: 50, suffix: "+", label: "Industry Partners" },
];

const StatsSection = () => {
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={sectionRef} className="gradient-primary py-16 text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold font-poppins text-secondary">
                {counts[index]}
                {stat.suffix}
              </h3>
              <p className="text-lg text-primary-foreground/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
