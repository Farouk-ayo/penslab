import classes from "./Header.module.scss";
import { TiThMenu } from "react-icons/ti";
import Sidebar from "../components/Sidebar";

import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../components/AuthModal";

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
        <AuthModal isSignin={true} />
        <AuthModal isSignin={false} />
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
