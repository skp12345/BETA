import "./home.css";
import React from "react";
import Footer from "./footer";
import Header from "./header1";
import app_config from "../../config";
import { Facebook, Google, Instagram, LinkedIn } from "@mui/icons-material";

const Mainhome = () => {
  const url = app_config.backend_url;

  return (
    <div className="body">
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <ol
              id="hero-carousel-indicators"
              className="carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage:
                    "url(" + url + "/images/hero-carousel/1.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 style={{fontSize:"3rem"}} className="animate__animated animate__fadeInDown">
                      Beta Testing Solved.
                    </h2>
                    <p style={{fontSize:"1.5rem",textAlign:"center"}} className="animate__animated animate__fadeInUp">
                      Beta test with real people in real environments. You get
                      real-world engagement data & feedback to help scale your
                      product. For Android, iOS, websites, desktop, and tech
                      products. Powered by a global community of 250,000+
                      real-world testers.
                    </p>
                    <a
                      href="/app/signin"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        <div id="about" className="about-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>About Beta Testing</h2>
                </div>
              </div>
            </div>
            <div className="row mx-auto">
              <div
                className="col-md-5 col-sm-6 col-xs-12 mx-auto"
                style={{ marginLeft: "250px" }}
              >
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/app/signup">
                      <h1 style={{ color: "black" }}>Real World Testing</h1>
                    </a>
                    <h3>Every Device, Every Platform, Everywhere.</h3>
                    <p>
                      Define your target audience and recruit targeted
                      participants easily. We source participants from our own
                      tester community (250,000+ users) and extended network
                      with access to millions of users through market research
                      partners and social networks.
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{ marginLeft: "150px", borderLeft: "black" }}
                className="col-md-4 col-sm-6 col-xs-12 mx-auto"
              >
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/app/signin">
                      <img src={url + "/images/about/1.png"} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="about-area area-padding"
          style={{ backgroundColor: "white" }}
        >
          <div className="container">
            <div className="row mx-auto">
              <div
                style={{ marginLeft: "150px", borderLeft: "black" }}
                className="col-md-3 col-sm-6 col-xs-12 mx-auto"
              >
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/app/signin">
                      <img src={url + "/images/about/2.png"} alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 col-sm-6 col-xs-12 mx-auto"
                style={{ marginLeft: "250px" }}
              >
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/app/signup">
                      <h1 style={{ color: "black" }}>
                        Generate Data & Feedback.
                      </h1>
                    </a>
                    <h3>
                      Improve Your Product With Real World Data & Feedback
                    </h3>
                    <p>
                      Get in-depth engagement and user feedback delivered
                      through our powerful and flexible platform, whether your
                      focus is User Experience Feedback, Bug Testing, or
                      Usability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about" className="about-area area-padding">
          <div className="container">
            <div className="row mx-auto">
              <div
                className="col-md-5 col-sm-6 col-xs-12 mx-auto"
                style={{ marginLeft: "250px" }}
              >
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/app/signup">
                      <h1 style={{ color: "black" }}>We Make It Happen.</h1>
                    </a>
                    <h3>Fully Managed, Design to Execution.</h3>
                    <p>
                      Choose our Managed Plan, and our experts work with you
                      hand-in-hand from design to execution to ensure your test
                      is successful.
                    </p>
                    <a
                      href="/app/signin"
                      className="btn mt-1 w-50"
                      style={{
                        borderRadius: "20px",
                        height: "40px",
                        backgroundImage:
                          "linear-gradient(to right, rgba(60, 255, 0, 0.425), rgba(255, 0, 119, 0.87))",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{ marginLeft: "150px", borderLeft: "black" }}
                className="col-md-4 col-sm-6 col-xs-12 mx-auto"
              >
                <div className="well-middle">
                  <div className="single-well">
                    <a href="/app/signin">
                      <img src={url + "/images/about/3.png"} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="services-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline services-head text-center">
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="about-move">
                  <div className="services-details">
                    <div className="single-services">
                      <a className="services-icon" href="#">
                        <i className="bi bi-briefcase"></i>
                      </a>
                      <h4>Expert Coder</h4>
                      <p>
                        will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="about-move">
                  <div className="services-details">
                    <div className="single-services">
                      <a className="services-icon" href="#">
                        <i className="bi bi-card-checklist"></i>
                      </a>
                      <h4>Creative Designer</h4>
                      <p>
                        will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className=" about-move">
                  <div className="services-details">
                    <div className="single-services">
                      <a className="services-icon" href="#">
                        <i className="bi bi-bar-chart"></i>
                      </a>
                      <h4>Wordpress Developer</h4>
                      <p>
                        will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className=" about-move">
                  <div className="services-details">
                    <div className="single-services">
                      <a className="services-icon" href="#">
                        <i className="bi bi-binoculars"></i>
                      </a>
                      <h4>Social Marketer </h4>
                      <p>
                        will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className=" about-move">
                  <div className="services-details">
                    <div className="single-services">
                      <a className="services-icon" href="#">
                        <i className="bi bi-brightness-high"></i>
                      </a>
                      <h4>Seo Expart</h4>
                      <p>
                        will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className=" about-move">
                  <div className="services-details">
                    <div className="single-services">
                      <a className="services-icon" href="#">
                        <i className="bi bi-calendar4-week"></i>
                      </a>
                      <h4>24/7 Support</h4>
                      <p>
                        will have to make sure the prototype looks finished by
                        inserting text or photo.make sure the prototype looks
                        finished by.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          id="team"
          className="our-team-area area-padding"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row mx-auto">
              <div
                className="col-md-3 col-sm-3 col-xs-12"
                style={{ marginLeft: "270px" }}
              >
                <div className="single-team-member">
                  <div className="team-img">
                    <a href="#">
                      <img src={url + "/images/team/1.jpeg"} alt="" />
                    </a>
                    <div className="team-social-icon text-center">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>Vishal Verma</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12">
                <div className="single-team-member">
                  <div className="team-img">
                    <a href="#">
                      <img
                        src={url + "/images/team/2.jpeg"}
                        alt=""
                        style={{ height: "335px" }}
                      />
                    </a>
                    <div className="team-social-icon text-center">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>Aman Devewidi</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="reviews-area">
          <div className="row g-0">
            <div className="col-lg-6">
              <img
                src={url + "/images/about/beta.jpeg"}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 work-right-text d-flex align-items-center">
              <div className="px-5 py-5 py-lg-0">
                <h2>Working with us</h2>
                <h5>
                  Test Your Software, Game and Web app, Get RealWorld users
                  Feedback .
                </h5>
                <a href="/app/contactus" className="ready-btn scrollto">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="portfolio" className="portfolio-area area-padding fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Our Portfolio</h2>
                </div>
              </div>
            </div>
            <div className="row wesome-project-1 fix">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row awesome-project-content portfolio-container">
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app portfolio-item">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src={url + "/images/portfolio/1.jpg"} alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href={url + "/images/portfolio/1.jpg"}
                        >
                          <h4>Business City</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src={url + "/images/portfolio/2.jpg"} alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href={url + "/images/portfolio/2.jpg"}
                        >
                          <h4>Blue Sea</h4>
                          <span>Photosho</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-card">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src={url + "/images/portfolio/3.jpg"} alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href={url + "/images/portfolio/3.jpg"}
                        >
                          <h4>Beautiful Nature</h4>
                          <span>Web Design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src={url + "/images/portfolio/4.jpg"} alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href={url + "/images/portfolio/4.jpg"}
                        >
                          <h4>Creative Team</h4>
                          <span>Web design</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-app">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src={url + "/images/portfolio/5.jpg"} alt="" />
                    </a>
                    <div className="add-actions text-center text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href={url + "/images/portfolio/5.jpg"}
                        >
                          <h4>Beautiful Flower</h4>
                          <span>Web Development</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 portfolio-item filter-web">
                <div className="single-awesome-project">
                  <div className="awesome-img">
                    <a href="#">
                      <img src={url + "/images/portfolio/6.jpg"} alt="" />
                    </a>
                    <div className="add-actions text-center">
                      <div className="project-dec">
                        <a
                          className="portfolio-lightbox"
                          data-gallery="myGallery"
                          href={url + "/images/portfolio/6.jpg"}
                        >
                          <h4>Night Hill</h4>
                          <span>Photoshop</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div id="pricing" className="pricing-area area-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Pricing Table</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="pri_table_list">
                  <h3>
                    basic <br /> <span>$80 / month</span>
                  </h3>
                  <ol>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Online system</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-x"></i>
                      <span>Full access</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free apps</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Multiple slider</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Free domin</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Support unlimited</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Payment online</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-x"></i>
                      <span>Cash back</span>
                    </li>
                  </ol>
                  <button>sign up now</button>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="pri_table_list active">
                  <span className="saleon">top sale</span>
                  <h3>
                    standard <br /> <span>$110 / month</span>
                  </h3>
                  <ol>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Online system</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Full access</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free apps</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Multiple slider</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Free domin</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Support unlimited</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Payment online</span>
                    </li>
                    <li className="cross">
                      <i className="bi bi-x"></i>
                      <span>Cash back</span>
                    </li>
                  </ol>
                  <button>sign up now</button>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="pri_table_list">
                  <h3>
                    premium <br /> <span>$150 / month</span>
                  </h3>
                  <ol>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Online system</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Full access</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free apps</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Multiple slider</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Free domin</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Support unlimited</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Payment online</span>
                    </li>
                    <li className="check">
                      <i className="bi bi-check"></i>
                      <span>Cash back</span>
                    </li>
                  </ol>
                  <button>sign up now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="blog" className="blog-area">
          <div className="blog-inner area-padding">
            <div className="blog-overly"></div>
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="section-headline text-center">
                    <h2>Latest News</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className=" cardcol-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="https://www.zeebiz.com/technology/apps/news-pubg-mobile-battlegrounds-mobile-india-beta-now-available-for-everyone-follow-these-steps-to-download-158926">
                        <img src={url + "/images/blog/1.jpg"} alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">13 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2021-06-16 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="https://www.zeebiz.com/technology/apps/news-pubg-mobile-battlegrounds-mobile-india-beta-now-available-for-everyone-follow-these-steps-to-download-158926">
                          PUBG Mobile: Battlegrounds Mobile India beta now
                          available for everyone
                        </a>
                      </h4>
                      <p>
                        Battlegrounds Mobile India early access download: Good
                        news for PUBG fans in India! Battlegrounds Mobile India
                        open beta is now available for everyone. The beta
                        version of the game was officially released on Thursday
                        but for the select users but now the game developers
                        announced that the Battlegrounds Mobile India beta is
                        available for everyone.
                      </p>
                    </div>
                    <span>
                      <a
                        href="https://www.zeebiz.com/technology/apps/news-pubg-mobile-battlegrounds-mobile-india-beta-now-available-for-everyone-follow-these-steps-to-download-158926"
                        className="ready-btn"
                      >
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="https://www.notebookcheck.net/Sony-opening-invites-to-gamers-to-beta-test-next-major-PS5-update-its-first-ever-public-beta-testing-program.546819.0.html">
                        <img src={url + "/images/blog/2.jpg"} alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">130 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2021-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="https://www.notebookcheck.net/Sony-opening-invites-to-gamers-to-beta-test-next-major-PS5-update-its-first-ever-public-beta-testing-program.546819.0.html">
                          Sony opening invites to gamers to beta test next major
                          PS5 update, its first ever public beta testing program
                        </a>
                      </h4>
                      <p>
                        Sony is prepping for what looks like a major update for
                        its hugely popular Playstation 5 game console. The Japan
                        tech giant has issued an invite for its first ever beta
                        testing program although it is only available to gamers
                        in the the United States, Canada, Japan, United Kingdom,
                        France and Germany.
                      </p>
                    </div>
                    <span>
                      <a
                        href="https://www.notebookcheck.net/Sony-opening-invites-to-gamers-to-beta-test-next-major-PS5-update-its-first-ever-public-beta-testing-program.546819.0.html"
                        className="ready-btn"
                      >
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <a href="https://www.republicworld.com/technology-news/gaming/battlefield-6-alpha-sign-up-register-to-try-out-the-game-as-an-alpha-tester.html">
                        <img src={url + "/images/blog/3.jpg"} alt="" />
                      </a>
                    </div>
                    <div className="blog-meta">
                      <span className="comments-type">
                        <i className="fa fa-comment-o"></i>
                        <a href="#">10 comments</a>
                      </span>
                      <span className="date-type">
                        <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                      </span>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <a href="https://www.republicworld.com/technology-news/gaming/battlefield-6-alpha-sign-up-register-to-try-out-the-game-as-an-alpha-tester.html">
                          Battlefield 6 Alpha Sign Up: Register To Try Out The
                          Game As An Alpha Tester
                        </a>
                      </h4>
                      <p>
                        Battlefield 6 is coming soon, and while everyone is
                        waiting, the devs have revealed something. It's the
                        Battlefield 6 Alpha playtesting, which will begin on
                        July 22 following the EA Play Live event. When is the
                        Battlefield 6 release date.
                      </p>
                    </div>
                    <span>
                      <a
                        href="https://www.republicworld.com/technology-news/gaming/battlefield-6-alpha-sign-up-register-to-try-out-the-game-as-an-alpha-tester.html"
                        className="ready-btn"
                      >
                        Read more
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="suscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12">
                <div className="suscribe-text text-center">
                  <h3>Welcome to our Beta Testing company</h3>
                  <a className="sus-btn" href="/app/home">
                    Get A quate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <div className="footer-logo">
                      <h2>Beta Testing</h2>
                    </div>

                    <p>
                      Beta testing is an opportunity for real users to use a
                      product in a production environment to uncover any bugs or
                      issues before a general release.
                    </p>
                    <div className="footer-icons">
                      <ul>
                        <li>
                          <a href="#">
                            {/* <i className="fa fa-facebook"></i> */}
                            <Facebook/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* <i className="fa fa-twitter"></i> */}
                            <Google/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* <i className="fa fa-instagram"></i> */}
                            <Instagram/>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* <i className="fa fa-linkedin"></i> */}
                            <LinkedIn/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>information</h4>
                    <p></p>
                    <div className="footer-contacts">
                      <p>
                        <span>Tel:</span> +8808863622
                      </p>
                      <p>
                        <span>Email:</span> surajanshraj@com
                      </p>
                      <p>
                        <span>Working Hours:</span> 9am-5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-head">
                    <h4>Instagram</h4>
                    <div className="flicker-img">
                      <a href="#">
                        <img src={url + "/images/portfolio/1.jpg"} alt="" />
                      </a>
                      <a href="#">
                        <img src={url + "/images/portfolio/2.jpg"} alt="" />
                      </a>
                      <a href="#">
                        <img src={url + "/images/portfolio/3.jpg"} alt="" />
                      </a>
                      <a href="#">
                        <img src={url + "/images/portfolio/4.jpg"} alt="" />
                      </a>
                      <a href="#">
                        <img src={url + "/images/portfolio/5.jpg"} alt="" />
                      </a>
                      <a href="#">
                        <img src={url + "/images/portfolio/6.jpg"} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mainhome;
