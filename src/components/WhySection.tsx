const FeatureCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  return (
    <div style={{ width: 381, height: 415 }} className="flex items-center justify-center">
      <div
        className="relative bg-card text-card-foreground border rounded-[16px]"
        style={{
          width: 381,
          height: 415,
          boxShadow: "0px 2px 21px 0px #0000001A",
          transform: "scale(0.9)",
          transformOrigin: "center",
        }}
      >
        <div className="px-4 pt-4 pb-5 h-full flex flex-col">
        <div className="relative rounded-[14px] bg-[hsl(211_100%_96%)] h-[280px] overflow-hidden">
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 rounded-[14px]" style={{ boxShadow: "rgba(153, 202, 255, 0.6) 0px 0px 0px 3px inset" }} />
          <div className="absolute inset-0 rounded-[14px] pointer-events-none bg-[radial-gradient(120%_60%_at_50%_0%,hsl(211_100%_95%/.9),transparent_60%)]" />
        </div>
        <div className="mt-5 text-center">
          <div className="font-semibold text-[15px] text-foreground">{title}</div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

const WhySection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full border bg-white/70 backdrop-blur text-sm text-foreground shadow-[var(--shadow-soft)]">
            <span className="inline-block size-2 rounded-full bg-[hsl(211_100%_59%)] shadow-[0_0_0_3px_hsl(211_100%_90%)]" />
            <span className="font-medium">Why LaunchPad Labs</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Built faster Built smarter Built by founders
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-3xl mx-auto">
            MVPs built faster, smarter, and better – by founders who’ve done it before.
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            We turn your idea into a launch‑ready product in just <span className="font-semibold">2 weeks</span>, using modern
            tech and proven systems trusted by <span className="font-semibold">50+ funded startups</span>.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-12 lg:gap-14">
          <FeatureCard
            title="MVP Package"
            description="Everything you need SaaS, web app, or landing page build and launch‑ready in 2 weeks."
            imageSrc="/firstbg.png"
          />
          <FeatureCard
            title="Integrations"
            description="Payments, logins, emails & more. We connect everything so you're ready to onboard users from day one."
            imageSrc="/secondbg.png"
          />
          <FeatureCard
            title="Modern Stack"
            description="Built with the latest tech and AI delivering speed, stability, and scalability for real growth."
            imageSrc="/thirdbg.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySection;


