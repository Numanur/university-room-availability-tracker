import {
  TIME_SLOTS,
  formatTimeSlot,
  type TimeSlot,
} from "../data/scheduleData";

interface TimeSlotSelectorProps {
  selectedTime: TimeSlot | null;
  onSelect: (slot: TimeSlot) => void;
}

export function TimeSlotSelector({
  selectedTime,
  onSelect,
}: TimeSlotSelectorProps) {
  return (
    <div className="overflow-x-auto pb-1 scrollbar-thin">
      <div className="flex min-w-max gap-2" aria-label="Select time slot">
        {TIME_SLOTS.map((slot, index) => {
          const active = slot === selectedTime;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelect(slot)}
              aria-pressed={active}
              className={`min-w-[126px] border px-3 py-2 text-left transition sm:min-w-[148px] ${
                active
                  ? "border-slate-800 bg-slate-700 text-white"
                  : "border-slate-400 bg-white text-black hover:border-slate-500 hover:bg-slate-50"
              } focus:outline-none focus:ring-2 focus:ring-slate-300`}
            >
              <span
                className={`block text-[11px] sm:text-[12px] ${
                  active ? "text-slate-200" : "text-black"
                }`}
              >
                Slot {index + 1}
              </span>

              <span className="mt-0.5 block whitespace-nowrap text-[13px] sm:text-[14px] lg:text-[15px]">
                {formatTimeSlot(slot)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
