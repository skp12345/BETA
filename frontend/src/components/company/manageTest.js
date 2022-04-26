import { useEffect, useState } from "react";
import { Delete, Edit, ExpandMore, ExpandMoreSharp } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";
import app_config from "../../config";
import TimeAgo from "javascript-time-ago";

const ManageTest = () => {
  const url = app_config.backend_url;
  const [betaList, setBetaList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("company"))
  );

  const timeAgo = new TimeAgo("en-US");

  const fetchData = () => {
    fetch(url + "/beta/getbycompany/" + currentUser._id)
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

  const deleteData = (id) => {
    toast.promise(
      fetch(url + "/beta/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            fetchData();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        }),
      {
        loading: "Deleting Test...",
        success: <b>User Deleted!</b>,
        error: <b>Some Error Occured!</b>,
      }
    );
  };

  const updateBeta = (id, data) => {
    fetch(url + "/user/update/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      fetchData();
      console.log(res.status);
    });
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
              <p>Description : {description}</p>
              <h5>Type : {type}</h5>
              <h5>Link : {link}</h5>
              <h5>Created At : {timeAgo.format(new Date(createdAt))}</h5>

              <Fab
                onClick={(e) => deleteData(_id)}
                variant="extended"
                sx={{ background: "red", color: "white" }}
              >
                <Delete /> Delete
              </Fab>
            </AccordionDetails>
          </Accordion>
        )
      );
    }
  };

  return (
    <Container>
      <Card>
        <CardContent>{displayData()}</CardContent>
      </Card>
    </Container>
  );
};

export default ManageTest;
