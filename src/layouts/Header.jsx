import { useState } from "react";
import classes from "./Header.module.scss";
import { TiThMenu } from "react-icons/ti";
import Sidebar from "../components/Sidebar";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage whether the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className={classes.header}>
      <h1>
        PENS<span>lab</span>
      </h1>{" "}
      <ul className={classes.link}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
      <div className={classes.contact}>
        <LuPhoneCall color="white" className={classes.phone} size={35} />
        <AiOutlineShopping size={30} color="black" />
        <CiSearch size={30} color="black" />
        <button>Get In Touch</button>
      </div>
      <TiThMenu
        size={25}
        color="black"
        onClick={toggleSidebar}
        className={classes.menu}
      />
      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
    </header>
  );
};
export default Header;
