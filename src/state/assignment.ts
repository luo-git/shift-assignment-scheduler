import { atom } from "jotai";
import { Assignment } from "../types/assignment";

export const assignmentsAtom = atom<Assignment[]>([]);
