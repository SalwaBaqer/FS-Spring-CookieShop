import { makeAutoObservable } from "mobx";
import axios from "axios";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        userData
      );
      this.user = response.data;
      console.log("user = > ", this.user);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
