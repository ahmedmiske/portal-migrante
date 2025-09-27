// frontend/app/routes/users.new.tsx
import { Form, Link, useNavigation, useActionData } from "react-router-dom";
import { usersService } from "../services/users.service";
import { useI18n } from "../i18n";

type ActionData = { error?: string; ok?: boolean };

export default function NewUserPage() {
  const action = useActionData() as ActionData | undefined;
  const nav = useNavigation();
  const isSubmitting = nav.state === "submitting";
  const { t } = useI18n();

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h4 m-0">{t("users_new")}</h1>
        <Link to="/users" className="text-decoration-none">{t("back")}</Link>
      </div>

      {action?.error && (
        <div className="alert alert-danger">{action.error}</div>
      )}

      <Form
        method="post"
        className="row g-3"
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget as HTMLFormElement);
          const payload = {
            name: String(fd.get("name") || "").trim(),
            email: String(fd.get("email") || "").trim(),
            phone: String(fd.get("phone") || "").trim(),
            city: String(fd.get("city") || "").trim(),
          };
          try {
            await usersService.create(payload);
            location.href = "/users";
          } catch (err: any) {
            alert(err?.message || "Error");
          }
        }}
      >
        <div className="col-12 col-md-6">
          <label className="form-label">{t("name")}</label>
          <input name="name" className="form-control" required />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">{t("email")}</label>
          <input name="email" type="email" className="form-control" required />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">{t("phone")}</label>
          <input name="phone" className="form-control" />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">{t("city")}</label>
          <input name="city" className="form-control" />
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
            {isSubmitting ? t("loading") : t("save")}
          </button>
        </div>
      </Form>
    </div>
  );
}
