"use client";

import { FormEvent, useState } from "react";
import { business } from "@/lib/business";

const serviceCategories = [
  "Maintenance & General Repair",
  "Engine Service & Repair",
  "Transmission & Drivetrain",
  "Suspension, Steering & Wheels",
  "AC, Heating & Electrical",
  "Diagnostics & Inspections",
  "Performance & Tuning",
  "Exhaust & Fabrication",
  "Custom Work",
  "Audio & Retrofitting",
  "Wrap, Tint, PPF & Styling",
];

const specificServices = [
  "Oil Change",
  "Trans. Fluid Change",
  "Spark Plug Repl.",
  "Front Rotor Repl.",
  "Rear Rotor Repl.",
  "Frt Brake Pad Repl.",
  "Rear Brake Pad Repl.",
  "Evap Smoke Test",
  "Catless Downpipe",
  "Parts",
];

type Status = "idle" | "submitting" | "success" | "error";

const LEAD_API_URL = process.env.NEXT_PUBLIC_LEAD_API_URL;
const SECURE_TOKEN = process.env.NEXT_PUBLIC_SECURE_TOKEN;

const fieldClass =
  "border border-panel-border bg-bg px-4 py-3 text-sm text-text transition-colors duration-200 focus:border-red focus:shadow-[0_0_0_3px_rgba(0,123,255,0.25)] focus:outline-none";
const labelClass =
  "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted";

function LabelDot() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red shadow-[0_0_6px_var(--color-red)]" />;
}

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const crmConfigured = Boolean(LEAD_API_URL);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const get = (key: string) => String(formData.get(key) ?? "").trim();

    const vehicleYear = get("vehicleYear");
    const vehicleMake = get("vehicleMake");
    const vehicleModel = get("vehicleModel");
    const serviceNeeded = get("serviceNeeded");

    const opportunitySource = `(Website) ${vehicleYear} ${vehicleMake} ${vehicleModel} | ${serviceNeeded}`;

    try {
      // --- Single integration point: Autoworx lead-generation API --------
      // NEXT_PUBLIC_LEAD_API_URL / NEXT_PUBLIC_SECURE_TOKEN come from
      // .env.local. Until they're set, the form runs in demo mode so the
      // UX can still be reviewed end-to-end.
      if (crmConfigured) {
        const res = await fetch(LEAD_API_URL!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-TOKEN": SECURE_TOKEN ?? "",
          },
          body: JSON.stringify({
            name: get("name"),
            email: get("email"),
            phone: get("phone"),
            opportunity_source: opportunitySource,
          }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok) throw new Error(data?.message || `Lead API responded with ${res.status}`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      // --------------------------------------------------------------------

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your request. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="panel relative overflow-hidden px-6 py-12 text-center">
        <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/25 blur-[80px]" />
        <h3 className="chrome-text relative font-display text-2xl italic">You&apos;re In</h3>
        <p className="relative mt-3 text-text-muted">We&apos;ll confirm your booking soon. Need it sooner?</p>
        <a href={business.phoneHref} className="btn btn-outline relative mt-6">
          Call Now — {business.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="panel relative grid gap-5 overflow-hidden px-6 py-8 sm:p-10"
      noValidate
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-red to-transparent" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-red/10 blur-[90px]" />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-red-hover/10 blur-[90px]" />

      {!crmConfigured && (
        <p className="relative border border-panel-border bg-bg/60 px-4 py-3 text-xs text-text-muted">
          Demo mode — NEXT_PUBLIC_LEAD_API_URL is not set. Submissions here are not sent
          anywhere.
        </p>
      )}

      <div className="relative grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>

      <div className="relative">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="relative grid gap-5 sm:grid-cols-3">
        <Field label="Vehicle Year" name="vehicleYear" required inputMode="numeric" />
        <Field label="Vehicle Make" name="vehicleMake" required />
        <Field label="Vehicle Model" name="vehicleModel" required />
      </div>

      <div className="relative flex flex-col gap-2">
        <label htmlFor="serviceNeeded" className={labelClass}>
          <LabelDot />
          Service Needed
        </label>
        <select id="serviceNeeded" name="serviceNeeded" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          <optgroup label="Categories">
            {serviceCategories.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </optgroup>
          <optgroup label="Specific Services">
            {specificServices.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </optgroup>
          <option value="Other">Other</option>
        </select>
      </div>

      {status === "error" && <p className="relative text-sm text-danger">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-exotic relative mt-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Book Services"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className={labelClass}>
        <LabelDot />
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={fieldClass}
      />
    </div>
  );
}
