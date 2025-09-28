import { useI18n } from "../i18n";
import { Link } from "react-router-dom";

export default function Sobre() {
  const { t } = useI18n();

  const teamMembers = [
    {
      name: "Dr. Ana García",
      role: t("team_director"),
      image: "/team/ana.jpg",
      description: t("ana_description")
    },
    {
      name: "Mohamed Al-Hassan",
      role: t("team_coordinator"),
      image: "/team/mohamed.jpg",
      description: t("mohamed_description")
    },
    {
      name: "Elena Rodríguez",
      role: t("team_social_worker"),
      image: "/team/elena.jpg",
      description: t("elena_description")
    },
    {
      name: "Amir Khalil",
      role: t("team_translator"),
      image: "/team/amir.jpg",
      description: t("amir_description")
    }
  ];

  const stats = [
    { number: "5,000+", label: t("stat_users") },
    { number: "150+", label: t("stat_services") },
    { number: "25", label: t("stat_languages") },
    { number: "3", label: t("stat_years") }
  ];

  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Hero Section */}
      <div className="bg-vitoria-gradient text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about_title")}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t("about_subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vitoria-black mb-6">
                {t("our_mission")}
              </h2>
              <p className="text-lg text-vitoria-gray mb-6 leading-relaxed">
                {t("mission_description")}
              </p>
              <p className="text-lg text-vitoria-gray leading-relaxed">
                {t("mission_commitment")}
              </p>
            </div>
            <div className="bg-neutral-surface rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="bg-vitoria-green text-white p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-vitoria-black mb-4">
                  {t("our_values")}
                </h3>
                <ul className="text-vitoria-gray space-y-2">
                  <li>{t("value_inclusion")}</li>
                  <li>{t("value_solidarity")}</li>
                  <li>{t("value_diversity")}</li>
                  <li>{t("value_empowerment")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <div className="bg-neutral-surface rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-vitoria-black text-center mb-8">
              {t("our_impact")}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-vitoria-green mb-2">
                    {stat.number}
                  </div>
                  <div className="text-vitoria-gray font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-vitoria-black text-center mb-12">
            {t("our_history")}
          </h2>
          <div className="space-y-8">
            <div className="bg-neutral-surface rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className="bg-vitoria-green text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-bold text-vitoria-black mb-3">
                    {t("history_2021_title")}
                  </h3>
                  <p className="text-vitoria-gray">
                    {t("history_2021_description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-surface rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className="bg-vitoria-green text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                  2022
                </div>
                <div>
                  <h3 className="text-xl font-bold text-vitoria-black mb-3">
                    {t("history_2022_title")}
                  </h3>
                  <p className="text-vitoria-gray">
                    {t("history_2022_description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-surface rounded-lg shadow-lg p-8">
              <div className="flex items-start gap-6">
                <div className="bg-vitoria-green text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                  2025
                </div>
                <div>
                  <h3 className="text-xl font-bold text-vitoria-black mb-3">
                    {t("history_2025_title")}
                  </h3>
                  <p className="text-vitoria-gray">
                    {t("history_2025_description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-vitoria-black text-center mb-12">
            {t("our_team")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-neutral-surface rounded-lg shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-vitoria-gray/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-vitoria-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-vitoria-black mb-2">
                  {member.name}
                </h3>
                <p className="text-vitoria-green font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-vitoria-gray">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-vitoria-black text-center mb-12">
            {t("our_partners")}
          </h2>
          <div className="bg-neutral-surface rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-brand-primary text-white p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-bold">{t("government_euskadi")}</h3>
                </div>
                <p className="text-vitoria-gray text-sm">
                  {t("partner_government_description")}
                </p>
              </div>
              
              <div>
                <div className="bg-vitoria-green text-white p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-bold">{t("civil_organizations")}</h3>
                </div>
                <p className="text-vitoria-gray text-sm">
                  {t("partner_civil_description")}
                </p>
              </div>
              
              <div>
                <div className="bg-brand-accent text-white p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-bold">{t("international_orgs")}</h3>
                </div>
                <p className="text-vitoria-gray text-sm">
                  {t("partner_international_description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-vitoria-gradient text-white rounded-lg shadow-lg p-12">
            <h2 className="text-3xl font-bold mb-6">
              {t("join_us_title")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t("join_us_description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="btn-primary bg-white text-vitoria-green hover:bg-gray-100"
              >
                {t("contact_us")}
              </Link>
              <Link
                to="/servicios"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-vitoria-green transition-colors"
              >
                {t("explore_services")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}