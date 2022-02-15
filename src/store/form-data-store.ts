import { action, makeObservable, observable } from "mobx";

class FormDataStore {
  userName: string = "";
  password: string = "";

  setPassword(password: string) {
    this.password = password;
  }

  setUserName(name: string) {
    this.userName = name;
  }

  constructor() {
    makeObservable(this, {
      userName: observable,
      password: observable,
      setPassword: action,
      setUserName: action,
    });
  }
}

const formDataStore = new FormDataStore();

export { FormDataStore as IFormDataStore, formDataStore as FormDataStore };
