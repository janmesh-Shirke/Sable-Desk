"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

type Variant = "compact" | "home" | "full";

type FormValues = {
  name: string;
  email: string;
  firm: string;
  aum?: string;
};

const labelClass =
  "block font-sans text-sm font-medium text-foreground/80 mb-1.5";
const inputClass =
  "w-full rounded-md border border-border bg-background px-4 py-2.5 font-sans text-sm text-foreground placeholder:text-warm-gray/60 focus-visible:border-amber focus-visible:outline-none";
const errorClass = "mt-1 font-sans text-xs text-amber-dark";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm({
  variant = "full",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // TODO: wire to a server action / API route or form service
    // (e.g. Formspree, Resend). Currently client-side only.
    // eslint-disable-next-line no-console
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
  };

  // Which optional fields each variant shows.
  const showAum = variant === "home" || variant === "full";

  const buttonLabel = "Book a Call";

  const confirmation =
    variant === "full"
      ? "Thanks — we'll come back to you within one business day with a modelled view of the EBITDA recovery for your portfolio."
      : "Thanks — we'll be in touch within one business day to book your call.";

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center gap-4 rounded-lg border border-border bg-cream p-8 text-center shadow-card ${className}`}
        role="status"
      >
        <CheckCircle2 className="text-amber-dark" size={40} aria-hidden="true" />
        <p className="font-sans text-base leading-relaxed text-foreground/90">
          {confirmation}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={`rounded-lg border border-border bg-cream p-6 shadow-card sm:p-8 ${className}`}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            {variant === "compact" ? "Name" : "Full name"}
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            className={inputClass}
            aria-invalid={!!errors.name}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Work email
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Please enter your work email",
              pattern: { value: emailPattern, message: "Enter a valid email" },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="cf-firm" className={labelClass}>
            Firm or portfolio company
          </label>
          <input
            id="cf-firm"
            type="text"
            autoComplete="organization"
            className={inputClass}
            aria-invalid={!!errors.firm}
            {...register("firm", {
              required: "Please enter your firm or portfolio company",
            })}
          />
          {errors.firm && <p className={errorClass}>{errors.firm.message}</p>}
        </div>

        {showAum && (
          <div>
            <label htmlFor="cf-aum" className={labelClass}>
              Portfolio size / AUM{" "}
              <span className="font-normal text-warm-gray">(optional)</span>
            </label>
            <input
              id="cf-aum"
              type="text"
              className={inputClass}
              {...register("aum")}
            />
          </div>
        )}
      </div>

      <Button
        type="submit"
        variant="hero"
        className="mt-6 w-full"
        disabled={isSubmitting}
      >
        {buttonLabel}
      </Button>
    </form>
  );
}
