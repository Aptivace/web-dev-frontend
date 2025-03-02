import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Prompt from "../ui/Prompt/Prompt";
import LoginForm from "../ui/LoginForm/LoginForm";
import SideBar from "../ui/SideBar/SideBar";
import MessageContainer from "../components/MessageContainer/MessageContainer";
import styles from "./Styles.module.scss";

const Home = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      {isAuth ? (
        <div className={styles.container}>
          <SideBar />
          <MessageContainer />
          <Prompt />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Home;
