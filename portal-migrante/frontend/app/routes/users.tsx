// frontend/app/routes/users.tsx
import { useEffect, useState } from "react";
import { Link, useNavigation, useSearchParams } from "react-router-dom";
import { usersService, type User } from "../services/users.service";
import { useI18n } from "../i18n";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const nav = useNavigation();
  const isLoading = nav.state === "loading";
  const { t } = useI18n();

  useEffect(() => {
    usersService.list(q).then(setUsers).catch(console.error);
  }, [q]);

  return (
    <div className="container py-4">
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-3 mb-3">
        <h1 className="h4 m-0">{t("users_title")}</h1>
        <div className="d-flex align-items-center gap-2">
          <form role="search" method="get" className="d-flex gap-2">
            <input
              name="q"
              defaultValue={q}
              placeholder={t("search")}
              className="form-control"
            />
            <button className="btn btn-outline-secondary" type="submit">
              {t("search")}
            </button>
          </form>
          <Link to="/users/new" className="btn btn-dark">
            + {t("users_new")}
          </Link>
        </div>
      </div>

      <div className="table-responsive">
        {isLoading ? (
          <div className="text-muted">{t("loading")}</div>
        ) : users.length ? (
          <table className="table">
            <thead>
              <tr>
                <th>{t("name")}</th>
                <th>{t("email")}</th>
                <th>{t("phone")}</th>
                <th>{t("city")}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td className="fw-medium">{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone || "—"}</td>
                  <td>{u.city || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-muted">{t("no_data")}</div>
        )}
      </div>
    </div>
  );
}
