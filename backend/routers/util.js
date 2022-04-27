const multer = require("multer");
const router = require("express").Router();
// import SMTPClient from "emailjs";


// const initMail = () => {
//   return new SMTPClient({
//     user: "yourmail@gmail.com",
//     password: "uvzuapdfsegbdctg",
//     host: "smtp.gmail.com",
//     ssl: true,
//   });
// };

// const client = initMail();
// const sendMail = (to, subject, text) => {
//   client.send(
//     {
//       text: text,
//       from: "yourmail@mail.com",
//       to: to,

//       cc: "",
//       subject: subject,
//     },
//     (err, message) => {
//       console.log(err || message);
//     }
//   );
// };

router.post("/sendmail", (req, res) => {
  const data = req.body;
  sendMail(data.to, data.subject, data.text);
  res.status(200).json({ message: "mail sent successfully" });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("file"), (req, res) => {
  res.status(200).json({ status: "success" });
});

module.exports = router;
