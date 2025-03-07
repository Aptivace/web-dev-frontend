import React from "react";
import { FaCircleUser, FaRightFromBracket } from "react-icons/fa6";
import useUserStore from "../../store/userStore";
import styles from "./Styles.module.css";

const UserInfo = ({ firstName, lastName }) => {
  const { userData } = useUserStore();

  return (
    <div className={styles.user}>
      <FaCircleUser size={50} />
      <h3>
        {userData.first_name} {userData.last_name}
      </h3>
      <FaRightFromBracket size={35} cursor="pointer" />
    </div>
  );
};

export default UserInfo;
