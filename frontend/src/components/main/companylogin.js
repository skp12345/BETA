import { Facebook, Google } from "@mui/icons-material";
import { Button, Card, CardContent, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const Companylogin = () => {
  const url = app_config.backend_url;
  const navigate = useNavigate();

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (values) => {
    console.log(values);

    // 1. URL
    // 2. request method
    // 3. Data
    // 4. Data format

    fetch(url + "/company/authenticate", {
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
          sessionStorage.setItem("company", JSON.stringify(data));

          navigate("/company/addtest");
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
    <div
      className="col-md-5 mx-auto company-login "
      style={{
        marginTop: "2rem",
        boxShadow: "2px 2px 1px 3px rgba(0, 0, 0, 0.3)",
      width:"28rem",
      background:'#CCCCCC',
      borderRadius: "5px",
      }}
    >
      <Card>
        <CardContent>
        <div>
                <img
                  style={{
                    width: "6rem",
                    marginLeft: "10rem",
                    borderRadius: "100%",
                    background: "rgb(76 175 80 / 14%)",
                  }}
                  alt=""
                  src="http://cdn.onlinewebfonts.com/svg/img_525162.png"
                ></img>
              </div>
          <h3  className="text-center" style={{margin:"20px"}}>Login Here</h3>
          <div className="row mt-3 mb-1">
            {/* <div className="col-md-6 mt-1">
              <Button
                variant="contained"
                color="error"
                className="w-100"
                startIcon={<Google />}
              >
                Google
              </Button>
            </div> */}
            {/* <div className="col-md-6 mt-1">
              <Button
                variant="contained"
                className="w-100"
                startIcon={<Facebook />}
              >
                Facebook
              </Button>
            </div> */}
          </div>
          {/* <h4 className="text-center mt-4">OR</h4> */}

          <Formik initialValues={loginForm} onSubmit={loginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  size="small"
                  label="Enter Email"
                  variant="outlined"
                  color="success"
                  className="w-100 mt-3"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />

                <TextField
                  size="small"
                  label="PassWord"
                  variant="outlined"
                  color="success"
                  className="w-100 mt-3"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  className="w-100 mt-4"
                  variant="contained"
                >
                  SUBMIT
                </Button>
                <div className="row">
                  <div className="col-md-6">
                    <NavLink to="/main/companysignup">Not Registered Yet</NavLink>
                  </div>
                  <div className="col-md-6">
                    <NavLink to="/main/resetpassword" className="float-end">
                      Forgot Password
                    </NavLink>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default Companylogin;
