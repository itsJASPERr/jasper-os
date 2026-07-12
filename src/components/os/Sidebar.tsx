"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  LayoutDashboard,
  Briefcase,
  Globe,
  Target,
  Brain,
  Scale,
  Settings,
} from "lucide-react";

import { routes } from "@/lib/routes";

const navigation = [
  { label: "Dashboard", href: routes.home, icon: LayoutDashboard },
  { label: "Executive", href: routes.executive, icon: Briefcase },
  { label: "Domains", href: routes.domains, icon: Globe },
  { label: "Strategy", href: routes.strategy, icon: Target },
  { label: "Intelligence", href: routes.intelligence, icon: Brain },
  { label: "Decisions", href: routes.decisions, icon: Scale },
  { label: "Settings", href: routes.settings, icon: Settings },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  useEffect(() => {
    function onClose() {
      document.getElementById("sidebar")?.classList.add("-translate-x-full");
      document.getElementById("sidebar-backdrop")?.classList.add("hidden");
    }

    document.getElementById("sidebar-backdrop")?.addEventListener("click", onClose);

    return () => {
      document.getElementById("sidebar-backdrop")?.removeEventListener("click", onClose);
    };
  }, []);

  useEffect(() => {
    document.getElementById("sidebar")?.classList.add("-translate-x-full");
    document.getElementById("sidebar-backdrop")?.classList.add("hidden");
  }, [pathname]);

  return (
    <>
      <div
        id="sidebar-backdrop"
        className="fixed inset-0 z-40 hidden bg-black/60 lg:hidden"
      />

      <aside
        id="sidebar"
        className="fixed lg:sticky top-0 left-0 z-50 w-64 h-screen bg-os-surface border-r border-os-border flex flex-col -translate-x-full lg:translate-x-0 transition-transform duration-300 overflow-y-auto"
      >
        <div className="shrink-0 border-b border-os-border/50 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-os-brand font-black text-white">
              ▲
            </div>
            <div>
              <h2 className="text-base font-bold text-white">JasperOS</h2>
              <p className="text-[10px] text-os-textMuted">
                Executive Operating System
              </p>
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href, pathname);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-os-brand text-white"
                    : "text-os-textMuted hover:bg-os-border/40 hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    active
                      ? "text-white"
                      : "text-os-textMuted group-hover:text-white"
                  }
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="space-y-4 border-t border-os-border/50 px-4 py-4">
          <div className="rounded-xl border border-os-border bg-os-bg/60 p-4">
            <p className="mb-2 text-[10px] uppercase text-os-textMuted">
              Current Focus
            </p>
            <div className="flex gap-2">
              <span>🎯</span>
              <div>
                <h4 className="text-xs font-bold">JasperOS</h4>
                <p className="text-[10px] text-os-textMuted">
                  Executive Cockpit v3.0
                </p>
              </div>
            </div>
          </div>

          <button className="w-full rounded-xl border border-os-brand/30 bg-os-brand/10 py-2 text-xs text-os-brand">
            ⚙️ Import / Edit Local DB
          </button>

          <div className="rounded-xl border border-os-brand/20 bg-os-brand/10 p-4">
            <h5 className="text-xs font-bold text-os-brand">
              ✨ Jasper Insight
            </h5>
            <p className="mt-2 text-[11px] text-slate-300">
              You have 3 high-impact actions that will move your top priorities
              forward.
            </p>
          </div>

          <div className="border-t border-os-border/50 pt-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-os-brand/30 bg-os-border text-xs font-bold">
              JM
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Jasper Meyer</h4>
              <p className="text-[10px] text-os-textMuted">
                AI Systems Engineer
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
