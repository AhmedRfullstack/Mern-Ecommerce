import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">EShop</h3>
            <p className="text-gray-400">
              Your one-stop destination for all your shopping needs. Quality products at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Shop', 'Categories', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {[
                'FAQ',
                'Shipping Policy',
                'Return Policy',
                'Track Order',
                'Privacy Policy'
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-400 space-y-2">
              <p>1234 Street Name</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@eshop.com</p>
            </div>
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              {[
                { icon: <FaFacebook />, label: 'Facebook' },
                { icon: <FaTwitter />, label: 'Twitter' },
                { icon: <FaInstagram />, label: 'Instagram' },
                { icon: <FaLinkedin />, label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={`#${social.label.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} EShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 