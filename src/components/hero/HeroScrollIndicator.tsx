import { ArrowDown } from 'lucide-react';

interface HeroScrollIndicatorProps {
  onScroll: () => void;
}

const HeroScrollIndicator = ({ onScroll }: HeroScrollIndicatorProps) => {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
      <button
        onClick={onScroll}
        className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <ArrowDown 
          size={20} 
          className="animate-bounce group-hover:transform group-hover:scale-110 transition-transform duration-300" 
        />
      </button>
    </div>
  );
};

export default HeroScrollIndicator;