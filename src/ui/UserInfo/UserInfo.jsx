import React from "react";
import { FaCircleUser, FaRightFromBracket } from "react-icons/fa6";
import useUserStore from "../../store/userStore";
import styles from "./Styles.module.css";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { userData } = useUserStore();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post("/auth/logout");
      navigate("/login");
    } catch (err) {
      return;
    }
  };

  return (
    <div className={styles.user}>
      <FaCircleUser size={50} />
      <h3>
        {userData.first_name} {userData.last_name}
      </h3>
      <FaRightFromBracket
        size={35}
        cursor="pointer"
        onClick={() => handleLogOut()}
      />
    </div>
  );
};

export default UserInfo;
