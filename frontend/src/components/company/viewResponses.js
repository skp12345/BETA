import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const ViewResponses = () => {
  const { formid } = useParams();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;

  const fetchData = () => {
    fetch(url + "/form/getbyid/" + formid).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setFormData(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayForm = () => {
    if (!loading) {
      return (
        <div className="card">
          <div className="card-body">
            <h2>Form Details</h2>
            <hr />
            <p>Created On :</p>
            <b>{new Date(formData.createdAt).toLocaleDateString()}</b>

            <h3 className="mt-5">Questions</h3>
            <ul className="list-group">
              {formData.form.map(({ name }, i) => (
                <li className="list-group-item">
                  {" "}
                  {i + 1}. {name}
                </li>
              ))}
            </ul>
            <h3 className="mt-5">Answers</h3>
            {formData.answers.map(({ user, answers }, i) => (
              <Accordion>
                <AccordionSummary>
                  <h3>{i + 1}</h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {user.username}
                  &nbsp;&nbsp;&nbsp;
                  {user.email}
                </AccordionSummary>
                <AccordionDetails>
                  <h4>Answers :</h4>
                  <ul className="list-group">
                    {answers.map(({ answer }, i) => (
                      <li className="list-group-item">
                        {" "}
                        {i + 1}. {answer}
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      );
    }
  };

  return <div className="container">{displayForm()}</div>;
};

export default ViewResponses;
