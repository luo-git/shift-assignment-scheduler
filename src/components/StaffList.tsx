"use client";

import { MdPerson, MdDelete } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { useAtom } from "jotai";
import { staffsAtom } from "../state/staff";
import { Staff } from "../types/Staff";

export default function StaffList() {
  const [staffs, setStaffs] = useAtom(staffsAtom);

  function deleteStaff(staff: Staff) {
    setStaffs((staffs) => {
      return staffs.filter(
        (s) => s.name !== staff.name || s.title !== staff.title
      );
    });
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex align-middle gap-2">
        <LuLayoutList className="w-4 h-4" />
        Staff List
      </li>

      {staffs.length === 0 && (
        <li className="list-row">No staff has been added.</li>
      )}

      {staffs.map((staff) => {
        return (
          <li key={staff.name} className="list-row flex justify-between">
            <div className="flex items-center gap-3">
              <MdPerson className="w-8 h-8" />
              <div>
                <div>{staff.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {staff.title}
                </div>
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => deleteStaff(staff)}
            >
              <MdDelete />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
