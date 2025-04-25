import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaShoppingBag, 
  FaUsers, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: FaHome },
    { name: 'Products', path: '/admin/products', icon: FaShoppingBag },
    { name: 'Users', path: '/admin/users', icon: FaUsers },
    { name: 'Analytics', path: '/admin/analytics', icon: FaChartBar },
    { name: 'Settings', path: '/admin/settings', icon: FaCog },
  ];

  const handleLogout = () => {
    // Clear user session/token
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 text-white transition-all duration-300`}>
        <div className="p-4 flex justify-between items-center">
          {isSidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg hover:bg-blue-700"
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-4 ${
                location.pathname === item.path
                  ? 'bg-blue-700'
                  : 'hover:bg-blue-700'
              }`}
            >
              <item.icon className="w-6 h-6" />
              {isSidebarOpen && <span className="ml-4">{item.name}</span>}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center p-4 w-full text-left hover:bg-blue-700"
          >
            <FaSignOutAlt className="w-6 h-6" />
            {isSidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 