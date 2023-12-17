import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Input from "./input";

const Topbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.academy}>
          <div className={styles.categories}>
            <Image
              alt="group-logo"
              width={30}
              height={30}
              src={"/Grouplogo.png"}
            />
            
            <h2 className={styles.academyheader}>ACADEMY</h2>
            <div className={styles.categoriesdivv}>
              <Link href="">Categories</Link>
              <Link href="">Teach</Link>
              <Link href="">Contact Us</Link>
              <Link href="">About Us</Link>
            </div>
          </div>
        </div>

        <div className={styles.inputprofilediv}>
          <div className={styles.inputwrapper}>
            <Input />
          </div>

          <div className={styles.profile}>
            <div className={styles.imgdiv}>
              <Image
                className={styles.img}
                src="/profile.jpg"
                alt="profile-img"
                width={80}
                height={60}
              />
              <div className={styles.imgdesc}>
                <h5 className={styles.name}>Ayodeji</h5>
                <span className={styles.role}>Developer</span>
              </div>
            </div>
            <div className={styles.notification}>😀</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Topbar;
