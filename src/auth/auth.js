import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const storedDurationTime = parseInt(localStorage.getItem("expiration"));
  const storedDurationDate = new Date(storedDurationTime * 1000);
  if (isNaN(storedDurationDate.getTime())) {
    return 0;
  }
  const newDate = new Date();
  console.log(storedDurationDate, newDate, storedDurationDate - newDate);
  const duration = storedDurationDate.getTime() - newDate.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  console.log(tokenDuration);
  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const checkAuthLoader = () => {
  const loadToken = getAuthToken();
  if (!loadToken) {
    return redirect("/");
  }
  return loadToken;
};

export const tokenLoader = () => {
  const loadToken = getAuthToken();
  return loadToken;
};
