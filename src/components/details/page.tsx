"use client";

import React from "react";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import ReleaseNotes from "./ReleaseNotes";
import VersionHistory from "./VersionHistory";

const versions = [
  { number: "V 2.0.33.1", isActive: true },
  { number: "V 2.0.33" },
  { number: "V 2.0.32" },
  { number: "V 2.0.31.1" },
  { number: "V 2.0.31" },
  { number: "V 2.0.32.0" },
  { number: "V 2.0.31.1" },
  { number: "V 2.0.31.0" },
  { number: "V 2.0.32" },
  { number: "V 2.0.31.1" },
  { number: "V 2.0.31" },
  { number: "V 2.0.32.0" },
  { number: "V 2.0.31.1" },
  { number: "V 2.0.31.0" },
  { number: "V 2.0.32" },
  { number: "V 2.0.31.1" },
  { number: "V 2.0.31" },
  { number: "V 2.0.32.0" },
];

export default function UpdateDetails() {
  return (
    <div className="w-[1440px] h-[1156px] bg-[#fcfcfc] font-[Manrope] mx-auto overflow-hidden relative">
      <Header username="Zahraa Alaa" userInitials="ZA" />
      <div className="flex pt-[80px]">
        <Sidebar activeItem="updates" />
        <main className="flex-1 p-8 pr-[320px] overflow-y-auto h-[936px]">
          <ReleaseNotes />
        </main>
        <div className="absolute top-[80px] left-[1144px] w-[296px] h-[936px] bg-[#fcfcfc] border-l border-[#f5f5f9] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4d4d4] scrollbar-track-transparent">
          <VersionHistory versions={versions} />
        </div>
      </div>
    </div>
  );
}
