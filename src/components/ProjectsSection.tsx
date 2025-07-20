import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication. Built with modern web technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Shadcn/ui'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization with interactive charts, forecasting, and location-based insights. Responsive design optimized for all devices.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Comprehensive social media analytics platform with multi-platform integration, automated reporting, and performance tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Material-UI', 'REST APIs'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-hero relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, from concept to deployment
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-gradient-card border-border hover:border-primary/30 transition-all duration-500 hover:shadow-hover group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex space-x-4">
                          <Button
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-primary/30 text-foreground hover:bg-primary/10"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Other <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h4 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3 pt-2">
                        <Button
                          asChild
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1" />
                            Live
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-primary/30 text-foreground hover:bg-primary/10"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={14} className="mr-1" />
                            Code
                          </a>
                        </Button>
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

export default ProjectsSection;
