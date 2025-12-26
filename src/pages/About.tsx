import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Target, Users, Rocket, Award } from 'lucide-react';
import planetImage from '@/assets/planet.png';

const milestones = [
  { year: '2024', title: 'The Beginning', description: 'First edition of Hack The Spring with 200+ participants' },
  { year: '2025', title: 'Growing Strong', description: 'Expanded to 400+ hackers with international mentors' },
  { year: '2026', title: 'The Future', description: 'National-level hackathon with 500+ innovators' },
];

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower the next generation of innovators by providing a platform where creativity meets technology.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a vibrant ecosystem of developers, designers, and dreamers who push boundaries together.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Fostering groundbreaking ideas that have the potential to transform industries and impact lives.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering a world-class hackathon experience that sets the benchmark in India.',
  },
];

const About = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30"
          style={{
            backgroundImage: `url(${planetImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'blur(2px)',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
              OUR STORY
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-8 animate-fade-in-up delay-100">
              ABOUT <span className="text-gradient-neon">HTS 26</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up delay-200">
              Hack The Spring is more than just a hackathon — it's a movement. Organized by 
              Government Engineering College, Gandhinagar, we bring together the brightest minds 
              in technology to innovate, collaborate, and build solutions that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-8 text-center hover:scale-105 transition-transform duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4">
              OUR JOURNEY
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider">
              FROM VISION TO <span className="text-gradient-neon">REALITY</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-8 md:pl-0`}>
                    <div className="glass-card p-6 inline-block">
                      <span className="font-display text-3xl font-bold text-gradient-neon">
                        {milestone.year}
                      </span>
                      <h3 className="font-display text-xl tracking-wider text-foreground mt-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow-cyan" />

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* College Info */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider mb-6">
              GOVERNMENT ENGINEERING COLLEGE
            </h2>
            <p className="text-primary font-display tracking-wider mb-6">
              GANDHINAGAR, GUJARAT
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Established as a premier institution of technical education, GEC Gandhinagar 
              has been nurturing engineering talent for decades. Our commitment to excellence 
              and innovation makes us the perfect host for Hack The Spring.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
