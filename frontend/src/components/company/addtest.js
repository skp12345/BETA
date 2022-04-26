import { Button, TextField } from "@mui/material";
import { shadows } from "@mui/system";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const Addtest = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("company"))
  );

  const [thumbnail, setThumbnail] = useState("");

  const betaForm = {
    title: "",
    type: "",
    description: "",
    eligibility: "",
    users: [],
    forms: [],
    thumbnail: "",
    link: "",
    endDate: "",
    company: currentUser._id,
  };

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const betaSubmit = (formdata) => {
    formdata.thumbnail = thumbnail;
    console.log(formdata);
    fetch(url + "/beta/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Added Test Successfully",
      });
      navigate("/company/managetest");
    });
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("file", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status);
      setThumbnail(file.name);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-md"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "https://c8.alamy.com/comp/2H8NAFW/the-beta-test-2021-directed-by-jim-cummings-and-pj-mccabe-credit-vanishing-angle-album-2H8NAFW.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "20rem",
            }}
          >
            <div className="signup-bg"></div>
          </div>
          <div
            className="col-md"
            style={{ background: "rgb(76 175 80 / 14%)" }}
          >
            <div className="my-card-body">
              <Formik initialValues={betaForm} onSubmit={betaSubmit}>
                {({ values, handleSubmit, handleChange }) => (
                  <form onSubmit={handleSubmit}>
                    <h2
                      style={{
                        textAlign: "center",
                        color: "blue",
                        padding: "1rem",
                        textShadow: "2px 1px #ff0000",
                      }}
                    >
                      Add Test Here{" "}
                    </h2>
                    <div className="form-group">
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputEmail1"
                      >
                        Title
                      </label>
                      <TextField
                        id="title"
                        value={values.title}
                        onChange={handleChange}
                        label="Enter Tittle "
                        variant="outlined"
                        color="success"
                        className="w-100"
                      />
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputEmail1"
                      >
                        Description
                      </label>
                      <TextField
                        id="description"
                        value={values.description}
                        onChange={handleChange}
                        label="Write Decsription"
                        variant="outlined"
                        color="success"
                        className="w-100"
                        multiline
                        rows={4}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputPassword1"
                      >
                        Eligiblity
                      </label>
                      <TextField
                        style={{ paddingBottom: "20px" }}
                        id="eligibility"
                        value={values.eligibility}
                        onChange={handleChange}
                        label="Enter Qualification"
                        variant="outlined"
                        color="success"
                        className="w-100"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputPassword1"
                      >
                        Last Date
                      </label>
                      <TextField
                        style={{ paddingBottom: "20px" }}
                        id="endDate"
                        value={values.endDate}
                        onChange={handleChange}
                        type="date"
                        label="Enter Last Date"
                        variant="outlined"
                        color="success"
                        className="w-100"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputPassword1"
                      >
                        Link
                      </label>
                      <TextField
                        style={{ paddingBottom: "20px" }}
                        id="link"
                        value={values.link}
                        onChange={handleChange}
                        label="Paste link"
                        variant="outlined"
                        color="success"
                        className="w-100"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputPassword1"
                      >
                        Type
                      </label>
                      <TextField
                        style={{ paddingBottom: "20px" }}
                        id="type"
                        value={values.type}
                        onChange={handleChange}
                        label="Enter Test Type"
                        variant="outlined"
                        color="success"
                        className="w-100"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{ paddingBottom: "10px" }}
                        for="exampleInputPassword1"
                      >
                        Upload Picture
                      </label>
                      <input
                        className="form-control"
                        onChange={uploadThumbnail}
                        type="file"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-100 mt-3"
                      variant="contained"
                      color="success"
                    >
                      Add Test Now
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtest;
