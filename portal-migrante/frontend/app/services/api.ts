// frontend/app/services/api.ts
export const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export async function http<T = any>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    let message = text;
    try {
      const data = JSON.parse(text) as { message?: string; error?: string };
      message = data.message || data.error || text;
    } catch {
      message = text;
    }
    throw new Error(message || `Request failed (${res.status})`);
  }

  return res.json().catch(() => ({})) as Promise<T>;
}
