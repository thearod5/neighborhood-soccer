export interface User {
  id: string;
  username: string;
  password: string;
  isAdmin: boolean;
  firstName?: string;
  lastName?: string;
  bio?: string;
  profileImage?: string;
  email?: string;
  phone?: string;
}

export type UserCreationPayload = Pick<User, "username" | "email" | "password">;

// Utility type to exclude "password" and make the rest of the properties optional
type PartialExclude<T, K extends keyof T> = Omit<Partial<T>, K> & Pick<T, K>;

export type UserLogin = Pick<User, "username" | "password">;
export type UserInfo = Omit<User, "password">;
