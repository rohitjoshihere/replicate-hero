import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Logo from "@/components/icons/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-1">
            {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div> */}
            <Logo />
            <span className="text-xl font-semibold">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--gradient-logo)' }}
              >
                LaunchPad
              </span>
              <span className="text-black"> Labs</span>
            </span>
          </div>
          <div className="flex gap-9">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#our-work" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Our Work
              </a>
              <a href="#our-process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Our Process
              </a>
              <a href="#founder" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Founder
              </a>
              <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
            </nav>
            <Button
              variant="cta"
              className="rounded-[30px] px-6 border-[#9CC6FF]"
              style={{
                background: 'linear-gradient(-2.38deg, #0f93ff, #003bb9)',
                boxShadow: 'var(--shadow-button)'
              }}
            >
              Book A Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
