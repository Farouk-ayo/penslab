import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import classes from "./PasswordToggle.module.scss";

interface PasswordToggleProps {
  onToggle: (isVisible: boolean) => void;
}

const PasswordToggle = ({ onToggle }: PasswordToggleProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    onToggle(!isVisible);
  };

  return (
    <div className={classes.passwordToggle}>
      {isVisible ? (
        <IoMdEyeOff color="black" size={30} onClick={handleToggle} />
      ) : (
        <IoMdEye color="black" size={30} onClick={handleToggle} />
      )}
    </div>
  );
};
export default PasswordToggle;
