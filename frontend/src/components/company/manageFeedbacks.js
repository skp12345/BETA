import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import update from "immutability-helper";
import { Formik } from "formik";
import { Delete, DeleteForever, ExpandMoreSharp, ViewAgenda } from "@mui/icons-material";

const ManageFeedbacks = () => {
  const url = app_config.backend_url;
  const [betaList, setBetaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBeta, setSelectedBeta] = useState("");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("company"))
  );

  const [questionList, setQuestionList] = useState([
    {
      name: "Question 1",
      answertype: "text",
      answer: "",
      options: ["opt1", "opt2", "opt3"],
    },
    {
      name: "Question 2",
      answertype: "radio",
      answer: "",
      options: ["opt1", "opt2", "opt3"],
    },
  ]);

  const timeAgo = new TimeAgo("en-US");

  const fetchData = () => {
    fetch(url + "/beta/getbycompany/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBetaList(data);
        // setSelectedBeta(data[0]._id);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayBetaSelector = () => {
    if (!loading && betaList.length !== 0) {
      return (
        <FormControl fullWidth>
          <InputLabel id="beta-label">BETA Test</InputLabel>
          <Select
            labelId="beta-label"
            id="beta"
            value={selectedBeta}
            label="Age"
            onChange={(e) => setSelectedBeta(e.target.value)}
          >
            {betaList.map(({ _id, title }) => (
              <MenuItem value={_id}>{title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
  };

  const displayBetaDetails = () => {
    if (selectedBeta) {
      const { title, description, createdAt, type, link, thumbnail, forms } =
        betaList.filter(({ _id }) => _id === selectedBeta)[0];
      return (
        <Card sx={{ mt: 5 }}>
          <CardContent>
            <Grid container spacing={10}>
              <Grid item md={4}>
                <img
                  className="img-fluid"
                  alt={title}
                  src={url + "/uploads/" + thumbnail}
                />
              </Grid>
              <Grid item md={8}>
                <h3>{title}</h3>
                <p>Description : {description}</p>
                <h5>Type : {type}</h5>
                <h5>Link : {link}</h5>
                <h5>Created At : {timeAgo.format(new Date(createdAt))}</h5>
              </Grid>
            </Grid>

            <div className="mt-5">
              {forms.map(({ _id, form, feedbacks, endDate }) => {
                return (
                  <Accordion key={_id}>
                    <AccordionSummary expandIcon={<ExpandMoreSharp />}>
                      <Typography fontWeight={600}>Added at {new Date(createdAt).toLocaleDateString()} {new Date(createdAt).toLocaleTimeString()}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* <Button className="mx-3" style={{background:"blue",color:"white",padding:"11px",borderRadius:"30px"}}>Views feedbacks</Button> */}
                      <Fab
                
                variant="extended"
                sx={{ background: "blue", color: "white",marginRight:"10px" }}
              >
                <ViewAgenda/> View feedbacks
              </Fab>
                      <Fab
               
                variant="extended"
                sx={{ background: "red", color: "white" }}
              >
                <Delete /> Delete
              </Fab>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </CardContent>
        </Card>
      );
    }
  };

  const paperform = {
    form: [],
    endDate: "",
  };

  const formSubmit = (values) => {
    values.form = questionList;
    // console.log(values);

    fetch(url + "/form/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          fetch(url + "/beta/pushupdate/" + selectedBeta, {
            method: "PUT",
            body: JSON.stringify({ forms: data._id }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            if (res.status === 200) {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Form Added Successfully",
              });
            }
          });
        });
      }
    });
  };

  const addNewQuestion = () => {
    const newQues = {
      name: "Question " + (questionList.length + 1),
      answertype: "text",
      answer: "",
      options: ["opt1", "opt2", "opt3"],
    };

    setQuestionList([...questionList, newQues]);
  };

  const setOption = (q_i, index, e) => {
    const options = {};
    const questions = {};

    options[index] = { $set: e.target.value };
    questions[q_i] = { options: options };

    const newData = update(questionList, questions);

    // console.log(newData);
    setQuestionList(newData);
  };

  const setQuestion = (q_i, e) => {
    const questions = {};

    questions[q_i] = { name: { $set: e.target.value } };

    const newData = update(questionList, questions);

    // console.log(newData);
    setQuestionList(newData);
  };

  const addOption = (q_i) => {
    const questions = {};

    questions[q_i] = { options: { $push: ["new option"] } };

    const newData = update(questionList, questions);

    // console.log(newData);
    setQuestionList(newData);
  };

  const changeType = (q_i, e) => {
    const questions = {};

    questions[q_i] = { answertype: { $set: e.target.value } };
    questions[q_i] = { answertype: { $set: e.target.value } };

    const newData = update(questionList, questions);

    // console.log(newData);
    setQuestionList(newData);
  };

  const displayOptions = (q_i, type, options) => {
    if (type === "radio" || type === "checkbox") {
      return (
        <>
          {options.map((op, i) => {
            return (
              <input
                className="form-control mt-3 w-50"
                value={op}
                onChange={(e) => setOption(q_i, i, e)}
              />
            );
          })}
          <Button
            onClick={(e) => addOption(q_i)}
            className="mt-3"
            color="primary"
            variant="contained"
          >
            {" "}
            +{" "}
          </Button>
        </>
      );
    }
  };

  const displayPaper = () => {
    return (
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
            <Formik initialValues={paperform} onSubmit={formSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <div class="input-group mt-3">
                    <span class="input-group-text">Title</span>
                    <input
                      type="date"
                      class="form-control"
                      id="endDate"
                      value={values.endDate}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    // onClick={formSubmit}
                    type="submit"
                    className="w-25 mt-5"
                    variant="outlined"
                  >
                    Publish Form
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        {questionList.map((question, index) => (
          <div className="card mt-5">
            <div className="card-body">
              <div class="input-group mt-3">
                <span class="input-group-text" id={"question" + (index + 1)}>
                  {"Question " + (index + 1)}
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby={"question" + (index + 1)}
                  onChange={(e) => setQuestion(index, e)}
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text">Question Type</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={question.answertype}
                  onChange={(e) => changeType(index, e)}
                >
                  <option value="">Open this select menu</option>
                  <option value="text">Text</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                </select>
              </div>
              <div className="my-3">
                {displayOptions(index, question.answertype, question.options)}
              </div>
            </div>
          </div>
        ))}
        <Button
          onClick={addNewQuestion}
          className="mt-5"
          color="primary"
          variant="contained"
        >
          Add New Question
        </Button>
      </div>
    );
  };

  return (
    <Container>
      {displayBetaSelector()}
      {displayBetaDetails()}
      {selectedBeta ? (
        displayPaper()
      ) : (
        <h1>Please Select a BETA Test to continue</h1>
      )}
    </Container>
  );
};

export default ManageFeedbacks;
