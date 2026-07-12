"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  function formatSegment(value: string) {
    return value
      .replaceAll("-", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <nav
      className="flex items-center gap-2 px-4 py-3 font-mono text-xs md:px-8"
      aria-label="Breadcrumb"
    >
      <Link
        href="/"
        className="text-os-textMuted hover:text-os-brand"
      >
        Executive
      </Link>

      {segments.map((segment, index) => (
        <div key={segment} className="flex items-center gap-2">
          <span className="text-os-textMuted">/</span>

          {index === segments.length - 1 ? (
            <span className="text-white">{formatSegment(segment)}</span>
          ) : (
            <Link
              href={`/${segments.slice(0, index + 1).join("/")}`}
              className="text-os-textMuted hover:text-os-brand"
            >
              {formatSegment(segment)}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
