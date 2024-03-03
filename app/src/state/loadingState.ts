import { makeAutoObservable } from "mobx";

class LoadingState {
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setActive() {
    this.isLoading = false;
  }
  setInactive() {
    this.isLoading = false;
  }
}

export const loadingState = new LoadingState();
