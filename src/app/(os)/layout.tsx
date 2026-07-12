import type { ReactNode } from "react";

import Sidebar from "@/components/os/Sidebar";
import AppHeader from "@/components/os/AppHeader";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

interface Props {
  children: ReactNode;
}

export default function OSLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-os-bg">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />
        <Breadcrumbs />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
