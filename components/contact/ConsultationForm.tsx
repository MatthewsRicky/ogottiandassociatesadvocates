"use client";

import { useActionState } from "react";
import { submitContact, type ContactActionState } from "@/app/contact/actions";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

export default function ConsultationForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <section className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold-dark">
            Request a Consultation
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-ink sm:text-5xl">
            Tell us about your matter.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            Provide a brief outline of your enquiry and your preferred contact
            details.
          </p>
        </div>

        <form action={formAction} className="mt-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-3 w-full border-b border-line bg-transparent px-0 py-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
                placeholder="Your full name"
              />

              {state.errors?.name && (
                <p className="mt-2 text-xs text-red-700">
                  {state.errors.name[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-3 w-full border-b border-line bg-transparent px-0 py-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
                placeholder="you@example.com"
              />

              {state.errors?.email && (
                <p className="mt-2 text-xs text-red-700">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-3 w-full border-b border-line bg-transparent px-0 py-4 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
                placeholder="+254..."
              />

              {state.errors?.phone && (
                <p className="mt-2 text-xs text-red-700">
                  {state.errors.phone[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="matter"
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
              >
                Matter Type
              </label>

              <select
                id="matter"
                name="matter"
                defaultValue=""
                required
                className="mt-3 w-full border-b border-line bg-transparent px-0 py-4 text-sm text-ink outline-none transition-colors focus:border-gold"
              >
                <option value="" disabled>
                  Select a matter
                </option>

                <option value="Conveyancing & Real Estate">
                  Conveyancing & Real Estate
                </option>

                <option value="Commercial & Corporate Law">
                  Commercial & Corporate Law
                </option>

                <option value="Employment & Labour Law">
                  Employment & Labour Law
                </option>

                <option value="Estate Planning, Succession & Probate">
                  Estate Planning, Succession & Probate
                </option>

                <option value="Civil & Commercial Litigation">
                  Civil & Commercial Litigation
                </option>

                <option value="Criminal Law & Litigation">
                  Criminal Law & Litigation
                </option>

                <option value="Family Law">Family Law</option>

                <option value="Other Legal Matter">Other Legal Matter</option>
              </select>

              {state.errors?.matter && (
                <p className="mt-2 text-xs text-red-700">
                  {state.errors.matter[0]}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="message"
              className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              Briefly Describe Your Matter
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-3 w-full resize-none border-b border-line bg-transparent px-0 py-4 text-sm leading-7 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
              placeholder="Please provide a brief description of your legal enquiry..."
            />

            {state.errors?.message && (
              <p className="mt-2 text-xs text-red-700">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          <div className="mt-9">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center gap-4 bg-gold px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? "Sending..." : "Submit Enquiry"}
              <span>→</span>
            </button>
          </div>

          {state.message && (
            <div
              aria-live="polite"
              className={`mt-7 border-l-2 px-5 py-4 text-sm leading-7 ${
                state.success
                  ? "border-gold bg-cream text-ink"
                  : "border-red-700 bg-red-50 text-red-900"
              }`}
            >
              {state.message}
            </div>
          )}

          <p className="mt-6 max-w-xl text-xs leading-6 text-muted">
            Please avoid including highly sensitive or confidential information
            in this initial enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
