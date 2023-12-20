// import React, {useRef} from "react";
'use client'
import { Provider } from "react-redux";
import Intro from "./intro";
import Link from "./link";
import Topbar from './navbar'
import Search from "./search";
import Footer from "./component/footer";
 import store from './redux/store'
 
 


// import ayo from "./component/images/ayo.jpg";

export default function Navbar() {
 

  return (
    <div>

      <Topbar />
      <Link />
      <Intro />
      <Provider store ={store}>
      <Search />

      
      </Provider>
      <Footer />

    </div>
  );
}
