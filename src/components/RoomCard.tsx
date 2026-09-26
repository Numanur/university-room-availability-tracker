import type { ClassInfo, RoomName } from "../data/scheduleData";

interface RoomCardProps {
  room: RoomName;
  classInfo?: ClassInfo;
  isFiltered: boolean;
  onOpen: (room: RoomName, info: ClassInfo) => void;
}

const baseClass =
  "flex min-h-[80px] w-full border px-1 py-2 text-center sm:min-h-[86px] sm:px-1.5 lg:min-h-[98px]";

const roomTextClass =
  "break-words text-[10px] leading-[1.15] sm:text-[11px] lg:text-[12px] xl:text-[13px]";

const teacherTextClass =
  "mt-1.5 block w-full text-[10px] leading-none sm:text-[11px] lg:text-[12px] xl:text-[13px]";

const batchTextClass =
  "mt-1 block w-full text-[9px] leading-none sm:text-[10px] lg:text-[11px] xl:text-[12px]";

export function RoomCard({
  room,
  classInfo,
  isFiltered,
  onOpen,
}: RoomCardProps) {
  if (!isFiltered) {
    return (
      <div
        className={`${baseClass} items-center justify-center border-slate-200 bg-slate-100 text-black`}
        aria-label={room}
      >
        <span className={roomTextClass}>{room}</span>
      </div>
    );
  }

  if (!classInfo) {
    return (
      <div
        className={`${baseClass} items-center justify-center border-emerald-600 bg-emerald-500 text-white`}
        aria-label={`${room}, free`}
      >
        <span className={roomTextClass}>{room}</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(room, classInfo)}
      className={`${baseClass} cursor-pointer flex-col items-center justify-center border-red-600 bg-red-500 text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-1`}
      aria-label={`${room}, occupied by batch ${classInfo.batch}, faculty ${classInfo.teacher}. Open class details`}
    >
      <span className={`w-full ${roomTextClass}`}>{room}</span>

      <span className={teacherTextClass}>{classInfo.teacher}</span>

      <span className={`${batchTextClass} text-white/95`}>
        {classInfo.batch}
      </span>
    </button>
  );
}
