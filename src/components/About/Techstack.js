import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { techIcons } from "../../Data/tech";

// import Ratings from "./Ratings";

const HoverableDiv = ({ handleMouseOver, handleMouseOut, isHovering }) => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((item, index) => (
        <Col
          xs={4}
          md={2}
          className="tech-icons toolHover"
          
        >
          <i onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          {isHovering ? item.rating : item.icon}
            </i>
        </Col>
      ))}
    </Row>
  );
};

function Techstack() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <HoverableDiv
    isHovering={isHovering}
      handleMouseOver={handleMouseOver}
      handleMouseOut={handleMouseOut}
    >

    </HoverableDiv>
  );
}

export default Techstack;
