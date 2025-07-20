import { EnumFromObject } from "./utils";

export const NURSE_TITLE = {
  ENROLLED_NURSE: "Enrolled Nurse",
  SENIOR_ENROLLED_NURSE: "Senior Enrolled Nurse",
  PRINCIPLE_ENROLLED_NURSE: "Principal Enrolled Nurse",
  STAFF_NURSE: "Staff Nurse",
  SENIOR_STAFF_NURSE: "Senior Staff Nurse",
  ASSISTANT_NURSE_CLINICIAN: "Assistant Nurse Clinician",
  NURSE_MANAGER: "Nurse Manager",
  NURSE_EDUCATOR: "Nurse Educator",
  NURSE_CASE_CORDINATOR: "Nurse Case Coordinator",
  NURSE_CLINICIAN: "Nurse Clinician",
} as const;

export type NurseTitle = EnumFromObject<typeof NURSE_TITLE>;

export type Staff = {
  name: string;
  title: NurseTitle;
};
