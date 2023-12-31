'use client'
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
      <div className={styles.inputcontainer}>
        <div className={styles.inputdiv}>
          <input
            className={styles.searchinput}
            placeholder="search anything..."
          ></input>
        </div>
        <div className={styles.profilee}>
        <div className={styles.imgcontainer}>
            <img src="/profile.jpg" alt="/profile.jpg" width={80} height={60} />
            <div className={styles.imgdetails}>
              <h5>Behzas Pashei</h5>
              <span>Ux & Ui Designer </span>
            </div>
          </div>
          <div className={styles.notify}><img src="/v6-icon (free).png" alt="notification-icon"></img></div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
