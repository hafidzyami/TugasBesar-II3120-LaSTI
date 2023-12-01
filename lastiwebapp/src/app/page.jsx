import React from "react";
import FloatingLabel from "react-bootstrap";
import Form from "react-bootstrap";
import Button from "react-bootstrap";
import styles from "./page.module.css";

const page = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-dark bg-opacity-50 fixed-top">
        <div class="container">
          <a class="navbar-brand mx-5 text-light fw-bold" href="#">
            Cospace
          </a>
          <button
            class="navbar-toggler collapsed bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end mx-5"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link text-light"
                  data-toggle="dropdown"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  Testimoni
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  Our Blog
                </a>
              </li>
              <li class="nav-item bg-warning">
                <a class="nav-link text-light" data-toggle="dropdown" href="#">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="vh-100 vw-100">
        <div>
          <img
            src="/bgheader.png"
            alt="backgroundheader"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              width: "100%",
              height: "100%",
              color: "#fff",
            }}
          >
            <div className={styles.content}>
              <b className={styles.comfortableCoworkingSpace1}>
                Comfortable coworking space.
              </b>
              <div
                className={styles.ourCoworkingSpaces1}
              >{`Our coworking spaces let you choose to work with others in an open-plan area, or a shared office. `}</div>
              <div className={styles.btnStarted}>
                <div className={styles.btnStartedChild} />
                <div className={styles.bookATour}>BOOK A TOUR</div>
              </div>
              <div className={styles.aboutUs}>About Us</div>
            </div>
          </div>
        </div>
        {/* <div className={styles.header}>
          <img className={styles.headerChild} alt="" src="/bgheader.png" />
          <div className={styles.headerItem} />
          <div className={styles.navbar}>
            <div className={styles.cospace}>Cospace</div>
            <div className={styles.menu}>
              <b className={styles.home}>Home</b>
              <div className={styles.features}>Features</div>
              <div className={styles.services}>Services</div>
              <div className={styles.about}>About</div>
              <div className={styles.location}>Location</div>
            </div>
            <div className={styles.btnJoin}>
              <div className={styles.btnJoinChild} />
              <div className={styles.bookNow}>Book Now</div>
            </div>
          </div>
          <div className={styles.content}>
            <b className={styles.comfortableCoworkingSpace1}>
              Comfortable coworking space.
            </b>
            <div
              className={styles.ourCoworkingSpaces1}
            >{`Our coworking spaces let you choose to work with others in an open-plan area, or a shared office. `}</div>
            <div className={styles.btnStarted}>
              <div className={styles.btnStartedChild} />
              <div className={styles.bookATour}>BOOK A TOUR</div>
            </div>
            <div className={styles.aboutUs}>About Us</div>
          </div>
          <div className={styles.headerInner} />
        </div> */}
      </div>
    </>
  );
};

export default page;
