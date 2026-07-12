"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Bell, Search, Menu } from "lucide-react";

function toggleMobileSidebar() {
  document.getElementById("sidebar")?.classList.toggle("-translate-x-full");
  document.getElementById("sidebar-backdrop")?.classList.toggle("hidden");
}

export default function AppHeader() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCollapsed(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-os-border bg-os-surface/80 backdrop-blur-md transition-all duration-300"
    >
      <div
        className={`
          flex items-center justify-between
          px-4 md:px-6
          transition-all duration-300
          ${collapsed ? "py-2" : "py-4"}
        `}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMobileSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-os-border bg-os-surface text-white transition hover:bg-os-border lg:hidden"
            aria-label="Open navigation"
          >
            <Menu size={16} />
          </button>

          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-white md:text-xl"
            >
              JasperOS
            </Link>

            <p
              className={`
                text-xs text-os-textMuted transition-opacity duration-300
                ${collapsed ? "h-0 opacity-0 overflow-hidden" : ""}
              `}
            >
              Executive Operating System
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-os-border text-os-textMuted hover:text-white md:flex"
            aria-label="Search"
          >
            <Search size={16} />
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-os-border text-os-textMuted hover:text-white"
            aria-label="Notifications"
          >
            <Bell size={16} />
          </button>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-os-brand/30 bg-os-border text-xs font-bold">
            JM
          </div>
        </div>
      </div>
    </header>
  );
}
