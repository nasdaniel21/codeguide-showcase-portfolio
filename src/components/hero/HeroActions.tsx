import { Button } from '@/components/ui/button';

interface HeroActionsProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

const HeroActions = ({ onViewWork, onGetInTouch }: HeroActionsProps) => {
  return (
    <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
      <Button
        onClick={onViewWork}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow hover:shadow-hover transition-all duration-300 hover:scale-105"
      >
        View My Work
      </Button>
      
      <Button
        onClick={onGetInTouch}
        variant="outline"
        size="lg"
        className="border-2 border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
      >
        Get In Touch
      </Button>
    </div>
  );
};

export default HeroActions;