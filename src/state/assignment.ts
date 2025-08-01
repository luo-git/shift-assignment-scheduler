import { atom } from "jotai";
import { Assignment } from "../types/assignment";
import { assignmentsStub } from "../stubs/assignments";

export const assignmentsAtom = atom<Assignment[]>(assignmentsStub);
