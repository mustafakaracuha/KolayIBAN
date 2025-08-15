import { Link, useLocation } from 'react-router-dom';
import { Shield, Sparkles, Github, Twitter, Linkedin, Mail, Code, MessageSquare, Menu, X } from "lucide-react";
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent" role="banner">
      <nav className="w-full md:max-w-4xl mx-0 sm:mx-0 md:mx-auto bg-gradient-to-r from-white via-gray-50 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 rounded-none md:rounded-br-2xl md:rounded-bl-2xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden px-4 py-6" role="navigation" aria-label="Ana navigasyon">
        <div className="flex items-center justify-between">
          {/* Logo ve başlık */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg" role="img" aria-label="KolayIBAN logosu">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
            
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                KolayIBAN
              </h1>
              <p className="text-sm text-gray-600/60 dark:text-gray-400/70 font-medium">
                IBAN'larınızı kolayca yönetin
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4" role="menubar">
            <Link 
              to="/home" 
              className={`px-4 py-2 font-medium transition-all duration-200 ${
                location.pathname === '/home' 
                  ? 'text-gray-600 dark:text-gray-400 border-b-2 border-gray-500 dark:border-gray-400' 
                  : 'text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
              role="menuitem"
              aria-current={location.pathname === '/home' ? 'page' : undefined}
            >
             IBAN'larım
            </Link>
            <Link 
              to="/" 
              className={`px-4 py-2 font-medium transition-all duration-200 ${
                location.pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:border-b-2'
              }`}
              role="menuitem"
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Hakkında
            </Link>
          </div>

          {/* Mobil Hamburger Menü */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
              title="Menü"
              aria-label="Mobil menüyü aç/kapat"
              aria-expanded={showMobileMenu}
              aria-controls="mobile-menu"
            >
              {showMobileMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobil Menü Dropdown */}
        {showMobileMenu && (
          <div 
            id="mobile-menu"
            className="md:hidden border-t border-gray-200 dark:border-slate-700 mt-4 pt-4" 
            role="menu"
            aria-label="Mobil menü"
          >
            <div className="flex flex-col gap-2">
              <Link 
                to="/home" 
                onClick={() => setShowMobileMenu(false)}
                className={`px-4 py-3 font-medium transition-all duration-200 ${
                  location.pathname === '/home' 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-l-3 border-blue-500' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/home' ? 'page' : undefined}
              >
                IBAN'larım
              </Link>
              <Link 
                to="/" 
                onClick={() => setShowMobileMenu(false)}
                className={`px-4 py-3 font-medium transition-all duration-200 ${
                  location.pathname === '/' 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-l-3 border-blue-500' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
                role="menuitem"
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Hakkında
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
