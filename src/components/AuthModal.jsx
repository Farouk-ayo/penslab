import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import AuthModalInputs from "./AuthModalInputs";
import { Box } from "@mui/material";
import classes from "./AuthModal.module.scss";
import useAuth from "../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function AuthModal({ isSignin }) {
  const { signIn, signUp } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const renderContent = (signinContent, signupContent) => {
    console.log(isSignin);
    return isSignin ? signinContent : signupContent;
  };

  const handleChangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  console.log(inputs);
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    console.log(inputs);
    if (isSignin) {
      signIn({ email: inputs.email, password: inputs.password });
    } else {
      signUp({
        email: inputs.email,
        password: inputs.password,
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });
    }
  };

  useEffect(() => {
    if (isSignin) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.password &&
        inputs.confirm_password
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          `${classes.contact_one}`,
          `${classes.contact_two}`
        )} `}
      >
        {renderContent("Log in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="">
            <h1 className={classes.penslab}>
              PENS<span>lab</span>
            </h1>
            <p className={classes.pens}>
              {renderContent("Welcome Back", "Create an Account")}
            </p>
          </div>
          <div className={classes.formData}>
            <h2 className="">
              {renderContent(
                "Log  Into Your Account",
                " Create Your Penslab Account"
              )}
            </h2>
            <AuthModalInputs
              inputs={inputs}
              handleChangeInput={handleChangeInput}
              isSignin={isSignin}
            />
            <button disabled={disabled} onClick={handleClick}>
              {renderContent("Log In", "Create Account")}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
