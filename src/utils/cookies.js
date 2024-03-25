import Cookies from "js-cookie";

export const cookies = {
  set: () => Cookies.set(name, value),
  setJson: () => {
    const parsedValue = JSON.stringify(value);
    return Cookies.set(name, parsedValue);
  },
  get: () => Cookies.get(name),
  getJson: () => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : value;
  },
  remove: () => Cookies.remove(name),
};
