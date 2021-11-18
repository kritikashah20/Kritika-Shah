import { Col, Row } from "react-bootstrap";
import { Rating } from "semantic-ui-react";

import { techIcons } from "../../Data/tech";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons toolHover">
          <div className="icon-i">
              {item.icon}
          </div>

          <div className="rating-i">
              <Rating icon='star' rating={item.rating} maxRating={5} disabled />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
