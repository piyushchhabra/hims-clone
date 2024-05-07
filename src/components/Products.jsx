import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Products = () => {
  return (
    <div
      className="mt-5"
      style={{ display: "block", margin: "0 auto", width: "90%" }}
    >
      <h3 style={{ color: "black", fontWeight: "500" }}> Popular </h3>

      <MDBRow>
        <MDBCol size="md">
          <MDBCard className="mx-2 mt-1">
            <MDBCardImage
              src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage-test/april-2024/hims-homepage-shop-hardMints-d_2x"
              position="top"
              alt="..."
              style={{
                width: "100%",
                height: "15vw",
                objectFit: "cover",
              }}
            />
            <MDBCardBody>
              <MDBCardTitle>Topical Finasteride</MDBCardTitle>
            </MDBCardBody>

            <MDBBtn
              color="dark"
              onClick={() =>
                window.open("https://piyushchhabra.github.io/", "_blank")
              }
            >
              Get Started
            </MDBBtn>
          </MDBCard>
        </MDBCol>

        <MDBCol size="md">
          <MDBCard className="mx-2 mt-1">
            <MDBCardImage
              src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage-test/may-2023/hims-homepage-shop-genericLexapro-d_2x"
              position="top"
              alt="..."
              style={{
                width: "100%",
                height: "15vw",
                objectFit: "cover",
              }}
            />
            <MDBCardBody>
              <MDBCardTitle>Generic for Lexapro</MDBCardTitle>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                window.open("https://piyushchhabra.github.io/", "_blank")
              }
              color="dark"
            >
              Get Started
            </MDBBtn>
          </MDBCard>
        </MDBCol>
        <MDBCol size="md">
          <MDBCard className="mx-2 mt-1">
            <MDBCardImage
              src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage-test/may-2023/hims-homepage-shop-wipes-d_2x"
              position="top"
              alt="..."
              style={{
                width: "100%",
                height: "15vw",
                objectFit: "cover",
              }}
            />
            <MDBCardBody>
              <MDBCardTitle>Climax Delay Wipes</MDBCardTitle>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                window.open("https://piyushchhabra.github.io/", "_blank")
              }
              color="dark"
            >
              Get Started
            </MDBBtn>
          </MDBCard>
        </MDBCol>

        <MDBCol size="md">
          <MDBCard className="mx-2 mt-1">
            <MDBCardImage
              src="https://www.hims.com/forhims/image/upload/q_auto,f_auto,fl_lossy,c_limit/Hims/homepage-test/may-2023/hims-homepage-shop-shampoo-d_2x"
              position="top"
              alt="..."
              style={{
                width: "100%",
                height: "15vw",
                objectFit: "cover",
              }}
            />
            <MDBCardBody>
              <MDBCardTitle>Thick Fix Shampoo</MDBCardTitle>
            </MDBCardBody>
            <MDBBtn
              onClick={() =>
                window.open("https://piyushchhabra.github.io/", "_blank")
              }
              color="dark"
            >
              Get Started
            </MDBBtn>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Products;
