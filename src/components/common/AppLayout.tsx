"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavBar from "./Header";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();

  const getActiveItem = () => {
    if (pathname === "/") return "home";
    if (pathname.includes("/updates")) return "updates";
    if (pathname.includes("/bug-report")) return "bug-report";
    if (pathname.includes("/change-request")) return "change-request";
    if (pathname.includes("/customers")) return "customers";
    return "home";
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-[Manrope] overflow-hidden relative">
      <NavBar username="Zahraa Alaa" userInitials="ZA" />
      <div className="flex pt-[80px] h-screen">
        <Sidebar activeItem={getActiveItem()} />
        <main className="flex-1 overflow-y-auto h-[calc(100vh-80px)] w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
