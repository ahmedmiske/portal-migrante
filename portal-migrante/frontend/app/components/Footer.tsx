// frontend/app/components/Footer.tsx
import { useI18n } from "../i18n";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-12 border-top">
      <div className="container py-4 row g-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="fw-semibold mb-2">{t("app_title")}</div>
          <p className="small text-muted m-0">{t("footer_madeby")}</p>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="fw-semibold mb-2">{t("footer_about")}</div>
          <ul className="list-unstyled small m-0">
            <li><Link to="/sobre" className="text-decoration-none">{t("footer_about")}</Link></li>
            <li><Link to="/contacto" className="text-decoration-none">{t("footer_contact")}</Link></li>
            <li><Link to="/privacy" className="text-decoration-none">{t("footer_privacy")}</Link></li>
            <li><Link to="/terms" className="text-decoration-none">{t("footer_terms")}</Link></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="fw-semibold mb-2">{t("quick_links")}</div>
          <ul className="list-unstyled small m-0">
            <li><Link to="/servicios" className="text-decoration-none">{t("cta_services")}</Link></li>
            <li><Link to="/anuncios" className="text-decoration-none">{t("cta_ads")}</Link></li>
            <li><Link to="/observatorio" className="text-decoration-none">{t("nav_observatory")}</Link></li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <div className="fw-semibold mb-2">{t("footer_newsletter")}</div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("✅"); }}
            className="d-flex gap-2"
          >
            <input
              type="email"
              placeholder={t("footer_email_placeholder")}
              className="form-control"
              required
            />
            <button className="btn btn-dark">
              {t("footer_subscribe")}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-muted small pb-3">
        © {new Date().getFullYear()} — {t("footer_rights")}
      </div>
    </footer>
  );
}
