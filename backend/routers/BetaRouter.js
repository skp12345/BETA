const express = require("express");
const router = express.Router();
const Model = require("../models/BetaModel");

router.post("/add", (req, res) => {
  // console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data added");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      console.log(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  console.log("request on getbyid");

  console.log(req.params.id);

  res.send("you have requested on /getbyid in user");
});

router.post("/authenticate", (req, res) => {
  const formdata = req.body;

  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      if (data) {
        console.log("login success");
        res.status(200).json(data);
      } else {
        console.log("login failed");
        res.status(400).json({ message: "failed" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  // console.log(req.body);

  Model.find({})
    .then((data) => {
      console.log("user data fetched");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      console.log(err);
    });
});

module.exports = router;