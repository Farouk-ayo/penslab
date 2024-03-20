import { useState } from "react";
import classes from "./Sidebar.module.scss";
import { RxCross2 } from "react-icons/rx";

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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div className={classes.contact}>
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
