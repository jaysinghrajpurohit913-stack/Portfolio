"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value, // honeypot
    };

    if (!data.name || !data.email || data.message.length < 10) {
      setStatus("error");
      setErrorMessage("Fill in your name, a valid email, and a message of at least 10 characters.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong sending your message.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      // No API route wired up yet, or the request failed — fall back to a mailto link
      // instead of leaving the visitor stuck.
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? `${err.message} You can also email directly: ${profile.links.email}`
          : `Something went wrong. You can also email directly: ${profile.links.email}`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-accent/40 bg-surface p-5 text-sm">
        Message sent. I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from real visitors, catches basic bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="focus-ring mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="focus-ring mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          className="focus-ring mt-1.5 w-full rounded border border-border bg-surface px-3 py-2 text-sm"
        />
      </div>

      {status === "error" && <p className="text-sm text-stop">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring rounded bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
