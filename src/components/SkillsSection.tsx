import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript (ES6+)', level: 94 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'PostgreSQL', level: 87 },
        { name: 'MongoDB', level: 83 },
        { name: 'GraphQL', level: 80 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 78 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'Webpack/Vite', level: 88 }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'Vue.js',
    'Express.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL',
    'Tailwind CSS', 'Git', 'Linux', 'Webpack', 'Vite', 'Jest',
    'Cypress', 'Redis', 'Socket.io', 'REST APIs', 'Microservices', 'Agile'
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                            style={{ 
                              width: `${skill.level}%`,
                              transformOrigin: 'left center'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Cloud */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Technology <span className="bg-gradient-primary bg-clip-text text-transparent">Stack</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-card hover:bg-primary/10 text-foreground border border-border hover:border-primary/30 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;