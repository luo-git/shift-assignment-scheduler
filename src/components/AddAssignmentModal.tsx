"use client";

import { useAtom } from "jotai";
import { assignmentsAtom } from "../state/assignment";
import toast from "react-hot-toast";
import { NURSE_TITLE, NurseTitle } from "../types/Staff";

export function AddAssignmentModalButton() {
  const [assignments, setAssignments] = useAtom(assignmentsAtom);

  function handleAddAssignment(e: React.FormEvent<HTMLFormElement>) {
    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;
    const action = submitter?.value;

    if (action === "submit") {
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = data.get("name")?.toString();

      const assignables = new Set<NurseTitle>();

      Object.values(NURSE_TITLE).forEach((title) => {
        const checkboxValue = data.get(title)?.toString() as
          | NurseTitle
          | undefined;
        if (checkboxValue) {
          assignables.add(checkboxValue);
        }
      });

      if (!name) {
        throw new Error("Unable to get name or title!");
      }

      if (assignments.map((x) => x.name).includes(name)) {
        const errorMessage = `Cannot add assignment! ${name} already exists!`;
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }

      setAssignments((x) => [
        ...x,
        {
          name: name,
          allowedTitle: assignables,
        },
      ]);

      e.currentTarget.reset();
    }
  }

  return (
    <>
      <button
        className="btn btn-sm btn-primary md:btn-md"
        onClick={() =>
          (
            document.getElementById(
              "assignment-modal"
            ) as HTMLDialogElement | null
          )?.showModal()
        }
      >
        Add Assignment
      </button>
      <dialog id="assignment-modal" className="modal">
        <form method="dialog" onSubmit={handleAddAssignment}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Assignment</h3>
            <div className="flex flex-col gap-4 my-4">
              <label className="input">
                <span className="label">Name</span>
                <input name="name" type="text" />
              </label>
              <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                <legend className="fieldset-legend">Assignable to:</legend>
                {Object.values(NURSE_TITLE).map((title) => {
                  return (
                    <label key={title} className="label">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                        name={title}
                        value={title}
                      />
                      {title}
                    </label>
                  );
                })}
              </fieldset>
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" value="close">
                Close
              </button>
              <button className="btn btn-primary" value="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
