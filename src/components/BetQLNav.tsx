import React from 'react';
import { Search, User, Menu } from 'lucide-react';
export function BetQLNav() {
  const navLinks = [
  'NFL',
  'NBA',
  'MLB',
  'NHL',
  'NCAAB',
  'NCAAF',
  'SOCCER',
  'GOLF',
  'TENNIS'];

  return (
    <nav className="w-full bg-[#0f172a] text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo & Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xl italic">
                Q
              </div>
              <span className="text-xl font-bold tracking-tight">BetQL</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) =>
              <a
                key={link}
                href="#"
                className={`text-sm font-bold tracking-wide hover:text-blue-400 transition-colors ${link === 'SOCCER' ? 'text-blue-400' : 'text-gray-300'}`}>
                
                  {link}
                </a>
              )}
            </div>
          </div>

          {/* Right section: Search, Upgrade, Profile */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white p-2">
              <Search size={20} />
            </button>
            <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded text-sm font-bold transition-colors">
              UPGRADE
            </button>
            <button className="text-gray-300 hover:text-white p-2">
              <User size={20} />
            </button>
            <button className="lg:hidden text-gray-300 hover:text-white p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>);

}