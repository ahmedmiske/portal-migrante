// frontend/app/routes/organizations.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { organizationsService, type Organization } from "../services/organizations.service";
import { useI18n } from "../i18n";

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t } = useI18n();

  useEffect(() => {
    organizationsService
      .list()
      .then(setOrganizations)
      .catch((err) => setError(err.message || "Error al cargar organizaciones"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="h4 m-0">Organizaciones</h1>
        <Link to="/organizations/new" className="btn btn-dark">
          + Nueva organización
        </Link>
      </div>

      {loading ? (
        <div className="text-muted">{t("loading")}</div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : organizations.length ? (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Estado</th>
                <th>Verificada</th>
              </tr>
            </thead>
            <tbody>
              {organizations.map((org) => (
                <tr key={org._id}>
                  <td className="fw-medium">{org.name}</td>
                  <td>{org.type}</td>
                  <td>{org.email || "—"}</td>
                  <td>{org.phone || "—"}</td>
                  <td>{org.status}</td>
                  <td>{org.verified ? "Sí" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-muted">{t("no_data")}</div>
      )}
    </div>
  );
}