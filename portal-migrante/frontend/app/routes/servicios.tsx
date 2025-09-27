// frontend/app/routes/servicios.tsx
import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

type Service = {
  id: string;
  titleKey: string;
  emoji: string;
  path: string;
};

export default function Servicios() {
  const { t } = useI18n();

  const categories: Service[] = [
    { id: "salud",     titleKey: "f_health",    emoji: "❤️", path: "/servicios/salud" },
    { id: "vivienda",  titleKey: "f_housing",   emoji: "🏠", path: "/servicios/vivienda" },
    { id: "educacion", titleKey: "f_education", emoji: "🎓", path: "/servicios/educacion" },
    { id: "legal",     titleKey: "f_legal",     emoji: "📝", path: "/servicios/legal" },
    { id: "empleo",    titleKey: "f_work",      emoji: "💼", path: "/servicios/empleo" },
    { id: "idioma",    titleKey: "f_language",  emoji: "🗣️", path: "/servicios/idioma" },
  ];

  return (
    <main className="container py-4">
      <h1 className="h4 mb-3">{t("cta_services")}</h1>

      <div className="row g-3">
        {categories.map((c) => (
          <div key={c.id} className="col-12 col-sm-6 col-lg-4">
            <Link to={c.path} className="card text-decoration-none h-100">
              <div className="card-body">
                <div className="fs-2">{c.emoji}</div>
                <div className="fw-semibold mt-2">{t(c.titleKey)}</div>
                <p className="text-muted small mb-0">
                  Recursos y enlaces verificados por municipio y territorio histórico.
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
