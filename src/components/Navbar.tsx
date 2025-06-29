import React from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'builder';
  onViewChange: (view: 'landing' | 'builder') => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onViewChange('landing')}
          >
            <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl group-hover:scale-105 transition-transform">
              <FileText className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ResumeForge
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onViewChange('landing')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentView === 'landing'
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              Home
            </button>
            <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
              About
            </a>
            <button
              onClick={() => onViewChange('builder')}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Create Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  onViewChange('landing');
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg font-medium text-left transition-all ${
                  currentView === 'landing'
                    ? 'text-purple-600 bg-purple-50'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                Home
              </button>
              <a 
                href="#features" 
                className="px-4 py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-gray-600 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <button
                onClick={() => {
                  onViewChange('builder');
                  setIsMenuOpen(false);
                }}
                className="mx-4 mt-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Create Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}