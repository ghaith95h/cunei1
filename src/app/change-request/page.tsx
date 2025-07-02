export default function ChangeRequestPage() {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#4e338e] mb-6">
        Change Request
      </h1>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <p className="text-gray-600 mb-4">
          Submit and manage change requests. The layout is fully responsive!
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="request-title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Request Title
            </label>
            <input
              id="request-title"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e338e]"
              placeholder="Enter change request title"
            />
          </div>
          <div>
            <label
              htmlFor="request-type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Request Type
            </label>
            <select
              id="request-type"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e338e]"
            >
              <option value="">Select request type</option>
              <option value="feature">New Feature</option>
              <option value="enhancement">Enhancement</option>
              <option value="modification">Modification</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="request-description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="request-description"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4e338e]"
              placeholder="Describe the change request"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-[#4e338e] text-white rounded-md hover:bg-[#3d2970] transition-colors"
          >
            Submit Change Request
          </button>
        </form>
      </div>
    </div>
  );
}
