import { UserInfo } from "domain/user";
import { makeAutoObservable, observable } from "mobx";

class UserState {
  user: UserInfo | null = null;

  constructor() {
    makeAutoObservable(this, {
      user: observable,
    });
  }

  login(userInfo: UserInfo) {
    this.user = userInfo;
    console.log("User logged in.");
  }

  logout() {
    this.user = null;
  }
}

export const userState = new UserState();
