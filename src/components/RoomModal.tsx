import { useEffect } from "react";
import { getCourseName } from "../data/courseData";
import { FACULTY_BY_ACRONYM } from "../data/facultyData";
import {
  formatTimeSlot,
  type ClassInfo,
  type Day,
  type RoomName,
  type TimeSlot,
} from "../data/scheduleData";

interface RoomModalProps {
  room: RoomName;
  info: ClassInfo;
  day: Day;
  time: TimeSlot;
  onClose: () => void;
}

export function RoomModal({ room, info, day, time, onClose }: RoomModalProps) {
  const courseName = getCourseName(info.course);
  const facultyName = FACULTY_BY_ACRONYM[info.teacher];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md rounded-md border border-slate-400 bg-white shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-300 px-4 py-4 sm:px-5">
          <div className="min-w-0">
            <h2 id="room-modal-title" className="text-lg text-black sm:text-xl">
              {room}
            </h2>

            <p className="mt-1 text-xs text-black sm:text-sm">
              {day} · {formatTimeSlot(time)}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-md
              border
              border-slate-600
              bg-slate-100
              text-xl
              text-black
              transition
              hover:bg-slate-200
              focus:outline-none
              focus:ring-2
              focus:ring-slate-400
            "
            aria-label="Close class details"
          >
            ×
          </button>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <div className="rounded-md border border-slate-300 bg-slate-50 p-3">
            <div className="grid grid-cols-[82px_1fr] gap-3 sm:grid-cols-[96px_1fr]">
              <p className="text-sm text-slate-600">Course</p>

              <div className="min-w-0">
                <p className="text-sm leading-5 text-black">
                  {courseName ??
                    "Course name not found in the provided course list"}
                </p>

                <p className="mt-1 break-all text-xs text-black">
                  {info.course}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-slate-300 bg-slate-50 p-3">
            <div className="grid grid-cols-[82px_1fr] gap-3 sm:grid-cols-[96px_1fr]">
              <p className="text-sm text-slate-600">Faculty</p>

              <div className="min-w-0">
                <p className="text-sm leading-5 text-black">
                  {facultyName ?? "Faculty name not available"}
                </p>

                <p className="mt-1 text-xs text-black">{info.teacher}</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-slate-300 bg-slate-50 p-3">
            <div className="grid grid-cols-[82px_1fr] gap-3 sm:grid-cols-[96px_1fr]">
              <p className="text-sm text-slate-600">Batch</p>

              <p className="text-sm text-black">{info.batch}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-slate-300 px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-md
              border
              border-slate-600
              bg-slate-100
              px-5
              py-2
              text-sm
              font-bold
              text-black
              transition
              hover:bg-slate-200
              focus:outline-none
              focus:ring-2
              focus:ring-slate-400
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
