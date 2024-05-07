import { MDBCollapse, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

const Question = ({ qText, ans, st, tFun }) => {
  return (
    <div className="mt-5" style={{ lineHeight: "105%", color: "black" }}>
      <div
        onClick={tFun}
        style={{ fontSize: "40px", display: "flex", alignItems: "center" }}
      >
        {qText}
        <MDBIcon fas icon="arrow-circle-down" className="mx-3" />
      </div>
      <MDBRow>
        <MDBCol size="md"></MDBCol>
        <MDBCol size="md">
          <MDBCollapse
            className="mt-4"
            open={st}
            style={{
              fontSize: "calc(0.675rem + 0.5vw)",
              fontWeight: 400,
              lineHeight: "112.5%",
              fontFamily:
                "sofia-pro, SofiaProWeb, Helvetica, Arial, sans-serif",
            }}
          >
            {ans}
          </MDBCollapse>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Question;
