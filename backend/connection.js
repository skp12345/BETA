const mongoose = require("mongoose");

const url =
  "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/BETA?retryWrites=true&w=majority";

//asynchronous
// return

mongoose
  .connect(url)
  .then(() => {
    console.log("successfully connected");
  })

  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
