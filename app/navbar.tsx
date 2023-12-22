import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "./input";

const Topbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.academydiv}>
        <img alt="group-logo" width={30} height={30} src={"/Grouplogo.png"} />

        <h2>ACADEMY</h2>
        <div>
          <Link href="">Categories</Link>
          <Link href="">Teach</Link>
          <Link href="">Contact Us</Link>
          <Link href="">About Us</Link>
        </div>
      </div>

      <div>
        <div >
          <Input />
        </div>

        <div>
          <div>
            <img src="/profile.jpg" alt="/profile.jpg" width={80} height={60} />
            <div>
              <h5>Ayodeji</h5>
              <span>Developer</span>
            </div>
          </div>
          <div>😀</div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Topbar;
