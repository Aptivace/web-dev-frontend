import useUserStore from "../../store/userStore";
import styles from "./Styles.module.css";

const Balance = () => {
    const { userData } = useUserStore();

    return (
        <div>
            Баланс: {userData.balance}
        </div>
    );
};

export default Balance;
