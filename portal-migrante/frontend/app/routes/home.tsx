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
      {/* HUMAN HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content with warm, human touch */}
            <div className="max-w-2xl">
              {/* Warm greeting */}
              <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">👋</span>
                <span className="text-orange-800 font-medium">{t("warm_welcome") || "¡Hola! Te damos la bienvenida"}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                <span className="text-orange-600">Tu nuevo hogar</span> está aquí, en <span className="text-green-600">Euskadi</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Sabemos que empezar en un lugar nuevo puede sentirse abrumador. Por eso creamos este espacio donde encontrarás toda la ayuda que necesitas, explicada de manera sencilla y en tu idioma. 
                <span className="font-semibold text-orange-600"> No estás solo en este camino.</span>
              </p>

              {/* Personal search with encouraging message */}
              <form onSubmit={onSearch} className="mb-8">
                <div className="bg-white rounded-2xl p-2 shadow-lg border border-orange-100">
                  <div className="flex gap-3">
                    <input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none text-lg rounded-xl"
                      placeholder={t("human_search") || "¿En qué podemos ayudarte hoy? Busca aquí..."}
                      aria-label="Buscar ayuda"
                    />
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md flex items-center gap-2"
                      type="submit"
                    >
                      <span>🔍</span>
                      {t("search") || "Buscar"}
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 ml-4">
                  <span className="text-green-600">💡</span> Puedes buscar: "trabajo", "médico", "escuela para niños"...
                </p>
              </form>

              {/* Encouraging quick links */}
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/servicios" 
                  className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-orange-200 px-4 py-2 rounded-full transition-all shadow-sm"
                >
                  <span>📋</span>
                  <span className="text-gray-700">Servicios disponibles</span>
                </Link>
                <Link 
                  to="/observatorio" 
                  className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-green-200 px-4 py-2 rounded-full transition-all shadow-sm"
                >
                  <span>📊</span>
                  <span className="text-gray-700">Historias de éxito</span>
                </Link>
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors shadow-sm"
                >
                  <span>💬</span>
                  <span>¡Habla con nosotros!</span>
                </Link>
              </div>
            </div>

            {/* Human stories visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main story card */}
                <div className="col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-orange-100">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤗</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t("community_welcome") || "Te estábamos esperando"}</h3>
                    <p className="text-orange-600 font-medium mb-4">Más de 15,000 personas ya encontraron su lugar aquí</p>
                    <div className="flex justify-center gap-1">
                      <span className="text-2xl">😊</span>
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      <span className="text-2xl">🌟</span>
                      <span className="text-2xl">❤️</span>
                      <span className="text-2xl">🏠</span>
                    </div>
                  </div>
                </div>
                
                {/* Success testimonials */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 shadow-md">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <p className="font-semibold text-green-800">Ana encontró trabajo en 2 semanas</p>
                    <p className="text-sm text-green-700 mt-2">"Las guías me ayudaron muchísimo"</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 shadow-md">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏥</div>
                    <p className="font-semibold text-blue-800">Carlos inscribió a sus hijos</p>
                    <p className="text-sm text-blue-700 mt-2">"Todo en un solo lugar"</p>
                  </div>
                </div>
              </div>
              
              {/* Floating encouragement */}
              <div className="absolute -top-4 -left-4 bg-yellow-100 border border-yellow-200 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-yellow-800 text-sm">¡Tu también puedes!</p>
                    <p className="text-yellow-700 text-xs">Estamos aquí para apoyarte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN CATEGORIES - What do you need help with? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-orange-600">¿En qué</span> podemos ayudarte hoy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada persona tiene necesidades diferentes. Aquí encontrarás ayuda personalizada para lo que más te preocupa en este momento.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, index) => {
            const humanMessages = {
              salud: "Cuidar tu salud y la de tu familia es lo más importante",
              vivienda: "Encontrar un hogar cómodo y seguro para tu familia",
              empleo: "Desarrollar tu carrera y encontrar oportunidades de trabajo",
              educacion: "Asegurar el futuro educativo de tus hijos",
              legal: "Resolver tus papeles y entender tus derechos",
              idioma: "Comunicarte mejor y sentirte más integrado/a"
            };
            
            const encouragingWords = {
              salud: "Te acompañamos",
              vivienda: "Tu hogar te espera",
              empleo: "Tienes mucho que ofrecer",
              educacion: "El futuro es brillante",
              legal: "Estás protegido/a",
              idioma: "Cada palabra cuenta"
            };

            return (
              <Link
                key={c.key}
                to={c.to}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-orange-100 hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-center">
                  {/* Large, friendly icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {c.icon}
                  </div>
                  
                  {/* Title with warm color */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {c.title}
                  </h3>
                  
                  {/* Human message */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {humanMessages[c.key as keyof typeof humanMessages]}
                  </p>
                  
                  {/* Encouraging badge */}
                  <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <span>💪</span>
                    {encouragingWords[c.key as keyof typeof encouragingWords]}
                  </div>
                  
                  {/* Warm call to action */}
                  <div className="flex items-center justify-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                    <span>Comencemos juntos</span>
                    <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Encouraging message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-2xl px-6 py-4">
            <span className="text-3xl">🌟</span>
            <div>
              <p className="font-semibold text-yellow-800">¿No encuentras lo que buscas?</p>
              <p className="text-yellow-700 text-sm">Escríbenos y te ayudamos personalmente</p>
            </div>
            <Link to="/contacto" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl font-medium transition-colors">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* HUMAN PROMISES - What we promise you */}
      <section className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestras <span className="text-green-600">promesas</span> para ti
            </h2>
            <p className="text-xl text-gray-600">
              No son solo palabras. Son compromisos reales que cumplimos cada día.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HumanPromise
              emoji="🤝"
              title="Te tratamos como familia"
              promise="Sin complicaciones, sin burocracia fría. Todo explicado como si fueras nuestro hermano o hermana."
              proof="Más de 10,000 consultas resueltas con cariño"
              color="from-blue-400 to-blue-500"
            />
            <HumanPromise
              emoji="❤️"
              title="Nunca caminas solo"
              promise="Cada pregunta tiene respuesta, cada duda encuentra solución. Siempre hay alguien dispuesto a ayudar."
              proof="Comunidad activa de 15,000 personas"
              color="from-green-400 to-green-500"
            />
            <HumanPromise
              emoji="🌟"
              title="Tu éxito es nuestro éxito"
              promise="Celebramos contigo cada logro: tu primer trabajo, la casa nueva, el título de tus hijos."
              proof="Miles de historias de éxito documentadas"
              color="from-orange-400 to-orange-500"
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

/* ---------- Human Promise Component ---------- */
function HumanPromise({
  emoji,
  title,
  promise,
  proof,
  color
}: {
  emoji: string;
  title: string;
  promise: string;
  proof: string;
  color: string;
}) {
  return (
    <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {emoji}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{promise}</p>
      
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-green-500 text-sm">✓</span>
          <p className="text-sm text-gray-700 font-medium">{proof}</p>
        </div>
      </div>
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
