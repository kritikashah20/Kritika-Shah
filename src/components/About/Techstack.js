import { Col, Row } from "react-bootstrap";

import { techIcons } from "../../Data/tech";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons">
          {item.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
