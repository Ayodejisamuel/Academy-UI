// import React, {useRef} from "react";

import styles from "./page.module.css";
import Intro from "./intro";
import Link from "./link";
import Topbar from './navbar'
import Search from "./search";
import Footer from "./component/footer";
 


// import ayo from "./component/images/ayo.jpg";

export default function Navbar() {
 

  return (
    <div>
      <Topbar />
      <Link />
      <Intro />
      <Search />
      <Footer />
    </div>
  );
}
