// importing express
const express = require("express");
const cors = require("cors");

//importing userRouter
const UserRouter = require("./routers/UserRouter");
const CompanyRouter = require("./routers/CompanyRouter");
const BetaRouter = require("./routers/BetaRouter");
const FormRouter = require("./routers/FormRouter");
const FeedbackRouter = require("./routers/FeedbackRouter");
const utilRouter = require("./routers/util");

// initialize express app
const app = express();
const port = 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());
app.use(express.static("./static"));

// using middleware
app.use("/user", UserRouter);
app.use("/company", CompanyRouter);
app.use("/beta", BetaRouter);
app.use("/form", FormRouter);
app.use("/feedback", FeedbackRouter);
app.use("/util", utilRouter);

// end points or route
app.get("/", (req, res) => {
  res.send("request processed at /");
  console.log("a request from client at home");
});

// start the server
app.listen(port, () => {
  console.log("server started sucessfully..");
});
