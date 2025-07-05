export default function BugReportPage() {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#4e338e] mb-6">
        Bug Report
      </h1>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <p className="text-gray-600 mb-4">
          This is the bug report page. The NavBar and Sidebar are automatically
          available here! The layout is now fully responsive.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="bug-title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Bug Title
            </label>
            <input
              id="bug-title"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e338e]"
              placeholder="Enter bug title"
            />
          </div>
          <div>
            <label
              htmlFor="bug-description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="bug-description"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e338e]"
              placeholder="Describe the bug"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-[#4e338e] text-white rounded-md hover:bg-[#3d2970] transition-colors"
          >
            Submit Bug Report
          </button>
        </form>
      </div>
    </div>
  );
}
