"use client";

import { useAtom } from "jotai";
import { assignmentsAtom } from "../state/assignment";
import { Assignment } from "../types/assignment";
import { LuLayoutList } from "react-icons/lu";
import { MdDelete, MdTask } from "react-icons/md";

export default function AssignmentList() {
  const [assignments, setAssignments] = useAtom(assignmentsAtom);

  function deleteAssignment(assignment: Assignment) {
    setAssignments((assignments) => {
      return assignments.filter((s) => s.name !== assignment.name);
    });
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide flex align-middle gap-2">
        <LuLayoutList className="w-4 h-4" />
        Assignment List
      </li>

      {assignments.length === 0 && (
        <li className="list-row">No assignment has been added.</li>
      )}

      {assignments.map((assignment) => {
        return (
          <li key={assignment.name} className="list-row flex justify-between">
            <div className="flex items-center gap-3">
              <MdTask className="w-8 h-8" />
              <div>
                <div>{assignment.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {[...assignment.allowedTitle].join("\n")}
                </div>
              </div>
            </div>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => deleteAssignment(assignment)}
            >
              <MdDelete />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
