import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "ar" | "es" | "en";
type Dict = Record<string, string>;

type I18nContextType = {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (l: Locale) => void;
  locales: Locale[];
};

const I18nContext = createContext<I18nContextType | null>(null);

const LS_KEY = "portal.locale";
const LOCALES: Locale[] = ["ar", "es", "en"];
const RTL: Record<Locale, boolean> = { ar: true, es: false, en: false };

const dicts: Record<Locale, Dict> = {
  es: {
    app_title: "Portal Migrante Euskadi",
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_ads: "Anuncios",
    nav_observatory: "Observatorio",
    nav_about: "Acerca",
    nav_contact: "Contacto",
    back: "← Volver",
    save: "Guardar",
    search: "Buscar",
    no_data: "No hay datos.",
    loading: "Cargando…",
    welcome_title: "Bienvenido",
    welcome_body: "Tu puerta de entrada a servicios y recursos en Euskadi.",
    cta_services: "Categorías de servicios",
    f_health: "Salud",
    f_housing: "Vivienda",
    f_education: "Educación",
    f_legal: "Legal",
    f_work: "Empleo",
    f_language: "Idioma",
    users_title: "Usuarios",
    users_new: "Añadir usuario",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    city: "Ciudad",
    footer_madeby: "Hecho con ❤️ para la comunidad migrante.",
    footer_about: "Acerca del portal",
    footer_contact: "Contacto",
    footer_privacy: "Privacidad",
    footer_terms: "Términos",
    footer_newsletter: "Boletín",
    footer_email_placeholder: "tu@email.com",
    footer_subscribe: "Suscribirse",
    footer_rights: "Todos los derechos reservados",
    quick_links: "Accesos rápidos",
    cta_ads: "Anuncios",
  },

  en: {
    app_title: "Migrant Portal Euskadi",
    nav_home: "Home",
    nav_services: "Services",
    nav_ads: "Ads",
    nav_observatory: "Observatory",
    nav_about: "About",
    nav_contact: "Contact",
    back: "← Back",
    save: "Save",
    search: "Search",
    no_data: "No data.",
    loading: "Loading…",
    welcome_title: "Welcome",
    welcome_body: "Your gateway to services and resources in the Basque Country.",
    cta_services: "Service categories",
    f_health: "Health",
    f_housing: "Housing",
    f_education: "Education",
    f_legal: "Legal",
    f_work: "Work",
    f_language: "Language",
    users_title: "Users",
    users_new: "New user",
    name: "Name",
    email: "Email",
    phone: "Phone",
    city: "City",
    footer_madeby: "Made with ❤️ for the migrant community.",
    footer_about: "About the portal",
    footer_contact: "Contact",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_newsletter: "Newsletter",
    footer_email_placeholder: "you@email.com",
    footer_subscribe: "Subscribe",
    footer_rights: "All rights reserved",
    quick_links: "Quick links",
    cta_ads: "Ads",
  },

  ar: {
    app_title: "بوابة المهاجر في الباسك",
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_ads: "الإعلانات",
    nav_observatory: "المرصد",
    nav_about: "عن البوابة",
    nav_contact: "تواصل",
    back: "← رجوع",
    save: "حفظ",
    search: "بحث",
    no_data: "لا توجد بيانات.",
    loading: "جاري التحميل…",
    welcome_title: "مرحبًا بك",
    welcome_body: "بوابتك إلى الخدمات والموارد في إقليم الباسك.",
    cta_services: "تصنيفات الخدمات",
    f_health: "الصحة",
    f_housing: "السكن",
    f_education: "التعليم",
    f_legal: "القانوني",
    f_work: "العمل",
    f_language: "اللغة",
    users_title: "المستخدمون",
    users_new: "إضافة مستخدم",
    name: "الاسم",
    email: "الإيميل",
    phone: "الهاتف",
    city: "المدينة",
    footer_madeby: "صنع بحب ❤️ لخدمة مجتمع المهاجرين.",
    footer_about: "عن البوابة",
    footer_contact: "تواصل",
    footer_privacy: "الخصوصية",
    footer_terms: "الشروط",
    footer_newsletter: "النشرة البريدية",
    footer_email_placeholder: "you@email.com",
    footer_subscribe: "اشترك",
    footer_rights: "جميع الحقوق محفوظة",
    quick_links: "روابط سريعة",
    cta_ads: "الإعلانات",
  },
};

function detectInitial(): Locale {
  try {
    const saved = localStorage.getItem(LS_KEY) as Locale | null;
    if (saved && LOCALES.includes(saved)) return saved;
  } catch {}
  const nav = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
  if (nav.startsWith("ar")) return "ar";
  if (nav.startsWith("es")) return "es";
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitial());

  useEffect(() => {
    try { localStorage.setItem(LS_KEY, locale); } catch {}
    const html = document.documentElement;
    html.lang = locale;
    html.dir = RTL[locale] ? "rtl" : "ltr";
  }, [locale]);

  const t = useMemo(() => {
    const dict = dicts[locale] ?? {};
    return (key: string) => dict[key] ?? key;
  }, [locale]);

  const setLocale = (l: Locale) => { if (LOCALES.includes(l)) setLocaleState(l); };

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, locales: LOCALES }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}
