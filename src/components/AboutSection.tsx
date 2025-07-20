import { Code, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant, user-friendly solutions'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user experience'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences that matter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Crafting code that makes a difference
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in full-stack development, I specialize in creating 
                  modern web applications that combine beautiful design with robust functionality. 
                  My journey started with a simple "Hello, World!" and has evolved into building 
                  complex systems that serve thousands of users.
                </p>
                
                <p>
                  I believe that great software is not just about the code—it's about understanding 
                  user needs, solving real problems, and creating experiences that delight. Whether 
                  it's a sleek frontend interface or a scalable backend architecture, I approach 
                  every project with attention to detail and a commitment to excellence.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge with the developer community through 
                  blog posts and mentoring.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '20+', label: 'Technologies' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;