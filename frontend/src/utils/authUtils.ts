import axios from 'axios';

// WARN !!!
// Please do not store the token in the local storage when you build enterprise applications.
// It is not safe and could be affected by XSS attacks.
const authTokenKey = 'water-jug-solution-identifier';

export const getLocalStorageToken = (): string | null =>
  localStorage.getItem(authTokenKey);

export const setLocalStorageToken = (token: string): void =>
  localStorage.setItem(authTokenKey, token);

export const removeLocalStorageToken = (): void =>
  localStorage.removeItem(authTokenKey);

export const setAxiosAuthToken = (token: string): void => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};
