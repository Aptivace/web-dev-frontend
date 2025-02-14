import React from "react";
import NewSiteBtn from "../NewSiteBtn/NewSiteBtn";
import styles from "./Styles.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>WebAI</h2>
      <NewSiteBtn />
    </div>
  );
};

export default SideBar;
