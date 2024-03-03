import { User, UserInput } from "domain/user";
import { makeAutoObservable, observable } from "mobx";
import { adminUser } from "testData/testUsers";

class UserState {
  user: User | null = adminUser;

  constructor() {
    makeAutoObservable(this, {
      user: observable,
    });
  }

  login(userInput: UserInput) {
    this.user = adminUser;
    console.log("User logged in.");
  }

  logout() {
    this.user = null;
  }
}

export const userState = new UserState();
