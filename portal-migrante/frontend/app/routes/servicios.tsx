import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

type ServiceCategory = {
  id: string;
  title: string;
  emoji: string;
  path?: string;
  description: string;
  available: boolean;
};

export default function Servicios() {
  const { t } = useI18n();

  const categories: ServiceCategory[] = [
    {
      id: "salud",
      title: "Salud",
      emoji: "❤️",
      path: "/servicios/salud",
      description:
        "Guías, recursos y enlaces relacionados con salud y atención sanitaria.",
      available: false,
    },
    {
      id: "vivienda",
      title: "Vivienda",
      emoji: "🏠",
      path: "/servicios/vivienda",
      description:
        "Información y recursos relacionados con vivienda y alojamiento.",
      available: false,
    },
    {
      id: "educacion",
      title: "Educación",
      emoji: "🎓",
      path: "/servicios/educacion",
      description:
        "Guías y recursos sobre educación, formación y estudios.",
      available: false,
    },
    {
      id: "legal",
      title: "Legal",
      emoji: "📝",
      path: "/servicios/legal",
      description:
        "Orientación y recursos sobre trámites, documentación y apoyo legal.",
      available: false,
    },
    {
      id: "empleo",
      title: "Empleo",
      emoji: "💼",
      path: "/servicios/empleo",
      description:
        "Recursos y orientación para empleo, búsqueda de trabajo y formación laboral.",
      available: false,
    },
    {
      id: "idioma",
      title: "Idioma",
      emoji: "🗣️",
      path: "/servicios/idioma",
      description:
        "Información sobre aprendizaje de idiomas y recursos lingüísticos.",
      available: false,
    },
    {
      id: "ayuntamientos",
      title: "Ayuntamientos",
      emoji: "🏛️",
      path: "/ayuntamientos",
      description:
        "Consulta la información disponible sobre ayuntamientos del País Vasco.",
      available: true,
    },
  ];

  return (
    <main className="container py-4">
      <div className="mb-4">
        <h1 className="h4 mb-2">{t("cta_services")}</h1>
        <p className="text-muted mb-0">
          Explora las principales categorías de información y accede a los recursos disponibles.
        </p>
      </div>

      <div className="row g-3">
        {categories.map((category) => {
          const cardContent = (
            <div className="card-body d-flex flex-column h-100">
              <div className="fs-2">{category.emoji}</div>

              <div className="d-flex align-items-center justify-content-between mt-2 gap-2">
                <div className="fw-semibold">{category.title}</div>

                {!category.available && (
                  <span className="badge text-bg-secondary">Próximamente</span>
                )}
              </div>

              <p className="text-muted small mt-2 mb-3">{category.description}</p>

              <div className="mt-auto">
                {category.available ? (
                  <span className="btn btn-sm btn-outline-success">
                    Ver información
                  </span>
                ) : (
                  <span className="btn btn-sm btn-outline-secondary disabled">
                    En preparación
                  </span>
                )}
              </div>
            </div>
          );

          return (
            <div key={category.id} className="col-12 col-sm-6 col-lg-4">
              {category.available && category.path ? (
                <Link
                  to={category.path}
                  className="card text-decoration-none h-100 shadow-sm border-0"
                >
                  {cardContent}
                </Link>
              ) : (
                <div className="card h-100 shadow-sm border-0 opacity-75">
                  {cardContent}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}