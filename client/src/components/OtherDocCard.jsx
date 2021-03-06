import React from "react";
import { Card, Row, Col, Button, Avatar } from "antd";
import "../css/otherCard.css";
// import Avatar from "antd/lib/avatar/avatar";

const OtherDocCard = (props) => {
  return (
    <>
      <Card
        size="small"
        style={{ width: "300px", height: "110px" }}
        className="otherCard"
      >
        <Col>
          <Avatar src={props.imageurl} alt="Doctor" className="otherImage" />
        </Col>
        <Col>
          <div className="text">
            <h2 style={{ color: "black" }}>{props.doctorname}</h2>
            <p style={{ color: "black", marginTop: "20px" }}>₹{props.rate}</p>
          </div>
          <Button
            type="primary"
            size={20}
            className="button"
            style={{ marginTop: "25px" }}
          >
            Replace & Reschedule
          </Button>
        </Col>
      </Card>
    </>
  );
};

export default OtherDocCard;
