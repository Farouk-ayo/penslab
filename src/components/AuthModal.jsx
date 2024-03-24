import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import AuthModalInputs from "./AuthModalInputs";
import { Box } from "@mui/material";
import classes from "./AuthModal.module.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isSignin}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signinContent, signupContent) => {
    console.log(isSignin);
    return isSignin ? signinContent : signupContent;
  };

  const handleChangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);

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
        inputs.city &&
        inputs.password &&
        inputs.phone
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
            <p className="">{renderContent("Sign In", "Create Account")}</p>
          </div>
          <div className="">
            <h2 className="">
              {renderContent(
                "Log  Into Your Account",
                " Create Your OpenTable Account"
              )}
            </h2>
            <AuthModalInputs
              inputs={inputs}
              handleChangeInput={handleChangeInput}
              isSignin={isSignin}
            />
            <button className="" disabled={disabled}>
              {renderContent("Sign In", "Create Account")}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}