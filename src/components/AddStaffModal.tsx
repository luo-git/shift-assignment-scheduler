"use client";

import { useAtom } from "jotai";
import { NURSE_TITLE, NurseTitle } from "../types/Staff";
import { staffsAtom } from "../state/staff";
import toast from "react-hot-toast";

export function AddStaffModalButton() {
  const [staffs, setStaffs] = useAtom(staffsAtom);
  function handleAddStaff(e: React.FormEvent<HTMLFormElement>) {
    const submitter = (e.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement;
    const action = submitter?.value;

    if (action === "submit") {
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = data.get("name")?.toString();
      const title = data.get("title")?.toString() as NurseTitle | undefined;

      if (!name || !title) {
        throw new Error("Unable to get name or title!");
      }

      if (staffs.map((x) => x.name).includes(name)) {
        const errorMessage = `Cannot add staff! ${name} already exists!`;
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }

      setStaffs((x) => [
        ...x,
        {
          name: name,
          title: title,
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
            document.getElementById("my_modal_1") as HTMLDialogElement | null
          )?.showModal()
        }
      >
        Add Staff
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" onSubmit={handleAddStaff}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Staff</h3>
            <div className="flex flex-col gap-4 my-4">
              <label className="input">
                <span className="label">Name</span>
                <input name="name" type="text" />
              </label>
              <label className="select">
                <span className="label">Title</span>
                <select name="title">
                  {Object.values(NURSE_TITLE).map((x) => {
                    return <option key={x}>{x}</option>;
                  })}
                </select>
              </label>
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
