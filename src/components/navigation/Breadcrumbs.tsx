"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <div
      className="
        flex
        items-center
        gap-2
        border-b
        border-os-border
        bg-os-bg
        px-4
        py-2
        text-xs
        text-os-textMuted
      "
    >

      <Link
        href="/"
        className="
          hover:text-os-brand
        "
      >
        Home
      </Link>


      {segments.map((segment, index) => (
        <div
          key={segment}
          className="flex items-center gap-2"
        >

          <ChevronRight
            size={12}
          />

          <span
            className={
              index === segments.length - 1
                ? "text-os-brand"
                : "hover:text-white"
            }
          >
            {formatSegment(segment)}
          </span>

        </div>
      ))}

    </div>
  );
}


function formatSegment(value: string) {
  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
}