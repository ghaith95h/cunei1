export default function CustomersPage() {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#4e338e] mb-6">
        Customers
      </h1>
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <p className="text-gray-600 mb-4">
          This is the customers management page. The layout is now fully
          responsive!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">Customer 1</h3>
            <p className="text-sm text-gray-600">Sample customer information</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">Customer 2</h3>
            <p className="text-sm text-gray-600">Sample customer information</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="font-semibold text-[#4e338e] mb-2">Customer 3</h3>
            <p className="text-sm text-gray-600">Sample customer information</p>
          </div>
        </div>
      </div>
    </div>
  );
}
