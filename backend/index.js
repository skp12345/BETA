// importing express
const express = require('express');

//importing userRouter
const UserRouter =require("./routers//UserRouter");

// initialize express app
const app = express();
const port =5000;

// using middleware
app.use("/user",UserRouter);

// end points or route
app.get('/',(req,res)=>{
    res.send('request processed at /');
    console.log("a request from client at home");
})

// start the server
app.listen(port, () => {
    console.log("server started sucessfully..");
});

