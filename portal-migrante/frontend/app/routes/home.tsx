// frontend/app/routes/home.tsx
import { useI18n } from "../i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <section className="container py-4">
      <h2 className="h4">{t("welcome_title")}</h2>
      <p className="text-muted mt-2">{t("welcome_body")}</p>
    </section>
  );
}
