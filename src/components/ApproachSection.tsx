import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const ListItem = ({ icon, text }: { icon: "check" | "x"; text: string }) => {
  const isCheck = icon === "check";
  return (
    <li className="flex items-start gap-3">
      {isCheck ? (
        <span
          className="inline-flex items-center justify-center rounded-[6px]"
          style={{
            width: 35,
            height: 32,
            background: "linear-gradient(0.47deg, #5BF36D 2.08%, #90E9A4 46.31%, #C2FFCB 95.04%)",
          }}
        >
          <Check className="h-4 w-4 text-[hsl(142_76%_20%)]" />
        </span>
      ) : (
        <span
          className="inline-flex items-center justify-center rounded-[6px] text-[hsl(0_84%_50%)]"
          style={{ width: 35, height: 32, background: '#FFD4D4' }}
        >
          <X className="h-4 w-4" />
        </span>
      )}
      <span className="text-sm text-foreground/90 leading-6">{text}</span>
    </li>
  );
};

const Card = ({ variant, title, items }: { variant: "bad" | "good"; title: string; items: string[] }) => {
  const isGood = variant === "good";
  return (
    <div className={`relative rounded-[20px] p-8 sm:p-10 text-left mx-auto`} style={{ width: 458, height: 411 }}> 
      <svg className="absolute inset-0" width={458} height={411} aria-hidden>
        <rect
          x="1"
          y="1"
          width={456}
          height={409}
          rx={20}
          ry={20}
          fill="none"
          stroke={isGood ? 'hsla(142,76%,36%,0.35)' : 'hsla(0,84%,60%,0.35)'}
          strokeWidth={2}
          strokeDasharray="9 9"
        />
      </svg>
      <div className="relative z-10">
        <div className="mx-auto -mt-6 mb-6 w-max rounded-full border bg-white px-4 h-9 shadow-[0_6px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-sm">
          <span className="text-foreground/80 font-medium">{title}</span>
        </div>
        <ul className="space-y-5">
          {items.map((t, i) => (
            <ListItem key={i} icon={isGood ? "check" : "x"} text={t} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const ApproachSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full border bg-white/70 backdrop-blur text-sm text-foreground shadow-[var(--shadow-soft)]">
          <span className="inline-block size-2 rounded-full bg-[hsl(211_100%_59%)] shadow-[0_0_0_3px_hsl(211_100%_90%)]" />
          <span className="font-medium">Our Approach</span>
        </div>
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
          Why founders launch faster with LaunchPad labs
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <Card
            variant="bad"
            title="Traditional Development"
            items={[
              "Months of Planning",
              "Too Many Cooks",
              "Design–Then–Build Bottlenecks",
              "Huge Upfront Fees",
              "Complex Tech Setup",
            ]}
          />
          <Card
            variant="good"
            title="LaunchPad Labs Approach"
            items={[
              "2–Week Launch System",
              "Focused Founder–Led Pods",
              "Real–Time Prototyping",
              "Flat $4,997 Transparent Pricing",
              "Modern, Scalable Stack",
            ]}
          />
        </div>

        <div className="mt-14">
          <Button
            variant="cta"
            className="h-[48px] px-6 rounded-[30px] border-[#9CC6FF]"
            style={{ background: 'linear-gradient(-2.38deg, #0f93ff, #003bb9)', boxShadow: 'var(--shadow-button)' }}
          >
            Book My Free MVP Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;


