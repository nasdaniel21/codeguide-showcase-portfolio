import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSocials = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <div className="animate-fade-in-up flex justify-center space-x-6 mb-12" style={{ animationDelay: '0.6s' }}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
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
  );
};

export default HeroSocials;