import { useState } from "react";
import classes from "./AuthModalInputs.module.scss";
import PasswordToggle from "./PasswordToggle/PasswordToggle";

const AuthModalInputs = ({ inputs, handleChangeInput, isSignin }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password: false,
    password_confirmation: false,
  });

  const handlePasswordToggle = (field) => {
    setIsPasswordVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className={classes.inputs}>
      {!isSignin && (
        <div className="my-3 justify-between text-sm">
          <input
            type="text"
            className=""
            placeholder="First Name"
            name="firstName"
            value={inputs.firstName}
            required
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className=""
            placeholder="Last Name"
            value={inputs.lastName}
            required
            name="lastName"
            onChange={handleChangeInput}
          />
        </div>
      )}

      <div className="">
        <input
          type="email"
          className=""
          placeholder="Email"
          value={inputs.email}
          required
          name="email"
          onChange={handleChangeInput}
        />
      </div>
      <div className="">
        <div className=" ">
          {isSignin ? (
            <div className="mb-4">
              <div className={classes.passwordInputs}>
                <input
                  type={isPasswordVisible.password ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={inputs.password}
                  onChange={handleChangeInput}
                  required
                  className=""
                />
                <PasswordToggle
                  onToggle={() => handlePasswordToggle("password")}
                />
              </div>
            </div>
          ) : (
            ["password", "confirm_password"].map((field) => (
              <div key={field} className="mb-4">
                <div className={classes.passwordInputs}>
                  <input
                    type={isPasswordVisible[field] ? "text" : "password"}
                    id={field}
                    name={field}
                    placeholder={
                      field === "password"
                        ? "Enter your password"
                        : "Confirm your password"
                    }
                    value={inputs[field]}
                    onChange={handleChangeInput}
                    required
                    className=""
                  />
                  <PasswordToggle
                    onToggle={() => handlePasswordToggle(field)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthModalInputs;
