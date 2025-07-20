import { NurseTitle } from "./Staff";

export type Assignment = {
  name: string;
  allowedTitle: Set<NurseTitle>;
};
