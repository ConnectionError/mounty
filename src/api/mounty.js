import axios from "axios";

const KEY = "4a691dde8e7d520c66ed5cb94f349a80";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: KEY,
  },
});
