import { User } from "firebase/auth";

export const localStorage = {
  getAuth: () => JSON.parse(window.localStorage.getItem("auth") || "null"),
  setAuth: (authInfo: User) =>
    window.localStorage.setItem("auth", JSON.stringify(authInfo)),
  clearAuth: () => window.localStorage.removeItem("auth"),
};
