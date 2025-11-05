import { useState } from "react";

const CalendarCard = () => {
  const [selectedDate, setSelectedDate] = useState(11);
  const [selectedTime, setSelectedTime] = useState("02:30");

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
  ];

  const timeSlots = [
    { time: "01:30", available: true },
    { time: "02:00", available: true },
    { time: "02:30", available: true },
    { time: "03:00", available: true },
  ];

  return (
    <div className="w-auto mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
        {/* Calendar card (left) */}
        <div className="bg-card rounded-[20px] shadow-[var(--shadow-card)] p-4 border border-border/50 w-[278px] h-[187px] overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">
              October <span className="text-muted-foreground">2025</span>
            </h3>
          </div>

          <div className="space-y-2">
            {/* Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-[10px] font-medium text-muted-foreground text-center"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            {dates.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1">
                {week.map((date, dayIndex) => (
                  <button
                    key={dayIndex}
                    onClick={() => date && setSelectedDate(date)}
                    disabled={!date}
                  className={`
                      aspect-square rounded-lg text-[11px] font-medium transition-all
                      ${!date ? "invisible" : ""}
                      ${
                        date === selectedDate
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary/30 text-foreground hover:bg-secondary hover:scale-105"
                      }
                    `}
                  >
                    {date}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Time card (right) */}
        <div className="w-[278px] h-[187px] bg-card rounded-[20px] shadow-[var(--shadow-card)] p-4 border border-border/50 overflow-hidden">
          <div className="flex justify-end mb-2">
            <div className="bg-background/60 rounded-xl p-1 border border-border/60 backdrop-blur">
              <button className="px-2.5 py-0.5 text-xs font-medium bg-foreground/90 text-background rounded-lg">12h</button>
              <button className="px-2.5 py-0.5 text-xs font-medium text-muted-foreground">24h</button>
            </div>
          </div>

          <div className="space-y-2">
            {timeSlots.map(({ time, available }) => {
              const isSelected = time === selectedTime;
              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  disabled={!available}
                  className={`w-full py-2.5 px-3.5 rounded-2xl text-[13px] font-semibold transition-all text-center
                    ${
                      !available
                        ? "bg-muted text-muted-foreground/70 cursor-not-allowed"
                        : isSelected
                        ? "text-white shadow-lg"
                        : "bg-secondary/40 text-foreground hover:bg-secondary"
                    }`}
                  style={
                    isSelected
                      ? {
                          background: "linear-gradient(180deg, #5fb3ff 0%, #2c86ff 100%)",
                          boxShadow: "0 10px 24px rgba(47, 131, 255, 0.35)",
                        }
                      : undefined
                  }
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
