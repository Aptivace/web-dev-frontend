import React from "react";
import NewSiteBtn from "../NewSiteBtn/NewSiteBtn";
import styles from "./Styles.module.scss";
import ChatsArray from "../../components/ChatsArray/ChatsArray";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>WebAI</h2>
      <NewSiteBtn />
      <ChatsArray />
    </div>
  );
};

export default SideBar;
