import Prompt from "../ui/Prompt/Prompt";
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
