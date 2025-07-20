import { AddStaffModalButton } from "../components/AddStaffModal";
import StaffList from "../components/StaffList";

export default function Home() {
  return (
    <main className="">
      <nav className="navbar bg-base-100 shadow-sm px-6">
        <span className="text-xl font-semibold">
          Shift Assignment Scheduler
        </span>
      </nav>
      <main className="flex flex-col max-w-4xl mx-auto pt-6 px-6">
        {/* Button row */}
        <div className="mb-2 flex justify-end">
          <AddStaffModalButton />
        </div>
        <StaffList />
      </main>
    </main>
  );
}
