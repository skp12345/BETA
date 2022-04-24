import { Facebook, FacebookRounded, Google, Instagram, Twitter } from '@mui/icons-material';
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              {/* <h3 style="font-size: 1.3rem">Android Testing</h3> */}
              <h3 style={{fontSize:"1.3rem"}}>Android Testing</h3>
              <ul>
                <li><a href="#">Application Testing</a></li>
                <li><a href="#">Game Testing</a></li>
                <li><a href="#">System Software Testing</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3 style={{fontSize:"1.3rem"}}>Windows Testing</h3>
              <ul>
                <li><a href="#">Application Testing</a></li>
                <li><a href="#">Operating System Testing</a></li>
                <li><a href="#">Game Testing</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3 style={{fontSize:"1.3rem"}}>Company</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms And Condition</a></li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href=""> <FacebookRounded /></a>
              <a href="#"> <Twitter/> </a>
              <a href="#"> <Instagram/> </a>
              <a href="#"> <Google/> </a>
              <p style={{fontSize:"1.1rem"}} className="copyright">
                β-Testing © 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer;