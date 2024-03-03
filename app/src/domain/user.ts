export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  isAdmin: boolean;
  bio?: string;
  profileImage?: string;
  email?: string;
  phone?: string;
}

// Utility type to exclude "password" and make the rest of the properties optional
type PartialExclude<T, K extends keyof T> = Omit<Partial<T>, K> & Pick<T, K>;

export type UserInfo = PartialExclude<User, "password">;
