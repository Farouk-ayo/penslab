import classes from "./Header.module.scss";
import penslab from "../assets/penslab.png";
import { LuPhoneCall } from "react-icons/lu";
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className={classes.header}>
      <img className="logo" src={penslab} alt="" />
      <ul>
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
        <LuPhoneCall color="white" className={classes.phone} size={35} />
        <AiOutlineShopping size={30} color="black" />
        <CiSearch size={30} color="black" />
        <button>Get In Touch</button>
      </div>
    </header>
  );
};
export default Header;
