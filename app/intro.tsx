import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import styles from "./page.module.css";

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.hellodiv}>
        <div className={styles.hellocontent}>
          🙌 Hello Friends <br /> I Am Sofia We Want To Start
          <br />A <span className={styles.spane}> Web Design </span>Course
          Together. <br /> Do You Like It Too 😍 ?
        </div>
        <div>
          <div className={styles.btndiv}>
          
            <div className={styles.startbtndiv}><Button name="Start Course now" /></div>
            <Image alt="arrow-img" width={200} height={100} src='/images/booked.jpg' />
          </div>
        </div>
      </div>

      <div className={styles.bgImage}>
        <Image
          src="/images/image.jpg"
          alt="bgimage"
          className={styles.bgImagee}
          height={600}
          width={500}
        />
      </div>
      
    </div>
  );
};

export default Intro;
