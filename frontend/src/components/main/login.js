import { Button, TextField } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import { Formik } from "formik";
import Swal from "sweetalert2";

const Login = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const loginForm = {
    username: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);

    // 1. URL
    // 2. request method
    // 3. Data
    // 4. Data format

    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
        res.json().then((data) => {
          // storing value in session
          sessionStorage.setItem("user", JSON.stringify(data));
          if (data.isAdmin) {
            navigate("/admin");
          } else {
            navigate("/user/enrolled");
          }
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Loggedin Failed",
        });
      }
    });
  };

  return (
    <div className="user-login" style={{paddingTop:"40px"}}>
      <div
        className="container card"
        style={{
          width: "22rem",
          borderRadius: "5px",
          boxShadow: "3px 5px #888888",
          margin: "20px auto",
          fontSize: ".9rem",
          padding: "1rem",
        }}
      >
        <Formik initialValues={loginForm} onSubmit={loginSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <img
                  style={{
                    width: "6rem",
                    marginLeft: "110px",
                    borderRadius: "100%",
                    background: "rgb(76 175 80 / 14%)",
                  }}
                  alt=""
                  src="http://cdn.onlinewebfonts.com/svg/img_525162.png"
                ></img>
              </div>
              <h3 style={{ textAlign: "center", padding: "1rem" }}>
                Login Here{" "}
              </h3>
              <div className="form-group">
                {/* <label style={{ paddingBottom: '5px' }} for="exampleInputEmail1">Email address</label> */}

                <TextField
                  size="small"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  label="Enter Email"
                  variant="outlined"
                  color="success"
                  className="w-100"
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small> */}
              </div>
              <div className="form-group mt-3">
                {/* <label style={{ paddingBottom: '5px' }} for="exampleInputPassword1">Password</label> */}
                <TextField
                  size="small"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  label="PassWord"
                  variant="outlined"
                  color="success"
                  className="w-100"
                  type="password"
                />
              </div>
              <div
                className="form-group form-check"
                style={{ padding: "13px", paddingLeft: "23px" }}
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <Button
                type="submit"
                className="w-100"
                variant="contained"
                color="success"
              >
                Login
              </Button>
              <div className="mt-3">
                <span>Forgotten PassWord ? </span>{" "}
                <NavLink style={{ fontSize: "1rem" }} to="/main/userresetpassword">
                  <b>Click Here</b>
                </NavLink>
              </div>
              <div className="mt-3">
                <span>New User ? </span>{" "}
                <NavLink style={{ fontSize: "1rem" }} to="/main/signup">
                  <b>Click Here</b>
                </NavLink>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
