import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Linkedin, Instagram } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const teamCategories = [
  {
    title: "LEADERSHIP",
    members: [
      { name: 'Aarav Patel', role: 'Lead Organizer' },
      { name: 'Priya Sharma', role: 'Technical Head' },
      { name: 'Rohan Mehta', role: 'Design Lead' },
      { name: 'Ananya Gupta', role: 'Marketing Head' },
      { name: 'Vikram Singh', role: 'Sponsorship Lead' },
      { name: 'Neha Reddy', role: 'Operations Head' },
      { name: 'Arjun Kumar', role: 'Tech Team' },
      { name: 'Ishita Joshi', role: 'Content Lead' },
      { name: 'Kabir Verma', role: 'Events Lead' },
      { name: 'Sanya Malhotra', role: 'PR Lead' },
    ]
  },
  {
    title: "CORE TEAM",
    members: [
      { name: 'Aryan Khan', role: 'Logistics' },
      { name: 'Zoya Ahmed', role: 'Volunteer Lead' },
      { name: 'Rishi Raj', role: 'Security Head' },
      { name: 'Meera Das', role: 'Hospitality' },
      { name: 'Dev Shah', role: 'Tech Support' },
      { name: 'Kunal Singh', role: 'Media' },
      { name: 'Riya Varma', role: 'Finance' },
      { name: 'Sahil Moon', role: 'Creative' },
      { name: 'Tanya Goel', role: 'Outreach' },
      { name: 'Yash Rathore', role: 'Strategy' },
    ]
  },
  {
    title: "COORDINATORS",
    members: [
      { name: 'Aakash Jha', role: 'Web Dev' },
      { name: 'Bhavya Jain', role: 'Backend' },
      { name: 'Chitra Pal', role: 'UI/UX' },
      { name: 'Dinesh Vyas', role: 'Networking' },
      { name: 'Esha Dhar', role: 'Registration' },
      { name: 'Farhan Ali', role: 'Judge Liaison' },
      { name: 'Gauri Sen', role: 'Speaker Lead' },
      { name: 'Harsh Pal', role: 'Printing' },
      { name: 'Indu Bala', role: 'Catering' },
      { name: 'Jatin Rao', role: 'Transport' },
    ]
  }
];

const TeamMemberCard = ({ member }: { member: any }) => (
  <div className="group relative px-2">
    <div className="relative glass-card p-6 text-center hover:scale-105 transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer" />
      </div>

      <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-2 border-primary/50 group-hover:border-primary group-hover:shadow-glow-cyan transition-all duration-500">
        <span className="font-display text-3xl font-bold text-primary">
          {member.name.split(' ').map((n: string) => n[0]).join('')}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-primary text-sm font-display tracking-wider mb-4">
          {member.role}
        </p>

        <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all">
            <Linkedin size={16} />
          </a>
          <a href="#" className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all">
            <Instagram size={16} />
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
    </div>
  </div>
);

const Team = () => {
  return (
    /* Changed: Added flex flex-col min-h-screen and overflow-hidden */
    <main className="relative min-h-screen bg-background overflow-x-hidden flex flex-col">
      <StarField />
      <Navbar />

      {/* Changed: Wrapped content in a div with flex-grow to push footer down */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-40 pb-10">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
              THE CREW
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-6 animate-fade-in-up delay-100">
              MEET OUR <span className="text-gradient-neon">TEAM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              The passionate individuals behind Hack The Spring 2026, working tirelessly to create 
              an unforgettable experience for all participants.
            </p>
          </div>
        </section>

        {/* 3 Auto-scrolling Sections */}
        {teamCategories.map((category) => (
          <section key={category.title} className="relative py-12">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl font-bold tracking-[0.2em] text-center mb-10 text-foreground/80">
                {category.title}
              </h2>
              <div className="max-w-5xl mx-auto">
                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[Autoplay({ delay: 3000 })]}
                  className="w-full"
                >
                  <CarouselContent>
                    {category.members.map((member, index) => (
                      <CarouselItem key={index} className="basis-full md:basis-1/2">
                        <TeamMemberCard member={member} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default Team;