import { NavLink, Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../i18n";
import { useState, useEffect } from "react";

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { 
      to: "/", 
      label: t("nav_home"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      to: "/servicios", 
      label: t("nav_services"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      to: "/anuncios", 
      label: t("nav_ads"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    { 
      to: "/observatorio", 
      label: t("nav_observatory"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      to: "/sobre", 
      label: t("nav_about"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      to: "/contacto", 
      label: t("nav_contact"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Modern Logo Design */}
            <div className="relative">
              <div className="w-12 h-12 bg-vitoria-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-accent rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-vitoria-black group-hover:text-vitoria-green transition-colors duration-300">
                Portal Migrante
              </div>
              <div className="text-xs text-vitoria-gray font-medium tracking-wide">
                EUSKADI
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                  isActive 
                    ? "text-vitoria-green bg-vitoria-green/10 shadow-sm" 
                    : "text-vitoria-gray hover:text-vitoria-green hover:bg-vitoria-green/5"
                }`
              }
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </span>
              {item.label}
              {/* Active indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-vitoria-green rounded-full transition-all duration-300 group-data-[active]:w-8"></div>
            </NavLink>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <LanguageSwitcher />
          </div>

          {/* CTA Button */}
          <Link 
            to="/users/new" 
            className="group relative inline-flex items-center gap-2 bg-vitoria-gradient text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {t("users_new")}
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="relative">
            <LanguageSwitcher />
          </div>
          
          <button
            className={`relative p-2 rounded-xl transition-all duration-300 ${
              open 
                ? "bg-vitoria-green text-white shadow-lg" 
                : "bg-gray-100 text-vitoria-gray hover:bg-vitoria-green/10 hover:text-vitoria-green"
            }`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
                open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-current transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
                open ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-current transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${
                open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 ${
                      isActive 
                        ? "text-vitoria-green bg-vitoria-green/10 shadow-sm" 
                        : "text-vitoria-gray hover:text-vitoria-green hover:bg-vitoria-green/5"
                    }`
                  }
                  onClick={() => setOpen(false)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: open ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200/50 mt-2">
                <Link
                  to="/users/new"
                  className="group flex items-center justify-center gap-2 bg-vitoria-gradient text-white px-6 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setOpen(false)}
                >
                  <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  {t("users_new")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {open && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
