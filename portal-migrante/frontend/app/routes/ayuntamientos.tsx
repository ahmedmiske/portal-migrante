import React, { useEffect, useState } from "react";
import {
  municipalitiesService,
  type Municipality,
} from "../services/municipalities.service";

export default function AyuntamientosPage() {
  const [items, setItems] = useState<Municipality[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMunicipalities() {
      try {
        const data = await municipalitiesService.list();
        setItems(Array.isArray(data) ? data : []);
      } catch (err: any) {
        setError(String(err?.message || err || "Error"));
      } finally {
        setLoading(false);
      }
    }

    loadMunicipalities();
  }, []);

  if (loading) return <div className="container py-4">Cargando...</div>;
  if (error) return <div className="container py-4 text-danger">{error}</div>;

  return (
    <div className="container py-4">
      <h2>Ayuntamientos desde MongoDB</h2>

      {items.map((item) => (
        <div key={item._id} className="border rounded p-3 mb-3">
          <div><strong>Nombre:</strong> {String(item.name || "")}</div>
          <div><strong>Territorio:</strong> {String(item.territory || "")}</div>
          <div><strong>Dirección:</strong> {String(item.address || "")}</div>
          <div><strong>Email:</strong> {String(item.email || "")}</div>
          <div><strong>Teléfono:</strong> {String(item.phone || "")}</div>
          <div><strong>Web:</strong> {String(item.website || "")}</div>
        </div>
      ))}
    </div>
  );
}