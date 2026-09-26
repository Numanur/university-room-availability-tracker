import { ROOMS, type ClassInfo, type RoomName } from "../data/scheduleData";
import { RoomCard } from "./RoomCard";

interface RoomGridProps {
  classes: Partial<Record<RoomName, ClassInfo>>;
  isFiltered: boolean;
  onOpen: (room: RoomName, info: ClassInfo) => void;
}

export function RoomGrid({ classes, isFiltered, onOpen }: RoomGridProps) {
  return (
    <div className="grid grid-cols-5 gap-1.5 sm:gap-2 lg:grid-cols-[repeat(15,minmax(0,1fr))]">
      {ROOMS.map((room) => (
        <RoomCard
          key={room}
          room={room}
          classInfo={classes[room]}
          isFiltered={isFiltered}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}
