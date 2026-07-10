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
    const handleScroll = () => {
      setCollapsed(window.scrollY > 60);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  const syncTime =
    new Date(generated.timestamp)
      .toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
      });


  return (
    <header
      className={`
        sticky
        top-12
        z-30
        border-b
        border-os-border
        bg-os-surface/40
        backdrop-blur-md
        transition-all
        ${collapsed ? "py-1" : "py-3"}
      `}
    >

      <div
        className="
          flex
          items-center
          justify-between
          gap-3
          px-4
          md:px-6
        "
      >

        {/* migrate content here */}

      </div>

    </header>
  );
}