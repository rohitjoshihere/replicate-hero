import { Settings, Rocket, Lightbulb, CreditCard } from "lucide-react";

const DecorativeElements = () => {
  return (
    <>
      {/* Left Side Elements */}
      <div className="absolute left-8 top-1/3 hidden lg:block">
        <div className="relative">
          {/* Settings Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-4 animate-in fade-in duration-1000 delay-700">
            <Settings className="w-8 h-8 text-primary" />
          </div>
          
          {/* Curved Line */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="absolute -right-32 top-8 animate-in fade-in duration-1000 delay-800"
          >
            <path
              d="M 0,0 Q 100,100 100,200"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>
          
          {/* Rocket Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mt-32 ml-8 animate-in fade-in duration-1000 delay-900">
            <Rocket className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Right Side Elements */}
      <div className="absolute right-8 top-1/3 hidden lg:block">
        <div className="relative">
          {/* Credit Card Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-4 animate-in fade-in duration-1000 delay-700">
            <CreditCard className="w-8 h-8 text-primary" />
          </div>
          
          {/* Curved Line */}
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="absolute -left-32 top-8 animate-in fade-in duration-1000 delay-800"
          >
            <path
              d="M 200,0 Q 100,100 100,200"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>
          
          {/* Lightbulb Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mt-32 mr-8 animate-in fade-in duration-1000 delay-900">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Bottom Curved Lines */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-64 pointer-events-none opacity-30"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z"
          fill="hsl(var(--primary))"
          opacity="0.05"
        />
        <path
          d="M0,192 Q360,132 720,192 T1440,192"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 8"
          opacity="0.2"
        />
      </svg>
    </>
  );
};

export default DecorativeElements;
