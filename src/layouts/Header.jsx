import classes from "./Header.module.scss";
import { TiThMenu } from "react-icons/ti";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthModal from "../components/AuthModal";
import useAuth from "../hooks/auth";
import {
  CircularProgress,
  Avatar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { IoMdArrowDropdown } from "react-icons/io";

// StyledAvatar component to style the avatar image
const StyledAvatar = styled(Avatar)({
  width: 32,
  height: 32,
  marginRight: 8,
});

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    setIsLoading(false); // Set loading state to false after initial render
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      {isLoading ? ( // Show loading spinner while fetching user info
        <CircularProgress size={24} />
      ) : user ? (
        <div className={classes.userProfile}>
          <Avatar
            alt="User Profile"
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.email
            )}&background=random`}
          />
          <IconButton onClick={handleMenuOpen} size="small" color="inherit">
            {" "}
            {/* Use IconButton for arrow icon */}
            <IoMdArrowDropdown />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
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
