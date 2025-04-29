import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Помечаем запрос как повторный
      try {
        const res = await axios.post(
          "http://localhost:8000/api/auth/refresh",
          null,
          { withCredentials: true }
        );
        // Повторяем оригинальный запрос с новым токеном
        return api(originalRequest);
      } catch (refreshError) {
        // Если обновление токена не удалось, перенаправляем на страницу входа
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
