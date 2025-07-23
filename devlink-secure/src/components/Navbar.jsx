import React, { useState } from 'react'
import Logo from './Logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <div className='relative'>
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Logo />
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
                <button
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Client
                </button>
                <button
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Freelancer
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>

              {/* Mobile menu */}
              <div className="md:hidden flex items-center justify-end px-4 py-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>

              {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</a>
                    <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
                    <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</a>
                    <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
                    <div className="pt-2 border-t border-gray-100">
                      <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Sign In</button>
                      <button className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg mx-3 mt-2 hover:bg-blue-700">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar