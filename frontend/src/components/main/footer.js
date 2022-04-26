import {
  Facebook,
  FacebookRounded,
  Google,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div
      class="card mx-auto"
      style={{
        border: "1px solid gainsboro",
        height: "160px",
        backgroundColor: "rgba(255, 251, 196, 0.116)",
        marginTop: "20px",
        width: "100%",
      }}
    >
      <div class="me">
        <a
          style={{ color: "white" }}
          class="fa fa-facebook hey facebook"
          href="https://www.facebook.com/profile.php?id=100009905805398"
        ></a>
        <a
          style={{ color: "white" }}
          class="fa fa-instagram hey insta"
          href="https://www.instagram.com/vieshyal/"
        ></a>
        <a
          style={{ color: "white" }}
          class="fa fa-twitter hey twitter"
          href="https://twitter.com/login?lang=en"
        ></a>
        <a
          style={{ color: "white" }}
          class="fa fa-phone hey phone"
          href="tel:+7565919623"
        ></a>
        <a
          style={{ color: "white" }}
          class="fa fa-envelope hey mail"
          href="mailto:vieshyal@gmail.com"
        ></a>

        <div class="me i">
          <a href="" class="hi">
            About
          </a>
          <a href="" class="hi">
            Need Help?
          </a>
          <a href="" class="hi">
            Contact Guide
          </a>
          <a href="" class="hi">
            Privacy
          </a>
          <a href="" class="hi">
            Terms Of Use
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
