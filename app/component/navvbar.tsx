import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

const TopNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navcontainer}>
        <div className={styles.academydiv}>
          <img alt="group-logo" width={30} height={30} src={"/Grouplogo.png"} />

          <h2>ACADEMY</h2>
        </div>
        <div className={styles.categoriess}>
          <Link href="">Categories</Link>
          <Link href="">Teach</Link>
          <Link href="">Contact Us</Link>
          <Link href="">About Us</Link>
        </div>
      </div>
      <div>
        <div className={styles.inputdiv}>
          <input
            className={styles.searchinput}
            placeholder="search anything..."
          ></input>
        </div>
        <div className={styles.profilee}></div>
      </div>
    </div>
  );
};

export default TopNavbar;
