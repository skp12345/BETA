import {
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import update from "immutability-helper";
import Swal from "sweetalert2";

const AddFeedback = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);
  const [formId, setFormId] = useState("");

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/form/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setAnswers(data.form);
        setFormId(data._id);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitFeedback = () => {
    fetch(url + "/form/pushupdate/" + formId, {
      method: "PUT",
      body: JSON.stringify({
        answers: { user: currentUser._id, answers: answers },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Form Submitted!!",
        });
        navigate("/user/enrolled");
      }
    });
  };

  const changeAnswer = (q_i, e) => {
    const form = {};
    // console.log(answers);

    form[q_i] = { answer: { $set: e.target.value } };

    const newData = update(answers, form);

    // console.log(newData);
    setAnswers(newData);
  };

  const getInput = (index, type, options) => {
    if (type === "text")
      return (
        <input
          className="form-control"
          onChange={(e) => changeAnswer(index, e)}
        />
      );
    else if (type === "radio")
      return (
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            onChange={(e) => changeAnswer(index, e)}
            name="radio-buttons-group"
          >
            {options.map((op) => (
              <FormControlLabel value={op} control={<Radio />} label={op} />
            ))}
          </RadioGroup>
        </FormControl>
      );
  };

  const displayForm = () => {
    if (!loading) {
      return (
        <Card>
          <CardContent>
            {answers.map(({ name, answertype, answer, options }, index) => (
              <div className="card mt-5">
                <div className="card-body">
                  <h4>{index + 1 + ". " + name}</h4>

                  <div className="my-3">
                    {getInput(index, answertype, options)}
                  </div>
                </div>
              </div>
            ))}

            <Button className="mt-5" onClick={submitFeedback}>
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
      );
    }
  };

  return (
    <Container>
      <h2 className="mt-5">AddFeedback</h2>
      <hr />
      {displayForm()}
    </Container>
  );
};

export default AddFeedback;
