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
      <div className="vh-100 vw-100">
        <div className={styles.aboutSection}>
          <img className={styles.gameIcon} alt="g1" src="game.svg" />
          <img className={styles.snackIcon} alt="g2" src="snack.svg" />
          <img
            className={styles.aboutSectionChild}
            alt="g3"
            src="austin-distel-mpN7xjKQ_Ns-unsplash 1.png"
          />
          <div className={styles.aboutSectionItem} />
          <img
            className={styles.aboutSectionInner}
            alt="g4"
            src="austin-distel-uPK2TbJlvMQ-unsplash 1.png"
          />
          <div className={styles.rectangleDiv} />
          <img
            className={styles.groupIcon}
            alt="g5"
            src="the-9th-coworking-kdRggDmQGI4-unsplash 1.png"
          />
          <div className={styles.bestCreativeWorking1}>
            Best creative working environments that suits your business.
          </div>
          <div
            className={styles.loremIpsumPD4}
          >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore `}</div>
          <div
            className={styles.loremIpsumPD5}
          >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod `}</div>
          <div
            className={styles.loremIpsumDolor6}
          >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod `}</div>
          <div
            className={styles.loremIpsumDolor7}
          >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod `}</div>
          <b className={styles.open24Hours1}>Open 24 hours</b>
          <b className={styles.freeSnack1}>{`Free Snack & Drink`}</b>
          <b className={styles.enjoyGameZone1}>Enjoy Game Zone</b>
          <img className={styles.clockIcon} alt="g6" src="clock.svg" />
        </div>
      </div>
      <div className="vh-100 vw-100">
        <div className="d-flex vh-100 vw-100">
          <img
            class="align-self-end"
            className={{ objectFit: "cover" }}
            src="shridhar-gupta-dZxQn4VEv2M-unsplash 1.png"
          />
        </div>
      </div>
      <div className="vh-100 vw-100">
        <div className={styles.descParent}>
          <div className={styles.desc}>
            <div
              className={styles.loremIpsumDolor4}
            >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod dolor sit amet `}</div>
            <div className={styles.label}>
              <div className={styles.testimonials}>Testimonials</div>
            </div>
          </div>
          <div className={styles.testimonials1}>
            <div className={styles.cards}>
              <div className={styles.card1}>
                <div className={styles.card1Child} />
                <div
                  className={styles.loremIpsumDolor5}
                >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod dipiscing elit eiusmod `}</div>
                <img className={styles.rateIcon} alt="" src="rate.svg" />
                <img
                  className={styles.card1Item}
                  alt=""
                  src="Rectangle 59.png"
                />
                <div className={styles.name}>
                  <div className={styles.celineDion}>Celine Dion</div>
                  <div className={styles.cafeOwner}>Cafe Owner</div>
                </div>
              </div>
              <div className={styles.card3}>
                <div className={styles.card1Child} />
                <div
                  className={styles.loremIpsumDolor5}
                >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod dipiscing elit eiusmod `}</div>
                <img className={styles.rateIcon} alt="" src="rate.svg" />
                <img
                  className={styles.card3Item}
                  alt=""
                  src="Rectangle 61.png"
                />
                <div className={styles.name}>
                  <div className={styles.celineDion}>John Melon</div>
                  <div className={styles.cafeOwner}>Freelancer</div>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.card2Child} />
                <div
                  className={styles.loremIpsumDolor5}
                >{`Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod dipiscing elit eiusmod `}</div>
                <img className={styles.rateIcon2} alt="" src="rate.svg" />
                <img
                  className={styles.card3Item}
                  alt=""
                  src="Rectangle 60.png"
                />
                <div className={styles.name}>
                  <div className={styles.celineDion}>Riana Madiva</div>
                  <div className={styles.cafeOwner}>Digital Marketer</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.theySatisfiedWith1}>
            They Satisfied With Our Coworking Space
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
