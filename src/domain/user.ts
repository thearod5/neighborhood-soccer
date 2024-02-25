export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  profileImage?: string;
}

export interface UserInput {
  username: string; // email or username
  password: string;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
}
