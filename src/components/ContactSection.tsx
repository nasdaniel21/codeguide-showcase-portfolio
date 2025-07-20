import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@codeguide.dev',
      href: 'mailto:hello@codeguide.dev'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      username: '@codeguide'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      username: '/in/codeguide'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      username: '@codeguide_dev'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-hero relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next project to life? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'm always open to discussing new opportunities and interesting challenges.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <contact.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {contact.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 hover:bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                    >
                      <social.icon size={20} className="text-primary" />
                      <div className="hidden sm:block">
                        <div className="text-xs text-muted-foreground">{social.label}</div>
                        <div className="text-sm font-medium text-foreground">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="lg:pl-8">
              <Card className="bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-hover">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Mail size={32} className="text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Ready to start your project?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I'm currently available for freelance work and exciting opportunities. 
                        Let's discuss how we can work together to create something amazing.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-glow hover:shadow-hover transition-all duration-300"
                      >
                        <a href="mailto:hello@codeguide.dev">
                          <Mail size={20} className="mr-2" />
                          Send me an email
                        </a>
                      </Button>
                      
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full border-primary/30 text-foreground hover:bg-primary/10 transition-all duration-300"
                      >
                        <a href="#" download>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download Resume
                        </a>
                      </Button>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Typical response time: <span className="text-primary font-medium">24 hours</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;