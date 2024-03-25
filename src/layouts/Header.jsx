import classes from "./Header.module.scss";
import { TiThMenu } from "react-icons/ti";
import Sidebar from "../components/Sidebar";

import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "../components/AuthModal";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { user, signOut } = useAuthContext();
  console.log(user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
      {user ? (
        <div className={classes.userProfile}>
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.email
            )}&background=random`}
            alt="User Profile"
            className={classes.profileImage}
          />
          <div className={classes.dropdown}>
            <button onClick={signOut}>Logout</button>
          </div>
        </div>
      ) : (
        <div className={classes.contact}>
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      )}
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
