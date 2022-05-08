import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Fab,
  Typography,
} from "@mui/material";
import { Delete, ExpandMoreSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function EnrolledTest() {
  const url = app_config.backend_url;
  const [betaList, setBetaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const timeAgo = new TimeAgo("en-US");

  const fetchData = () => {
    fetch(url + "/beta/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBetaList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const alreadyFilled = (answers) => {
    for (let ans of answers) {
      if (ans.user === currentUser._id) return true;
    }
    return false;
  };

  const expired = (endDate) => {
    return new Date() > new Date(endDate);
  };

  const displayData = () => {
    if (!loading) {
      return betaList.map(
        (
          {
            _id,
            title,
            description,
            type,
            eligiblity,
            users,
            forms,
            thumbnail,
            startDate,
            endDate,
            link,
            createdAt,
          },
          index
        ) => (
          <Accordion key={_id}>
            <AccordionSummary expandIcon={<ExpandMoreSharp />}>
              <Typography fontWeight={600}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <h5>Username : {description}</h5>
              <h5>Type : {type}</h5>
              <h5>Link : <a style={{display:"inline"}} href={link}>{link}</a> </h5> 
              <h5>Created At : {timeAgo.format(new Date(createdAt))}</h5>

              <h4 className="mt-5">Feedback Forms for this test</h4>
              <hr />
              {forms.map(({ _id, answers, endDate, createdAt }) => (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreSharp />}>
                    <Typography fontWeight={600}>
                      Published on {new Date(createdAt).toLocaleDateString()}{" "}
                      {new Date(createdAt).toLocaleTimeString()}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Button
                      disabled={alreadyFilled(answers)}
                      variant="outlined"
                      onClick={(e) => navigate("/main/addfeedback/" + _id)}
                    >
                      {alreadyFilled(answers)
                        ? "Already Responded"
                        : "Add Your Feedback"}
                    </Button>
                    <Button
                    className="mx-3"
                      color={expired(endDate) ? "error" : "success"}
                      variant="contained"
                    >
                      {expired(endDate) ? "Expired" : "Live"}
                    </Button>
                  </AccordionDetails>
                </Accordion>
              ))}
            </AccordionDetails>
          </Accordion>
        )
      );
    }
  };
  return (
    <div className="mx-5">
      <div
        className="container card"
        style={{
          width: "50rem",
          borderRadius: "5px",
          boxShadow: "3px 5px #888888",
          margin: "20px auto",
          padding: "2rem",
          // background: "rgb(76 175 80 / 14%)",
          background:"#e9ecef"
        }}
      >
        <h2
                      style={{
                        textAlign: "center",
                        color: "blue",
                        marginBottom: "1.5rem",
                        textShadow: "2px 1px #ff0000",
                      }}
                    >
                      My Beta Test {" "}
                    </h2>
        {displayData()}
      </div>
    </div>
  );
}

export default EnrolledTest;
