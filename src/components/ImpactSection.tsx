const StatCard = ({ value, title, subtitle }: { value: string; title: string; subtitle: string }) => {
  return (
    <div className="relative rounded-2xl p-8 sm:p-10 bg-card text-card-foreground">
      <div className="absolute inset-0 rounded-2xl border [--c1:#9cc6ff] [--c2:#d7e9ff]" style={{ boxShadow: "inset 0 0 0 3px hsl(211 100% 80% / 0.7)" }} />
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(120%_60%_at_50%_0%,hsl(211_100%_95%/.9),transparent_60%)]" />
      <div className="relative z-10">
        <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[hsl(211_100%_50%)] mb-4">
          {value}
        </div>
        <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
        <div className="text-sm text-muted-foreground leading-relaxed">{subtitle}</div>
      </div>
    </div>
  );
};

const ImpactSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full border bg-white/70 backdrop-blur text-sm text-foreground shadow-[var(--shadow-soft)]">
          <span className="inline-block size-2 rounded-full bg-[hsl(211_100%_59%)] shadow-[0_0_0_3px_hsl(211_100%_90%)]" />
          <span className="font-medium">Our Impact</span>
        </div>

        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">Fast launches Real results</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">
          <StatCard value="$25M+" title="Raised" subtitle="by founders who launched with us" />
          <StatCard value="50+" title="MVPs Built" subtitle="live in market within 2 weeks" />
          <StatCard value="5" title="Startups Acquired" subtitle="after launching through LaunchPad Labs" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;


