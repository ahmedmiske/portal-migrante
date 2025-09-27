import { NavLink, Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../i18n";
import { useState } from "react";

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/",            label: t("nav_home") },
    { to: "/servicios",   label: t("nav_services") },
    { to: "/anuncios",    label: t("nav_ads") },
    { to: "/observatorio",label: t("nav_observatory") },
    { to: "/sobre",       label: t("nav_about") },
    { to: "/contacto",    label: t("nav_contact") },
  ];

  return (
    <header className="border-b bg-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Migrant Portal Euskadi" className="h-8 w-8" />
            <span className="font-semibold hidden sm:inline">
              {t("app_title")}
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `link-nav ${isActive ? "bg-neutral-200 text-black" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* CTA مثال */}
          <Link to="/users/new" className="btn-primary ml-2">
            + {t("new_user")}
          </Link>

          {/* Language */}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="btn-ghost"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `link-nav ${isActive ? "bg-neutral-200 text-black" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/users/new" className="btn-primary" onClick={() => setOpen(false)}>
              + {t("new_user")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
