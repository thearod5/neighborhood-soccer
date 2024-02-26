export interface User {
  id: string;
  username: string;
  bio: string;
  email: string;
  isAdmin: boolean;
  profileImage?: string;
}

export interface UserInput {
  username: string; // email or username
  password: string;
}
