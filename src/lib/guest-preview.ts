export type GuestRsvp = "pending" | "attending" | "declined";
export type InvitationView = { eventName: string; hostNames: string; date: string; time: string; venue: string; guestName: string; message: string; };
export const sampleInvitation: InvitationView = {
  eventName: "The Wedding Celebration", hostNames: "Amina & Yusuf", date: "Saturday, 18 April 2027",
  time: "4:00 PM", venue: "Kano, Nigeria", guestName: "Our Esteemed Guest",
  message: "With great pleasure, we request the honour of your presence at our celebration."
};
export const guestPreviewNotice = "Illustrative guest experience only. No invitation link, RSVP, or admission credential is issued, sent, saved, or verified.";
