import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { X } from 'lucide-react';

// Placeholder gallery images (will show gradient placeholders)
const galleryImages = [
  { id: 1, title: 'Opening Ceremony', category: 'Event' },
  { id: 2, title: 'Hacking in Progress', category: 'Coding' },
  { id: 3, title: 'Team Collaboration', category: 'Teams' },
  { id: 4, title: 'Mentor Session', category: 'Mentorship' },
  { id: 5, title: 'Project Demo', category: 'Demo' },
  { id: 6, title: 'Award Ceremony', category: 'Awards' },
  { id: 7, title: 'Networking Session', category: 'Networking' },
  { id: 8, title: 'Workshop', category: 'Workshop' },
  { id: 9, title: 'Late Night Coding', category: 'Coding' },
];

const categories = ['All', 'Event', 'Coding', 'Teams', 'Mentorship', 'Demo', 'Awards'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
            MEMORIES
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-6 animate-fade-in-up delay-100">
            EVENT <span className="text-gradient-neon">GALLERY</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Relive the most exciting moments from previous editions of Hack The Spring.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-display text-sm tracking-wider transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow-cyan'
                    : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-video cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glass Frame */}
                <div className="absolute inset-0 glass-card overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                  {/* Gradient Placeholder */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(${135 + index * 30}deg, 
                        hsl(var(--cosmic-purple) / 0.8), 
                        hsl(var(--cosmic-blue) / 0.8), 
                        hsl(var(--neon-cyan) / 0.3))`,
                    }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-wider text-foreground">
                        {image.title}
                      </h3>
                      <p className="text-primary text-sm font-display tracking-wider">
                        {image.category}
                      </p>
                    </div>
                  </div>

                  {/* Neon Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-500" />

                  {/* Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-star-white/10 to-transparent opacity-30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <div 
            className="glass-card p-2 max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="w-full h-full rounded-lg"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(var(--cosmic-purple) / 0.8), 
                  hsl(var(--cosmic-blue) / 0.8), 
                  hsl(var(--neon-cyan) / 0.3))`,
              }}
            />
          </div>
        </div>
      )}

      {/* Coming Soon Note */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              📸 These are placeholder images. Real photos from HTS 26 will be uploaded after the event!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
