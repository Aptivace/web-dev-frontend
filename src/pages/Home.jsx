import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Prompt from "../ui/Prompt/Prompt";
import LoginForm from "../ui/LoginForm/LoginForm";
import SideBar from "../ui/SideBar/SideBar";

const Home = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      {isAuth ? (
        <>
          <SideBar />
          <Prompt />
        </>
      ) : (
        <Navigate to="/login" />
      )}
      ;
    </>
  );
};

export default Home;
