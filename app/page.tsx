 
"use client";
import { Provider } from "react-redux";
import Intro from "./intro";
import Link from "./link";
import Topbar from "./navbar";
import Search from "./search";
import Footer from "./component/footer";
import store from "./redux/store";
import Line from "./line";
 

export default function Navbar() {
  return (
    <Provider store={store}>
      <div>
        <Topbar />
        <Line />
        <Link />
        <Intro />
        <Search />
        <Footer />
      </div>
    </Provider>
  );
}
