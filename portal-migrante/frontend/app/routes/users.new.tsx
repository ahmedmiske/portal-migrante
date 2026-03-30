// frontend/app/routes/users.new.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersService, type AccountType, type UserRole, type UserStatus } from "../services/users.service";
import { organizationsService, type Organization } from "../services/organizations.service";
import { useI18n } from "../i18n";

export default function NewUserPage() {
  const navigate = useNavigate();
  const { t } = useI18n();

  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loadingOrgs, setLoadingOrgs] = useState(true);

  const [formData, setFormData] = useState({
    accountType: "individual" as AccountType,
    role: "community_user" as UserRole,
    fullName: "",
    displayName: "",
    email: "",
    phone: "",
    preferredLanguage: "es",
    profileImage: "",
    organizationId: "",
    status: "active" as UserStatus,
    isVerified: false,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    organizationsService
      .list()
      .then(setOrganizations)
      .catch((err) => setError(err.message || "Error al cargar organizaciones"))
      .finally(() => setLoadingOrgs(false));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      await usersService.create({
        accountType: formData.accountType,
        role: formData.role,
        fullName: formData.fullName,
        displayName: formData.displayName || undefined,
        email: formData.email,
        phone: formData.phone || undefined,
        preferredLanguage: formData.preferredLanguage || undefined,
        profileImage: formData.profileImage || undefined,
        organizationId:
          formData.accountType === "organization_account" && formData.organizationId
            ? formData.organizationId
            : null,
        status: formData.status,
        isVerified: formData.isVerified,
      });

      setSuccess("Usuario creado correctamente.");

      setTimeout(() => {
        navigate("/users");
      }, 700);
    } catch (err: any) {
      setError(err.message || "Error al crear el usuario");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="h4 m-0">Nuevo usuario</h1>
        <p className="text-muted mb-0">Crear una cuenta individual o una cuenta vinculada a una organización.</p>
      </div>

      <form onSubmit={handleSubmit} className="card shadow-sm border-0">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Tipo de cuenta</label>
              <select
                name="accountType"
                className="form-select"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="individual">individual</option>
                <option value="organization_account">organization_account</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Rol</label>
              <select
                name="role"
                className="form-select"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="community_user">community_user</option>
                <option value="organization_manager">organization_manager</option>
                <option value="admin">admin</option>
                <option value="super_admin">super_admin</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Nombre completo</label>
              <input
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Nombre para mostrar</label>
              <input
                name="displayName"
                className="form-control"
                value={formData.displayName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Teléfono</label>
              <input
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Idioma preferido</label>
              <input
                name="preferredLanguage"
                className="form-control"
                value={formData.preferredLanguage}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Estado</label>
              <select
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
                <option value="pending">pending</option>
                <option value="blocked">blocked</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Imagen de perfil (URL)</label>
              <input
                name="profileImage"
                className="form-control"
                value={formData.profileImage}
                onChange={handleChange}
              />
            </div>

            {formData.accountType === "organization_account" && (
              <div className="col-12">
                <label className="form-label">Organización</label>
                <select
                  name="organizationId"
                  className="form-select"
                  value={formData.organizationId}
                  onChange={handleChange}
                  required={formData.accountType === "organization_account"}
                  disabled={loadingOrgs}
                >
                  <option value="">Selecciona una organización</option>
                  {organizations.map((org) => (
                    <option key={org._id} value={org._id}>
                      {org.name} ({org.type})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="col-12">
              <div className="form-check">
                <input
                  id="isVerified"
                  type="checkbox"
                  name="isVerified"
                  className="form-check-input"
                  checked={formData.isVerified}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isVerified">
                  Verificado
                </label>
              </div>
            </div>
          </div>

          {error && <div className="alert alert-danger mt-4 mb-0">{error}</div>}
          {success && <div className="alert alert-success mt-4 mb-0">{success}</div>}
        </div>

        <div className="card-footer bg-white d-flex gap-2 justify-content-end">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate("/users")}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-dark" disabled={saving}>
            {saving ? "Guardando..." : "Crear usuario"}
          </button>
        </div>
      </form>
    </div>
  );
}