import React, { useState } from "react";
import {
  MDBIcon,
  MDBBtn,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const Hero = () => {
  return (
    <>
      <div className="mx-lg-5 mx-3 fw-bold">
        <div
          className="row mt-sm-3 pt-sm-3 mt-2 pb-5 pt-2"
          style={{
            alignItems: "center",
            color: "black",
            display: "block",
            margin: "0 auto",
            width: "80%",
          }}
        >
          <div
            className="col-12 col-lg-7 text-lg-start text-center"
            style={{
              textAlign: "left",
              lineHeight: "112.5%",
              fontFamily:
                "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
            }}
          >
            <h1
              style={{
                fontSize: "calc(1.675rem + 2vw)",
                fontWeight: 550,
                lineHeight: "114.5%",
                fontFamily:
                  "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
              }}
            >
              Convenient, quality <br />
              care {"\t"}
              <span
                className="mt-xl-0 mt-1"
                style={{
                  color: "rgb(156, 87, 8)",
                  lineHeight: "114.5%",
                }}
              >
                100% online
              </span>
            </h1>

            <h5 style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              How can we help you?
            </h5>
          </div>
        </div>
      </div>

      <div
        id="cards"
        style={{ display: "block", margin: "0 auto", width: "80%" }}
      >
        <MDBRow className="mx-3">
          <MDBCol
            size="md"
            onClick={() =>
              window.open("https://piyushchhabra.github.io/", "_blank")
            }
          >
            <MDBCard className="h-100 tile">
              <MDBCardBody>
                <MDBCardTitle
                  className="fs-4 fw-bold"
                  style={{ color: "black" }}
                >
                  Have great{" "}
                  <span style={{ color: "rgba(92, 140, 181, 1)" }}> sex </span>
                  <img
                    src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,b_rgb:fff/Hims/homepage-test/december-2023/tiles-ed-m"
                    width="15%"
                  />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol
            size="md"
            onClick={() =>
              window.open("https://piyushchhabra.github.io/", "_blank")
            }
          >
            <MDBCard className="h-100 tile">
              <MDBCardBody>
                <MDBCardTitle
                  className="fs-4  fw-bold"
                  style={{ color: "black" }}
                >
                  Regrow
                  <span style={{ color: "rgba(138, 58, 52, 1)" }}> hair </span>
                  <img
                    src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,b_rgb:fff/Hims/homepage-test/december-2023/tiles-hair-m"
                    width="15%"
                  />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol
            size="md"
            onClick={() =>
              window.open("https://piyushchhabra.github.io/", "_blank")
            }
          >
            <MDBCard className="h-100 tile">
              <MDBCardBody>
                <MDBCardTitle
                  className="fs-4  fw-bold"
                  style={{ color: "black" }}
                >
                  Lose
                  <span style={{ color: "rgba(207, 147, 88, 1)" }}>
                    {" "}
                    weight{" "}
                  </span>
                  <img
                    src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,b_rgb:fff/Hims/homepage-test/december-2023/Hims-Home-Nav-WL"
                    width="15%"
                  />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mx-3 mt-3">
          <MDBCol
            size="md"
            onClick={() =>
              window.open("https://piyushchhabra.github.io/", "_blank")
            }
          >
            <MDBCard className="h-100 tile">
              <MDBCardBody>
                <MDBCardTitle
                  className="fs-4 fw-bold"
                  style={{ color: "black" }}
                >
                  Tackle
                  <span style={{ color: "rgba(0, 167, 110, 1)" }}>
                    {" "}
                    anxiety{" "}
                  </span>
                  <img
                    src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,b_rgb:fff/Hims/homepage-test/december-2023/tiles-mh-m"
                    width="15%"
                  />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol
            size="md"
            onClick={() =>
              window.open("https://piyushchhabra.github.io/", "_blank")
            }
          >
            <MDBCard className="h-100 tile">
              <MDBCardBody>
                <MDBCardTitle
                  className="fs-4  fw-bold"
                  style={{ color: "black" }}
                >
                  Have longer
                  <span style={{ color: "rgba(116, 65, 177, 1)" }}> sex </span>
                  <img
                    src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,b_rgb:fff/Hims/homepage-test/december-2023/tiles-pej-m"
                    width="15%"
                  />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol
            size="md"
            onClick={() =>
              window.open("https://piyushchhabra.github.io/", "_blank")
            }
          >
            <MDBCard className="h-100 tile">
              <MDBCardBody>
                <MDBCardTitle
                  className="fs-4  fw-bold"
                  style={{ color: "black" }}
                >
                  Get smooth
                  <span style={{ color: "rgba(172, 119, 88, 1)" }}> skin </span>
                  <img
                    src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit,b_rgb:fff/Hims/homepage-test/december-2023/tiles-skin-m"
                    width="15%"
                  />
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      <div
        className="mt-5 mx-4"
        style={{ borderRadius: "15rem", alignItems: "center" }}
      >
        <video
          id="lol"
          width="90%"
          height="50%"
          src="https://www.hims.com/forhims/video/upload/q_auto:low,vc_vp9/Hims/homepage-test/may-2023/hims-homepage-hero-d.webm"
          type="video/xwebm"
          loop={true}
          muted
          controls
          autoPlay="autoPlay"
          style={{ borderRadius: "20px", display: "block", margin: "0 auto" }}
        ></video>
      </div>
    </>
  );
};

export default Hero;
