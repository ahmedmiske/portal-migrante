import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

type ServiceNavId =
  | "salud"
  | "vivienda"
  | "empleo"
  | "educacion"
  | "legal"
  | "ayuntamientos"
  | "asociaciones";

const serviceNavItems: {
  id: ServiceNavId;
  to: string;
  icon: string;
  labelKey: string;
}[] = [
  { id: "salud", to: "/servicios/salud", icon: "💗", labelKey: "f_health" },
  { id: "vivienda", to: "/servicios/vivienda", icon: "🏠", labelKey: "f_housing" },
  { id: "empleo", to: "/servicios/empleo", icon: "💼", labelKey: "f_work" },
  { id: "educacion", to: "/servicios/educacion", icon: "🎓", labelKey: "f_education" },
  { id: "legal", to: "/servicios/legal", icon: "⚖️", labelKey: "f_legal" },
  { id: "ayuntamientos", to: "/ayuntamientos", icon: "🏛️", labelKey: "f_municipalities" },
  { id: "asociaciones", to: "/servicios/asociaciones", icon: "🤝", labelKey: "f_charities" },
];

export default function ServicePagesNav({ activeId }: { activeId?: ServiceNavId }) {
  const { t } = useI18n();

  return (
    <nav
      className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-2"
      aria-label={t("nav_services")}
    >
      <div className="flex min-w-max gap-2">
        {serviceNavItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-black no-underline transition ${
              item.id === activeId
                ? "bg-white text-emerald-800 shadow-sm ring-1 ring-emerald-200"
                : "text-slate-600 hover:bg-white hover:text-slate-950"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{t(item.labelKey)}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
