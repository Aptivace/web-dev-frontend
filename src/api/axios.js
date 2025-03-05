import axios from "axios";

export default axios.create({
  baseURL: "https://webai.buymysite.ru/api",
  withCredentials: true,
});
