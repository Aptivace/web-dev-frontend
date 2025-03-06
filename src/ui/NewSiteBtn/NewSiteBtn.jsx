import React from "react";
import styles from "./Styles.module.css";
import { useState } from "react";
import NewSiteModal from "../NewSiteModal/NewSiteModal";
import { AnimatePresence } from "framer-motion";

const NewSiteBtn = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <button
        className={styles.new_site_btn}
        onClick={() => setIsClicked(true)}
      >
        Новый сайт
      </button>
      <AnimatePresence>
        {isClicked && <NewSiteModal key="modal" setIsClicked={setIsClicked} />}
      </AnimatePresence>
    </>
  );
};

export default NewSiteBtn;
