import { Assignment } from "./assignment";
import { Staff } from "./Staff";

export type Schedule = {
  date: Date; // ISO date string
  shift: Shift;
  staff: Staff;
  mealBreak: 1 | 2 | 3; // Order of meal break
  assignment: Assignment;
};

export type Shift = {
  startTime: string;
  endTime: string;
};

export const shiftTimes: Shift[] = [
  {
    startTime: "07:00",
    endTime: "16:00",
  },
  {
    startTime: "13:00",
    endTime: "10:00",
  },
];
