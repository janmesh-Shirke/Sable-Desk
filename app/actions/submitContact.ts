"use server";

import { supabaseAdmin } from "@/lib/supabase";

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

  return { ok: true };
}
