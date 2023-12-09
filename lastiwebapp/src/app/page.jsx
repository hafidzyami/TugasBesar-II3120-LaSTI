"use client";
import React from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const page = () => {
  const router = useRouter()
  return (
    <>
      <nav class="navbar navbar-expand-md bg-dark bg-opacity-50 fixed-top">
        <div class="container">
          <a class="navbar-brand mx-5 text-light fw-bold" href="/">
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
                  Login
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
                <div className={styles.bookATour} onClick={()=>router.push("/login")}>Login</div>
              </div>
              <div className={styles.aboutUs}>About Us</div>
            </div>
          </div>
        </div>
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
            style={{ objectFit: "cover" }}
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
      <div className="vh-100 vw-100">
        <div className="d-flex justify-content-center vw-100">
          <b
            style={{
              fontSize: "36px",
              textTransform: "capitalize",
              display: "inline-block",
            }}
          >
            Space Overview
          </b>
        </div>
        <div className="mt-5 mb-4 d-flex justify-content-center vw-100">
          <div
            style={{
              fontSize: "24px",
              textTransform: "capitalize",
              display: "inline-block",
              textAlign: "center",
              width: "750px",
            }}
          >{`Generate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore `}</div>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: -30,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="space_1.png" />
            <b
              className="mt-4 mb-2 d-flex justify-content-center"
              style={{ color: "#FFBE16", fontSize: "24px" }}
            >
              Space Room #1
            </b>
          </SwiperSlide>
          <SwiperSlide>
            <img src="space_2.png" />
            <b
              className="mt-4 mb-2 d-flex justify-content-center"
              style={{ color: "#FFBE16", fontSize: "24px" }}
            >
              Space Room #2
            </b>
          </SwiperSlide>
          <SwiperSlide>
            <img src="space_3.png" />
            <b
              className="mt-4 mb-2 d-flex justify-content-center"
              style={{ color: "#FFBE16", fontSize: "24px" }}
            >
              Space Room #3
            </b>
          </SwiperSlide>
          <SwiperSlide>
            <img src="space_4.png" />
            <b
              className="mt-4 mb-2 d-flex justify-content-center"
              style={{ color: "#FFBE16", fontSize: "24px" }}
            >
              Space Room #4
            </b>
          </SwiperSlide>
          <SwiperSlide>
            <img src="space_5.png" />
            <b
              className="mt-4 mb-2 d-flex justify-content-center"
              style={{ color: "#FFBE16", fontSize: "24px" }}
            >
              Space Room #5
            </b>
          </SwiperSlide>
          <SwiperSlide>
            <img src="space_6.jpg" />
            <b
              className="mt-4 mb-2 d-flex justify-content-center"
              style={{ color: "#FFBE16", fontSize: "24px" }}
            >
              Space Room #6
            </b>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="vh-100 vw-100">
        <div className={styles.blogSection}>
          <div className={styles.ourLatestBlogParent}>
            <div className={styles.ourLatestBlog1}>Our Latest Blog</div>
            <div className={styles.groupParent}>
              <div className={styles.graphicDesignParent}>
                <div className={styles.graphicDesign}>
                  <p
                    className={styles.whyYourBusiness}
                  >{`Why your business absolutely `}</p>
                  <p className={styles.whyYourBusiness}>
                    needs a virtual office
                  </p>
                </div>
                <div className={styles.coursesParent}>
                  <div className={styles.courses}>INTERIOR</div>
                  <div className={styles.groupChild} />
                  <div className={styles.courses1}>5 mins read</div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.coursesGroup}>
                  <div className={styles.courses2}>TIPS TRICK</div>
                  <div className={styles.groupItem} />
                  <div className={styles.courses3}>5 mins read</div>
                </div>
                <div className={styles.graphicDesign1}>
                  How to Run Your Freelance Design Business on the Cheap
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild}
                    alt="Blog1"
                    src="blog_1.png"
                  />
                  <img
                    className={styles.frameChild}
                    alt="Blog2"
                    src="blog_2.png"
                  />
                  <img
                    className={styles.frameInner}
                    alt="Blog3"
                    src="blog_3.png"
                  />
                </div>
                <div className={styles.graphicDesignGroup}>
                  <div className={styles.graphicDesign}>
                    Getting Clients to Care About Their Website Long Term
                  </div>
                  <div className={styles.coursesContainer}>
                    <div className={styles.courses2}>FREELANCE</div>
                    <div className={styles.groupItem} />
                    <div className={styles.courses3}>5 mins read</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.morePosts}>More Posts</div>
            </div>
          </div>
        </div>
      </div>
      <div className="vw-100">
        <div className={styles.footerSection}>
          <div className={styles.footerSectionChild} />
          <div className={styles.madeWithPassion1}>
            © 2022, Made with passion by CoWork Group 6
          </div>
          <div className={styles.logo}>
            <div className={styles.cospace}>Cospace</div>
          </div>
          <div className={styles.company}>
            <div className={styles.contactUs}>Code of Conduct</div>
            <div className={styles.instagram}>Terms of Service</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <b className={styles.company1}>Company</b>
          </div>
          <div className={styles.support}>
            <div className={styles.contactUs}>Contact Us</div>
            <div className={styles.instagram}>{`Help & Support`}</div>
            <div className={styles.privacyPolicy}>My Account</div>
            <b className={styles.company1}>Support</b>
          </div>
          <div className={styles.community}>
            <div className={styles.youtube}>Youtube</div>
            <div className={styles.contactUs}>Facebook</div>
            <div className={styles.instagram}>Instagram</div>
            <div className={styles.privacyPolicy}>Twitter</div>
            <b className={styles.company1}>Community</b>
          </div>
          <div className={styles.resources}>
            <div className={styles.contactUs}>Newsletter</div>
            <div className={styles.instagram}>Support</div>
            <div className={styles.privacyPolicy}>Blog</div>
            <b className={styles.company1}>Resources</b>
          </div>
          <div className={styles.feature}>
            <div className={styles.contactUs}>File Manager</div>
            <div className={styles.instagram}>Tasks Schedule</div>
            <div className={styles.privacyPolicy}>Team Management</div>
            <b className={styles.company1}>Feature</b>
          </div>
          <div className={styles.footerSectionItem} />
        </div>
      </div>
    </>
  );
};
export default page;
