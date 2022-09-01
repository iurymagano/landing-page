export const USER_KEY = "session-user";

export const setUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));

export const getUser = () => {
  return localStorage.getItem(USER_KEY);
}