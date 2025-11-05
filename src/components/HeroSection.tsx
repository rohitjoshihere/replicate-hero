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
        <div className="text-center mb-10">
          {/* Status Badge */}
          <NotificationBadge
            text="5 Founder booked the call this week"
            className="mb-8"
          />

          {/* Hero Heading */}
          <h1 className="text-[52px] leading-[75px] font-semibold text-foreground text-center mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            We Build and
            <span className="inline-flex items-center justify-center align-top h-full">
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

          {/* CTA Button moved to overlap calendar section below */}
        </div>

        {/* Calendar Card with overlapping CTA */}
        <div className="relative flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
            <Button
              variant="cta"
              className="px-6 sm:px-8 h-auto py-3 sm:py-4 text-base sm:text-lg"
              style={{
                background: 'linear-gradient(-2.38deg, #0f93ff, #003bb9)',
                boxShadow: 'var(--shadow-button)'
              }}
            >
              Book My Free MVP Call
            </Button>
          </div>
          <CalendarCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
