// frontend/app/routes/home.tsx
import { Link, useNavigate } from "react-router-dom";
import { useI18n } from "../i18n";
import { useState } from "react";

export default function Home() {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const categories = [
    { key: "salud",  title: t("cat_health") || "Salud",       icon: "❤️", to: "/servicios?c=salud" },
    { key: "vivienda", title: t("cat_housing") || "Vivienda", icon: "🏠", to: "/servicios?c=vivienda" },
    { key: "empleo", title: t("cat_jobs") || "Empleo",         icon: "💼", to: "/servicios?c=empleo" },
    { key: "educacion", title: t("cat_education") || "Educación", icon: "🎓", to: "/servicios?c=educacion" },
    { key: "legal",  title: t("cat_legal") || "Legal",         icon: "⚖️", to: "/servicios?c=legal" },
    { key: "idioma", title: t("cat_language") || "Idioma",     icon: "🗣️", to: "/servicios?c=idioma" },
  ];

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!q.trim()) return;
    // يمكنك توجيه البحث لصفحة observatorio/servicios حسب تصميمك
    navigate(`/servicios?search=${encodeURIComponent(q.trim())}`);
  }

  return (
    <div className="min-h-[calc(100dvh-5rem)]">
      {/* HERO */}
      <section className="bg-vitoria-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              {t("welcome_title") || "Plataforma para Inmigrantes en Euskadi"}
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg">
              {t("welcome_body") ||
                "Información clara, servicios verificados y apoyo comunitario para tu integración en el País Vasco."}
            </p>

            {/* Search bar */}
            <form onSubmit={onSearch} className="mt-6 flex gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full sm:w-[420px] rounded-xl px-4 py-3 text-vitoria-black placeholder-white/70
                           focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder={t("search_placeholder") || "Busca trámites, salud, vivienda…"}
                aria-label={t("search_placeholder") || "Buscar"}
              />
              <button
                className="rounded-xl px-5 py-3 bg-vitoria-white text-vitoria-black font-semibold
                           hover:opacity-90 transition"
                type="submit"
              >
                {t("search") || "Buscar"}
              </button>
            </form>

            {/* Quick actions */}
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link to="/servicios" className="underline underline-offset-4">
                {t("cta_services") || "Ver servicios"}
              </Link>
              <span aria-hidden className="opacity-60">·</span>
              <Link to="/observatorio" className="underline underline-offset-4">
                {t("nav_observatory") || "Observatorio"}
              </Link>
              <span aria-hidden className="opacity-60">·</span>
              <Link to="/anuncios" className="underline underline-offset-4">
                {t("nav_ads") || "Anuncios"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-vitoria-black">
          {t("home_categories_title") || "Categorías de servicios"}
        </h2>
        <p className="text-vitoria-gray mt-2">
          {t("home_categories_sub") || "Recursos verificados por municipio y territorio histórico."}
        </p>

        <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.key}
              to={c.to}
              className="group rounded-2xl border border-gray-200 bg-neutral-surface p-5 sm:p-6
                         hover:shadow-lg hover:border-transparent transition relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-vitoria-green/10 group-hover:bg-vitoria-green/20 transition" />
              <div className="flex items-center justify-between">
                <div className="text-3xl sm:text-4xl" aria-hidden>{c.icon}</div>
                <span className="text-xs px-2 py-1 rounded-full bg-vitoria-green/10 text-vitoria-green">
                  {t("home_categories_badge") || "Acceso rápido"}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-vitoria-black">{c.title}</h3>
              <p className="mt-1 text-sm text-vitoria-gray">
                {t("home_category_hint") || "Guías, trámites, contactos y ayudas disponibles."}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-vitoria-green">
                {t("home_view") || "Ver"}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS / BENEFITS */}
      <section className="bg-neutral-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Stat
              title={t("benefit_info") || "Información clara"}
              desc={t("benefit_info_desc") || "Todo en un solo lugar, sin barreras burocráticas."}
            />
            <Stat
              title={t("benefit_community") || "Comunidad"}
              desc={t("benefit_community_desc") || "Espacio seguro de apoyo y participación."}
            />
            <Stat
              title={t("benefit_institutions") || "Instituciones"}
              desc={t("benefit_institutions_desc") || "Datos para planificar políticas públicas."}
            />
          </div>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-vitoria-black">
            {t("home_news_title") || "Últimas Noticias y Actualizaciones"}
          </h2>
          <Link 
            to="/anuncios" 
            className="text-vitoria-green font-semibold hover:underline"
          >
            {t("home_view_all") || "Ver todas"}
          </Link>
        </div>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard
            title={t("news_1_title") || "Nuevas ayudas para vivienda en 2024"}
            summary={t("news_1_summary") || "El Gobierno Vasco anuncia nuevas subvenciones para el alquiler dirigidas a personas migrantes."}
            date={t("news_1_date") || "25 Sep 2024"}
            category={t("news_housing") || "Vivienda"}
            icon="🏠"
          />
          <NewsCard
            title={t("news_2_title") || "Programa de integración laboral ampliado"}
            summary={t("news_2_summary") || "Se amplían los cursos de formación profesional con traducción a múltiples idiomas."}
            date={t("news_2_date") || "22 Sep 2024"}
            category={t("news_employment") || "Empleo"}
            icon="💼"
          />
          <NewsCard
            title={t("news_3_title") || "Nueva oficina de atención en Donostia"}
            summary={t("news_3_summary") || "Apertura de un nuevo centro de información y trámites específico para migrantes."}
            date={t("news_3_date") || "20 Sep 2024"}
            category={t("news_services") || "Servicios"}
            icon="🏢"
          />
        </div>
      </section>

      {/* QUICK STATS FROM OBSERVATORY */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-vitoria-black text-center mb-8">
            {t("home_stats_title") || "Impacto del Portal Migrante"}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuickStat
              icon="👥"
              number="15,847"
              label={t("stats_users") || "Usuarios registrados"}
            />
            <QuickStat
              icon="📋"
              number="2,345"
              label={t("stats_services") || "Servicios consultados"}
            />
            <QuickStat
              icon="🌍"
              number="47"
              label={t("stats_countries") || "Países de origen"}
            />
            <QuickStat
              icon="📊"
              number="89%"
              label={t("stats_satisfaction") || "Satisfacción de usuarios"}
            />
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/observatorio"
              className="inline-flex items-center gap-2 text-vitoria-green font-semibold hover:underline"
            >
              {t("home_view_observatory") || "Ver más estadísticas en el Observatorio"}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl p-8 sm:p-10 bg-vitoria-green text-vitoria-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              {t("home_cta_title") || "¿Quieres participar o colaborar?"}
            </h3>
            <p className="mt-2 text-white/90">
              {t("home_cta_sub") || "Únete a la comunidad, comparte recursos y mejora la integración en Euskadi."}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/users/new"
              className="rounded-xl bg-white text-vitoria-black font-semibold px-5 py-3 hover:opacity-90 transition"
            >
              {t("users_new") || "Crear cuenta"}
            </Link>
            <Link
              to="/contacto"
              className="rounded-xl border border-white/70 text-white font-semibold px-5 py-3 hover:bg-white/10 transition"
            >
              {t("nav_contact") || "Contacto"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Mini stat card ---------- */
function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="text-vitoria-green font-semibold">{title}</div>
      <p className="mt-1 text-sm text-vitoria-gray">{desc}</p>
    </div>
  );
}

/* ---------- News Card ---------- */
function NewsCard({ 
  title, 
  summary, 
  date, 
  category, 
  icon 
}: { 
  title: string; 
  summary: string; 
  date: string; 
  category: string; 
  icon: string; 
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl" aria-hidden>{icon}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-vitoria-green/10 text-vitoria-green font-medium">
          {category}
        </span>
      </div>
      <h3 className="font-semibold text-vitoria-black mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-vitoria-gray mb-3 line-clamp-3">{summary}</p>
      <div className="text-xs text-vitoria-gray">{date}</div>
    </div>
  );
}

/* ---------- Quick Stat ---------- */
function QuickStat({
  icon,
  number,
  label
}: {
  icon: string;
  number: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl mb-2" aria-hidden>{icon}</div>
      <div className="text-2xl sm:text-3xl font-bold text-vitoria-black mb-1">{number}</div>
      <div className="text-sm text-vitoria-gray">{label}</div>
    </div>
  );
}
