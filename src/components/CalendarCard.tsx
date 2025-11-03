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
    <div className="bg-card rounded-3xl shadow-[var(--shadow-card)] p-6 sm:p-8 max-w-2xl w-full border border-border/50">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Calendar */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              October <span className="text-muted-foreground">2025</span>
            </h3>
          </div>

          <div className="space-y-2">
            {/* Days Header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="text-xs font-medium text-muted-foreground text-center"
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
                      aspect-square rounded-lg text-sm font-medium transition-all
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

        {/* Time Slots */}
        <div className="w-full sm:w-40 border-l border-border pl-6">
          <div className="flex gap-2 mb-4">
            <button className="px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-lg">
              12h
            </button>
            <button className="px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary rounded-lg">
              24h
            </button>
          </div>

          <div className="space-y-2">
            {timeSlots.map(({ time, available }) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                disabled={!available}
                className={`
                  w-full py-3 px-4 rounded-xl text-sm font-medium transition-all
                  ${
                    time === selectedTime
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-secondary/30 text-foreground hover:bg-secondary hover:scale-105"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
