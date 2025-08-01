"use client";

import { useAtom } from "jotai";
import { AddAssignmentModalButton } from "../components/AddAssignmentModal";
import { AddStaffModalButton } from "../components/AddStaffModal";
import AssignmentList from "../components/AssignmentList";
import ScheduleView from "../components/ScheduleView";
import StaffList from "../components/StaffList";
import useSchedule from "../helpers/useSchedule";
import { staffsAtom } from "../state/staff";
import { assignmentsAtom } from "../state/assignment";

export default function Home() {
  const [staffs] = useAtom(staffsAtom);
  const [assignments] = useAtom(assignmentsAtom);
  const { schedule, regenerateSchedule } = useSchedule(staffs, assignments, 7);
  return (
    <main>
      <nav className="navbar bg-base-100 shadow-sm px-6">
        <span className="text-xl font-semibold">
          Shift Assignment Scheduler
        </span>
      </nav>
      <section className="flex flex-col max-w-4xl mx-auto pt-6 px-6 gap-4">
        {/* Button row */}
        <div className="flex justify-between items-start">
          <h1 className="text-4xl">Staffs</h1>
          <AddStaffModalButton />
        </div>
        <StaffList />

        <div className="flex justify-between items-start mt-10">
          <h1 className="text-4xl">Assignments</h1>
          <AddAssignmentModalButton />
        </div>
        <AssignmentList />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10">
          <h1 className="text-4xl">Schedule</h1>
          <div className="space-x-2">
            <button className="btn btn-sm btn-primary md:btn-md" onClick={regenerateSchedule}>
              Generate Schedule
            </button>
            <button
              className="btn btn-secondary btn-sm md:btn-md"
              onClick={() => alert("Export functionality is not implemented.")}
            >
              Export Excel
            </button>
          </div>
        </div>
        <ScheduleView schedules={schedule} />
        <div className="mb-5" />
      </section>
    </main>
  );
}
