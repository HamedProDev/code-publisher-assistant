import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectTaskapp from '@/assets/project-taskapp.jpg';
import projectWeather from '@/assets/project-weather.jpg';
import projectRestaurant from '@/assets/project-restaurant.jpg';
import projectFitness from '@/assets/project-fitness.jpg';
import projectCms from '@/assets/project-cms.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with shopping cart, user authentication, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    image: projectEcommerce,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and drag-and-drop functionality.',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'JWT'],
    image: projectTaskapp,
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application that displays current conditions, forecasts, and interactive maps for multiple cities.',
    technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js', 'Local Storage'],
    image: projectWeather,
  },
  {
    title: 'Restaurant Website',
    description: 'A modern restaurant website with online reservation system, menu display, and integrated payment options.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    image: projectRestaurant,
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-friendly fitness app with workout tracking, progress charts, and personalized exercise recommendations.',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'Google Fit API'],
    image: projectFitness,
  },
  {
    title: 'Portfolio CMS',
    description: 'A custom content management system for portfolio websites with drag-and-drop project management.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'JWT'],
    image: projectCms,
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
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-secondary/70 rounded-2xl overflow-hidden border border-primary/10 opacity-0 animate-fade-in-up transition-all duration-400 hover:translate-y-[-15px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_hsl(199_100%_50%/0.2)] hover:border-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-primary/15 px-3 py-1.5 rounded text-xs text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
