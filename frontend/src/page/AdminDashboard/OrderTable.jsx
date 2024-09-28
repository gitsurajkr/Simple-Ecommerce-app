import React from 'react';
// import HeaderSidebar from '../../components/HeaderSidebar';
const OrderTable = () => {
  const orders = [
    {
      id: 1,
      customer: 'Alice Brown',
      products: 'Laptop',
      total: '$999.99',
      status: 'Shipped',
    },
    {
      id: 2,
      customer: 'Charlie Davis',
      products: 'Smartphone, Headphones',
      total: '$599.98',
      status: 'Processing',
    },
    {
      id: 3,
      customer: 'Eva Fisher',
      products: 'Headphones',
      total: '$99.99',
      status: 'Delivered',
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Shipped':
        return 'bg-blue-100 text-blue-600 px-3 py-1 rounded-full';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full';
      case 'Delivered':
        return 'bg-green-100 text-green-600 px-3 py-1 rounded-full';
      default:
        return 'bg-gray-100 text-gray-600 px-3 py-1 rounded-full';
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen md:p-6">
      <h1 className="text-xl font-semibold mb-4 md:text-2xl">Order Management</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-gray-600 md:p-4">Order ID</th>
              <th className="p-2 text-gray-600 md:p-4">Customer</th>
              <th className="p-2 text-gray-600 md:p-4">Products</th>
              <th className="p-2 text-gray-600 md:p-4">Total</th>
              <th className="p-2 text-gray-600 md:p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-2 md:p-4">#{order.id}</td>
                <td className="p-2 md:p-4">{order.customer}</td>
                <td className="p-2 md:p-4">{order.products}</td>
                <td className="p-2 md:p-4">{order.total}</td>
                <td className="p-2 md:p-4">
                  <span className={getStatusClass(order.status)}>{order.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
