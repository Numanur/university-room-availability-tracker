import { DAYS, type Day } from "../data/scheduleData";

interface DaySelectorProps {
  selectedDay: Day;
  onSelect: (day: Day) => void;
}

export function DaySelector({ selectedDay, onSelect }: DaySelectorProps) {
  return (
    <div
      className="grid w-full grid-cols-4 gap-1.5 sm:w-auto sm:max-w-2xl sm:gap-2"
      aria-label="Select day"
    >
      {DAYS.map((day) => {
        const active = day === selectedDay;

        return (
          <button
            key={day}
            type="button"
            onClick={() => onSelect(day)}
            aria-pressed={active}
            className={`
              h-10
              border
              px-1.5
              text-[12px]
              transition
              sm:min-w-28
              sm:px-4
              sm:text-[14px]
              lg:text-[15px]
              ${
                active
                  ? "border-slate-800 bg-slate-700 text-white"
                  : "border-slate-400 bg-white text-black hover:border-slate-500 hover:bg-slate-50"
              }
              focus:outline-none
              focus:ring-2
              focus:ring-slate-300
            `}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}
