import { Button, TextField } from "@mui/material";
import { padding } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const Companysignup = () => {
  const companyForm = {
    title: "",
    description: "",
    category: "",
    thumbnail: "",
    email: "",
    password: "",
  };

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const companySubmit = (formdata) => {
    console.log(formdata);
    fetch(url + "/company/add", {
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
    <div>
      <div
        className=" card"
        style={{
          width: "22rem",
          borderRadius: "5px",
          boxShadow: "3px 5px #888888",
          margin: "50px auto",
          padding: "1rem",
          fontSize: ".9rem",
          background: "rgb(76 175 80 / 14%)",
        }}
      >
        <Formik initialValues={companyForm} onSubmit={companySubmit}>
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
                  src="https://freepikpsd.com/file/2019/10/user-login-png-transparent-6-Transparent-Images.png"
                ></img>
              </div>
              <h3 style={{ textAlign: "center", padding: "1rem" }}>
                SignUp Here{" "}
              </h3>
              <div className="form-group">
                <TextField
                  size="small"
                  label="Company Name"
                  variant="outlined"
                  color="success"
                  className="w-100"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                />
              </div>
              <div className="form-group mt-3">
                <TextField
                  size="small"
                  label="Enter Email"
                  variant="outlined"
                  color="success"
                  className="w-100"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="form-group mt-3">
                <TextField
                  size="small"
                  style={{ paddingBottom: "20px" }}
                  label="PassWord"
                  variant="outlined"
                  color="success"
                  className="w-100"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>
              <div className="form-group mt-3">
                <TextField
                  size="small"
                  style={{ paddingBottom: "20px" }}
                  label="Category"
                  variant="outlined"
                  color="success"
                  className="w-100"
                  id="category"
                  onChange={handleChange}
                  value={values.category}
                />
              </div>
              <div className="form-group mt-3">
                <TextField
                  size="small"
                  style={{ paddingBottom: "20px" }}
                  label="Company Description"
                  variant="outlined"
                  color="success"
                  className="w-100"
                  multiline
                  rows={4}
                  id="description"
                  onChange={handleChange}
                  value={values.description}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                {" "}
                <span>Already a member?</span>{" "}
                <NavLink
                  style={{ fontSize: "1.1rem" }}
                  to="/company/companylogin"
                >
                  <b>Login</b>
                </NavLink>
              </div>
              <Button
                className="w-100 mt-3"
                variant="contained"
                color="success"
                type="submit"
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

export default Companysignup;
