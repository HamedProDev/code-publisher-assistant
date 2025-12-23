import { useState } from 'react';
import { Mail, Github, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    lines: ['hamedhussein001@gmail.com', 'hamussein01@gmail.com', 'novasoftrwanda@gmail.com'],
  },
  {
    icon: Github,
    title: 'GitHub',
    lines: ['github.com/hamedprodev'],
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Kigali, Gasabo, Remera', 'Rwanda'],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: `Thank you, ${formData.name}!`,
      description: `Your message has been sent. I'll get back to you at ${formData.email} as soon as possible.`,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16 relative inline-block left-1/2 -translate-x-1/2">
          Get In Touch
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded" />
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.title}
                    className="flex items-center gap-5 bg-secondary/50 p-5 rounded-xl transition-all duration-400 hover:bg-secondary/80 hover:translate-x-3"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-[hsl(210,100%,40%)] rounded-full flex items-center justify-center text-primary-foreground text-xl flex-shrink-0">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-secondary/50 p-10 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium mb-2.5 block">Your Name</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-foreground/5 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground py-6"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground font-medium mb-2.5 block">Your Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-foreground/5 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground py-6"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground font-medium mb-2.5 block">Your Message</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[180px] bg-foreground/5 border-primary/20 focus:border-primary focus:ring-primary/20 text-foreground resize-y"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-primary to-[hsl(210,100%,40%)] hover:translate-y-[-5px] hover:shadow-[0_15px_30px_hsl(199_100%_50%/0.4)] text-primary-foreground font-bold px-9 py-6 rounded-full text-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
