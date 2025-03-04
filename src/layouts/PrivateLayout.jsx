import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "../api/axios";
// import Menu from "../components/Menu";

const PrivateLayout = () => {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       await axios.post("/profile");
  //       setIsAuth(true);
  //     } catch (error) {
  //       setIsAuth(false);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateLayout;
