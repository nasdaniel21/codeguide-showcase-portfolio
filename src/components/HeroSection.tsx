import { useEffect, useState } from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroActions from './hero/HeroActions';
import HeroSocials from './hero/HeroSocials';
import HeroScrollIndicator from './hero/HeroScrollIndicator';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground scrollY={scrollY} />
      
      <div className="relative z-10 w-full">
        <HeroContent />
        <HeroActions 
          onViewWork={() => scrollToSection('projects')}
          onGetInTouch={() => scrollToSection('contact')}
        />
        <HeroSocials />
        <HeroScrollIndicator onScroll={() => scrollToSection('about')} />
      </div>
    </section>
  );
};

export default HeroSection;