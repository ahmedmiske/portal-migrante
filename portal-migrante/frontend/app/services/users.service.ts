// frontend/app/services/users.service.ts
import { http } from "./api";

export type UserRole =
  | "community_user"
  | "organization_manager"
  | "admin"
  | "super_admin";

export type AccountType = "individual" | "organization_account";

export type UserStatus = "active" | "inactive" | "pending" | "blocked";

export type OrganizationRef = {
  _id: string;
  name: string;
  type: string;
  slug: string;
  status: string;
  verified: boolean;
};

export type User = {
  _id: string;
  accountType: AccountType;
  role: UserRole;
  fullName: string;
  displayName?: string;
  email: string;
  phone?: string;
  preferredLanguage?: string;
  profileImage?: string;
  organizationId?: string | OrganizationRef | null;
  status: UserStatus;
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateUserInput = {
  accountType?: AccountType;
  role?: UserRole;
  fullName: string;
  displayName?: string;
  email: string;
  phone?: string;
  preferredLanguage?: string;
  profileImage?: string;
  organizationId?: string | null;
  status?: UserStatus;
  isVerified?: boolean;
};

export const usersService = {
  async list(q?: string) {
    const query = q ? `?q=${encodeURIComponent(q)}` : "";
    return http<User[]>(`/users${query}`);
  },

  async create(data: CreateUserInput) {
    return http<User>("/users", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async getById(id: string) {
    return http<User>(`/users/${id}`);
  },

  async update(id: string, data: Partial<CreateUserInput>) {
    return http<User>(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  async remove(id: string) {
    return http<{ message: string }>(`/users/${id}`, {
      method: "DELETE",
    });
  },
};