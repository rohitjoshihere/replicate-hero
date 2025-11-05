const StarRow = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="inline-block size-2.5 rounded-full bg-[hsl(43_96%_56%)]" />
    ))}
  </div>
);

const QuoteCard = ({ name }: { name: string }) => (
  <div
    className="relative rounded-[14px] bg-white p-4"
    style={{ width: 302, height: 225, boxShadow: "0px 2px 10px 0px rgba(98,181,255,0.57)" }}
  >
    {/* cloud-like soft shadows at top and bottom to imply depth */}
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-6 w-[240px] h-[72px] rounded-full opacity-70 blur-xl"
      style={{
        background:
          "radial-gradient(closest-side, rgba(172,216,255,0.45), rgba(172,216,255,0.18), transparent)"
      }}
      aria-hidden
    />
    <div
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-6 w-[240px] h-[72px] rounded-full opacity-70 blur-xl"
      style={{
        background:
          "radial-gradient(closest-side, rgba(172,216,255,0.45), rgba(172,216,255,0.18), transparent)"
      }}
      aria-hidden
    />
    <svg className="absolute inset-0" width={302} height={225} aria-hidden>
      <rect x="0.5" y="0.5" width={301} height={224} rx={14} ry={14} fill="none" stroke="#ACD8FF" strokeWidth={1} strokeDasharray="5 5" />
    </svg>
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="size-6 rounded-full bg-muted" />
        <div className="text-[12px] font-semibold text-foreground/90">{name} <span className="text-[10px] font-normal text-muted-foreground">• Software Developer</span></div>
        <span className="ml-auto inline-block size-2 rounded-full bg-[hsl(211_100%_59%)]" />
      </div>
      <p className="text-[12px] text-muted-foreground leading-[1.6] mb-3">“LaunchPad Labs turned our idea into a working MVP in record time. Couldn’t have asked for a smoother process.”</p>
      <StarRow />
    </div>
  </div>
);

const VideoCard = () => (
  <div className="relative w-[421px] h-[400px]">
    {/* back stacks */}
    <div className="absolute top-4 left-4 w-[421px] h-[400px] rounded-[20px]" style={{
      transform: 'translateX(24px)',
      background: 'linear-gradient(180deg, #eaf3ff, #c7e1ff)',
      boxShadow: '0 12px 28px rgba(0,0,0,0.08)'
    }} />
    <div className="absolute top-2 left-2 w-[421px] h-[400px] rounded-[20px]" style={{
      transform: 'translateX(12px)',
      background: 'linear-gradient(180deg, #eaf3ff, #c7e1ff)',
      boxShadow: '0 10px 24px rgba(0,0,0,0.08)'
    }} />
    {/* main card with white frame and inner inset border */}
    <div className="relative w-[421px] h-[400px] rounded-[22px] bg-white p-2 shadow-[0_18px_36px_rgba(0,0,0,0.08)]">
      <div className="relative size-full rounded-[18px] overflow-hidden">
        {/* gradient surface */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #eaf3ff 0%, #c7e1ff 100%)' }} />
        {/* inner inset border */}
        <div className="absolute inset-0 rounded-[18px]" style={{ boxShadow: 'inset 0 0 0 3px rgba(153,202,255,0.6)' }} />
        {/* center play button */}
        <button
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full shadow-[0_12px_26px_rgba(15,147,255,0.35)] ring-4 ring-white/80"
          style={{ background: 'linear-gradient(180deg, #0F93FF, #003BB9)' }}
          aria-label="Play"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 mx-auto fill-white"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
    </div>
    {/* dots */}
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 flex items-center gap-2">
      <span className="inline-block w-10 h-1.5 rounded-full bg-[hsl(211_100%_59%)]" />
      <span className="inline-block size-1.5 rounded-full bg-muted" />
      <span className="inline-block size-1.5 rounded-full bg-muted" />
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full border bg-white/70 backdrop-blur text-sm text-foreground shadow-[var(--shadow-soft)]">
            <span className="inline-block size-2 rounded-full bg-[hsl(211_100%_59%)] shadow-[0_0_0_3px_hsl(211_100%_90%)]" />
            <span className="font-medium">Testimonials</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[421px_1fr] gap-10 items-start">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">What Founders Are Saying About<br/> LaunchPad Labs</h3>
            <VideoCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(() => {
              const names = ['Sarah Johnson','Alex Kim','Priya Shah','Diego Martinez','Hannah Lee','Tom Nguyen'];
              const midpoint = Math.ceil(names.length / 2);
              const left = names.slice(0, midpoint);
              const right = names.slice(midpoint);
              return (
                <>
                  <div className="flex flex-col gap-4">
                    {left.map((n) => (
                      <QuoteCard key={n} name={n} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 sm:mt-12">
                    {right.map((n) => (
                      <QuoteCard key={n} name={n} />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;


