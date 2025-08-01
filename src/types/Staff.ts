import { EnumFromObject } from "./utils";

export const NURSE_TITLE = {
  ENROLLED_NURSE: "EN",
  SENIOR_ENROLLED_NURSE: "SEN",
  PRINCIPLE_ENROLLED_NURSE: "PEN",
  STAFF_NURSE: "SN",
  SENIOR_STAFF_NURSE: "SSN",
  ASSISTANT_NURSE_CLINICIAN: "ANC",
  NURSE_MANAGER: "NM",
  SENIOR_NURSE_MANAGER: "SNM",
  NURSE_CLINICIAN: "NC",
  PATIENT_CARE_ASSISTANT: "PCA",
  SENIOR_PATIENT_CARE_ASSISTANT: "SPCA",
} as const;

export type NurseTitle = EnumFromObject<typeof NURSE_TITLE>;

export type Staff = {
  name: string;
  title: NurseTitle;
};
