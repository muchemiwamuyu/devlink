import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'Invoices', path: '/invoices' },
    { name: 'Reports', path: '/reports' },
  ]

  return (
    <nav className="bg-[#1a1a1a] text-white p-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <Logo/>

        {/* Desktop Nav */}
        <div className="hidden bg-[#121417] shadow-md shadow-teal-600 px-3 py-3 md:flex gap-6 rounded">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold'
                  : 'hover:text-teal-300 transition'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#222] px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'text-teal-400 font-semibold'
                  : 'text-white hover:text-teal-300 transition'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
