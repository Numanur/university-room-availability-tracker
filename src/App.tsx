import { useMemo, useState } from "react";
import { DaySelector } from "./components/DaySelector";
import { RoomGrid } from "./components/RoomGrid";
import { RoomModal } from "./components/RoomModal";
import { TimeSlotSelector } from "./components/TimeSlotSelector";
import {
  formatTimeSlot,
  ROOMS,
  schedule,
  type ClassInfo,
  type Day,
  type RoomName,
  type TimeSlot,
} from "./data/scheduleData";

interface ModalState {
  room: RoomName;
  info: ClassInfo;
}

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Day>("Monday");
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [modal, setModal] = useState<ModalState | null>(null);

  const visibleClasses = useMemo(() => {
    if (!selectedTime) return {};
    return schedule[selectedDay][selectedTime];
  }, [selectedDay, selectedTime]);

  const occupiedCount = selectedTime ? Object.keys(visibleClasses).length : 0;
  const freeCount = selectedTime ? ROOMS.length - occupiedCount : 0;

  const handleDayChange = (day: Day) => {
    setSelectedDay(day);
    setModal(null);
  };

  const handleTimeChange = (time: TimeSlot) => {
    setSelectedTime(time);
    setModal(null);
  };

  const clearFilters = () => {
    setSelectedDay("Monday");
    setSelectedTime(null);
    setModal(null);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto w-full max-w-[1920px] px-3 pb-8 pt-5 sm:px-5 lg:px-7">
        <header className="mb-5 text-center">
          <div className="rounded-md border border-slate-400 bg-white px-4 py-4">
            <p className="text-[22px] text-black sm:text-[24px] lg:text-[26px]">
              Uttara University
            </p>

            <p className="mt-1 text-[15px] text-black sm:text-[17px] lg:text-[18px]">
              Department of CSE
            </p>

            <p className="mt-1 text-[13px] text-slate-600 sm:text-[14px]">
              Fall 2026
            </p>
          </div>

          <h1 className="mt-4 text-[18px] tracking-tight text-black sm:text-[20px] lg:text-[22px]">
            CSE Room Availability Tracker
          </h1>
        </header>

        <section className="sticky top-0 z-20 mb-4 border border-slate-300 bg-white p-3 shadow-sm sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0 flex-1">
              <p className="mb-2 text-xs text-slate-500">Day</p>

              <DaySelector
                selectedDay={selectedDay}
                onSelect={handleDayChange}
              />
            </div>

            <button
              type="button"
              onClick={clearFilters}
              className="
                h-10
                shrink-0
                rounded-md
                border
                border-slate-500
                bg-slate-100
                px-4
                text-[12px]
                font-bold
                text-black
                transition
                hover:border-slate-600
                hover:bg-slate-200
                focus:outline-none
                focus:ring-2
                focus:ring-slate-300
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Clear
            </button>
          </div>

          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="mb-2 text-xs text-slate-500">Time slot</p>

            <TimeSlotSelector
              selectedTime={selectedTime}
              onSelect={handleTimeChange}
            />
          </div>
        </section>

        <section className="border border-slate-300 bg-white p-2.5 shadow-sm sm:p-4">
          <div className="mb-3 flex min-h-8 items-center justify-between gap-3 px-0.5">
            <div className="min-w-0 text-xs text-slate-600 sm:text-sm">
              {selectedTime ? (
                <span>
                  {selectedDay} · {formatTimeSlot(selectedTime)}
                </span>
              ) : (
                <span>Select a time slot to view room status.</span>
              )}
            </div>

            {selectedTime && (
              <div className="flex shrink-0 items-center gap-3 text-[10px] text-slate-600 sm:text-xs">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 bg-emerald-500"
                    aria-hidden="true"
                  />
                  {freeCount} free
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 bg-red-500" aria-hidden="true" />
                  {occupiedCount} occupied
                </span>
              </div>
            )}
          </div>

          <RoomGrid
            classes={visibleClasses}
            isFiltered={Boolean(selectedTime)}
            onOpen={(room, info) => setModal({ room, info })}
          />
        </section>
      </div>

      {modal && selectedTime && (
        <RoomModal
          room={modal.room}
          info={modal.info}
          day={selectedDay}
          time={selectedTime}
          onClose={() => setModal(null)}
        />
      )}
    </main>
  );
}
