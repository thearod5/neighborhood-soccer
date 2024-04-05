import { User, UserInfo } from "domain/user";

export function createUserEndpoint(user: User): Promise<UserInfo> {
  const userInfoInstance = {
    id: 1,
    username: "thearod5",
    isAdmin: true,
  };
  return new Promise((res) => {
    return userInfoInstance;
  });
}
