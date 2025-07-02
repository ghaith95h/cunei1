import React from "react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Terminated";
}

const Table = () => {
  const customers: Customer[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
      status: "Terminated",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      phone: "+1 (555) 456-7890",
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      phone: "+1 (555) 321-0987",
      status: "Terminated",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david.brown@example.com",
      phone: "+1 (555) 654-3210",
      status: "Active",
    },
  ];

  const getStatusStyle = (status: "Active" | "Terminated") => {
    return status === "Active"
      ? "bg-green-200 text-green-800"
      : "bg-red-200 text-red-800 ";
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="overflow-x-auto">
        <table className="w-full py-6 px-10">
          <thead>
            <tr className="border-b border-[#D7D7E6]">
              <th className="px-6 py-4 text-left text-lg font-normal text-[#8883AE] uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-4 text-left text-lg font-normal text-[#8883AE] uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-lg font-normal text-[#8883AE] uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-4 text-left text-lg font-normal text-[#8883AE] uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-lg font-medium text-[#4E4860]">
                    {customer.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-lg font-medium text-[#4E4860]">
                    {customer.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-lg font-medium text-[#4E4860]">
                    {customer.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex  items-center px-2 py-1 rounded-2xl text-lg font-normal ${getStatusStyle(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
