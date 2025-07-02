import React from "react";

export default function HomePage() {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#4e338e] mb-6">
        Welcome to the Dashboard
      </h1>
      <p className="text-gray-600 mb-4">
        This is the home page. The NavBar and Sidebar are now part of the root
        layout and will appear on every page. The layout is fully responsive!
      </p>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg lg:text-xl font-semibold text-[#4e338e] mb-3">
          Navigation
        </h2>
        <p className="text-gray-600">
          Use the sidebar (on larger screens) to navigate between different
          sections:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">Updates</h3>
            <p className="text-sm text-gray-600">
              View release notes and version history
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">Bug Report</h3>
            <p className="text-sm text-gray-600">Report and track bugs</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">
              Change Request
            </h3>
            <p className="text-sm text-gray-600">Submit change requests</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">Customers</h3>
            <p className="text-sm text-gray-600">Manage customer information</p>
          </div>
        </div>
      </div>
    </div>
  );
}
