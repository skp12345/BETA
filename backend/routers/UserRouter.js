const express = require("express");
const router = express.Router();
const Model = require("../models/UserModel");

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


router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({email : req.params.email})
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
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

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
    });
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
