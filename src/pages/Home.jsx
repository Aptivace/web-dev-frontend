import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Prompt from "../ui/Prompt/Prompt";
import LoginForm from "../ui/LoginForm/LoginForm";
import SideBar from "../ui/SideBar/SideBar";
import MessageContainer from "../components/MessageContainer/MessageContainer";
import styles from "./Styles.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <MessageContainer />
      <Prompt />
    </div>
  );
};

export default Home;
