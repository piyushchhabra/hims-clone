import { MDBCollapse, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Question from "./Question";

const Qna = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  // const Question = ({ qText, ans, st, tFun }) => {
  //   <div className="mt-5" style={{ lineHeight: "105%", color: "black" }}>
  //     <div
  //       onClick={tFun}
  //       style={{ fontSize: "40px", display: "flex", alignItems: "center" }}
  //     >
  //       {{ qText }}
  //       <MDBIcon fas icon="arrow-circle-down" className="mx-3" />
  //     </div>
  //     <MDBRow>
  //       <MDBCol size="md"></MDBCol>
  //       <MDBCol size="md">
  //         <MDBCollapse
  //           className="mt-4"
  //           open={st}
  //           style={{
  //             fontSize: "calc(0.675rem + 0.5vw)",
  //             fontWeight: 400,
  //             lineHeight: "112.5%",
  //             fontFamily:
  //               "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
  //           }}
  //         >
  //           {ans}
  //         </MDBCollapse>
  //       </MDBCol>
  //     </MDBRow>
  //   </div>;
  // };

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleOpen2 = () => setIsOpen2(!isOpen2);
  const toggleOpen3 = () => setIsOpen3(!isOpen3);
  const toggleOpen4 = () => setIsOpen4(!isOpen4);
  const toggleOpen5 = () => setIsOpen5(!isOpen5);
  return (
    <>
      <div className="mx-lg-5 mx-3 mt-4">
        <div
          className="row mt-sm-3 pt-sm-3 mt-4 pb-5 pt-2"
          style={{ alignItems: "center", color: "black" }}
        >
          <div
            className="col-12 col-lg-7 text-lg-start text-center"
            style={{
              textAlign: "left",
              fontFamily:
                "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
            }}
          >
            <h1
              style={{
                fontSize: "calc(1.675rem + 2vw)",
                fontWeight: 400,
                lineHeight: "112.5%",
                fontFamily:
                  "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
              }}
            >
              Have questions? <br />
              <span
                className="mt-xl-0 mt-1"
                style={{
                  color: "rgb(126, 76, 139)",
                  transition: "opacity 220ms linear 0s",
                }}
              >
                Get answers
              </span>
            </h1>
          </div>
        </div>

        <div style={{ lineHeight: "105%", color: "black" }}>
          <div
            onClick={toggleOpen}
            style={{ fontSize: "40px", display: "flex", alignItems: "center" }}
          >
            What is Hims?{" "}
            <MDBIcon fas icon="arrow-circle-down" className="mx-3" />
          </div>
          <MDBRow>
            <MDBCol size="md"></MDBCol>
            <MDBCol size="md">
              <MDBCollapse
                className="mt-4"
                open={isOpen}
                style={{
                  fontSize: "calc(0.675rem + 0.5vw)",
                  fontWeight: 400,
                  lineHeight: "112.5%",
                  fontFamily:
                    "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
                }}
              >
                Hims is a 100% online platform with over 1 million subscribers
                that connects patients to licensed healthcare professionals in
                all 50 states. We offer support for sexual health, skincare,
                mental health, and hair care. <br /> <br /> Through our simple
                online process you can connect with licensed medical providers
                who can recommend customized treatment plans including
                prescription treatments, if appropriate, shipped right to your
                door.
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
        </div>

        {/* question 2 */}
        <hr className="mt-5" />
        <Question
          qText="How does Hims work?"
          ans="First, complete an online intake form to give your healthcare provider information about your symptoms and medical history. Then, a licensed provider will assess that information and determine the right treatment option for you. For states that require a video or audio visit, you'll be offered available times and dates to schedule your online visit. For states that don't, a provider will send your treatment recommendation to your chat inbox.
<br/> <br />
            If your provider determines treatment is right for you, it’s delivered in discreet packaging to your shipping address. door."
          st={isOpen2}
          tFun={toggleOpen2}
        />

        {/* question 3 */}
        <hr className="mt-5" />
        <Question
          qText="Who are the providers at Hims?"
          ans="The pool of licensed providers we work with is made up of physicians, nurse practitioners, psychiatrists, dermatologists, and pharmacists.
          They’re licensed in all 50 states and D.C., and offer safe, high-quality, evidence-based treatment and care."
          st={isOpen3}
          tFun={toggleOpen3}
        />

        {/* question 4 */}
        <hr className="mt-5" />
        <Question
          qText="Does Hims require insurance?"
          ans="Nope! Hims doesn’t require insurance. We offer transparent pricing on treatments and your medical visit,
          ongoing shipments, and provider messaging are all included in one low price."
          st={isOpen4}
          tFun={toggleOpen4}
        />

        {/* question 5 */}
        <hr className="mt-5" />
        <Question
          qText="What states is Hims available in?"
          ans="Hims is currently available in all 50 states and Washington, D.C."
          st={isOpen5}
          tFun={toggleOpen5}
        />
      </div>
    </>
  );
};

export default Qna;
