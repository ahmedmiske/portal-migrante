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
          Consulta los datos principales de contacto de los ayuntamientos del País Vasco.
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar ayuntamiento, municipio o dirección..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-12 col-md-4">
          <select
            className="form-select"
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

      <div className="mb-3 text-secondary">
        {filteredItems.length} ayuntamiento{filteredItems.length !== 1 ? "s" : ""} encontrado
        {filteredItems.length !== 1 ? "s" : ""}
      </div>

      <div className="row g-4">
        {filteredItems.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-light border mb-0" role="alert">
              No se encontraron resultados con los filtros actuales.
            </div>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div key={item._id} className="col-12">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
                    <div>
                      <h2 className="h4 fw-bold mb-1">{item.name || "Ayuntamiento"}</h2>
                      {item.municipio && (
                        <div className="text-secondary">{item.municipio}</div>
                      )}
                    </div>

                    <span className="badge text-bg-success px-3 py-2">
                      {territoryLabel(item.territory)}
                    </span>
                  </div>

                  <div className="row g-3">
                    {item.address && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Dirección
                        </div>
                        <div>{item.address}</div>
                      </div>
                    )}

                    {item.phone && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Teléfono
                        </div>
                        <div>{item.phone}</div>
                      </div>
                    )}

                    {item.email && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Email
                        </div>
                        <div>
                          <a href={`mailto:${item.email}`} className="text-decoration-none">
                            {item.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {item.website && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Web
                        </div>
                        <div>
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none"
                          >
                            {item.website}
                          </a>
                        </div>
                      </div>
                    )}

                    {item.population !== undefined && item.population !== null && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Población
                        </div>
                        <div>{item.population.toLocaleString("es-ES")}</div>
                      </div>
                    )}

                    {item.mayor && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Alcaldía
                        </div>
                        <div>{item.mayor}</div>
                      </div>
                    )}

                    {item.party && (
                      <div className="col-12 col-md-6">
                        <div className="small text-uppercase text-secondary fw-semibold mb-1">
                          Partido
                        </div>
                        <div>{item.party}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}