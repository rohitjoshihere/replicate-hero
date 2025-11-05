interface StepCardProps {
  step: string;
  title: string;
  description: string;
  width: number;
  height: number;
  preview?: { width: number; height: number; top: number; left: number; radius: number };
  children?: React.ReactNode;
}

const StepBadge = ({ step }: { step: string }) => (
  <div
    className="absolute flex items-center justify-center text-[11px] font-semibold text-white"
    style={{
      width: 29,
      height: 28,
      top: 15,
      left: 15,
      borderRadius: 6,
      background:
        "linear-gradient(0.47deg, #0761D8 2.08%, #0F93FF 46.31%, #9ED3FF 95.04%)",
      boxShadow: "0px 4px 11px 0px #00000017",
    }}
  >
    {step}
  </div>
);

const StepCard = ({ step, title, description, width, height, preview, children }: StepCardProps) => {
  return (
    <div
      className="relative rounded-[16px] overflow-hidden text-left"
      style={{
        width,
        height,
        border: '1.5px solid hsl(211 90% 92%)',
        boxShadow: '0 12px 24px -8px rgba(0,0,0,0.08)',
        background: 'white'
      }}
    >
      {preview ? (
        <div
          className="absolute"
          style={{
            width: preview.width,
            height: preview.height,
            top: preview.top,
            left: preview.left,
            borderRadius: preview.radius,
            background:
              'linear-gradient(180deg, rgba(238, 246, 255, 0.9), rgba(238, 246, 255, 0.85)),\
               linear-gradient(#E3F0FF 1px, transparent 1px),\
               linear-gradient(90deg, #E3F0FF 1px, transparent 1px)',
            backgroundSize: '100% 100%, 24px 24px, 24px 24px',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        />
      ) : null}
      <StepBadge step={step} />
      <div className="relative z-10 px-5 sm:px-6 pb-5 pt-10">
        <div className="text-[15px] font-semibold text-foreground mb-2 tracking-tight">{title}</div>
        <p className="text-[12px] text-muted-foreground leading-[1.6] mt-1">
          {description}
        </p>
      </div>
      {children && preview ? (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            top: preview.top,
            left: preview.left,
            width: preview.width,
            height: preview.height,
          }}
        >
          <div className="relative w-full h-full">{children}</div>
        </div>
      ) : children ? (
        <div className="absolute inset-0 z-10 pointer-events-none">{children}</div>
      ) : null}
      {!preview ? (
        <div className="mx-4 mb-4 rounded-[14px] relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(238,246,255,0.9), rgba(238,246,255,0.85))' }}>
          <div className="absolute inset-0 rounded-[14px]" style={{ boxShadow: 'rgba(153, 202, 255, 0.5) 0px 0px 0px 3px inset' }} />
        </div>
      ) : null}
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full border bg-white/70 backdrop-blur text-sm text-foreground shadow-[var(--shadow-soft)]">
          <span className="inline-block size-2 rounded-full bg-[hsl(211_100%_59%)] shadow-[0_0_0_3px_hsl(211_100%_90%)]" />
          <span className="font-medium">Our Process</span>
        </div>

        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">The LaunchPad Process</h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-3xl mx-auto">
          A transparent, founder‑friendly journey from idea to live MVP in just <span className="font-semibold">2 weeks</span>.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <StepCard
            step="01"
            title="Launch Call"
            description="Kick off with a direct call with our founder. We clarify your idea, goals, and success metrics."
            width={360}
            height={418}
            preview={{ width: 344, height: 403, top: 8, left: 8, radius: 8 }}
          >
            <img src="/cards1.png" alt="" className="absolute object-contain" style={{ right: 8, top: 80, width: 260, filter: 'drop-shadow(0 6px 16px rgba(15,147,255,0.15))' }} />
            <img src="/cards2.png" alt="" className="absolute object-contain" style={{ left: 8, top: 120, width: 120, filter: 'drop-shadow(0 4px 12px rgba(15,147,255,0.12))' }} />
            <img src="/cards3.png" alt="" className="absolute object-contain" style={{ right: 10, top: 230, width: 270, filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.10))' }} />
            <img src="/cards4.png" alt="" className="absolute object-contain" style={{ left: 120, bottom: 10, width: 138, filter: 'drop-shadow(0 10px 22px rgba(15,147,255,0.18))' }} />
          </StepCard>
          <StepCard
            step="02"
            title="Launch Plan"
            description="We map your MVP blueprint and deliver a clear PRD: features, flows, timelines, and no surprises."
            width={360}
            height={418}
            preview={{ width: 344, height: 403, top: 8, left: 8, radius: 8 }}
          />
          <StepCard
            step="03"
            title="Launch Sprint"
            description="Daily updates, transparent progress, and fast feedback loops. See your product take shape in real time."
            width={360}
            height={418}
            preview={{ width: 344, height: 403, top: 8, left: 8, radius: 8 }}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 justify-items-center">
          <StepCard
            step="04"
            title="Launch Delivery"
            description="Your MVP goes live—functional, tested, and ready for demos, users, or fundraising. We handle deployment."
            width={520}
            height={418}
          />
          <StepCard
            step="05"
            title="Launch Support"
            description="You get 4 weeks of free maintenance and optimization. We tune, fix, and upgrade so your MVP runs smooth."
            width={520}
            height={418}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;


