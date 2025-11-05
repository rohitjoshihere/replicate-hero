import * as React from "react";
import { cn } from "@/lib/utils";

export interface NotificationBadgeProps {
  text: string;
  className?: string;
}

const NotificationBadge = React.forwardRef<HTMLDivElement, NotificationBadgeProps>(
  ({ text, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center gap-3.5 rounded-[40px] p-[8px_20px] font-jakarta text-base font-medium text-black shadow-sm",
          "before:absolute before:inset-0 before:rounded-[40px] before:p-[2px] before:bg-gradient-to-r before:from-[#A7CFFF] before:to-[#AED2FB] before:content-['']",
          "after:absolute after:inset-[2px] after:rounded-[38px] after:bg-white after:content-['']",
          className
        )}
        {...props}
      >
        <div className="relative z-10 flex items-center justify-center w-4 h-4">
          {/* Outer Glow Pulse */}
          <span className="absolute inline-flex h-[21px] w-[21px] rounded-full bg-[#99FFCC] opacity-50 animate-pulse-inner"></span>
          <span className="absolute inline-flex h-[16.5px] w-[16.5px] rounded-full bg-[#2DE88A] opacity-80"></span>
          <span className="relative inline-flex h-[10.5px] w-[10.5px] rounded-full bg-[#00BD5E]"></span>
        </div>
        <span className="relative z-10">{text}</span>
      </div>
    );
  }
);
NotificationBadge.displayName = "NotificationBadge";

export { NotificationBadge };