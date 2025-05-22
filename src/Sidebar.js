import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaCog,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsMobile(!isMobile);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <FaHome /> },
    { name: 'Portfolio', path: '/portfolio', icon: <FaUser /> },
    { name: 'About Me', path: '/about', icon: <FaUser /> },
    { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Skills', path: '/skills', icon: <FaTools /> },
    { name: 'Experience', path: '/experience', icon: <FaBriefcase /> },
    { name: 'Education', path: '/education', icon: <FaGraduationCap /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    { name: 'Settings', path: '/settings', icon: <FaCog /> },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <div className="md:hidden p-4 bg-gray-800 text-white flex justify-between items-center">
        <span className="text-xl font-bold">My Portfolio</span>
        <button onClick={toggleSidebar}>
          {isMobile ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white z-50 md:relative fixed md:h-screen h-full top-0 left-0 transition-all duration-300 ease-in-out ${isMobile ? 'w-64' : isOpen ? 'w-64 hidden md:block' : 'w-16 hidden md:block'
          }`}
      >
        {/* Toggle Button (desktop) */}
        <div className="hidden md:flex items-center justify-between p-4 border-b border-gray-700">
          {isOpen && <span className="text-xl font-bold">My Portfolio</span>}
          <button onClick={toggleSidebar} className="text-white focus:outline-none text-2xl">
            ☰
          </button>
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-4 p-2 rounded hover:bg-gray-700 ${location.pathname === item.path ? 'bg-gray-700' : ''
                }`}
              onClick={() => setIsMobile(false)} // close on mobile click
            >
              <Link to={item.path} className="flex items-center space-x-4 w-full">
                <span className="text-xl">{item.icon}</span>
                {(isOpen || isMobile) && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
