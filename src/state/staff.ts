import { atom } from "jotai";
import { Staff } from "../types/Staff";
import { stubNurses } from "../stubs/nurses";

export const staffsAtom = atom<Staff[]>(stubNurses);
