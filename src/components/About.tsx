const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vue.js', 'TypeScript', 'SASS', 'Bootstrap'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git & GitHub', 'Docker', 'AWS', 'REST APIs', 'GraphQL', 'Webpack', 'Jest', 'Figma'],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16 relative inline-block left-1/2 -translate-x-1/2">
          About Me
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded" />
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* About Text */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Hamed Hussein, a full stack developer based in Rwanda. I specialize in creating dynamic, responsive websites and web applications that provide exceptional user experiences and deliver real business value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in both frontend and backend development, I can handle everything from database design to UI/UX implementation. My passion lies in using technology to solve real-world problems and create innovative solutions for businesses and individuals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm constantly learning and adapting to new technologies, ensuring that my skills stay current in this fast-paced industry. When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or enjoying the beautiful landscapes of Rwanda.
            </p>
          </div>

          {/* Skills */}
          <div className="flex-1 space-y-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-secondary/50 p-6 rounded-2xl border-l-4 border-primary transition-all duration-400 hover:translate-y-[-10px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-l-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-5">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-primary/10 px-4 py-2.5 rounded-full text-sm border border-primary/30 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:translate-y-[-5px] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
