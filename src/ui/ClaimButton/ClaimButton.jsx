import styles from "./Styles.module.css";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import useUserStore from "../../store/userStore.js";

const ClaimButton = () => {
    const [timer, setTimer] = useState(null);
    const [btnText, setBtnText] = useState("Загрузка...");

    const { balanceIncrement } = useUserStore();

    useEffect(() => {
        const fecthTimer = async () => {
            try {
                const res = await axios.get("/rewards/daily/latest");
                const resData = await res.data;
                setTimer(resData.data.remaining_time);
                console.log(resData.data.remaining_time);

            } catch (error) {
                console.log(error);
            }
        };
        fecthTimer();
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const pencil = setTimeout(() => setTimer(timer - 1), 1000);
            let hours = Math.floor(timer / 3600)
            let minutes = Math.floor((timer % 3600) / 60)
            let seconds = timer % 60

            if(hours < 10) hours = "0" + hours
            if(minutes < 10) minutes = "0" + minutes
            if(seconds < 10) seconds = "0" + seconds

            setBtnText(`Осталось: ${hours}:${minutes}:${seconds}`);
            return () => clearTimeout(pencil);
        } else {
            setBtnText("Забрать награду");
        }
    }, [timer])

    const claimReward = async () => {
        if (timer > 0) return;
        try {
            const res = await axios.post("/rewards/daily");
            const resData = await res.data;
            balanceIncrement();
            setTimer(86400);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <button className={styles.timer} onClick={() => claimReward()}>
            {btnText}
        </button>
    );
};

export default ClaimButton;
