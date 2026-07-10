import Link from "next/link";

import { Bell, Search } from "lucide-react";

export default function AppHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-12
        items-center
        justify-between
        border-b
        border-os-border
        bg-os-surface/80
        px-4
        backdrop-blur-md
      "
    >

      {/* Left */}
      <div className="flex items-center gap-3">

        <Link
          href="/"
          className="
            text-sm
            font-semibold
            tracking-wide
            text-os-brand
          "
        >
          JasperOS
        </Link>

        <span
          className="
            hidden
            text-xs
            text-os-textMuted
            md:inline
          "
        >
          Executive Workspace
        </span>

      </div>


      {/* Right */}
      <div className="flex items-center gap-2">

        <button
          className="
            rounded-lg
            p-2
            text-os-textMuted
            transition
            hover:bg-os-bg
            hover:text-os-brand
          "
          aria-label="Search"
        >
          <Search size={17} />
        </button>


        <button
          className="
            rounded-lg
            p-2
            text-os-textMuted
            transition
            hover:bg-os-bg
            hover:text-os-brand
          "
          aria-label="Notifications"
        >
          <Bell size={17} />
        </button>

      </div>

    </header>
  );
}