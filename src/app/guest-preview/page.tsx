import type { Metadata } from "next";
import { GuestExperience } from "@/components/guest-experience";

export const metadata: Metadata = {
  title: "Guest Experience Preview | Majesté",
  description: "A non-functional concept of the Majesté invitation, RSVP, and Pass guest journey.",
  robots: { index: false, follow: false },
};
export default function GuestPreviewPage() { return <GuestExperience/>; }
