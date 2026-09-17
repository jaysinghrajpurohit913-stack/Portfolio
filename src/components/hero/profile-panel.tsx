import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/profile";

function photoExists(): boolean {
  try {
    const filePath = path.join(process.cwd(), "public", profile.links.photo.replace(/^\//, ""));
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

export function ProfilePanel() {
  const hasPhoto = photoExists();

  return (
    <div className="overflow-hidden rounded border border-border bg-surface">
      <div className="relative aspect-[4/3] w-full bg-surface-raised">
        {hasPhoto ? (
          <Image
            src={profile.links.photo}
            alt={profile.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 360px, 100vw"
            priority
          />
        ) : (
          <div className="grain-panel flex h-full w-full items-center justify-center">
            <span className="font-mono text-xs text-muted">photo pending</span>
          </div>
        )}
      </div>
      <div className="border-t border-border p-4">
        <p className="font-display text-sm font-semibold">{profile.name}</p>
        <p className="mt-0.5 font-mono text-xs text-muted">{profile.role}</p>
      </div>
    </div>
  );
}
