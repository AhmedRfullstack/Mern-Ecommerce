import React from 'react';
import { FaBox, FaUsers, FaDollarSign, FaChartLine, FaShoppingCart, FaUserPlus } from 'react-icons/fa';

const Dashboard = () => {
  // Demo statistics data
  const stats = [
    {
      title: 'Total Products',
      value: '1,234',
      change: '+12%',
      icon: <FaBox className="text-blue-500" />,
      color: 'bg-blue-100'
    },
    {
      title: 'Total Users',
      value: '5,678',
      change: '+8%',
      icon: <FaUsers className="text-green-500" />,
      color: 'bg-green-100'
    },
    {
      title: 'Total Revenue',
      value: '$45,678',
      change: '+15%',
      icon: <FaDollarSign className="text-purple-500" />,
      color: 'bg-purple-100'
    },
    {
      title: 'Growth Rate',
      value: '24%',
      change: '+4%',
      icon: <FaChartLine className="text-yellow-500" />,
      color: 'bg-yellow-100'
    }
  ];

  // Demo recent orders
  const recentOrders = [
    {
      id: 1,
      customer: 'John Doe',
      amount: '$120.00',
      status: 'Completed',
      date: '2024-03-15'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      amount: '$85.50',
      status: 'Processing',
      date: '2024-03-14'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      amount: '$210.75',
      status: 'Shipped',
      date: '2024-03-14'
    },
    {
      id: 4,
      customer: 'Sarah Wilson',
      amount: '$65.25',
      status: 'Pending',
      date: '2024-03-13'
    }
  ];

  // Demo recent users
  const recentUsers = [
    {
      id: 1,
      name: 'Alex Brown',
      email: 'alex@example.com',
      date: '2024-03-15'
    },
    {
      id: 2,
      name: 'Emily Davis',
      email: 'emily@example.com',
      date: '2024-03-14'
    },
    {
      id: 3,
      name: 'Robert Miller',
      email: 'robert@example.com',
      date: '2024-03-14'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className="text-green-500 text-sm mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Shipped' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 