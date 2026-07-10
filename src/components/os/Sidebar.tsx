import Link from "next/link";

import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  Network,
} from "lucide-react";

import { routes } from "@/lib/routes";

const navigation = [
  {
    label: "Executive",
    href: routes.executive,
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    href: routes.projects,
    icon: FolderKanban,
  },
  {
    label: "Work Items",
    href: routes.workItems,
    icon: ListTodo,
  },
  {
    label: "Entities",
    href: routes.entities,
    icon: Network,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
        hidden
        md:flex
        w-64
        flex-col
        border-r
        border-os-border
        bg-os-surface
      "
    >
      <div
        className="
          border-b
          border-os-border
          p-6
        "
      >
        <h1
          className="
            text-lg
            font-bold
            tracking-tight
            text-os-brand
          "
        >
          JasperOS
        </h1>

        <p
          className="
            mt-1
            text-xs
            text-os-textMuted
          "
        >
          Executive Operating System
        </p>
      </div>


      <nav className="flex flex-1 flex-col gap-1 p-4">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                group
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-2
                text-sm
                text-slate-300
                transition
                hover:bg-os-bg
                hover:text-os-brand
              "
            >
              <Icon
                size={18}
                className="
                  text-os-textMuted
                  transition
                  group-hover:text-os-brand
                "
              />

              <span>
                {item.label}
              </span>

            </Link>
          );
        })}

      </nav>

    </aside>
  );
}