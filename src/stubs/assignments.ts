import { Assignment } from "../types/assignment";

/**
 * OIC/CD
 * Stn A IC
 * Stn A Jr
 * Stn B IC
 * Stn B Jr
 * Stn C IC
 * Stn C Jr
 * Jr/Pantry/TempINV
 * Stn A-B Jr
 * Floater-ICU/HD/ISO
 *
 * PDTC
 */
export const assignmentsStub: Assignment[] = [
  {
    name: "OIC/CD",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN", "ANC", "NM"]),
  },
  {
    name: "Stn A IC",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN", "ANC", "NM"]),
  },
  {
    name: "Stn A Jr",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN"]),
  },
  {
    name: "Stn B IC",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN", "ANC", "NM"]),
  },
  {
    name: "Stn B Jr",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN"]),
  },
  {
    name: "Stn C IC",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN", "ANC", "NM"]),
  },
  {
    name: "Stn C Jr",
    allowedTitle: new Set(["EN", "SEN", "PEN", "SN", "SSN"]),
  },
  {
    name: "Jr/Pantry/TempINV",
    allowedTitle: new Set(["EN", "SEN"]),
  },
  {
    name: "Stn A-B Jr",
    allowedTitle: new Set(["EN", "SEN"]),
  },
  {
    name: "Floater-ICU/HD/ISO",
    allowedTitle: new Set(["SN", "SSN", "ANC", "NM"]),
  },
];
