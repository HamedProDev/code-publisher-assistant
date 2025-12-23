import { MapPin, Briefcase } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-44 pb-28 min-h-screen flex items-center relative">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gradient leading-tight">
              Hamed Hussein
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-5">
              Full Stack <span className="text-primary relative">
                Developer
                <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-primary scale-x-0 origin-right animate-[underlineExpand_2s_ease-in-out_1s_forwards]" />
              </span>
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-muted-foreground text-lg">
              <MapPin className="w-5 h-5" />
              <span>Kigali, Gasabo, Remera - Rwanda</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-9 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm a passionate full stack developer with expertise in building modern, responsive websites and web applications. Ready to create exceptional digital solutions that drive results for your business.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start mb-6">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-[hsl(210,100%,40%)] hover:translate-y-[-5px] hover:shadow-[0_15px_30px_hsl(199_100%_50%/0.4)] text-primary-foreground font-bold px-9 py-6 rounded-full text-lg transition-all duration-300"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-9 py-6 rounded-full text-lg transition-all duration-300"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[hsl(0,77%,65%)] to-[hsl(0,100%,62%)] hover:translate-y-[-5px] text-foreground font-bold px-9 py-6 rounded-full text-lg animate-pulse-glow transition-all duration-300"
            >
              <a href="mailto:hamedhussein001@gmail.com?subject=Hire%20Hamed%20Hussein&body=Hi%20Hamed,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.">
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Me Now
              </a>
            </Button>
          </div>

          {/* Profile Image */}
          <div className="flex-1 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div 
              className="w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-full p-2 animate-float"
              style={{
                background: 'linear-gradient(45deg, hsl(199, 100%, 50%), hsl(180, 100%, 49%), hsl(199, 100%, 50%))',
                backgroundSize: '400% 400%',
                animation: 'gradientBorder 4s ease infinite, float 6s ease-in-out infinite',
                boxShadow: '0 0 50px hsl(199 100% 50% / 0.4)',
              }}
            >
              <img 
                src={profileImage} 
                alt="Hamed Hussein - Full Stack Developer"
                className="w-full h-full rounded-full object-cover bg-card"
              />
            </div>
            <p className="mt-5 text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
