"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { profile } from "@/data/profile";

type Command = {
  label: string;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: Command[] = [
    { label: "Go to Work", action: () => router.push("/work") },
    { label: "Go to Software", action: () => router.push("/software") },
    { label: "Go to AI", action: () => router.push("/ai") },
    { label: "Go to Robotics", action: () => router.push("/robotics") },
    { label: "Go to Engineering", action: () => router.push("/engineering") },
    { label: "Go to Build Log", action: () => router.push("/build-log") },
    { label: "Go to About", action: () => router.push("/about") },
    { label: "Contact", action: () => router.push("/contact") },
    { label: "Open GitHub", action: () => window.open(profile.links.github, "_blank") },
    { label: "Open LinkedIn", action: () => window.open(profile.links.linkedin, "_blank") },
    { label: "Download Resume", action: () => window.open(profile.links.resume, "_blank") },
    {
      label: "Toggle Theme",
      action: () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (isLight) {
          document.documentElement.removeAttribute("data-theme");
          try {
            localStorage.setItem("theme", "dark");
          } catch {
            /* storage unavailable */
          }
        } else {
          document.documentElement.setAttribute("data-theme", "light");
          try {
            localStorage.setItem("theme", "light");
          } catch {
            /* storage unavailable */
          }
        }
      },
    },
  ];

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpenRequest() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenRequest);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenRequest);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      const command = filtered[activeIndex];
      if (command) {
        command.action();
        setOpen(false);
      }
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-24 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-md rounded border border-border bg-surface shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type a command..."
          className="focus-ring w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
        />
        <ul className="max-h-72 overflow-y-auto py-1">
          {filtered.length === 0 && <li className="px-4 py-3 text-sm text-muted">No matching commands.</li>}
          {filtered.map((command, i) => (
            <li key={command.label}>
              <button
                type="button"
                onClick={() => {
                  command.action();
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  i === activeIndex ? "bg-accent/15 text-accent" : "text-ink hover:bg-bg"
                }`}
              >
                {command.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
