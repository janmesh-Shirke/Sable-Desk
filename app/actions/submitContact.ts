"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  firm: string;
  aum?: string;
};

export async function submitContact(data: ContactPayload) {
  const { error } = await supabaseAdmin.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    firm: data.firm,
    aum: data.aum || null,
  });

  if (error) {
    console.error("Supabase insert error:", error.message);
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  // Send notification email
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const resend = new Resend(resendKey);
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "SableDesk <onboarding@resend.dev>",
      to: "janmesh@sabledesk.co.uk",
      subject: `New enquiry from ${data.name} — ${data.firm}`,
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Firm:</strong> ${data.firm}</p>
        ${data.aum ? `<p><strong>AUM:</strong> ${data.aum}</p>` : ""}
      `,
    });
    if (emailError) {
      console.error("Resend error:", JSON.stringify(emailError));
    } else {
      console.log("Resend email sent:", emailData?.id);
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping email notification");
  }

  return { ok: true };
}
