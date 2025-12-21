import { ShoppingCart, ListTodo, CloudSun, Utensils, Dumbbell, Laptop, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with shopping cart, user authentication, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    demo: '#',
    github: '#',
    icon: ShoppingCart,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and drag-and-drop functionality.',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'JWT'],
    demo: '#',
    github: '#',
    icon: ListTodo,
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application that displays current conditions, forecasts, and interactive maps for multiple cities.',
    technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js', 'Local Storage'],
    demo: '#',
    github: '#',
    icon: CloudSun,
  },
  {
    title: 'Restaurant Website',
    description: 'A modern restaurant website with online reservation system, menu display, and integrated payment options.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    demo: '#',
    github: '#',
    icon: Utensils,
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-friendly fitness app with workout tracking, progress charts, and personalized exercise recommendations.',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'Google Fit API'],
    demo: '#',
    github: '#',
    icon: Dumbbell,
  },
  {
    title: 'Portfolio CMS',
    description: 'A custom content management system for portfolio websites with drag-and-drop project management.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'JWT'],
    demo: '#',
    github: '#',
    icon: Laptop,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16 relative inline-block left-1/2 -translate-x-1/2">
          My Projects
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.title}
                className="bg-secondary/70 rounded-2xl overflow-hidden border border-primary/10 opacity-0 animate-fade-in-up transition-all duration-400 hover:translate-y-[-15px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_hsl(199_100%_50%/0.2)] hover:border-primary group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Icon */}
                <div className="h-56 bg-gradient-to-br from-background to-card flex items-center justify-center text-primary text-6xl relative overflow-hidden">
                  <Icon className="w-20 h-20" />
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-all duration-700 group-hover:left-[100%]" />
                </div>
                
                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary/15 px-3 py-1.5 rounded text-xs text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-6">
                    <a 
                      href={project.demo}
                      className="text-primary font-semibold flex items-center gap-2 transition-all duration-300 hover:text-accent hover:gap-3"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="text-primary font-semibold flex items-center gap-2 transition-all duration-300 hover:text-accent hover:gap-3"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
