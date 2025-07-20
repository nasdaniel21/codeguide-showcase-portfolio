const HeroContent = () => {
  return (
    <div className="relative z-10 text-left px-6 lg:px-8 max-w-4xl mx-auto lg:max-w-2xl">
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
    </div>
  );
};

export default HeroContent;