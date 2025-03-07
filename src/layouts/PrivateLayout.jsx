import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "../api/axios";
import second from "../store/userStore";
import useUserStore from "../store/userStore";

const PrivateLayout = () => {
  const { setUserData } = useUserStore();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/profile");
        const resData = await res.data;
        setUserData(resData.data.profile);
        setIsAuth(true);
      } catch (error) {
        console.log(error);
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateLayout;
