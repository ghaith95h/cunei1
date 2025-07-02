"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ChangeRequest = () => {
  const nav = useRouter();
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <p className="text-[32px] font-bold">Customers</p>
        <button
          onClick={() => nav.replace("/change-request/new")}
          className="bg-[#55389B] text-[20px] text-[#FDFDFFFC] px-2 py-4 rounded-lg"
        >
          + Add New
        </button>
      </div>
    </div>
  );
};

export default ChangeRequest;
