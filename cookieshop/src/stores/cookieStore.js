import cookies from "../cookies";
import { makeObservable, observable, action } from "mobx";
class CookieStore {
  cookies = cookies;

  constructor() {
    makeObservable(this, {
      cookies: observable,
      deleteCookie: action,
    });
  }

  deleteCookie = (cookieId) => {
    this.cookies = this.cookies.filter((cookie) => cookie.id != cookieId);
  };
}

const cookieStore = new CookieStore();

export default cookieStore;
