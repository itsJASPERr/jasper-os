"use client";

import { useEffect, useState } from "react";

import type {
  ExecutiveUser,
  ExecutiveProtocol,
  ExecutiveGenerated,
} from "@/types/executive-state";

interface Props {
  user: ExecutiveUser;
  protocol: ExecutiveProtocol;
  generated: ExecutiveGenerated;
  briefDate: string;
}

export default function ExecutiveHeader({
  user,
  protocol,
  generated,
  briefDate,
}: Props) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setCollapsed(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const syncTime = new Date(generated.timestamp).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header
      className="sticky top-12 z-40 border-b border-os-border bg-os-surface/40 backdrop-blur-md"
    >
      <div
        className={`
          flex items-center justify-between gap-3
          transition-all duration-300
          ${collapsed ? "px-4 py-2" : "px-4 py-3 md:px-6 md:py-3"}
        `}
      >
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="truncate text-lg font-bold tracking-tight text-white md:text-2xl">
              {user.name}
            </h1>

            <span className={`rounded border border-os-brand/30 bg-os-brand/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-os-brand transition-all duration-300 ${collapsed ? "hidden md:hidden" : "hidden md:inline-flex"}`}>
              Executive Cockpit
            </span>

            <span className="hidden rounded border border-slate-700 bg-os-surface px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 md:inline-flex">
              {user.mode}
            </span>
          </div>

          <p
            className={`
              mt-2 text-xs text-os-textMuted transition-all duration-300 md:block
              ${collapsed ? "max-h-0 overflow-hidden opacity-0" : ""}
            `}
          >
            <span className="font-semibold text-slate-300">
              {protocol.name}
            </span>
            <span className="mx-2">•</span>
            <span className="font-mono">v{protocol.version}</span>
            <span className="mx-2">•</span>
            <span>Executive Office v{generated.executive_office_version}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2 font-mono text-xs">
          <span className={`rounded-lg border border-os-border bg-os-surface px-3 py-1.5 text-os-textMuted transition-all duration-300 ${collapsed ? "hidden md:hidden" : "hidden md:block"}`}>
            {briefDate}
          </span>

          <span className="flex items-center gap-2 rounded-lg border border-os-brand/30 bg-os-brand/10 px-2 py-1.5 text-os-brand md:px-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-os-brand" />
            <span className="hidden md:inline">Synced</span>
            {syncTime}
          </span>
        </div>
      </div>
    </header>
  );
}
