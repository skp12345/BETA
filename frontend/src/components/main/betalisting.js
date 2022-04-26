import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";

function Betalisting() {
  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/beta/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setQueryList(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncateString = (str) => {
    return str.length > 70 ? str.substring(0, 70) + "..." : str;
  };

  const displayQueries = () => {
    if (!loading) {
      return queryList.map(
        ({ _id, title, description, type, thumbnail, createdAt, company }) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} xxl={3}>
            <Card>
              <CardHeader
                avatar={<Avatar alt={company.title} src={company.thumbnail} />}
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title={company.title}
                subheader={timeAgo.format(new Date(createdAt))}
              />
              <CardMedia
                image={url + "/uploads/" + thumbnail}
                height={200}
                component="img"
              />
              <CardContent>
                <Typography variant="body1">
                  {truncateString(description)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={(e) => navigate("/main/betadetail/" + _id)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      );
    }
  };

  return (
    <Container maxWidth="xl">
      <header className="mt-5 mb-5"></header>
      <Grid container spacing={5}>
        {displayQueries()}
      </Grid>
    </Container>
  );
}
export default Betalisting;
