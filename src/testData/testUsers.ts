import { User } from "domain/user";

export const adminUser: User = {
  id: "uuid1",
  isAdmin: true,
  bio: "My name is alberto and I like to play soccer",
  username: "thearod5",
  email: "vhsalbertorodriguez@gmail.com",
  profileImage:
    "https://media.licdn.com/dms/image/D5603AQEyXOMfuUFWtA/profile-displayphoto-shrink_200_200/0/1696635157271?e=1714003200&v=beta&t=oRXZYr6mFRmxi5iFNKR2_MnAsn_p0cJvabgO8aGmYV0",
};

export const user: User = {
  id: "uuid2",
  isAdmin: false,
  username: "thearod5",
  bio: "My name is alberto and I like to play soccer",
  email: "vhsalbertorodriguez@gmail.com",
  profileImage:
    "https://media.licdn.com/dms/image/D5603AQEyXOMfuUFWtA/profile-displayphoto-shrink_200_200/0/1696635157271?e=1714003200&v=beta&t=oRXZYr6mFRmxi5iFNKR2_MnAsn_p0cJvabgO8aGmYV0",
};
