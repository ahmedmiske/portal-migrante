import { http } from "./api";

export type User = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  createdAt?: string;
};

export const usersService = {
  async list(q?: string) {
    const query = q ? `?q=${encodeURIComponent(q)}` : "";
    return http<User[]>(`/users${query}`);
  },
  async create(data: Omit<User, "_id">) {
    return http<User>("/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
