export const userAccessToken = () => {
  const accessToken =
    localStorage.getItem("aksesToken") !== "undefined"
      ? JSON.parse(localStorage.getItem("aksesToken"))
      : localStorage.clear();

  return accessToken;
};
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("pengguna") !== "undefined"
      ? JSON.parse(localStorage.getItem("pengguna"))
      : localStorage.clear();

  return userInfo;
};
