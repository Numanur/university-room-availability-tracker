# CSE Room Availability — Fall 2026

React + TypeScript + Tailwind CSS room-availability web app for the Uttara University CSE Fall 2026 room-wise day routine.

## Behavior

- Monday through Thursday
- Six time slots per day
- 5 room cards per row on mobile
- 15 room cards per row on desktop
- Green cards are free rooms and are not clickable
- Red cards are occupied rooms and show:
  1. room name
  2. faculty acronym
  3. batch
- Clicking a red card opens a minimal details modal showing room, day, time, full course name, course code, full faculty name, faculty acronym, and batch
- Clear resets the time selection and returns the day to Monday
- No bold typography is used in the interface

## Confirmed faculty corrections

- SAK = Sumaya Akter
- WH = Wahida Hossain; timetable entries originally marked WHA were changed to WH
- NJN = Nahrin Jannat; timetable entries originally marked NJA were changed to NJN
- RIM remains unresolved
- RN remains unresolved

## Course lookup

Course names come from the supplied Fall 2026 Day Program course list. Batch text from that spreadsheet is excluded. A whitespace-only normalization lets timetable code `MAT0541102` resolve to the spreadsheet entry `MAT 0541102`. Other code differences are not guessed or corrected.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```
"# university-room-availability-tracker" 
