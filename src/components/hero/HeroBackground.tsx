import heroImage from '@/assets/hero-bg.jpg';

interface HeroBackgroundProps {
  scrollY: number;
}

const HeroBackground = ({ scrollY }: HeroBackgroundProps) => {
  return (
    <>
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

      {/* Hero Image with Parallax Effect */}
      <div 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-5 hidden lg:block"
        style={{ transform: `translateY(-50%) translateY(${scrollY * 0.3}px)` }}
      >
        <div className="relative">
          <img 
            src="/lovable-uploads/f77ab5f1-b017-496a-81ce-12cb0020c926.png" 
            alt="Developer portrait"
            className="w-80 h-96 object-cover rounded-2xl shadow-2xl border border-border/20"
            style={{ transform: `translateX(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default HeroBackground;