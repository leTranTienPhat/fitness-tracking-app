export const localStorage = {
  getToken: () =>
    JSON.parse(window.localStorage.getItem("accessToken") || "null"),
  setToken: (token: string) =>
    window.localStorage.setItem("accessToken", JSON.stringify(token)),
  clearToken: () => window.localStorage.removeItem("accessToken"),
};
