import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { HeroSection } from '@/components/HeroSection';
import { TracksSection } from '@/components/TracksSection';
import { HighlightsSection } from '@/components/HighlightsSection';
import { TimelineSection } from '@/components/TimelineSection';
import { SponsorsSection } from '@/components/SponsorsSection';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <Navbar />
      <HeroSection />
      <TracksSection />
      <HighlightsSection />
      <TimelineSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
};

export default Index;
