"use client";

import React from "react";
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
    <div className="flex h-full relative">
      <div className="flex-1 p-8 pr-8 lg:pr-[320px] overflow-y-auto">
        <ReleaseNotes />
      </div>
      <div className="hidden lg:block absolute top-0 right-0 w-[296px] h-full bg-[#fcfcfc] border-l border-[#f5f5f9] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d4d4d4] scrollbar-track-transparent">
        <VersionHistory versions={versions} />
      </div>
    </div>
  );
}
