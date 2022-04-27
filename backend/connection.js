const mongoose = require("mongoose");

const url =
  "mongodb+srv://Suraj123:123@cluster0.vzrfr.mongodb.net/beta?retryWrites=true&w=majority";

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
