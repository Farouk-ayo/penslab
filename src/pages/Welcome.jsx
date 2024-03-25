import { Link } from "react-router-dom";
import classes from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={classes.container}>
      <h1>Account Activated!</h1>
      <p>Your account has been successfully activated.</p>
      <Link to="/" className={classes.loginLink}>
        Proceed to Login
      </Link>
    </div>
  );
};

export default Welcome;
