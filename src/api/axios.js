import axios from "axios";

export default axios.create({
  baseURL: "https://buymysite.ru/api",
  withCredentials: true,
});
