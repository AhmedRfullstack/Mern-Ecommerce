import React from 'react';
import { FaChartLine, FaChartBar, FaChartPie, FaShoppingCart, FaUsers, FaDollarSign } from 'react-icons/fa';

const Analytics = () => {
  // Demo analytics data
  const salesData = {
    daily: '2,345',
    weekly: '12,456',
    monthly: '45,678',
    growth: '+15%'
  };

  const topProducts = [
    { name: 'Wireless Headphones', sales: 234, revenue: '$23,400' },
    { name: 'Smart Watch', sales: 187, revenue: '$37,400' },
    { name: 'Gaming Laptop', sales: 156, revenue: '$202,800' },
    { name: 'Running Shoes', sales: 145, revenue: '$11,600' }
  ];

  const revenueByCategory = [
    { category: 'Electronics', amount: '$145,678', percentage: '45%' },
    { category: 'Fashion', amount: '$98,456', percentage: '30%' },
    { category: 'Sports', amount: '$45,678', percentage: '15%' },
    { category: 'Home & Living', amount: '$32,456', percentage: '10%' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics Overview</h1>

      {/* Sales Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Daily Sales</h3>
            <FaChartLine className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold">${salesData.daily}</p>
          <p className="text-green-500 text-sm mt-2">{salesData.growth} from yesterday</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Weekly Sales</h3>
            <FaChartBar className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold">${salesData.weekly}</p>
          <p className="text-green-500 text-sm mt-2">{salesData.growth} from last week</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Monthly Sales</h3>
            <FaChartPie className="text-yellow-500" />
          </div>
          <p className="text-3xl font-bold">${salesData.monthly}</p>
          <p className="text-green-500 text-sm mt-2">{salesData.growth} from last month</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg">Total Orders</h3>
            <FaShoppingCart className="text-2xl" />
          </div>
          <p className="text-4xl font-bold">1,234</p>
          <p className="text-blue-100 mt-2">+12% from last month</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg">Total Customers</h3>
            <FaUsers className="text-2xl" />
          </div>
          <p className="text-4xl font-bold">5,678</p>
          <p className="text-purple-100 mt-2">+8% from last month</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg">Total Revenue</h3>
            <FaDollarSign className="text-2xl" />
          </div>
          <p className="text-4xl font-bold">$45,678</p>
          <p className="text-yellow-100 mt-2">+15% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Top Products</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.sales} sales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Revenue by Category</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {revenueByCategory.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{category.category}</span>
                    <span className="text-sm font-medium">{category.amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: category.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 