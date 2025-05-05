import React from "react";
import NewSiteBtn from "../NewSiteBtn/NewSiteBtn";
import styles from "./Styles.module.css";
import ChatsArray from "../../components/ChatsArray/ChatsArray";
import UserInfo from "../UserInfo/UserInfo";
import Balance from "../Balance/Balance.jsx";
import ClaimButton from "../ClaimButton/ClaimButton.jsx";

const SideBar = ({ firstName, lastName }) => {
  return (
    <div className={styles.sidebar}>
      <h2>WebAI</h2>
        <Balance/>
      <NewSiteBtn />
        <ClaimButton />
      <ChatsArray />
      <UserInfo />
    </div>
  );
};

export default SideBar;
