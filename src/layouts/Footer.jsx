import { useState } from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission or other actions here
    if (email.trim() !== "" && termsChecked) {
      console.log("Form submitted:", email);
    } else {
      console.log(
        "Form not submitted. Please fill out the form and agree to the terms."
      );
    }
  };

  const updateButtonStatus = () => {
    return email.trim() !== "" && termsChecked;
  };

  return (
    <footer className={classes.footer}>
      <section>
        <div className={classes.first}>
          <h1>
            PENS<span>lab</span>
          </h1>

          <div className={classes.form}>
            <h2>Newsletter Signup</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>
                <input
                  type="checkbox"
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                />
                I agree to the terms and conditions
              </label>
              <button type="submit" disabled={!updateButtonStatus()}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className={classes.second}>
          <div>
            <h3>Quality solar panels for home and business</h3>
          </div>
          <div className={classes.details}>
            <div>
              <h2>Socials</h2>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h2>Menu</h2>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2>Say Hello</h2>
              <ul>
                <li>faroukdev@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div>
          <p>PENSlab © 2023. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
