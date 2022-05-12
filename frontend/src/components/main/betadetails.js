import { Button } from "@mui/material";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

function BetaDetails() {
  const { id } = useParams();
  const [betaData, setBetaData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/beta/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBetaData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const enrollTest = () => {
    if (currentUser) {
      fetch(url + "/beta/pushupdate/" + betaData._id, {
        method: "PUT",
        body: JSON.stringify({ users: currentUser._id }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Enrolled in Test!!",
          });
          fetchData();
        }
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Login First",
      });
    }
  };

  const checkEnrolled = () => {
    if (currentUser) {
      return betaData.users.includes(currentUser._id);
    }
    return false;
  };

  const showBetaDetails = () => {
    if (!loading) {
      return (
        <div
          className="container card "
          style={{
            width: "150vh",
            borderRadius: "5px",
            boxShadow: "3px 5px #888888",
            margin: "20px auto",
            padding: "3rem",
           
            // background: "rgb(76 175 80 / 14%)",
          }}
        >
          <h2
          style={{
            textAlign: "center",
            color: "blue",
            padding: "1rem",
            textShadow: "2px 1px #ff0000",
          }}
          >
            Beta Test Details
            </h2>
          <div class="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <img
              
                className="img-fluid"
                src={url + "/uploads/" + betaData.thumbnail}
                alt={betaData.title}
              ></img>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-8">
              <h4>{betaData.title}</h4>
              <h5>{betaData.type}</h5>
            </div>
          </div>
          <div className="row mt-3">
            <h3>Description</h3>
            <p>{betaData.description}</p>
          </div>
          <Button
            disabled={checkEnrolled()}
            type="button"
            color="success"
            onClick={enrollTest}
          >
            {checkEnrolled() ? "Already Enrolled" : "Enroll Now"}
          </Button>
        </div>
      );
    }
  };

  return <div>{showBetaDetails()}</div>;
}

export default BetaDetails;
