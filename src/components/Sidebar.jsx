import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const Sidebar = (closeSidebar) => {
  // State to manage whether the sidebar is open or not
  const [isOpen, setIsOpen] = useState(true);

  // Function to close the sidebar when clicking the backdrop
  const handleCloseSidebar = () => {
    setIsOpen(false);
    closeSidebar();
  };

  return (
    <div className={`${classes.sidebar} ${isOpen ? classes.open : ""}`}>
      <div className={classes.backdrop} onClick={handleCloseSidebar}></div>
      <div className={classes.sideContent}>
        <RxCross2
          size={25}
          onClick={handleCloseSidebar}
          className={classes.cross}
        />

        <ul className={classes.links}>
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
      </div>
    </div>
  );
};

export default Sidebar;
