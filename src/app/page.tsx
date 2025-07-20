import { AddAssignmentModalButton } from "../components/AddAssignmentModal";
import { AddStaffModalButton } from "../components/AddStaffModal";
import AssignmentList from "../components/AssignmentList";
import StaffList from "../components/StaffList";

export default function Home() {
  return (
    <main>
      <nav className="navbar bg-base-100 shadow-sm px-6">
        <span className="text-xl font-semibold">
          Shift Assignment Scheduler
        </span>
      </nav>
      <main className="flex flex-col max-w-4xl mx-auto pt-6 px-6 gap-4">
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
      </main>
    </main>
  );
}
