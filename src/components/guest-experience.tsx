"use client";

import { useState } from "react";
import Link from "next/link";
import { sampleInvitation, guestPreviewNotice, type GuestRsvp } from "@/lib/guest-preview";

export function GuestExperience() {
  const [rsvp, setRsvp] = useState<GuestRsvp>("pending");
  const [step, setStep] = useState<"invitation" | "response" | "pass">("invitation");
  const [note, setNote] = useState("");
  const event = sampleInvitation;
  return <main className="guest-page">
    <div className="guest-demo-banner" role="note">{guestPreviewNotice}</div>
    <div className="guest-topline"><Link href="/" aria-label="Majesté home">MAJESTÉ</Link><span>THE ART OF BEING INVITED</span></div>
    <div className="guest-shell">
      <div className="guest-progress" aria-label="Guest preview sections">
        {([["invitation","01 Invitation"],["response","02 Response"],["pass","03 Pass"]] as const).map(([key,label])=>
          <button type="button" key={key} aria-current={step===key?"step":undefined} className={step===key?"selected":""} onClick={()=>{setStep(key);setNote("")}}>{label}</button>)}
      </div>
      {step==="invitation"&&<section className="guest-card" aria-labelledby="invitation-heading">
        <div className="guest-kicker">A PRIVATE INVITATION</div><div className="guest-emblem" aria-hidden="true">M</div>
        <p className="guest-intro">Together with their families</p>
        <h1 id="invitation-heading">{event.hostNames}</h1><p className="guest-script">request the pleasure of your company</p>
        <p className="guest-event">{event.eventName}</p>
        <div className="guest-rule" aria-hidden="true"/><p className="guest-date">{event.date}<br/>{event.time}</p>
        <p className="guest-venue">{event.venue}</p>
        <div className="guest-rule" aria-hidden="true"/><p className="guest-message">{event.message}</p>
        <p className="guest-personal">Prepared for <strong>{event.guestName}</strong></p>
        <button className="guest-button" type="button" onClick={()=>setStep("response")}>Respond to invitation <span aria-hidden="true">→</span></button>
      </section>}
      {step==="response"&&<section className="guest-card guest-flow" aria-labelledby="response-heading">
        <div className="guest-kicker">YOUR RESPONSE</div><h1 id="response-heading">Your presence<br/><em>means everything.</em></h1>
        <p className="guest-description">We would be honoured to celebrate with you. Select a response to explore the guest journey.</p>
        <fieldset className="guest-options"><legend>Will you attend?</legend>
          <label className={rsvp==="attending"?"active":""}><input type="radio" name="rsvp" checked={rsvp==="attending"} onChange={()=>{setRsvp("attending");setNote("")}}/>Joyfully accepts</label>
          <label className={rsvp==="declined"?"active":""}><input type="radio" name="rsvp" checked={rsvp==="declined"} onChange={()=>{setRsvp("declined");setNote("")}}/>Regretfully declines</label>
        </fieldset>
        <button type="button" className="guest-button" disabled={rsvp==="pending"} onClick={()=>{setNote("Your selection is shown in this browser only. No response has been sent to the host.");setStep("pass")}}>Continue to guest details →</button>
        <p className="guest-muted">Your response is not submitted to a server. In the live experience, responses will be secured and auditable.</p>
      </section>}
      {step==="pass"&&<section className="guest-card guest-flow" aria-labelledby="pass-heading">
        <div className="guest-kicker">GUEST ARRIVAL / CONCEPT</div>
        <h1 id="pass-heading">{rsvp==="attending"?"A graceful arrival.":rsvp==="declined"?"With our warmest thanks.":"Your guest pass."}</h1>
        <p className="guest-description">{rsvp==="attending"?"We look forward to welcoming you. Your actual admission pass will become available only through a secure, authorized issuance service.":rsvp==="declined"?"Your illustrative decline is noted in this preview only. No host has been notified.":"A secure pass requires a valid invitation and server-authorized admission allocation."}</p>
        <div className="guest-pass-placeholder" aria-label="No admission credential issued"><span>MAJESTÉ PASS</span><strong>PREVIEW ONLY</strong><p>NO QR CODE · NOT VALID FOR ENTRY</p></div>
        <p className="guest-muted">A live pass must be issued by the backend. Admission is verified online, atomically, and only once per valid allocation. This preview cannot authorize entry.</p>
        {note&&<p role="status" className="guest-muted">{note}</p>}
        <button type="button" className="guest-button guest-button-outline" onClick={()=>setStep("response")}>Review response ←</button>
      </section>}
      <p className="guest-footer-note">MAJESTÉ · A MARK OF DISTINCTION · INTERACTIVE CONCEPT</p>
    </div>
  </main>;
}
