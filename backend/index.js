// importing express
const express = require("express");

//importing userRouter
const UserRouter = require("./routers/UserRouter");
const CompanyRouter = require("./routers/CompanyRouter");

// initialize express app
const app = express();
const port = 5000;

app.use(express.static("./static"));

// using middleware
app.use("/user", UserRouter);
app.use("/company", CompanyRouter);

// end points or route
app.get("/", (req, res) => {
  res.send("request processed at /");
  console.log("a request from client at home");
});

// start the server
app.listen(port, () => {
  console.log("server started sucessfully..");
});
