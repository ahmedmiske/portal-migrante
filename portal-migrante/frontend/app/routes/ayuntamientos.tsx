import React, { useEffect, useMemo, useState } from "react";
import {
  municipalitiesService,
  type Municipality,
} from "../services/municipalities.service";

export default function AyuntamientosPage() {
  const [items, setItems] = useState<Municipality[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [territory, setTerritory] = useState("all");

  useEffect(() => {
    async function loadMunicipalities() {
      try {
        const data = await municipalitiesService.list();
        setItems(Array.isArray(data) ? data : []);
      } catch (err: any) {
        setError(String(err?.message || err || "Error al cargar los ayuntamientos"));
      } finally {
        setLoading(false);
      }
    }

    loadMunicipalities();
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesTerritory =
        territory === "all" ? true : item.territory === territory;

      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        String(item.name || "").toLowerCase().includes(query) ||
        String(item.municipio || "").toLowerCase().includes(query) ||
        String(item.address || "").toLowerCase().includes(query);

      return matchesTerritory && matchesSearch;
    });
  }, [items, search, territory]);

  const territoryLabel = (value?: string) => {
    switch (value) {
      case "alava":
        return "Álava";
      case "bizkaia":
        return "Bizkaia";
      case "gipuzkoa":
        return "Gipuzkoa";
      default:
        return value || "Sin definir";
    }
  };

  const territoryBadgeClass = (value?: string) => {
    switch (value) {
      case "alava":
        return "bg-success-subtle text-success";
      case "bizkaia":
        return "bg-primary-subtle text-primary";
      case "gipuzkoa":
        return "bg-warning-subtle text-warning-emphasis";
      default:
        return "bg-secondary-subtle text-secondary";
    }
  };

  if (loading) {
    return (
      <div className="container py-4">
        <div className="text-secondary">Cargando ayuntamientos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger mb-0" role="alert">
          No se pudieron cargar los ayuntamientos. {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="h3 fw-bold mb-2">Ayuntamientos de Euskadi</h1>
        <p className="text-secondary mb-0">
          Encuentra información básica de contacto de los ayuntamientos del País Vasco.
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-lg-8">
          <input
            type="text"
            className="form-control form-control-lg border-0 shadow-sm"
            placeholder="Buscar ayuntamiento, municipio o dirección..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-12 col-lg-4">
          <select
            className="form-select form-select-lg border-0 shadow-sm"
            value={territory}
            onChange={(e) => setTerritory(e.target.value)}
          >
            <option value="all">Todos los territorios</option>
            <option value="alava">Álava</option>
            <option value="bizkaia">Bizkaia</option>
            <option value="gipuzkoa">Gipuzkoa</option>
          </select>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="text-secondary small">
          {filteredItems.length} resultado{filteredItems.length !== 1 ? "s" : ""}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="alert alert-light border shadow-sm" role="alert">
          No se encontraron ayuntamientos con los filtros actuales.
        </div>
      ) : (
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item._id} className="col-12 col-md-6 col-xl-4">
              <div
                className="card border-0 shadow-sm h-100"
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  className="card-body p-4 d-flex flex-column"
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="pe-2">
                      <h2 className="h5 fw-bold mb-1 text-dark">
                        {item.name || "Ayuntamiento"}
                      </h2>
                      {item.municipio && (
                        <div className="text-secondary small">{item.municipio}</div>
                      )}
                    </div>

                    <span
                      className={`badge rounded-pill px-3 py-2 fw-semibold ${territoryBadgeClass(
                        item.territory
                      )}`}
                    >
                      {territoryLabel(item.territory)}
                    </span>
                  </div>

                  <div className="d-flex flex-column gap-2 small">
                    {item.address && (
                      <div className="d-flex align-items-start gap-2">
                        <span className="text-success">📍</span>
                        <span className="text-dark">{item.address}</span>
                      </div>
                    )}

                    {item.phone && (
                      <div className="d-flex align-items-start gap-2">
                        <span className="text-success">📞</span>
                        <span className="text-dark">{item.phone}</span>
                      </div>
                    )}

                    {item.email && (
                      <div className="d-flex align-items-start gap-2">
                        <span className="text-success">✉️</span>
                        <a
                          href={`mailto:${item.email}`}
                          className="text-decoration-none text-dark"
                        >
                          {item.email}
                        </a>
                      </div>
                    )}

                    {item.website && (
                      <div className="d-flex align-items-start gap-2">
                        <span className="text-success">🌐</span>
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none text-primary"
                        >
                          Ver sitio web
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-top">
                    <div className="row g-2 small">
                      {item.population !== undefined && item.population !== null && (
                        <div className="col-6">
                          <div className="text-secondary">Población</div>
                          <div className="fw-semibold">
                            {item.population.toLocaleString("es-ES")}
                          </div>
                        </div>
                      )}

                      {item.party && (
                        <div className="col-6">
                          <div className="text-secondary">Partido</div>
                          <div className="fw-semibold text-truncate">{item.party}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-success w-100 rounded-pill fw-semibold"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}