import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
}

const projects: ProjectItem[] = [
  { id: "fitai", name: "FitAI" },
  { id: "finsub", name: "FinSub" },
  { id: "billflow", name: "BillFlow" },
  { id: "finshop", name: "FinShop" },
  { id: "taskpro", name: "TaskPro" },
];

const ProjectCard = ({ name }: { name: string }) => {
  return (
    <div className="snap-start shrink-0 bg-card shadow-[var(--shadow-card)] rounded-[16px]" style={{ width: 381, height: 316 }}>
      <div className="p-3 h-full flex flex-col">
        <div className="relative rounded-[12px] bg-[hsl(211_100%_90%)]" style={{ height: 236 }}>
          <div className="absolute inset-0 rounded-[12px]" style={{ boxShadow: "inset 0 0 0 3px hsl(211 100% 80% / 0.7)" }} />
        </div>
        <div className="mt-3 h-[56px] px-4 rounded-b-[12px] bg-white flex items-center justify-between text-sm">
          <span className="text-foreground/90">{name}</span>
          <ArrowUpRight className="w-4 h-4 text-foreground/60" />
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  return (
    <section className="py-16 bg-[#F3F7F8]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full border bg-white/70 backdrop-blur text-sm text-foreground shadow-[var(--shadow-soft)]">
            <span className="inline-block size-2 rounded-full bg-[hsl(211_100%_59%)] shadow-[0_0_0_3px_hsl(211_100%_90%)]" />
            <span className="font-medium">Our Work</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground">
            Every product here went from idea to live in 2 weeks
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Built, launched, and loved by real users
          </p>
        </div>

      </div>
      <div className="mt-8">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} name={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;


