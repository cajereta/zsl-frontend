export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/shorten"
    : "https://zls.pw/api/shorten";
