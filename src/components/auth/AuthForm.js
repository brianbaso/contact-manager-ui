import React from "react";

const AuthForm = ({
  changeEmail,
  changePassword,
  btnText,
  btnOnclick,
  smallText,
  smallOnclick
}) => {
  return (
    <>
      <div className="title" style={styles.title}>
        Contact Manager
      </div>
      <div className="content" style={styles.leftContent}>
        <form>
          <div id="error"></div>
          <div className="form-group">
            <label style={{ color: "grey", fontSize: "15px" }}>Email</label>
            <input
              style={{ position: "relative", bottom: "7px" }}
              labelhead="Email"
              onChange={changeEmail}
              className="form-control"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="exampleInputEmail1"
              style={{ color: "grey", fontSize: "15px" }}
            >
              Password
            </label>
            <input
              style={{ position: "relative", bottom: "7px" }}
              labelhead="Password"
              onChange={changePassword}
              className="form-control"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button onClick={btnOnclick} style={styles.mainButton}>
              {btnText}
            </button>
          </div>
          <div>
            <a href={smallOnclick} style={styles.redirect}>
              <small>{smallText}</small>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

const styles = {
  title: {
    // Positioning
    position: "relative",
    margin: "auto",
    top: "18%",

    // Display
    width: "100%",
    textAlign: "center",
    fontSize: "35px",
    fontFamily: "Trebuchet MS",

    // Color
    background: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  leftContent: {
    // Positioning
    position: "relative",
    margin: "auto",
    top: "53%",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",

    // Display
    width: "75%",
    height: "70%",

    // Color
    color: "black"
  },
  mainButton: {
    // Positioning
    position: "relative",

    // Display
    borderRadius: "30px",
    display: "block",
    margin: "0px auto",
    width: "70%",
    height: "42px",

    // Color
    border: "1px solid white",
    color: "white",
    background:
      "linear-gradient(227deg, rgba(3,164,166,1) 38%, rgba(178,31,228,1) 76%, rgba(137,43,235,1) 100%)"
  },
  redirect: {
    // Positioning
    position: "relative",
    margin: "auto",

    // Display
    width: "70%",
    display: "block",
    textAlign: "center",

    // Color
    textDecoration: "none",
    color: "grey"
  }
};
export default AuthForm;
