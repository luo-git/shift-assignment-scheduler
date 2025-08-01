import { useState } from "react";
import { Assignment } from "../types/assignment";
import { Schedule, shiftTimes } from "../types/schedule";
import { Staff } from "../types/Staff";

type ScheduleReturn = {
  schedule: Schedule[];
  regenerateSchedule: () => void;
};

/**
 * Scheduler to schedule staff assignments over a number of days.
 * Each staff cannot be assigned to more than one assignment per day.
 * Staff may not be assigned to the same assignment on consecutive days.
 *
 * Each assignment must have at least one staff assigned to it.
 * Each assignment can have multiple staff assigned to it.
 *
 *
 * @param staffs
 * @param assignments
 * @param days
 * @returns schedule object, a function to regenerate the schedule
 */
export default function useSchedule(
  staffs: Staff[],
  assignments: Assignment[],
  days: number
): ScheduleReturn {
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  const regenerateSchedule = () => {
    const newSchedule: Schedule[] = [];
    // Logic to generate the schedule based on staffs, assignments, and days
    // This is a placeholder for the actual scheduling logic

    const assignmentBin = [...assignments];
    for (let i = 0; i < days; i++) {
      for (const staff of staffs) {
        const date = new Date();
        date.setDate(date.getDate() + i);

        // Random shift times
        const shift = shiftTimes[Math.floor(Math.random() * shiftTimes.length)];

        // Randomly select an assignment from the bin
        const assignment =
          assignmentBin[Math.floor(Math.random() * assignmentBin.length)];
        // Remove the assignment from the bin to avoid consecutive assignments
        assignmentBin.splice(assignmentBin.indexOf(assignment), 1);
        // If the bin is empty, refill it
        if (assignmentBin.length === 0) {
          assignmentBin.push(...assignments);
        }

        // Random meal break
        const mealBreak = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;

        newSchedule.push({
          date,
          shift,
          staff,
          mealBreak: mealBreak,
          assignment,
        });
      }
      setSchedule(newSchedule);
    }
  };

  return { schedule, regenerateSchedule };
}
