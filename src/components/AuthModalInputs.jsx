import { useState } from "react";
import classes from "./AuthModalInputs.module.scss";
import PasswordToggle from "./PasswordToggle/PasswordToggle";

const AuthModalInputs = ({ inputs, handleChangeInput, isSignin }) => {
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className={classes.inputs}>
      {isSignin ? null : (
        <div className="my-3 justify-between text-sm">
          <input
            type="text"
            className="input border rounded p-2 py-3 w-[49%]"
            placeholder="First Name"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input border rounded p-2 py-3 w-[49%]"
            placeholder="Last Name"
            value={inputs.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
      )}

      <div className="my-3 justify-between text-sm">
        <input
          type="text"
          className="input border rounded p-2 py-3 w-full"
          placeholder="Email"
          value={inputs.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="">
        <div className=" ">
          {["password", "confirm_password"].map((field) => (
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
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className=""
                />
                <PasswordToggle onToggle={() => handlePasswordToggle(field)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AuthModalInputs;
