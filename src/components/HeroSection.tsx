import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground mb-2">Building Digital</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer crafting modern web applications with clean code, 
            stunning design, and seamless user experiences.
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            size="lg"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-up flex justify-center space-x-6 mb-12" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 rounded-full bg-card/50 hover:bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              aria-label={label}
            >
              <Icon size={24} className="text-muted-foreground hover:text-primary transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown 
              size={20} 
              className="animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;