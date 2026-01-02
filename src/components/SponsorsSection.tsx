export const SponsorsSection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4">
            OUR PARTNERS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider mb-6">
            POWERED BY <span className="text-gradient-neon">INDUSTRY LEADERS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hands with the companies shaping the future of technology.
          </p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {/* Title Sponsors */}
          <div>
            <h3 className="font-display text-center text-sm tracking-[0.3em] text-muted-foreground mb-8">
              TITLE SPONSOR
            </h3>
            <div className="flex justify-center">
              <div className="glass-card p-12 w-64 h-32 flex items-center justify-center hover:shadow-glow-cyan transition-all duration-500">
                <span className="font-display text-2xl tracking-wider text-muted-foreground">
                  YOUR LOGO
                </span>
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="font-display text-center text-sm tracking-[0.3em] text-muted-foreground mb-8">
              GOLD SPONSORS
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="glass-card p-8 w-48 h-24 flex items-center justify-center hover:shadow-glow-cyan hover:border-primary/50 border border-transparent transition-all duration-500"
                >
                  <span className="font-display text-lg tracking-wider text-muted-foreground">
                    LOGO {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="font-display text-center text-sm tracking-[0.3em] text-muted-foreground mb-8">
              SILVER SPONSORS
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="glass-card p-6 w-36 h-20 flex items-center justify-center hover:shadow-glow-magenta hover:border-accent/50 border border-transparent transition-all duration-500"
                >
                  <span className="font-display text-sm tracking-wider text-muted-foreground">
                    LOGO {i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring HTS 26?
          </p>
          <a 
            href="mailto:sponsors@hackthespring.com"
            className="inline-flex items-center gap-2 font-display text-primary hover:text-accent transition-colors"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </section>
  );
};
