const express = require("express");
const router = express.Router();
const Model = require("../models/CompanyModel");

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

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
