import { Button, TextField } from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

const SignUp = () => {
  const userForm = {
    username: "",
    password: "",
    email: "",
  };

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const userSubmit = (formdata) => {
    console.log(formdata);
    console.log(formdata);
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Registered Successfully",
      });
      navigate("/main/login");
    });
  };

  return (
    <div className="user-signup"style={{paddingTop:"10px"}} >
      <div
        className=" card"
        style={{
          width: "22rem",
          borderRadius: "5px",
          boxShadow: "3px 5px #888888",
          margin: "50px auto",
          padding: "1rem",
          fontSize: ".9rem",
          // background: "rgb(76 175 80 / 14%)",
        }}
      >
        <Formik initialValues={userForm} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <img
                  style={{
                    width: "6rem",
                    marginLeft: "110px",
                    borderRadius: "100%",
                    background: "rgb(76 175 80 / 14%)",
                  }}
                  src="http://cdn.onlinewebfonts.com/svg/img_525162.png"
                ></img>
              </div>
              <h3 style={{ textAlign: "center", padding: "1rem" }}>
                SignUp Here{" "}
              </h3>
              <div className="form-group">
                <TextField
                  id="username"
                  onChange={handleChange}
                  value={values.username}
                  size="small"
                  label="User Name"
                  variant="outlined"
                  color="success"
                  className="w-100"
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small> */}
              </div>
              <div className="form-group mt-3">
                <TextField
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  size="small"
                  label="Enter Email"
                  variant="outlined"
                  color="success"
                  className="w-100"
                />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small> */}
              </div>
              <div className="form-group mt-3">
                {/* <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Password</label> */}
                <TextField
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  size="small"
                  style={{ paddingBottom: "20px" }}
                  label="PassWord"
                  variant="outlined"
                  color="success"
                  type="password"
                  className="w-100"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                {" "}
                <span>Already a member?</span>{" "}
                <NavLink style={{ fontSize: "1.1rem" }} to="/main/login">
                  <b>Login</b>
                </NavLink>
              </div>
              <Button
                type="submit"
                className="w-100 mt-3"
                variant="contained"
                color="success"
              >
                SignUp
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
