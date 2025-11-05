import { Button } from "@/components/ui/button";
import { NotificationBadge } from "@/components/ui/notification-badge";
import { Calendar } from "lucide-react";
import CalendarCard from "./CalendarCard";
import DecorativeElements from "./DecorativeElements";
import Hero from "./icons/Hero";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">

      <DecorativeElements />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          {/* Status Badge */}
          <NotificationBadge
            text="5 Founder booked the call this week"
            className="mb-8"
          />

          {/* Hero Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            We Build and
            <span className="inline-flex items-cent\er ustify-center align-top h-full">
              <Hero />
            </span>
            Launch Your
            <br />
            Startup MVP in Just{" "}
            <span className="text-primary ">2 Weeks</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-[19px] text-[#5B5B5B] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            LaunchPad Labs builds and ships investor-ready MVPs for founders
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-background"
                />
              ))}
            </div>
            <span className="text-[15px] py-2 font-medium text-[#4C4C4C]">
              Trusted by 50+ VC-backed founders
            </span>
          </div>

          {/* CTA Button */}
          {/* <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)] hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400"
          >
            Book My Free MVP Call
          </Button> */}
        </div>

        {/* Calendar Card */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <CalendarCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
